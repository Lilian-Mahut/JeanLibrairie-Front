import React from 'react'
import { Link, Route } from "react-router-dom"

import Gallery from '../components/books/Gallery'
import DashboardHome from '../components/dashboard/DashboardHome'

export default ({ match }) => {
	return (
		<div>
			<nav>
				<ul>
					<li><Link to={ `${match.path}` }>Home</Link></li>
					<li><Link to={ `${match.path}/books` }>Books</Link></li>
					<li><Link to={ `${match.path}/calendar` }>Calendar</Link></li>
					<li><Link to={ `${match.path}/about` }>About</Link></li>
				</ul>
			</nav>
			<h2>Dashboard</h2>
			<Route exact path={ match.path } component={ DashboardHome }>
			<Route path={ `${match.path}/books`} component={ Gallery }/>
			<Route path={ `${match.path}/calendar`}><h3>Calendar</h3></Route>
			<Route path={ `${match.path}/about`}><h3>About</h3></Route>
		</div>
	)
}