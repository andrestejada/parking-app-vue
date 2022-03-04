import { ActionTree } from 'vuex';
import {  AuthState } from './state';
import { RootState } from '../../../store/index';


const actions: ActionTree<AuthState, RootState> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;