import { Vehicle } from '../interfaces/index';


export interface VehiclesState {
  allVehicles:Vehicle[]
}


function state():VehiclesState{
  return{
    allVehicles:[]
  }
}

export default state;