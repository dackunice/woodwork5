import { useContext, useState, useEffect } from 'react'
import { AuthState } from '../../AuthState'
import Product from '../common/Product'
import axios from 'axios'
import './Cart.css'
import ClipLoader from "react-spinners/ClipLoader";

function Cart() {

    const { user } = useContext(AuthState)

    const startDefault = 0
    const endDefault = 7;

    const [ cart, setCart ] = useState([])
    const [ startIndex, setStartIndex ] = useState(0)
    const [ endIndex, setEndIndex ] = useState(0)
    const [ done, setDone ] = useState(true)
    const [ loading, setLoading ] = useState(false)

    useEffect(async () => {
        try {
            if(user.accesstoken) {
                setLoading(true)
                const result = await axios.get(`/user/cart/${startDefault}/${endDefault}`, {
                    headers: { 'Authorization': user.accesstoken }
                })
                setCart(result.data.cart)
                setStartIndex(endDefault + 1)
                setEndIndex(endDefault + (endDefault - startDefault + 1))     
                setDone(result.data.done)    
                setTimeout(() => setLoading(false), 100)
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [])

    const handlePages = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.get(`/user/cart/${startIndex}/${endIndex}`, {
                headers: { 'Authorization': user.accesstoken }
            })
            setCart([...cart, ...result.data.cart])
            setStartIndex(endIndex + 1)
            setEndIndex(endIndex + (endIndex - startIndex + 1)) 
            setDone(result.data.done)  
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    const handleDelete = async (e, productid) => {
        e.preventDefault()
        try {
            const result = window.confirm("Do you want to delete this out of your cart?")
            if(result) {
                await axios.delete(`/user/cart/${productid}`, {
                    headers: { 'Authorization': user.accesstoken }
                })
                const newCart = [ ...cart ]
                const index = newCart.findIndex((item) => item._id === productid)
                newCart.splice(index, 1)
                setCart(newCart)
                setStartIndex(startIndex - 1)
                window.alert("This is deleted out of your cart")
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    if(loading === true) {
        return (
            <div className="cart-loading">
                <ClipLoader loading={loading} />
            </div>
        )
    }

    if(!user.accesstoken) {
        return (
            <div className="cart">
                <h2 className="cart-title">CART</h2>
                <h3 className="cart-notoken">LOGIN OR REGISTER FIRST</h3>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <div className="cart">
                <h2 className="cart-title">CART</h2>
                <h3 className="cart-nocart">NO PRODUCTS</h3>
            </div>
        )
    }

    return (
        <div className="cart">
            <h2 className="cart-title">CART</h2>
            <div className="cart-first-dummy"></div>
            <div className="cart-container">
            {
                cart.map((item, index) => <Product 
                key={ index } type={ "cart" } product={ item } deleteCart={ handleDelete } />)
            }
            </div>
            {
                !done ?
                <input type="button" value="MORE" className="cart-more-button" onClick={ handlePages }></input> :
                <input type="button" value="MORE" className="cart-more-button-done" ></input>
            }      
        </div>
    )
}

export default Cart
