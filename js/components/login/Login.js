import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios, { addAuth } from "../../utils/api"
import { setStorageToken } from "../../utils/localStorage"

import "./Login.scss"

const Login = (props) => {
    const dispatch = useDispatch()
    const { isLoading, error } = useSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const displayRegisterModale = () => dispatch({
        type: "TOGGLE_IS_MODAL_SHOWING", payload: {type: "register", title: "Register"}
    })
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post("user/authenticate", {email: email, password: password})
            .then (response => {
                addAuth(response.data)
                dispatch({type: "SET_AUTH_TOKEN", payload: response.data})
                setStorageToken(response.data)
            })
            .catch(error => console.log(error))
        // dispatch({ type: "CONNECTING_AUTH_USER", payload: { email, password }})
            .finally(() => {
                setPassword('')
                window.location.href="http://localhost:1234/dashboard"
            })
    }

    return (
        <div className="containerLogin">
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label>Email :</label>
                    <input onChange={(event) =>
                        setEmail(event.target.value)} value={email} type="email" name="email" required />
                </div>
                <div className="pass">
                    <label>Password :</label>
                    <input onChange={(event) =>
                        setPassword(event.target.value)} value={password} type="password" required />
                </div>
                <button type="submit">Se connecter</button>
                <p>Pas encore inscrit ?<u onClick={displayRegisterModale}>S'inscrire</u></p>
                { error && <span>{ error }</span> }
            </form>

        </div>
    )
}

export default Login
