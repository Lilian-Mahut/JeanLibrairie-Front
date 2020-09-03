import { combineReducers } from "redux"

const initialState = {
	books: new Object(),
	result: new Array()
}

const state = {
	books: (state = initialState.books, action) => {
		switch (action.type) {
			case "SET_RESULT_BOOK":
				state[action.payload.books] = action.payload.result
				return state

			default:
				return state
		}
	},
	result: (state = initialState.result, action) => {
		switch (action.type) {
			case "GET_RESULT_BOOK":
				return state
			case "SET_RESULT_BOOK":
				return action.payload
			default:
				return state
		}
	}
}

const bookReducer = combineReducers(state)

export default bookReducer
