import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultContainer from './ResultContainer'

export default ({ match }) => {
	let dispatch = useDispatch()
	let categories = useSelector(state => state.books.categories)
	let results = useSelector(state => state.books.results)
	let categorySlug = match.params.categorySlug

	useEffect(() => {
		if (undefined !== categorySlug) {
			if (categories[categorySlug] && categories[categorySlug] != results) dispatch({ type: "SET_RESULTS", payload: categories[categorySlug] })
			else if (!categories[categorySlug]) dispatch({ type: "GET_RESULTS", payload: categorySlug })
		} 
		else dispatch({ type: "GET_RESULTS" })
	}, [categorySlug])

	return(
		<React.Fragment>
			{ results.length > 0 && <ResultContainer books={ results } /> }
		</React.Fragment>
	)
}
