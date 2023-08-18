import { useContext, useState, useEffect } from 'react'
import { AuthState } from '../../AuthState'
import UserHistory from './UserHistory'
import axios from 'axios'
import 'aos/dist/aos.css'
import './User.css'

function User() {

    const { user } = useContext(AuthState)

    const [ history, setHistory ] = useState([])

    useEffect(async () => {
        try {
            
            const result = await axios.get('/user/history', { 
                headers: { 'Authorization': user.accesstoken 
            }})
            setHistory(result.data.history)
        } catch(err) {
            // alert(err.response.data.msg)
        }
    }, [])

    const handleHistory = (history) => setHistory(history)
    
    if(!user.accesstoken) {
        return (
            <div className="user">
                <h2 className="user-title">USER</h2>
                <h3 className="user-notoken">LOGIN OR REGISTER FIRST</h3>
            </div>
        )
    }

    return (
        <div className="user">
            <h2 className="user-title">USER</h2>
                <div className="user-info">
                    <div className="user-info-dummy">{ user.username }</div>
                    <div className="user-info-item">{ user.email }</div>
                    <div className="user-info-item">{ user.provider.toUpperCase() }</div>
                    <div className="user-info-item-last">{ user.isAdmin ? 'ADMIN' : 'GUEST' }</div>
                </div>
                <p className="user-subtitle">ORDER HISTORY</p> 
                <div className="user-history">
                {
                    history.map((item, index) => <UserHistory key={ index } index={ index } item = { item } handleHistory = { handleHistory }/>) 
                }
                </div>
        </div>
    )
}

export default User