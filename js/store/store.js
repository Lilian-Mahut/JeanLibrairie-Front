import booksMiddleware from '../middlewares/books'
import rootReducer from "./root"
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux"

const loggerMiddleware = createLogger()

export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(
        	loggerMiddleware,
        	booksMiddleware
        )
    )
}
