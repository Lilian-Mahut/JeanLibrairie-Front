import { createLogger } from "redux-logger"
import { createStore, applyMiddleware } from "redux"

import rootReducer from "./root"
import booksMiddleware from "../middlewares/books"
import appMiddleware from "./middlewares/app"

const loggerMiddleware = createLogger()

export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(
        	loggerMiddleware,
        	booksMiddleware,
            appMiddleware
        )
    )
}
