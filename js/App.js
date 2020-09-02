import AdminDashboard from './pages/AdminDashboard'
import Dashboard from './pages/Dashboard'
import Gallery from './components/books/Gallery'
import Home from './pages/Home'
import PrivateRoute from './components/routes/PrivateRoute'
import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"


import Header from "./components/header/Header"
import Modale from "./components/modale/Modale"

import "./styles/style.scss"

const App = () => {
	const dispatch = useDispatch()
	const isModalShowing = useSelector(state => state.sign.isModalShowing)
	const clickOutSideModale = event => {
		if (event.target.id === "OutSideModale")
			dispatch({ type: "TOGGLE_IS_MODAL_SHOWING"})
	}

    return (
        <Router>
			<Header />
			{ isModalShowing && <Modale clickOutSide={clickOutSideModale} /> }
        	<div className="AppBody">
        		<Switch>
        			<Route component={ Home } exact path="/" />
        			<Route component={ Gallery } path="/books" />
        			<PrivateRoute component={ Dashboard } path="/dashboard" role="user" />
        			<PrivateRoute component={ AdminDashboard } path="/admin/dashboard" role="admin" />
        		</Switch>
        	</div>
        </Router>
    )
}

export default App
