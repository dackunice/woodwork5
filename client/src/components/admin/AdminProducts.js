import { useState, useRef, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineFileImage, AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'
import 'aos/dist/aos.css'
import './AdminProducts.css'

function AdminProducts() {

    const imageWrapper = [useRef(), useRef(), useRef(), useRef()]

    const [ categories, setCategories ] = useState([])
    const [ images, setImages ] = useState([])
    const [ disImages, setDisImages ] = useState([])
    const [ category, setCategory ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ desc, setDesc ] = useState('')

    const [ product, setProduct ] = useState('')

    const handleImagePlus = () => {
        setImages([...images, {}])
    }

    const handleImage = (e, index) => {
        e.preventDefault()        
        const file = e.target.files[0]
        let newImages = [...images]
        newImages[index] = { content: file }
        setImages(newImages)
        
        const reader = new FileReader()
        reader.onload = e => {
            let newDisImages = [...disImages]
            newDisImages[index] = e.target.result
            setDisImages(newDisImages)
        }
        reader.readAsDataURL(file)
    }
    
    const handleCancelImage = (e, index) => {
        e.preventDefault()
        let newImages = [...images]
        newImages.splice(index, 1);
        setImages(newImages)

        let newDisImages = [...disImages]
        newDisImages.splice(index, 1);
        setDisImages(newDisImages)
    }

    const handleCancel = (e, index) => {
        e.preventDefault()
        let newImages = [...images]
        newImages.splice(index, 1);
        setImages(newImages)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let formData = new FormData()
            formData.append('category', category)
            formData.append('title', title)
            formData.append('price', price)
            formData.append('desc', desc)                 
            images.forEach(image => formData.append('image', image.content))
            await axios.post('/product', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            setImages([])
            setDisImages([])
            setCategory('')
            setTitle('')
            setPrice('')
            setDesc('')
            alert("this product is created")
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    useEffect(async () => {
        try {
            const result = await axios.get('/category')
            setCategories(result.data.categories)
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [])

    const handleDelete = async () => {
        try {
            const answer = window.confirm("Do you want to delete this product?")
            if(answer) {
                await axios.delete(`/product/${product}`)
                setProduct('')
                window.alert("This product is deleted")  
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="upload">
            <p className="product-delete-subtitle">DELETE A PRODUCT</p> 
            <div className="product-delete-container">
                <input className="product-delete-input" type="text" placeholder="ENTER A PRODUCT TITLE" onChange={(e) => setProduct(e.target.value)}></input>
                <button className="product-delete-delete" type="button" onClick={ handleDelete }>DELETE</button>
            </div>
            <p className="product-upload-subtitle">CREATE A PRODUCT</p> 
            <div className="product-upload-container">
            {
                images.map((image, index) => image.content ?
                    <div key={ index } className="product-upload-box">
                        <img className="product-upload-image" src={ disImages[index] } alt=""></img>
                        <p className="product-upload-cancel-icon" onClick={(e) => handleCancelImage(e, index)}><AiOutlineDelete className="delete-icon" /></p>
                    </div> :
                    <div key={ index } className="product-upload-box">
                        <input ref={ imageWrapper[index] } onChange={(e) => handleImage(e, index)} className="product-upload-image-file" type="file" name="image"></input>
                        <p onClick={() => imageWrapper[index].current.click()} className="product-upload-file-icon"><AiOutlineFileImage className="upload-icon" /></p>
                        <p className="product-upload-cancel-icon" onClick={(e) => handleCancel(e, index)}><AiOutlineDelete className="delete-icon" /></p>
                    </div>
                )
            }
            {
                images.length !== 4 ?
                <div className="product-upload-plus-box">
                    <p onClick={ handleImagePlus } className="product-upload-plus-icon"><AiOutlinePlus className="upload-icon" /></p>
                </div> :
                null
            }
            </div>
                <div className="detail-upload-container">
                    <select className="detail-upload-infomation" name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value={ "none" }>{ "CHOOSE A CATEGORY" }</option>
                    {
                        categories.map((item, index) => <option key={ index } value={ item.title } selected={ item.title === category ? true : false }>{ item.title ? item.title.toUpperCase() : null }</option>)
                    }
                    </select>
                    <input className="detail-upload-infomation" type="text" name="title" value={ title } onChange={(e) => setTitle(e.target.value)} placeholder="TITLE"></input>
                    <input className="detail-upload-infomation" type="text" name="price" value={ price } onChange={(e) => setPrice(e.target.value)} placeholder="PRICE"></input>
                    <textarea className="detail-upload-description" name="description" value={ desc } onChange={(e) => setDesc(e.target.value)} placeholder="DESCRIPTION"></textarea>
                </div>
                <div className="product-submit-container">
                    <input className="product-submit" type="submit" onClick={(e) => handleSubmit(e)} value="UPLOAD"></input> 
                </div>           
        </div>
    )
}

export default AdminProducts
