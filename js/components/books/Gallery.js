import axios from 'axios'
import BooksResultSection from './BooksResultSection'
import React, { useState, useEffect } from 'react'
import { NavLink, Route } from "react-router-dom"

import './Gallery.scss'

export default ({ match, title = "Library" }) => {
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
		    <h3>{ title }</h3>
			<nav className="CategoryNav">
				<h3>Genre : </h3>
				<ul className="CategoryFilters">
					{ categories.length > 0 && categories.map((category, i) => (
						<li key={ i }>
							<NavLink to={ `${match.path}/${category.slug}` } activeClassName="active">
								{ category.name }
							</NavLink>
						</li>
					)) }
				</ul>
			</nav>
			<Route exact path={ match.path } component={ BooksResultSection } />
			<Route path={ `${match.path}/:categorySlug` } component={ BooksResultSection } />
		</div>
	)
}
