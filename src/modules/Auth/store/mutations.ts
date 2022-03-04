import { MutationTree } from 'vuex';
import { User } from '../interfaces';
import { AuthState } from './state';


const mutation: MutationTree<AuthState> = {
    loginSuccess( state: AuthState , user:User ) {
        state.isAuthenticated = true;
        state.user = user;
    },

    logOut(state: AuthState){
        state.isAuthenticated=false;
        state.user=null
        localStorage.removeItem('accessToken')
    }
}


export default mutation;