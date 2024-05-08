// authApi.js

import axios from './axiosInterceptor';

// API endpoint URLs
const API_URL = 'http://localhost:8080/api/v1';
const SIGNUP_URL = `${API_URL}/auth/signup`;
const LOGIN_URL = `${API_URL}/auth/signin`;

// Function to sign up a user
// export const signUp = async (userData) => {
//   try {
//     const response = await axios.post(SIGNUP_URL, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// Function to log in a user
// export const signIn = async (credentials) => {
//   try {
//     const response = await axios.post(LOGIN_URL, credentials);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const signIn =(data)=>{
  return axios.post("/auth/signin",data)
}


export const signUp =(data)=>{
  console.log("signup",data)
  return axios.post("/auth/signup",data)
}