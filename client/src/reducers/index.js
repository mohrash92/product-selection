import { combineReducers } from "redux";
import app from "./App.js";
import sportsChannel from  "./SportsProducts/SportsChannels";
import basket from "./Basket";
// combine all reducers to create a single object
export default combineReducers({
    app: app,
    sportsChannel: sportsChannel,
    basket: basket
});