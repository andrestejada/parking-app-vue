import { ActionTree } from 'vuex';
import { RootState } from '../../../store/index';
import { VehiclesState } from './state';
import vehiclesApi from '../../../api/vehicles';
import { FormValues, Vehicle } from '../interfaces/index';


const actions: ActionTree<VehiclesState, RootState> = {
    async saveVehicles( { commit }, {plate,vehiculeType}:FormValues) {
        try {
            const entryDate = new Date()
            const {data} =await vehiclesApi.post('/vehicles',{vehiculeType,plate,entryDate})
            commit('addVehicle',data)

            if(vehiculeType ==="Moto"){
                commit('addBikeCell')
            }else{
                commit('addCarCell')
            }

        } catch (error) {
            console.log(error)
        }
    },

    async getAllVehicles({commit}){
        try {
            const {data} = await vehiclesApi.get('/vehicles',)
            commit('addAllVehicles',data); 
            commit('setCellsCarsInUse');
            commit('setCellsMotosInUse');
        } catch (error) {
            console.log(error)
        }
        
    },

    async removeVehicle({commit},vehicule:Vehicle){
        try {
            await vehiclesApi.delete(`/vehicles/${vehicule.id}`)
            commit('removeVehiculeById',vehicule.id)
            if(vehicule.vehiculeType === "Moto"){
                commit('removeBikeCell')  
            }else{
                commit('removeCarCell')
            }
        } catch (error) {
            console.log(error)
        }
        
    }
}




export default actions;