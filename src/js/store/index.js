import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers, { initialState } from './reducers/root';
import { createStore, applyMiddleware } from 'redux';


const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;