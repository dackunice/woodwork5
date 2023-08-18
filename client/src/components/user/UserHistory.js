import { useContext, useState } from 'react'
import { AuthState } from '../../AuthState'
import axios from 'axios'
import 'aos/dist/aos.css'
import './UserHistory.css'

function UserHistory({ index, item, handleHistory }) {

    const { user } = useContext(AuthState)

    const [ historyButton, setHistoryButton ] = useState(false)
    const [ review, setReview ] = useState('')

    const handleSend = async () => {
        try {
            const result = await axios.post(`/user/review/${item.id}`, { review: review },
            { headers: { 'Authorization': user.accesstoken } }
            )  
            handleHistory(result.data.history)
            window.alert("Review is created")
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="user-history-item">
            <div className='user-history-item-info'>
                <p className='user-history-item-index'>{ index + 1 }</p>
                <p className='user-history-item-title'>{ item.title }</p>
                <p className='user-history-item-date'>{ item.date }</p>
                <button className="user-history-item-button" type="button" onClick={() => setHistoryButton(!historyButton)}>REVIEW</button>       
            </div>
            {
                historyButton && item.isReview ?
                <>
                <div className="user-history-item-review">
                    <p className="user-history-item-review-content">{ item.review }</p>
                    <button className='user-history-item-review-button-review'>YOU HAVE SENT ALREADY</button>
                </div>
                </> :
                historyButton && !item.isReview ?
                <>
                <div className="user-history-item-review">
                    <textarea className="user-history-item-review-content" onChange={(e) => setReview(e.target.value)} placeholder='WRITE YOUR REVIEW HERE'></textarea>
                    <button className='user-history-item-review-button' onClick={ handleSend }>SEND</button>
                </div>
                </> :
                null
        }
        </div>
        
    )
}

export default UserHistory
