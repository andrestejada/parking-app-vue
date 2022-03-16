import { VehiclesState } from "./state";
import { createStore } from "vuex";
import vehicles from "./index";
import { vehiclesApi } from "../../../api/vehicles";
import { Vehicle, FormValues } from "../interfaces/index";
import { spyOn } from "vitest";

const createVuexStore = (initialState: VehiclesState) =>
  createStore({
    modules: {
      vehicles: {
        ...vehicles,
        state: {
          ...initialState,
        },
      },
    },
  });

afterEach(() => {
  vi.clearAllMocks();
});


describe("testing action of vehicle store", () => {
  test("actions:saveVehicles when save bike", async () => {
    const vehicleToEnter: FormValues = {
      plate: "NOL38F",
      vehiculeType: "Moto",
    };

    const resMocking = {
      ...vehicleToEnter,
      id: 2,
      entryDate: new Date().toISOString(),
    };
    vi.spyOn(vehiclesApi, "post").mockResolvedValue({
      data: resMocking,
    });
    const store = createVuexStore({
      allVehicles: [
        {
          id: 1,
          entryDate: "2022-03-04T13:23:12.539Z",
          plate: "MIK381",
          vehiculeType: "Carro",
        },
      ],
      cellsBikesInUse: 0,
      cellsCarInUse: 1,
    });
    await store.dispatch("vehicles/saveVehicles", vehicleToEnter);
    const allVehicles = store.state.vehicles.allVehicles
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse
    expect(allVehicles.length).toBe(2)
    expect(allVehicles).toContain(resMocking)
    expect(cellsBikesInUse).toBe(1)
  });

  test('actions:saveVehicles when save car ', async() => {
    const vehicleToEnter: FormValues = {
      plate: "MIK381",
      vehiculeType: "Carro",
    };

    const resMocking = {
      ...vehicleToEnter,
      id: 2,
      entryDate: new Date().toISOString(),
    };
    vi.spyOn(vehiclesApi, "post").mockResolvedValue({
      data: resMocking,
    });
    
    const store = createVuexStore({
      allVehicles: [
        {
          id: 1,
          entryDate: "2022-03-04T13:23:12.539Z",
          plate: "NOL38F",
          vehiculeType: "Moto",
        },
      ],
      cellsBikesInUse: 1,
      cellsCarInUse: 0,
    });
    vi.spyOn(store,'commit')
    await store.dispatch("vehicles/saveVehicles", resMocking);
    const allVehicles = store.state.vehicles.allVehicles
    const cellsCarInUse = store.state.vehicles.cellsCarInUse
    expect(allVehicles.length).toBe(2)
    expect(allVehicles).toContain(resMocking)
    expect(cellsCarInUse).toBe(1)
    //expect(store.commit).toHaveBeenNthCalledWith(1,)
    //expect([commit]).toHaveBeenNthCalledWith(1,'vehicles/addVehicle')    
  });

  test("action: getAllVehicles should be fill allvehicles available ", async () => {
    const respData: Vehicle[] = [
      {
        id: 1,
        vehiculeType: "Moto",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC38E",
      },
      {
        id: 2,
        vehiculeType: "Carro",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC123",
      },
    ];
    vi.spyOn(vehiclesApi, "get").mockResolvedValue({ data: respData });
    const store = createVuexStore({
      allVehicles: [],
      cellsBikesInUse: 0,
      cellsCarInUse: 0,
    });
    await store.dispatch("vehicles/getAllVehicles");
    const allVehicles = store.state.vehicles.allVehicles;
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse;
    const cellsCarInUse = store.state.vehicles.cellsCarInUse;
    expect(allVehicles.length).toBe(2)
    expect(allVehicles).toEqual(respData);
    expect(cellsCarInUse).toBe(1);
    expect(cellsBikesInUse).toBe(1);
  });

  test('action:removeVehicle remove vehicle when is a bike', async() => {
    vi.spyOn(vehiclesApi,'delete').mockResolvedValue(true)
    const allVehicles: Vehicle[] = [
      {
        id: 1,
        vehiculeType: "Moto",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC38E",
      },
      {
        id: 2,
        vehiculeType: "Carro",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC123",
      },
    ];

    const vehicleToDelete:Vehicle ={
        id: 1,
        vehiculeType: "Moto",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC38E",
    } 
    const store = createVuexStore({
      allVehicles,
      cellsBikesInUse: 1,
      cellsCarInUse: 1,
    });

    await store.dispatch("vehicles/removeVehicle",vehicleToDelete);
    const allvehicles = store.state.vehicles.allVehicles;
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse;
    expect(allvehicles.length).toBe(1);
    expect(allVehicles).not.toContain(vehicleToDelete)
    expect(cellsBikesInUse).toBe(0)
  });

  test('action:removeVehicle remove vehicle when is a car', async() => {
    vi.spyOn(vehiclesApi,'delete').mockResolvedValue(true)
    const allVehicles: Vehicle[] = [
      {
        id: 1,
        vehiculeType: "Moto",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC38E",
      },
      {
        id: 2,
        vehiculeType: "Carro",
        entryDate: "2022-03-04T13:22:29.859Z",
        plate: "ABC123",
      },
    ];

    const vehicleToDelete:Vehicle ={
      id: 2,
      vehiculeType: "Carro",
      entryDate: "2022-03-04T13:22:29.859Z",
      plate: "ABC123",
    } 
    const store = createVuexStore({
      allVehicles,
      cellsBikesInUse: 1,
      cellsCarInUse: 1,
    });

    await store.dispatch("vehicles/removeVehicle",vehicleToDelete);
    const allvehicles = store.state.vehicles.allVehicles;
    const cellsCarInUse = store.state.vehicles.cellsCarInUse;
    expect(allvehicles.length).toBe(1);
    expect(allVehicles).not.toContain(vehicleToDelete)
    expect(cellsCarInUse).toBe(0)
  });
});
