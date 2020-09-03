import React, {useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios, { addAuth } from "../../utils/api"
import { setStorageToken } from "../../utils/localStorage"

import "./Register.scss"

const Register = (props) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post("user/register", { username, email, password })
            .then(response => {
                addAuth(response.data)
                dispatch({ type: "SET_AUTH_TOKEN", payload: response.data })
                setStorageToken(response.data)
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(true)
                window.location.href = "http://localhost:1234/"
            })
        const body = {
            username, email, password
        }
    }

    return (
        <div className='containerRegister'>
            {
                isLoading ? (
                    <span>loading...</span>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="username">
                            <label>Username</label>
                            <input onChange={(event) => setUsername(event.target.value)} type="text" required />
                        </div>
                        <div className='email'>
                            <label>Email</label>
                            <input onChange={event => setEmail(event.target.value)} type='text' required />
                        </div>
                        <div className="pass">
                            <label>Password</label>
                            <input onChange={(event) => setPassword(event.target.value)} type="password" required />
                        </div>
                        <button type="submit">S'incrire</button>
                    </form>
                )
            }
        </div>
    )
}

export default Register
