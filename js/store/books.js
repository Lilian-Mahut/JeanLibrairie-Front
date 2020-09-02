import { combineReducers } from "redux"

const initialState = {
    resultCount: false,
    categories: new Object(),
    results: new Array(),
}

const state = {
    resultCount: (state = initialState.resultCount, action) => {
        switch (action.type) {
            case "SET_RESULT_COUNT":
                return action.payload
            default:
                return state
        }
    },
    categories: (state = initialState.categories, action) => {
        switch (action.type) {
            case "SET_RESULTS_BY_CATEGORY":
                state[action.payload.category] = action.payload.results
                return state

            default:
                return state
        }
    },
    results: (state = initialState.results, action) => {
        switch (action.type) {
            case "GET_RESULTS": 
                return state
            case "SET_RESULTS":
                return action.payload
            default:
                return state
        }
    }
}

const booksReducer = combineReducers(state)

export default booksReducer