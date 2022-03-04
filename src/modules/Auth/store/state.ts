export interface AuthState {
  user: null;
}

function state(): AuthState {
  return {
      user:null
  }
}

export default state;