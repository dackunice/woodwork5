import { useState, useContext } from 'react'
import { AuthState } from '../../AuthState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

function Register() {

    const { setUser } = useContext(AuthState)

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordAgain, setPasswordAgain ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(password === passwordAgain) {
                const result = await axios.post('/user/register', { username, email, password })
                setUser(result.data)
                window.location.href = '/'
            } else {
                alert('비밀번호 불일치')
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="register">
            <h2 className="register-title">REGISTER</h2>
            <form className="register-form" onSubmit={ handleSubmit }>
                <input className="register-username" type="text" name="username" placeholder="Username"
                onChange={(e) => setUsername(e.target.value)} />
                <input className="register-email" type="email" name="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} />
                <input className="register-password" type="password" name="password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
                <input className="register-password" type="password" name="password-again" placeholder="Password Again"
                onChange={(e) => setPasswordAgain(e.target.value)} />
                <button className="register-button" type="submit">REGISTER</button>
            </form>            
            <Link to="/login"><span className="register-login">GO TO LOGIN</span></Link>
        </div>
    )
}

export default Register
