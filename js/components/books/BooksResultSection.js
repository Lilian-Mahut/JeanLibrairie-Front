import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./BooksResultSection.scss"

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
		<div className="ResultSection">
			{ results.length > 0 && results.map((book, i) => (
				<div key = { i } className="BookResult">
					<div className="BookResultView" style={ { backgroundImage: `url(${book.image})` } } />
						<h3>{ book.title }</h3>
						<i>{ book.authors.length > 0 && book.authors.map((author) => author.name).reduce((acc, cur) => `${ acc }, ${ cur }`) }</i>
						<div className="info">
							<div className="genre">
								{ book.categories.length > 0 && book.categories.map((category, j) => (
									<span key={ j }>{ category.slug }</span>
								)) }
							</div>
							<div className="publish">
								<p>Published in { book.publication? book.publication.substring(0, 4) : '/' }</p>
							</div>
						</div>
				</div>
			)) }
		</div>
	)
}
