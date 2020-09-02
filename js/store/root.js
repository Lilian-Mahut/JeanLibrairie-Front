import { combineReducers } from "redux"
import app from "./app"
import sign from "./sign"

const createRootReducer = combineReducers(
    {
        app,
        sign
    }
)

export default createRootReducer
