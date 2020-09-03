import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import sign from "./sign"
import books from "./books"
import book from "./book"
import dashboard from "./dashboard"

const createRootReducer = combineReducers(
    {
        app,
        auth,
        book,
        books,
        sign,
        dashboard
    }
)

export default createRootReducer
