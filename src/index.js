import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./redux/reducers/rootReducer";
import "./index.css";

const middleware = [thunk];
const configureStore = () => {
  return createStore(
    rootReducer,
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
