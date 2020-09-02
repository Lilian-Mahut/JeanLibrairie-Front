import React from "react"
import { useDispatch } from "react-redux"

import "./Header.scss"

import Login from "../login/Login"
import Register from "../register/Register"

const Header = props => {
    const dispatch = useDispatch()
    const showModal = () =>
        dispatch({
            type: "TOGGLE_IS_MODAL_SHOWING",
            payload: { type: "login", title: "Login" }
        })

    return (
        <div className="containerHeader">
            <div className="logo"></div>
            <div className="sign">
                <div className="login">
                    <button onClick={showModal}>Se connecter</button>
                </div>
                <div className="register">
                    <button onClick={showModal}>Créer un compte</button>
                </div>
            </div>
        </div>
    )
}

export default Header
