import { combineReducers } from "redux"

const initialState = {
    isLoading: false,
    token: null,
    user: null,
    error: null,
    appInitialized: null
}

const state = {
    isLoading: (state = initialState.isLoading, action) => {
        switch (action.type) {
            case "TOGGLE_AUTH_IS_LOADING":
                return state ? false : true
            default:
                return state
        }
    },
    token: (state = initialState.token, action) => {
        switch (action.type) {
            case "SET_AUTH_TOKEN":
                return action.payload
            case "CLEAR_AUTH_TOKEN":
                return null
            default:
                return state
        }
    },
    user: (state = initialState.user, action) => {
        switch (action.type) {
            case "SET_AUTH_USER":
                return action.payload
            case "CLEAR_AUTH_USER":
                return null
            default:
                return state
        }
    },
    error: (state = initialState.error, action) => {
        switch (action.type) {
            case "SET_AUTH_ERROR":
                return action.payload
            case "CLEAR_AUTH_ERROR":
                return null
            default:
                return state
        }
    },
    appInitialized: (state = initialState.appInitialized, action) => {
        switch (action.type) {
            case "FETCH_USER":
                return state
            case "APP_INITIALIZED":
                return true
            default:
                return state
        }
    }
}

const authReducer = combineReducers(state)

export default authReducer
