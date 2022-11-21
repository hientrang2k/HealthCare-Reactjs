import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
