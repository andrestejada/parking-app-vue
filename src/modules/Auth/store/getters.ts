
import { GetterTree } from 'vuex';
import { AuthState } from './state';

import { RootState } from '../../../store/index';


const getters: GetterTree<AuthState, RootState> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;