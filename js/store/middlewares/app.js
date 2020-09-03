import { getStorageToken } from "../../utils/localStorage"
import { addAuth }  from "../../utils/api"

export default store => next => action => {
	switch (action.type) {
		case "INIT_APP":
			initializeApplication(store)
	}
	return next(action)
}

const initializeApplication = store => {
	let token = getStorageToken()
	addAuth(token)
	store.dispatch({type: "SET_AUTH_TOKEN", payload: token})
}
