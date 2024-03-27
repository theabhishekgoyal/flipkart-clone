import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  getProductDetailsReducer,
  getProductsReducer,cartReducer
} from "./reducers/productReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart:cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
