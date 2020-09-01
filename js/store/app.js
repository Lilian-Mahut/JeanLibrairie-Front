import {combineReducers } from "redux"

const initialState = {
    isAppInitialized: false,
    tokenCookie: null
}

const state = {
    isAppInitialized: (state = initialState.isAppInitialized, action) => {
        switch (action.type) {
            case "SET_APP_INITIALIZED":
                return action.payload
            case "CLEAR_APP_INITIALIZED":
                return false
            default:
                return state
        }
    },
    tokenCookie: (state = initialState.tokenCookie, action) => {
        switch (action.type) {
            case "SET_APP_TOKEN_COOKIE":
                return action.payload
            case "CLEAR_APP_TOKEN_COOKIE":
                return null
            default:
                return state
        }
    }
}

const appReducer = combineReducers(state)

export default appReducer
