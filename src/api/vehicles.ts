import axios from 'axios';

const vehiclesApi = axios.create({
  baseURL:'http://localhost:3000/660',
  headers:{
      'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
  }
  
});

export default vehiclesApi;