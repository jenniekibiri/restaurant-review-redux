import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore,combineReducers } from "redux";
import { createLogger } from "redux-logger";
import App from "./App";
import  thunkMiddleware  from "redux-thunk";
import { ratingChanged,requestPlaces } from "./reducers/reducers";
import reportWebVitals from "./reportWebVitals";
//rootReducer - global reducer combined with all reducers

const logger = createLogger();
const rootReducer = combineReducers({

  ratingChanged,
  requestPlaces
});
const store = createStore( rootReducer,applyMiddleware(thunkMiddleware,logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
