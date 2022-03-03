import { ActionTree } from 'vuex';
import { RootState } from '../../../store/index';
import { VehiclesState } from './state';
import vehiclesApi from '../../../api/vehicles';
import { FormValues } from '../interfaces/index';


const actions: ActionTree<VehiclesState, RootState> = {
    async saveVehicles( { commit }, {plate,vehiculeType}:FormValues) {
        const entryDate = new Date()
        const {data} =await vehiclesApi.post('/vehicles',{vehiculeType,plate,entryDate})
        commit('addVehicle',data)
    },

    async getAllVehicles({commit}){
        const {data} = await vehiclesApi.get('/vehicles')
        commit('addAllVehicles',data)
    }
}



export default actions;