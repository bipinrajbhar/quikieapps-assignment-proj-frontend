import { ADD_ERROR, CLEAR_ERROR } from './types';

export const addError = (payload) => {
  return {
    type: ADD_ERROR,
    payload,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
