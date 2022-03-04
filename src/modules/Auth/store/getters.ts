
import { GetterTree } from 'vuex';
import { AuthState } from './state';

import { RootState } from '../../../store/index';


const getters: GetterTree<AuthState, RootState> = {
    isAuthenticated( state ) {
        return state.isAuthenticated;
    }
}



export default getters;