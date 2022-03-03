import { MutationTree } from 'vuex';
import { VehiclesState } from './state';
import { Vehicle } from '../interfaces/index';



const mutation: MutationTree<VehiclesState> = {
    addVehicle(state: VehiclesState , vehicle:Vehicle ) {
        state.allVehicles = [...state.allVehicles,vehicle]
    },

    addAllVehicles(state:VehiclesState,vehicles:Vehicle[]){
        state.allVehicles = vehicles
    }
}


export default mutation;