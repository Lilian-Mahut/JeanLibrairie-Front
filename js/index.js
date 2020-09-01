import React from "react"
import reactDom from "react-dom"
import { Provider } from "react-redux"

import App from "./App"
import configureStore from "./store/store"

const store = configureStore()
store.dispatch({ type: "INIT_APP"})
reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("App")
)
