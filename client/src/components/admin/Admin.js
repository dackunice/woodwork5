import { useState } from 'react'
import AdminCategories from './AdminCategories'
import AdminProducts from './AdminProducts'
import 'aos/dist/aos.css'
import './Admin.css'

function Admin() {

    const [ mode, setMode ] = useState('categories')

    return (
        <div className="admin">
            <h2 className="admin-title">ADMIN</h2>
            <div className="admin-mode-container">
                <div className={ mode === 'categories' ? "admin-mode-category-focus" : "admin-mode-category" }  onClick={() => setMode('categories')}>CATEGORIES</div>
                <div className={ mode === 'products' ? "admin-mode-category-focus" : "admin-mode-category" } onClick={() => setMode('products')}>PRODUCTS</div>
            </div>
            {
                mode === 'categories' ? <AdminCategories /> :
                mode === 'products' ? <AdminProducts /> :
                null
            }
        </div>
    )
}

export default Admin
