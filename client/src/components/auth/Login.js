import { useState, useContext } from 'react'
import { AuthState } from '../../AuthState'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import axios from 'axios'
import './Login.css'

function Login() {

  const { setUser } = useContext(AuthState)

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post('/user/login', { email, password })
      setUser(result.data)
      window.location.href = '/'
    } catch(err) {
      alert(err.response.data.msg)
    }
  }

  const handleGoogle = async (res) => {
    try {
      const email = res.profileObj.email
      const username = email.split('@')[0]
      const result = await axios.post('/user/google', { username, email })
      setUser(result.data)
      window.location.href = '/'
    } catch(err) {
      alert(err.response.data.msg)
    }
  }
    
  return (
    <div className="login">
      <h2 className="login-title">LOGIN</h2>
      <form className="login-form" onSubmit={ handleSubmit }>
        <input className="login-email" type="email" name="email" placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} />
        <input className="login-password" type="password" name="password" placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" type="submit">LOGIN</button>
        <GoogleLogin
          clientId="273160624303-8mcefg70tabulcgnm6lk8riim6f4ne51.apps.googleusercontent.com"
          render={(render) => (
            <button className="login-outside" type="button" 
            onClick={render.onClick} disabled={render.disabled}>GOOGLE</button>
          )}
          onSuccess={ handleGoogle }
          onFailure={ handleGoogle }
          cookiePolicy={'single_host_origin'}>
        </GoogleLogin>
      </form>
      <Link to="/register"><span className="login-register">GO TO REGISTER</span></Link>    
    </div>
  )
}

export default Login
