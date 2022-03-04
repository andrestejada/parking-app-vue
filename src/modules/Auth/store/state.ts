import { User } from "../interfaces";

export interface AuthState {
  user: null | User;
  isAuthenticated:boolean,

}

function state(): AuthState {
  return {
      user:null,
      isAuthenticated:false
  }
}

export default state;