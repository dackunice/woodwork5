import { useContext, useState } from 'react'
import { AuthState } from '../../AuthState'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'aos/dist/aos.css'
import './Product.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function Product({ type, product, deleteCart }) {

    const { user } = useContext(AuthState)

    console.log(product.images[0])

    const handleDelete = async (e) => {
        deleteCart(e, product._id)
    }

    const handleCart = async (e) => {
        e.preventDefault()
        try {
            const result = window.confirm("Do you want to add this to your cart?")
            if(result) {
                const result = await axios.post('/user/cart', { productid: product._id }, {
                    headers: { 'Authorization': user.accesstoken }
                })
                alert(result.data.msg)
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <Link to={`/product-detail/${product._id}`}>
        <div className="product">
            <div className="product-image-container">
                <img className="product-image" src={`data:image/png;base64,${product.images[0]}`} alt="product"></img>
                {
                    user.accesstoken && type === 'cart' ?
                    <AiOutlineDelete className="product-icon-cancel" onClick={(e) => { handleDelete(e)}} /> :
                    user.accesstoken && type === 'items' ?
                    <HiOutlineShoppingBag className="product-icon" onClick={(e) => { handleCart(e) }} /> :
                    user.accesstoken && type === 'products' ?
                    <HiOutlineShoppingBag className="product-icon" onClick={(e) => { handleCart(e) }} /> :
                    null
                }
            </div>
            <p className="product-title">{ product.title }</p>
            <p className="product-price">{ '$' + product.price }</p>
        </div>
        
        </Link>
        
    )
}

export default Product
// <img className="product-image" src={ product.images[0] || null } alt="product"></img>