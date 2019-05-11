import {combineReducers} from 'redux'
import {userDataReducer} from "./userData/reducers";

export const rootReducer = combineReducers({
    userData: userDataReducer
})
