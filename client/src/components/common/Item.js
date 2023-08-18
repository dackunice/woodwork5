import React from 'react'
import { Link } from 'react-router-dom'
import { ImStarFull } from 'react-icons/im'
import './Item.css'

function Item({ type, product }) {

    const serverURL = 'https://woodwork-server.herokuapp.com'

    return (
        <Link to={ `/item-detail/${product._id}`}>
        <div className="item">
            <img className="item-image" src={ serverURL + product.images[0] } alt="product-item"></img>  
            <p className="item-title">{ product.title }</p>
            <p className="item-price">{ product.price }ssss{ product.images[0] }</p>
            <p className="item-grade">
                <ImStarFull className="item-star-icon"/>{ product.average ? product.average.toFixed(1) : "0.0" } / 5.0
            </p>
        </div>
        </Link>
    )
}

export default Item
