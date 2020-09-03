import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import "./Modale.scss"
import Login from "../login/Login"
import Register from "../register/Register"

const Modale = (props) => {
    const modal = useSelector(state => state.sign.isModalShowing)

    return (
		<div id='OutSideModale' onClick={props.clickOutSide}>
			<div className="containerModale">
				{modal.title && <h2>{modal.title}</h2>}
				<div className="choice">
					{modal.type === "login"}
					{modal.type === "login" && <Login />}
					{modal.type === "register" && <Register />}
				</div>
			</div>
		</div>
	)
}

export default Modale
