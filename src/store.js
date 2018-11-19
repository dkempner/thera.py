import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const initState = {
  therapist: {
    name: ''
  }
};

const middleware = [thunk];
const store = createStore(rootReducer, initState, applyMiddleware(...middleware));

export default store;