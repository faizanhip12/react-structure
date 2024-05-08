// axiosInterceptor.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-type": "application/json"
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Get the token from localStorage or wherever you store it
    const token = localStorage.getItem('token');
    
    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;