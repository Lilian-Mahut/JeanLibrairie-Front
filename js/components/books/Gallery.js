import React from 'react'
import { Link, Route } from "react-router-dom"

export default ({ match }) => {
	return(
		<div>
			<nav>
				<ul>
					<li><Link to={ `${match.path}/cat1` }>Cat1</Link></li>
					<li><Link to={ `${match.path}/cat2` }>Cat2</Link></li>
				</ul>
			</nav>
			<h3>Gallery</h3>
			<Route exact path={ match.path }>Index</Route>
			<Route path={ `${match.path}/:categorySlug` }>Filtered Categorie</Route>
		</div>
	)
}