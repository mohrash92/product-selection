import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Axios from "axios";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const app = document.getElementById('app');
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App axios={Axios}/>
    </Provider>,
    app
);