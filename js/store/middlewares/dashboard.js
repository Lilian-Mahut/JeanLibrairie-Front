import axios from '../../utils/api'

export default store => next => async action => {
	switch (action.type) {
		case "FETCH_DASHBOARD_USER":
			let response = await axios.get('/user/dashboard')
			.catch(err => console.error(err))
			
			store.dispatch({ type: "SET_DASHBOARD_USER", payload: response.data.user })

			break

		default:

			break
	}
	return next(action)
}