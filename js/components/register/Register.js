import React, {useState } from "react"

import "./Register.scss"

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
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
