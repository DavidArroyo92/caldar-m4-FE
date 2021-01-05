import React from "react";
import ReactDOM from "react-dom";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/reducers/rootReducer";
import "./index.css";

const middleware = [thunk];
const configureStore = () => {
<<<<<<< HEAD
  return createStore(
    rootReducer,
=======
  //const enhancer = composeWithDevTools();
  return createStore(
    rootReducer,
    //enhancer,
>>>>>>> 1e0479054c852ece8f4ae7b45064a01e82080f64
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();