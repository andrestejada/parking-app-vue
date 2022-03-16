import { LoginResponse } from "../../modules/Auth/interfaces/index";
import { Vehicle } from "../../modules/app/interfaces/index";
import {
  test,
  expect,
  Browser,
  BrowserContext,
  Page,
  chromium,
} from "@playwright/test";

const loginResponse: LoginResponse = {
  accessToken: "abc123",
  user: {
    id: 2,
    email: "correo@correo.com",
  },
};

const allVehicleResponse: Vehicle[] = [
  {
    vehiculeType: "Moto",
    plate: "WAS74Q",
    entryDate: "2022-03-04T16:51:11.928Z",
    id: 51,
  },
  {
    vehiculeType: "Carro",
    plate: "EDC741",
    entryDate: "2022-03-04T13:23:12.539Z",
    id: 50,
  },
];

test.describe("testing login user and the save a vehicle correctly", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("http://localhost:8080");
  });

  test.afterAll(()=>{
    browser.close()
    context.close(),
    page.close()
  })

  test("login sucess", async () => {
    const title = await page.locator('text="Login"').textContent();
    expect(title).toBe("Login");
    await page.type('[placeholder="correo@correo.com"]', "andres@correo.com");
    await page.type('[aria-label="Contaseña"]', "123456");
    await page.route("**/login", (route) =>
      route.fulfill({
        status: 200,
        body: JSON.stringify(loginResponse),
        headers: { ["Access-Control-Allow-Origin"]: "*" },
      })
    );
    await page.route("**/vehicles", (route) => {
        route.fulfill({
          status: 200,
          body: JSON.stringify(allVehicleResponse),
          headers: { ["Access-Control-Allow-Origin"]: "*" },
        });
    });
    await page.click('[type="submit"]');
    await page.textContent('[data-testid="title"]');
    const dasboardPage = page.url();
    expect(dasboardPage).toBe("http://localhost:8080/#/");
  });
  
  test("fill the vehicle form and save un the app ", async () => {
    await page.unroute("**/vehicles");
    await page.route("**/vehicles", (route,request) => {
      route.fulfill({
        status:200,
        body:JSON.stringify({...request.postDataJSON(),id:2}),
        headers: { ["Access-Control-Allow-Origin"]: "*" },
      })
    });
    const formTitle = await page.textContent('[role="ingresa-vehiculo"]');
    expect(formTitle).toBe("Ingresar Vehiculo");
    await page.locator("text=arrow_drop_down").click();
    await page.locator('div[role="option"]:has-text("Moto")').click();
    await page.locator('[aria-label="Placa"]').type("NOL38F");
    await page.locator('button:has-text("checkIngresar")').click();
    await page.textContent("text=Vehiculos Parqueados");
    const newVehicleAdd = await page.locator('text=Placa:NOL38F').isVisible();
    expect(newVehicleAdd).toBeTruthy()
  });
  test('logOut a return to the login page', async() => {
    await page.locator('button:has-text("logoutCerrar Sesión")').click();
    //const urlLogin = page.url()
    expect(page).toHaveURL('http://localhost:8080/#/auth')
  });
});
