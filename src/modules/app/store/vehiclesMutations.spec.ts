import { createStore, Store } from "vuex";
import { VehiclesState } from "./state";
import vehicles from './index'
import { Vehicle } from "../interfaces";
import { RootState } from "@/store";

const createVuexStore =(initialState:VehiclesState)=> createStore({
  modules:{
    vehicles:{
      ...vehicles,
      state:{
        ...initialState
      }
    }
  }
});

const initialVehicleState:VehiclesState={
  allVehicles:[],
  cellsBikesInUse:0,
  cellsCarInUse:0
}

describe('testing mutations vehicle store', () => {
  let store:Store<RootState>;
  beforeEach(()=>{
    store = createVuexStore(initialVehicleState)
  });

  const allVehicles:Vehicle[]=[
    {
      id:1,
      plate:'ABC123',
      entryDate:'2022-03-04T12:10:46.399Z',
      vehiculeType:'Carro'
    },
    {
      id:2,
      plate:'DTE78E',
      entryDate:'2022-03-03T12:10:46.399Z',
      vehiculeType:'Moto'
    },
  ] 
  
  test('mutation: addVehicle should be add new vehicle to allvehicle ', () => {
    const payload:Vehicle ={
      id:1,
      plate:'ABC123',
      entryDate:'2022-03-04T12:10:46.399Z',
      vehiculeType:'Moto'
    }  
    store.commit('vehicles/addVehicle',payload);
    const allVehicles = store.state.vehicles.allVehicles
    expect(allVehicles.length).toBe(1)
    expect(allVehicles).toEqual([payload])
  });

  test('mutation: addBikeCell should be increase the cellsBikesInUse', () => {
    store = createVuexStore({
      allVehicles:[],
      cellsBikesInUse:5,
      cellsCarInUse:1
    })
    store.commit('vehicles/addBikeCell')
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse
    expect(cellsBikesInUse).toBe(6)
    expect(store.state.vehicles.cellsCarInUse).toBe(1)
  });

  test('mutation:removeBikeCell should be remove one unit of cellsBikesInUse ', () => {
    store = createVuexStore({
      allVehicles:[],
      cellsBikesInUse:5,
      cellsCarInUse:1
    })
    store.commit('vehicles/removeBikeCell')
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse
    expect(cellsBikesInUse).toBe(4)
    expect(store.state.vehicles.cellsCarInUse).toBe(1)
  });

  test('mutation:removeCarCell should be remove one unit of cellsCarInUse ', () => {
    store = createVuexStore({
      allVehicles:[],
      cellsBikesInUse:5,
      cellsCarInUse:10
    })
    store.commit('vehicles/removeCarCell')
    const cellsCarInUse = store.state.vehicles.cellsCarInUse
    expect(cellsCarInUse).toBe(9)
    expect(store.state.vehicles.cellsBikesInUse).toBe(5)
  });


  test('mutation:addCarCell should be add one unit to cellsCarInUse ', () => {
    store = createVuexStore({
      allVehicles:[],
      cellsBikesInUse:5,
      cellsCarInUse:10
    })
    store.commit('vehicles/addCarCell')
    const cellsCarInUse = store.state.vehicles.cellsCarInUse
    expect(cellsCarInUse).toBe(11)
    expect(store.state.vehicles.cellsBikesInUse).toBe(5)
  });

  test('mutation: addAllVehicles should be add all vehicles get it', () => {
    const payload:Vehicle[]=[
      {
        id:1,
        plate:'ABC12D',
        entryDate:'2022-03-04T12:10:46.399Z',
        vehiculeType:'Moto'
      }
    ] 
    store.commit('vehicles/addAllVehicles',payload);
    const allVehicles = store.state.vehicles.allVehicles;
    expect(allVehicles).toEqual(payload)
  });

  test('mutation: removeVehiculeById ', () => {    
    store= createVuexStore({
      ...initialVehicleState,
      allVehicles
    });

    store.commit('vehicles/removeVehiculeById',1)
    
    const allvehicles = store.state.vehicles.allVehicles
    expect(allvehicles.length).toBe(1)    
    expect(allvehicles[0].id).toBe(2);
  });

  test('mutations:setCellsCarsInUse should add all cell in user to cars', () => {
    store = createVuexStore({
      allVehicles,
      cellsBikesInUse:0,
      cellsCarInUse:0
    })

    store.commit('vehicles/setCellsCarsInUse');
    const cellCarsInUse = store.state.vehicles.cellsCarInUse;
    expect(cellCarsInUse).toBe(1)
    expect(store.state.vehicles.cellsBikesInUse).toBe(0)
  });

  test('mutations:setCellsMotosInUse should add all cell in user to bikes', () => {
    store = createVuexStore({
      allVehicles,
      cellsBikesInUse:0,
      cellsCarInUse:0
    })

    store.commit('vehicles/setCellsMotosInUse');
    const cellsBikesInUse = store.state.vehicles.cellsBikesInUse;
    expect(cellsBikesInUse).toBe(1)
    expect(store.state.vehicles.cellsCarInUse).toBe(0)
  });



});