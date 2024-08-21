import { combineReducers } from "redux";
import videos from "./videos";
import user from "./user";

const reducers = combineReducers({
    videos,
    user,
})

export default reducers;