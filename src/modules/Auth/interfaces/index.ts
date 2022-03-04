export interface LoginResponse {
  accessToken: string;
  user:        User;
}

export interface User {
  email: string;
  id:    number;
}
