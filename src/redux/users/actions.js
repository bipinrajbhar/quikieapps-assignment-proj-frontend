import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './types';
import { addError } from '../error/actions';
import axios from 'axios';

const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

const userSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

const userFailure = () => {
  return {
    type: USER_FAILURE,
  };
};

export const asyncUsers = () => {
  return (dispatch) => {
    dispatch(userRequest());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => dispatch(userSuccess(res.data)))
      .catch((err) => {
        dispatch(userFailure());
        dispatch(addError(err.response.message));
      });
  };
};
