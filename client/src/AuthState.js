import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const AuthState = createContext()

export const DataProvider = ({ children }) => {

  const [ user, setUser ] = useState({})
  
  useEffect(async () => {
    try {
      const result = await axios.get('/user/refreshtoken')
      setUser(result.data)
    } catch(err) {
      // alert(err.response.data.msg)
    }
  }, [])
  
  return (
    <AuthState.Provider value={{ user, setUser }}>
      { children }
    </AuthState.Provider>
  )
}