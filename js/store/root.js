import { combineReducers } from "redux"
import app from "./app"
import sign from "./sign"
import books from "./books"

const createRootReducer = combineReducers(
    {
        app,
        sign,
        books
    }
)

export default createRootReducer
