import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
	return(
		<div>
			<h2>Home</h2>
			<Link to="/books">Books</Link>
			<Link to="/dashboard">Dashboard</Link>
		</div>
	)
}