
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import sidebar from "./reducers/sideBar";
import sideBarSearch from "./reducers/sideBarSearch";



const allReducers = combineReducers({
    checkBox:sidebar,
    sideBarSearch,
})

const store = createStore(allReducers,composeWithDevTools());

export default store;