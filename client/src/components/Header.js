import { useContext, useState } from 'react'
import { AuthState } from '../AuthState'
import { Link } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login'
import axios from 'axios'
import './Header.css'
import { MdBedroomParent } from 'react-icons/md'
import { AiOutlineLogin } from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'

function Header() {

  const { user, setUser } = useContext(AuthState)

  const handleLogout = async () => {
    try {
      const result = window.confirm("Do you want to logout?")
      if(result) {
        await axios.get('/user/logout')
        setUser({})
        window.location.href = '/'
      }
    } catch(err) {
      alert(err.response.data.msg)
    }
  }

    return (
        <div className="header">
            <div className="header-left">
              <Link to="/"><MdBedroomParent className="header-logo"/></Link>
              <Link to="/products"><p className="header-products">PRODUCTS</p></Link>
            </div>
            <div className="header-right">
              { 
                user.accesstoken && user.isAdmin ? 
                <Link to="/admin"><AiOutlineSetting className="header-admin" /></Link> : 
                null   
              }
              <Link to="/cart"><HiOutlineShoppingBag className="header-cart" /></Link>
              <Link to="/user"><AiOutlineUser className="header-user" /></Link>
              {
                  user.accesstoken && user.provider === 'local' ?
                  <AiOutlineLogout className="header-logout" onClick={ handleLogout } /> :
                  user.accesstoken && user.provider === 'google' ?
                  <GoogleLogout
                    clientId="273160624303-8mcefg70tabulcgnm6lk8riim6f4ne51.apps.googleusercontent.com"
                    render={(render) => (
                      <AiOutlineLogout className="header-logout" onClick={render.onClick} disabled={render.disabled} />
                    )}
                    onLogoutSuccess={ handleLogout }>
                  </GoogleLogout> :
                  <Link to="/login"><AiOutlineLogin className="header-login"/></Link>
              }
            </div>
        </div>
    )
}

export default Header