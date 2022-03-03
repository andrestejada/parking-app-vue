import { GetterTree } from 'vuex';
import { VehiclesState } from './state';
import { RootState } from '../../../store/index';


const getters: GetterTree<VehiclesState, RootState> = {
    getAllVehicles(state:VehiclesState){
      return state.allVehicles
    }
}



export default getters;