import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducers from "./reducers/auth";
import modalReducers from "./reducers/modal";
import postReducer from "./reducers/post";

const initialState = {};

const reducers = combineReducers({
  auth: authReducers,
  modal: modalReducers,
  posts: postReducer,
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
