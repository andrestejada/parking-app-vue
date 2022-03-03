import { Module } from 'vuex';
import {RootState} from '../../../store/index'
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { VehiclesState } from './state';


const VehicleModule: Module<VehiclesState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default VehicleModule;