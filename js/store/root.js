import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import sign from "./sign"
import books from "./books"

const createRootReducer = combineReducers(
    {
        app,
        auth,
        books,
        sign
    }
)

export default createRootReducer
