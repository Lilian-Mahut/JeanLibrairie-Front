import { createLogger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"

import rootReducer from "./root"
import booksMiddleware from "../middlewares/books"
import appMiddleware from "./middlewares/app"
import bookMiddleware from "./middlewares/book"
import dashboardMiddleware from "./middlewares/dashboard"

const loggerMiddleware = createLogger()

export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(
        	loggerMiddleware,
        	booksMiddleware,
        	bookMiddleware,
            appMiddleware
            dashboardMiddleware,
    )
}
