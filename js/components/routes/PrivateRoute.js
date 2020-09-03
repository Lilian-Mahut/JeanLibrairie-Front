import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default ({component: Component, role, ...rest}) => {
	const userRole = useSelector(state => state.auth.role)
	const access = ('admin' === role)? (userRole === 'admin') : (userRole === 'admin' || userRole === 'user')

	return (
		<Route { ...rest } render={ props => (
			access ? 
				<Component {...props}/>
			: <Redirect to="/"/>
		)}/>
	)
}