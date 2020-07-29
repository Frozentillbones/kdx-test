import { REQUEST_CARS, SUCCESS_CARS, FAILURE_CARS } from '../actions/async/carsFetcher';

export const initialState = {
  isFetching: false,
  error: null,
  cars: []
};

export default (state = initialState, action) => {
  const { type, data, error } = action;
  
  switch (type) {
    case REQUEST_CARS: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case SUCCESS_CARS: {
      return {
        ...state,
        isFetching: false,
        cars: data
      };
    }
    case FAILURE_CARS: {
      return {
        ...state,
        isFetching: false,
        error
      };
    }
    default: {
      return state;
    }
  }
};
