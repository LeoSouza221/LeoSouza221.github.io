import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  throw error;
});

export default axiosInstance;
