import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

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
        dispatch({ type: "CONNECTING_AUTH_USER", payload: { email, password }})
        setPassword('')
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
