import axios from 'axios';

export const vehiclesApi = axios.create({
  baseURL:'http://localhost:3000',
  headers:{
      'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
  }
  
});