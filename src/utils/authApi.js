// authApi.js

import axios from './axiosInterceptor';

// API endpoint URLs
const API_URL = 'http://localhost:4000/api/v1';
const SIGNUP_URL = `${API_URL}/auth/signup`;
const LOGIN_URL = `${API_URL}/auth/signin`;

// Function to sign up a user
export const signUp = async (userData) => {
  try {
    const response = await axios.post(SIGNUP_URL, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Function to log in a user
export const login = async (credentials) => {
  try {
    const response = await axios.post(LOGIN_URL, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
