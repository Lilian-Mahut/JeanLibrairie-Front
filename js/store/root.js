import { combineReducers } from "redux"
import app from "./app"
import auth from "./auth"
import sign from "./sign"
import books from "./books"
import book from "./book"

const createRootReducer = combineReducers(
    {
        app,
        auth,
        book,
        books,
        sign
    }
)

export default createRootReducer
