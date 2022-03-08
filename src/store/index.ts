import { VehiclesState } from '@/modules/app/store/state'
import { createStore } from 'vuex'
import vehicles from '../modules/app/store'
import auth from '../modules/Auth/store'
import {AuthState} from '../modules/Auth/store/state'
export interface RootState {
  vehicles:VehiclesState,
  auth:AuthState
}

export default createStore<RootState>({
  modules: {
    auth,
    vehicles
  }
})
