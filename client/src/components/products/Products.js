import { useState, useEffect } from 'react'
import Product from '../common/Product'
import axios from 'axios'
import 'aos/dist/aos.css'
import './Products.css'
import ClipLoader from "react-spinners/ClipLoader";

function Products() {

    const startDefault = 0
    const endDefault = 7;

    const [ categories, setCategories ] = useState([])
    const [ category, setCategory ] = useState('all')
    const [ products, setProducts ] = useState([])
    const [ startIndex, setStartIndex ] = useState(0)
    const [ endIndex, setEndIndex ] = useState(0)
    const [ done, setDone ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    useEffect(async () => {
        try {
            setLoading(true)
            const categories = await axios.get('/category')
            setCategories(categories.data.categories)
            const result = await axios.get(`/product/${category}/${startDefault}/${endDefault}`)
            setProducts([...result.data.products])
            setStartIndex(endDefault + 1)
            setEndIndex(endDefault + (endDefault - startDefault + 1))     
            setDone(result.data.done)
            setTimeout(() => setLoading(false), 100)
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [])

    useEffect(async () => {
        try {
            setLoading(true)
            const result = await axios.get(`/product/${category}/${startDefault}/${endDefault}`)
            setProducts([...result.data.products])
            setStartIndex(endDefault + 1)
            setEndIndex(endDefault + (endDefault - startDefault + 1))     
            setDone(result.data.done)   
            setTimeout(() => setLoading(false), 100)
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [ category ])

    const handlePages = async (e) => {
        e.preventDefault()
        try {
            const result = await axios.get(`/product/${category}/${startIndex}/${endIndex}`)
            setProducts([...products, ...result.data.products ])
            setStartIndex(endIndex + 1)
            setEndIndex(endIndex + (endIndex - startIndex + 1)) 
            setDone(result.data.done)  
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    if(loading === true) {
        return (
            <div className="products">
                <h2 className="products-title">{ category ? category.toUpperCase() : null }</h2>
                <div className="products-category-container"> 
                    <div className={ category === 'all' ? "products-category-focus" : "products-category" } onClick={() => setCategory('all')} >ALL</div>
                    {
                        categories.map((item) => <div className={ category === item.title ? "products-category-focus" : "products-category"} onClick={() => setCategory(item.title)} >
                                { item.title ? item.title.toUpperCase() : null }
                            </div>
                        )
                    }
                </div>
                <div className="products-loading">
                    <ClipLoader loading={loading} />
                </div>
            </div>

        )
    }

    if(products.length === 0) {
        return (
            <div className="products">
                <h2 className="products-title">{ category ? category.toUpperCase() : null }</h2>
                <div className="products-category-container"> 
                    <div className={ category === 'all' ? "products-category-focus" : "products-category" } onClick={() => setCategory('all')} >ALL</div>
                    {
                        categories.map((item) => <div className={ category === item.title ? "products-category-focus" : "products-category"} onClick={() => setCategory(item.title)} >
                                { item.title ? item.title.toUpperCase() : null }
                            </div>
                        )
                    }
                </div>
                <p className="products-noproducts">NO PRODUCTS</p>
            </div>
        )
    }

    return (
        <div className="products">
            <h2 className="products-title">{ category ? category.toUpperCase() : null }</h2>
            <div className="products-category-container"> 
                <div className={ category === 'all' ? "products-category-focus" : "products-category" } onClick={() => setCategory('all')} >ALL</div>
                {
                    categories.map((item) => <div className={ category === item.title ? "products-category-focus" : "products-category"} onClick={() => setCategory(item.title)} >
                            { item.title ? item.title.toUpperCase(): null }
                        </div>
                    )
                }
            </div>
            <div className="products-container">
                {
                    products.map((product, index) => <Product
                    key={ index } type={ "products" } product={ product } />)
                }
                </div>
                {
                    !done ?
                    <input type="button" value="MORE" className="products-more-button" onClick={ handlePages }></input> :
                    <input type="button" value="MORE" className="products-more-button-done" ></input>
                }  
        </div>
    )
}

export default Products
