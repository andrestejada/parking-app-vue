import { test, expect, Browser, BrowserContext, Page, chromium ,} from '@playwright/test';


test.describe('testing login user and the save a vehicle correctly',()=>{
  let browser :Browser;
  let context:BrowserContext
  let page:Page;
  test.beforeAll(async()=>{
    browser = await chromium.launch({
      headless:false
    })
    context = await browser.newContext()
    page = await context.newPage();
    await page.goto('http://localhost:8080')
  });

  test('login sucess',async()=>{

    const title = await page.locator('text="Login"').textContent()
    expect(title).toBe('Login')
    await page.type('[placeholder="correo@correo.com"]','andres@correo.com')
    await page.type('[aria-label="Contaseña"]','123456')
    await page.click('[type="submit"]')
    await page.textContent('[data-testid="title"]')
    const dasboardPage = page.url()
    expect(dasboardPage).toBe('http://localhost:8080/#/')
  })
})
