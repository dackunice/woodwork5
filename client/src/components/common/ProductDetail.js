import { useEffect, useState, useContext } from 'react'
import { AuthState } from '../../AuthState'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { GiEmptyChessboard } from 'react-icons/gi'
import './ProductDetail.css'
import ClipLoader from "react-spinners/ClipLoader";

function ProductDetail() {

    const { user } = useContext(AuthState)

    const { productid } = useParams()

    const [ product, setProduct ] = useState({ images: [], reviews: [] })

    const [ mainImageIndex, setMainImageIndex ] = useState(0)

    const [ loading, setLoading ] = useState(true)

    useEffect(async () => {
        try {
            setLoading(true)
            const result = await axios.get(`/product/${productid}`)
            setProduct(result.data.product)
            setTimeout(() => setLoading(false), 200)
            window.scrollTo(0, 0)
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [])

    const handleImage = (idx) => {
        setMainImageIndex(idx)
    }

    const handleCart = async (e) => {
        e.preventDefault()
        try {
            const result = window.confirm("Do you want to add this to your cart?")
            if(result) {
                const result = await axios.post('/user/cart', { productid }, {
                    headers: { 'Authorization': user.accesstoken }
                })
                alert(result.data.msg)
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    const handleBuy = async (e) => {
        e.preventDefault()
        try {
            const result = window.confirm("Do you want to buy this?")
            if(result) {
                const result = await axios.post('/user/buy', { productid }, {
                    headers: { 'Authorization': user.accesstoken }
                })
                alert(result.data.msg)
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    if(loading === true) {
        return (
            <div className="product-detail">
                <div className="products-detail-loading">
                    <ClipLoader loading={loading} />
                </div>
            </div>
        )
    }


    return (
        <div className="product-detail">
            <h2 className="product-detail-main-title">PRODUCT</h2>  
            <div className="product-detail-main">
                <div className="product-detail-image-box">
                    <img className="product-detail-image-choice" src={`data:image/png;base64,${product.images[mainImageIndex]}`} alt=""></img>
                    { 
                        product.images[0] ? 
                        <img className="product-detail-image-1" onClick={() => handleImage(0)} src={`data:image/png;base64,${product.images[0]}`} alt=""></img> : 
                        <GiEmptyChessboard className="product-detail-empty-1" />
                    }
                    { 
                        product.images[1] ? 
                        <img className="product-detail-image-2" onClick={() => handleImage(1)} src={`data:image/png;base64,${product.images[1]}`} alt=""></img> : 
                        <GiEmptyChessboard className="product-detail-empty-2" />
                    }
                    { 
                        product.images[2] ? 
                        <img className="product-detail-image-3" onClick={() => handleImage(2)} src={`data:image/png;base64,${product.images[2]}`} alt=""></img> : 
                        <GiEmptyChessboard className="product-detail-empty-3" />
                    }
                    { 
                        product.images[3] ? 
                        <img className="product-detail-image-4" onClick={() => handleImage(3)} src={`data:image/png;base64,${product.images[3]}`} alt=""></img> : 
                        <GiEmptyChessboard className="product-detail-empty-4" />
                    }
                    { 
                        product.images[4] ? 
                        <img className="product-detail-image-5" onClick={() => handleImage(4)} src={`data:image/png;base64,${product.images[4]}`} alt=""></img> : 
                        <GiEmptyChessboard className="product-detail-empty-5" />
                    }  
                </div>
                <div className="product-detail-info-box">
                    <p className="product-detail-info-title">{ product.title }</p>
                    <p className="product-detail-info-price">PRICE : $ { product.price }</p>
                    <p className="product-detail-info-shipping">SHIPPING : Standard</p>
                    <p className="product-detail-info-quantity">QUANTITY : 1</p>
                    <p className="product-detail-info-total">
                        TOTAL : <span style={{ color: "red", fontSize: "16px" }}>$ { product.price }</span>
                    </p>  
                    <div className="product-detail-button-box">
                        <button className="product-detail-button-cart" type="button" onClick={ handleCart }>CART</button>
                        <button className="product-detail-button-buy" type="button" onClick={ handleBuy }>BUY</button>
                    </div>      
                </div>
            </div>  
            <p className="product-detail-desc-title">DESCRIPTION INFO</p>
            <p className='product-detail-desc-content'>{ product.desc }</p>
            <p className="product-detail-review-title">REVIEW INFO</p>
            {
                product.reviews.map((item, index) => <div className="product-detail-review-container" key={ index }>
                    <p className="product-detail-review-index">{ index + 1 }</p>
                    <p className="product-detail-review-content">{ item.review }</p>
                    <p className="product-detail-review-date">{ item.date }</p>
                    <p className="product-detail-review-username">{ item.username }</p>
                </div>)
            }
        </div>
    )
}

export default ProductDetail
