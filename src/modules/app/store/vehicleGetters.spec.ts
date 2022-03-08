import { createStore } from "vuex";
import { VehiclesState } from "./state";
import vehicles from './index'
import { Vehicle } from "../interfaces";

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

const initialVehicleState:VehiclesState={
  allVehicles,
  cellsBikesInUse:0,
  cellsCarInUse:0
}




describe('testing the gettes in the vihicle store', () => {
  const store = createVuexStore(initialVehicleState);
  test('getters:getAllVehicles should be return the allvehicles available', () => {
   const getAllVehicles = store.getters['vehicles/getAllVehicles']
   expect(getAllVehicles).toEqual(allVehicles)
   expect(getAllVehicles).toHaveLength(2)
  });
});