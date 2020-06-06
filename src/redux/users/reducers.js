import { USER_REQUEST, USER_SUCCESS, USER_FAILURE } from './types';

const initialState = {
  loading: false,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
