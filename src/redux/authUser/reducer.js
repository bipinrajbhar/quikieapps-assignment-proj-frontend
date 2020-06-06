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

const initialState = {
  loading: false,
  user: null,
  isAuth: false,
  token: localStorage.getItem('token'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
    case USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_SIGNUP_SUCCESS:
    case USER_SIGNIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case USER_SIGNUP_FAILURE:
    case USER_SIGNIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        loading: false,
        isAuth: false,
      };

    case USER_AUTOSIGNIN:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload,
      };

    case USER_SIGNOUT:
      localStorage.removeItem('token');
      return {
        loading: false,
        user: null,
        isAuth: false,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
