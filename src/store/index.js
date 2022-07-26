import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart";
import productsReducer from "./products";
import productReducer from "./product";
import categoriesReducer from "./categories";

const allReducer = combineReducers({cartReducer,productReducer,productsReducer,categoriesReducer});


const store = createStore(allReducer,applyMiddleware(thunk));

export default store;