import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apitest.com',
});

export default api;
