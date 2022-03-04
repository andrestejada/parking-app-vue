import { MutationTree } from 'vuex';
import { VehiclesState } from './state';
import { Vehicle } from '../interfaces/index';
import state from './state';



const mutation: MutationTree<VehiclesState> = {
    addVehicle(state: VehiclesState , vehicle:Vehicle ) {
        state.allVehicles = [...state.allVehicles,vehicle]
        
    },

    addBikeCell(state: VehiclesState){
        state.cellsBikesInUse = state.cellsBikesInUse + 1
    },

    removeBikeCell(state: VehiclesState){
        state.cellsBikesInUse = state.cellsBikesInUse - 1
    },

    removeCarCell(state: VehiclesState){
        state.cellsCarInUse = state.cellsCarInUse - 1
    },

    addCarCell(state: VehiclesState){
        state.cellsCarInUse = state.cellsCarInUse + 1
    },

    addAllVehicles(state:VehiclesState,vehicles:Vehicle[]){
        state.allVehicles = vehicles
    },

    removeVehiculeById(state:VehiclesState,id:number){
        state.allVehicles = state.allVehicles.filter( vehicle=> vehicle.id !==id)
    },

    setCellsCarsInUse(state:VehiclesState){
        const quantityOfCar = state.allVehicles.filter( vehicle=>vehicle.vehiculeType ==="Carro").length
        state.cellsCarInUse = quantityOfCar
    },
    setCellsMotosInUse(state:VehiclesState){
        const quantityOfBikes = state.allVehicles.filter( vehicle=>vehicle.vehiculeType ==="Moto").length
        state.cellsBikesInUse = quantityOfBikes
    }

}
export default mutation;