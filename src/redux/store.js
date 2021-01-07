import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const Store = () => {
  const configureStore = () => {
    const store = configureStore();
    return createStore(rootReducer)
  }
}

export default Store;