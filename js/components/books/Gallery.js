import axios from 'axios'
import BooksResultSection from './BooksResultSection'
import React, { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom"

export default ({ match }) => {
	const [categories, setCategories] = useState(false)

	useEffect(() => {
		if (!categories) {
			axios.get('http://localhost:5000/categories')
			.then(response => setCategories(response.data.data))
			.catch(err => console.error(err))
		}
	}, [])

	return(
		<div>
			<nav>
				<ul>
					{ categories.length > 0 && categories.map((category, i) => (
						<li key={ i }><Link to={ `${match.path}/${category.slug}` }>{ category.name }</Link></li>
					)) }
				</ul>
			</nav>
			<h3>Gallery</h3>
			<Route exact path={ match.path } component={ BooksResultSection } />
			<Route path={ `${match.path}/:categorySlug` } component={ BooksResultSection } />
		</div>
	)
}
