import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, Route } from "react-router-dom"

import Gallery from '../components/books/Gallery'
import DashboardHome from '../components/dashboard/DashboardHome'

import "./Dashboard.scss"

export default ({ match }) => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.dashboard.user)

	useEffect(() => {
		if (null === user) dispatch({ type: "FETCH_DASHBOARD_USER" })
	}, [])

	return (
		<div>
			{
				null === user ? 
					'Initialising Dashboard' 
				: (
					<div className="Dashboard">
						<nav className="DashboardNav">
							<ul>
								<li><Link to={ `${match.path}` }>Home</Link></li>
								<li><Link to={ `${match.path}/books` }>Books</Link></li>
								<li><Link to={ `${match.path}/calendar` }>Calendar</Link></li>
								<li><Link to={ `${match.path}/about` }>About</Link></li>
							</ul>
						</nav>
						<div className="DashboardContent">
							<Route exact path={ match.path } component={ DashboardHome } />
							<Route path={ `${match.path}/books`} component={ Gallery }/>
							<Route path={ `${match.path}/calendar`}><h3>Calendar</h3></Route>
							<Route path={ `${match.path}/about`}><h3>About</h3></Route>
						</div>
					</div>
				)
			}
			
		</div>
	)
}