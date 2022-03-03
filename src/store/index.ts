import { createStore } from 'vuex'
import vehicles from '../modules/app/store'
export interface RootState {
  vehicles:string
}

export default createStore<RootState>({
  modules: {
    vehicles
  }
})
