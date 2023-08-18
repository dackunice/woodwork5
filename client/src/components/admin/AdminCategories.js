import { useEffect, useState } from 'react'
import axios from 'axios'
import 'aos/dist/aos.css'
import './AdminCategories.css'

function AdminCategories() {

    const [ category, setCategory ] = useState('')
    const [ categories, setCategories ] = useState([])
    const [ title, setTitle ] = useState('')

    useEffect(async () => {
        try {
            const result = await axios.get('/category')
            setCategories(result.data.categories)  
        } catch(err) {
            alert(err.response.data.msg)
        }
    }, [])

    const handleCreate = async () => {
        try {
            const answer = window.confirm("Do you want to create this category?")
            if(answer) {
                const result = await axios.post('/category', { category: title })
                setCategories(result.data.categories)    
                window.alert("This category is created")
            }  
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    const handleDelete = async () => {
        try {
            const answer = window.confirm("Do you want to delete this category?")
            if(answer) {
                const result = await axios.delete(`/category/${category}`)
                setCategories(result.data.categories)  
                window.alert("This category is deleted")  
            }
        } catch(err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="admin-categories"> 
            <div className="admin-categories-create">
                <h3 className="admin-categories-title">CREATE A CATEGORY</h3>
                <div className="admin-categories-container">
                <input className="admin-categories-create-input" type="text" placeholder="ENTER A NEW CATEGORY" onChange={(e) => setTitle(e.target.value)}></input>
                <button className="admin-categories-create-create" type="button" onClick={ handleCreate }>CREATE</button>
                </div>
            </div>
            <div className="admin-categories-delete">
                <h3 className="admin-categories-title">DELETE A CATEGORY</h3>
                <div className="admin-categories-container">
                <select className="admin-categories-delete-input" name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value={ "none" }>{ "CHOOSE A CATEGORY" }</option>
                    {
                        categories.map((item, index) => <option key={ index } value={ item.title }>{ item.title ? item.title.toUpperCase() : null }</option>)
                    }
                    </select>
                <button className="admin-categories-delete-delete" type="button" onClick={ handleDelete  }>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default AdminCategories
