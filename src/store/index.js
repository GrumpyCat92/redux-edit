import { combineReducers, createStore } from "redux";
import ServiceAddReducer from "../reducers/ServiceAddReducer";
import ServiceListReducer from "../reducers/ServiceListReducer";

const reducer = combineReducers({
  serviceList: ServiceListReducer,
  serviceAdd: ServiceAddReducer,
});

export const store = createStore(reducer);
