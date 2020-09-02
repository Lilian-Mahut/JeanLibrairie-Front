import axios from 'axios'

export default store => next => async action => {
	switch (action.type) {
		case 'GET_RESULTS': 
			let url = action.payload ? `/category/${ action.payload }` : ''
			let response = await axios.get(`http://localhost:5000/books${ url }`)
			let data = response.data.data

			if (data.length > 0) {
				store.dispatch({ type: 'SET_RESULT_COUNT', payload: data.length })

				if (undefined !== action.payload) {
					store.dispatch({ type: 'SET_RESULTS_BY_CATEGORY', payload: { category: action.payload, results: data } })
					store.dispatch({ type: 'SET_RESULTS', payload: data })
				}
				else store.dispatch({ type: 'SET_RESULTS', payload: data })
			}

			break

		default:

			break
	}
	return next(action)
}