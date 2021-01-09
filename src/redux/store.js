import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const configureStore = () => {
  return createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  );
};

export const store = configureStore( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());