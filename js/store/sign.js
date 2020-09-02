import { combineReducers } from "redux"

const initialState = {
	isModalShowing: null,
	themes: {
		isLoading: false,
		collection: []
	}
}

const state = {
	isModalShowing: (state = initialState.isModalShowing, action) => {
		switch (action.type) {
			case "TOGGLE_IS_MODAL_SHOWING":
				return action.payload ? action.payload : null
			default:
				return state
		}
	}
}

const signReducer = combineReducers(state)

export default signReducer
