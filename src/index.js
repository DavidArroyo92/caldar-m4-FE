import React from "react";
import ReactDOM from "react-dom";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./redux/reducers/rootReducer";

const middleware = [thunk];
const configureStore = () => {
  //const enhancer = composeWithDevTools();
  return createStore(
    rootReducer,
    //enhancer,
    compose(applyMiddleware(...middleware))
  );
};

const store = configureStore( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);