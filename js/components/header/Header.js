import React from "react"
import { useDispatch } from "react-redux"

import "./Header.scss"

const Header = props => {
    const dispatch = useDispatch()
    const displayLoginModale = () =>
        dispatch({
            type: "TOGGLE_IS_MODAL_SHOWING",
            payload: { type: "login", title: "Login" }
        })
    const displayRegisterModale = () =>
        dispatch({
            type: "TOGGLE_IS_MODAL_SHOWING",
            payload: { type: "register", title: "Register" }
        })

    return (
			<div className='containerHeader'>
				<div className='logo'></div>
				<div className='sign'>
					<div className='login'>
						<button onClick={displayLoginModale}>Se connecter</button>
					</div>
					<div className='register'>
						<button onClick={displayRegisterModale}>Créer un compte</button>
					</div>
				</div>
			</div>
		)
}

export default Header
