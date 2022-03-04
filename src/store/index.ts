import { createStore } from 'vuex'
import vehicles from '../modules/app/store'
import auth from '../modules/Auth/store'
export interface RootState {
  vehicles:string
}

export default createStore<RootState>({
  modules: {
    auth,
    vehicles
  }
})
