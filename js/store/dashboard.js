import { combineReducers } from "redux"

const initialState = {
    user: null
}

const state = {
    user: (state = initialState.user, action) => {
        switch (action.type) {
            case "SET_DASHBOARD_USER":
                return action.payload
            default:
                return state
        }
    }
}

const dashboardReducer = combineReducers(state)

export default dashboardReducer