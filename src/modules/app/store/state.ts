import { Vehicle } from '../interfaces/index';


export interface VehiclesState {
  allVehicles:Vehicle[]
  cellsBikesInUse:number,
  cellsCarInUse:number,
}


function state():VehiclesState{
  return{
    allVehicles:[],
    cellsBikesInUse:0,
    cellsCarInUse:0,
  }
}

export default state;