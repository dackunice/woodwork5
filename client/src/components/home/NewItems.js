import { useEffect, useState } from 'react'
import Item from '../common/Product'
import axios from 'axios'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import './NewItems.css'

function NewItems() {

    const [ items, setItems ] = useState([])
    const [ displays, setDisplays ] = useState([])
    const [ start, setStart ] = useState(0)

    const handleLeft = () => {
        if(start === 0) return
        setStart(start - 1)    
    }

    const handleRight = () => {
        if(start === items.length - 4) return
        setStart(start + 1)
    }

    useEffect(async () => {
        try {
            const result = await axios.get('/product/new')
            setItems(result.data.products)
        } catch(err) {
            alert(err.response.data.message)
        }
    }, [])

    useEffect(async () => {
        setDisplays([...items.slice(start, start + 4)])
    }, [ items, start ])

    if(items.length === 0) {
        return (
            <div className="new-items">
                <h2 className="new-items-title">BED/CHAIR ITEMS</h2>
                <p className="new-items-nonewitems">NO BED/CHAIR ITEMS</p>
            </div>
        )
    }

    return (
        <div className="new-items">
            <h2 className="new-items-title">BED/CHAIR ITEMS</h2>
            <div className="new-items-box">
            {
                items.length > 4 &&
                <AiOutlineLeft style={ start === 0 ? { color: 'lightgray' } : { color: 'black' }} 
                className="new-items-arrow-icon" onClick={ handleLeft } />
            }
            <div className="new-items-product-box">
            {
                displays.map((item, index) => <div key={ index }><Item 
                key={ index } type={ "items" } product={ item } /></div>)
            }
            </div>
            {
                items.length > 4 &&
                <AiOutlineRight style={ start === items.length - 4 ? { color: 'lightgray' } : { color: 'black' }} 
                className="new-items-arrow-icon" onClick={ handleRight } />
            }
            </div>
        </div>
    )
}

export default NewItems
