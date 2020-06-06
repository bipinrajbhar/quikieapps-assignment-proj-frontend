import axios from 'axios';
import { addError } from '../error/actions';

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNOUT,
  USER_AUTOSIGNIN,
} from './types';

const userSigninRequest = (payload) => {
  return {
    type: USER_SIGNIN_REQUEST,
    payload,
  };
};

const userSigninSuccess = (payload) => {
  return {
    type: USER_SIGNIN_SUCCESS,
    payload,
  };
};

const userSigninFailure = (payload) => {
  return {
    type: USER_SIGNIN_FAILURE,
    payload,
  };
};

const userSignupRequest = (payload) => {
  return {
    type: USER_SIGNUP_REQUEST,
    payload,
  };
};

const userSignupSuccess = (payload) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload,
  };
};

const userSignupFailure = (payload) => {
  return {
    type: USER_SIGNUP_FAILURE,
    payload,
  };
};

export const userSignout = () => {
  return {
    type: USER_SIGNOUT,
  };
};

export const userAutoSignin = (payload) => {
  return {
    type: USER_AUTOSIGNIN,
    payload,
  };
};

export const asyncUserSignup = (data) => {
  return (dispatch) => {
    dispatch(userSignupRequest());
    axios
      .post('http://localhost:8080/api/v1/auth/signup', data)
      .then((res) => {
        dispatch(userSignupFailure());
        dispatch(userSignupSuccess(res.data));
      })
      .catch((err) => dispatch(addError(err.response.data.msg)));
  };
};

export const asyncUserSignin = (data) => {
  return (dispatch) => {
    dispatch(userSigninRequest());
    axios
      .post('http://localhost:8080/api/v1/auth/signin', data)
      .then((res) => {
        dispatch(userSigninSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userSigninFailure());
        dispatch(addError(err.response.data.msg));
      });
  };
};

export const asyncUserAutoSignin = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(userSigninRequest());

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

      axios
        .get('http://localhost:8080/api/v1/auth/user', data)
        .then((res) => {
          dispatch(userAutoSignin(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
