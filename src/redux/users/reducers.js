import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  SORT_USER_BY_ASC_ORDER,
  SORT_USER_BY_DESC_ORDER,
} from './types';
import _ from 'lodash-es';

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
    case SORT_USER_BY_ASC_ORDER:
      return {
        ...state,
        data: _.sortBy(state.data, action.payload),
      };
    case SORT_USER_BY_DESC_ORDER:
      return {
        ...state,
        data: _.sortBy(state.data, action.payload).reverse(),
      };
    default:
      return state;
  }
};

export default reducer;
