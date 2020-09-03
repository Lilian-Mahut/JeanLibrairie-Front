import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import sign from "./sign"
import books from "./books"
import dashboard from "./dashboard"

const createRootReducer = combineReducers(
    {
        app,
        auth,
        books,
        sign,
        dashboard
    }
)

export default createRootReducer
