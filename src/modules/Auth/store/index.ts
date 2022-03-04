import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { RootState } from '../../../store/index';
import { AuthState } from './state';
import state from './state';


const exampleModule: Module<AuthState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default exampleModule;
