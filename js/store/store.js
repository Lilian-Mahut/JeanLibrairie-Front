import createStore from "redux"

import rootReducer from "./root"

export default () => {
    return createStore(
        rootReducer
    )
}
