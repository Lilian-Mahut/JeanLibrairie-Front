import { createStore, applyMiddleware } from "redux"
import rootReducer from "./root"
import app from "./middlewares/app"
import { createLogger } from "redux-logger"

const logger = createLogger()

export default () => {
    return createStore(
        rootReducer,
        applyMiddleware(
            logger,
            app
        )
    )
}
