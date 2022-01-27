import axios from 'axios';

const api2 = axios.create({
  baseURL: 'http://localhost:3002',
})

export default api2;