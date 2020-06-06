import { ADD_ERROR, CLEAR_ERROR } from './types';

const intialState = {
  msg: '',
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        msg: action.payload,
      };
    case CLEAR_ERROR:
      return {
        msg: '',
      };
    default:
      return state;
  }
};

export default reducer;
