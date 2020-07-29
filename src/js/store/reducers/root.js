import { combineReducers } from 'redux';
import cars, { initialState as carsState } from './carsFetcher';

export const initialState = {
  cars: carsState
};

export default combineReducers({
  cars
});
