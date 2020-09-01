import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import PrivateRoute from './components/routes/PrivateRoute'

import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'

import "./styles/style.scss"

const App = () => {
    const dispatch = useDispatch()
    return (
        <Router>
        	<div className="AppBody">
        		<Switch>
        			<Route exact path="/">
        				<div>home</div>
        			</Route>
        			<Route path="/books/:slug">
        				book
        			</Route>
        			<Route path="/books">
        				books
        			</Route>
        			
        			<PrivateRoute component={ Dashboard } path="/dashboard" role="user" />
        			<PrivateRoute component={ AdminDashboard } path="/admin/dashboard" role="admin" />
        		</Switch>
        	</div>
        </Router>
    )
}

export default App
