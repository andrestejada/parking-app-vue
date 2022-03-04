import store from "@/store"
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

export const authGuard =(_to:RouteLocationNormalized,_from:RouteLocationNormalized,next:NavigationGuardNext)=>{
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  if(isAuthenticated){
    next()
    return
  }
  next({name:'auth'})
}