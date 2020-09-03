import axios from "axios"

export default store => next => async action => {
	switch (action.type) {
		case "GET_RESULT_BOOK":
			let url = action.payload ? `/book:${action.payload}` : ""
			let response = await axios.get(`http://localhost:5000/books/book:${url}`)
			let data = response.data.data
			store.dispatch({ type: "SET_RESULT_BOOK", payload: data })
			break
		default:
			break
	}
	return next(action)
}
