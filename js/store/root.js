import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import sign from "./sign"

const createRootReducer = combineReducers(
    {
        app,
        auth,
        sign
    }
)

export default createRootReducer
