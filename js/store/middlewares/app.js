import { getStorageToken } from "../../utils/localStorage"
import { addAuth }  from "../../utils/api"
import decodeToken from "../../utils/decodeToken"

export default store => next => action => {
	switch (action.type) {
		case "INIT_APP":
			initializeApplication(store)

			break

		case "SET_AUTH_TOKEN":
			console.log(decodeToken(action.payload))
			store.dispatch({ type: "SET_AUTH_ROLE", payload: decodeToken(action.payload).role })

			break

		default:

			break
	}
	return next(action)
}

const initializeApplication = store => {
	let token = getStorageToken()
	if (token) {
		addAuth(token)
		store.dispatch({type: "SET_AUTH_TOKEN", payload: token})
	}
}
