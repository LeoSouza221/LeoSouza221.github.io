import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  throw error;
});

export default axiosInstance;
