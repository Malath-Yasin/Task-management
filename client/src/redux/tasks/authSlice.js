// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  logout,
} = authSlice.actions;

// Async action creator for login
export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginStart());

  try {
    // Make the API request to login
    const response = await axios.post('http://localhost:3001/users/signin', userData);
console.log(userData);
    // Dispatch loginSuccess with the user data
    dispatch(loginSuccess(response.data));
    localStorage.setItem('token', response.data);
    // navigate('/');
    // Redirect to home or perform any other actions upon successful login
    // You can use react-router or any other method for navigation
    // For example, window.location.href = '/home';
  } catch (error) {
    // Dispatch loginFailure with the error message
    dispatch(loginFailure('Invalid username or password'));

    // Show alert for unsuccessful login
    alert('Invalid username or password');
  }
};

// Async action creator for signup
export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupStart());

  try {
    // Make the API request to signup
    const response = await axios.post('http://localhost:3001/users/signup', userData);
    console.log(response);
    // Dispatch signupSuccess with the user data
    console.log(userData);
    dispatch(signupSuccess(response.data));

    // Redirect to home or perform any other actions upon successful signup
  } catch (error) {
    // Dispatch signupFailure with the error message
    dispatch(signupFailure('Error signing up'));

    // Show alert for unsuccessful signup
    alert('Error signing up');
  }
};

export default authSlice.reducer;
