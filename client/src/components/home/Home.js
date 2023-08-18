import { useContext } from 'react'
import { AuthState } from '../../AuthState'
import { Link } from 'react-router-dom'
import HotItem from './HotItems'
import NewItem from './NewItems'
import './Home.css'

function Home() {

    const { user } = useContext(AuthState)

    return (
        <div className="home">
            <div className="home-banner">
                <p className='home-banner-user'>{ user.username }</p>
                <p className="home-banner-welcome">WELCOME TO THE WORLD OF WOODWORK</p>
                <Link to="/products" className="home-banner-button" type="button">VIEW PRODUCTS</Link>
            </div>
            <HotItem />
            <NewItem />
        </div>
    )
}

export default Home
