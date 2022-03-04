import { Module } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import { RootState } from '../../../store/index';
import { AuthState } from './state';


const authModule: Module<AuthState, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default authModule;
