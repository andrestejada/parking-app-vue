import { ActionTree } from 'vuex';
import {  AuthState } from './state';
import { RootState } from '../../../store/index';
import { LoginResponse } from '../interfaces';
import { AxiosError } from 'axios';
import authApi from '../../../api/authApi';


const actions: ActionTree<AuthState, RootState> = {
    async login({ commit }, userCredential ) {       
       try {
        const {data} =  await authApi.post<LoginResponse>('/login',userCredential)
        commit('loginSuccess',data.user)
        localStorage.setItem('accessToken',data.accessToken);
        return {ok:true,msg:'login Sucess'}
       } catch (error) {
           const err = error as AxiosError;
           err.response?.data
           return {ok:false,msg:err.response?.data}
       }
    }
}



export default actions;