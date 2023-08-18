import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Admin from './admin/Admin'
import Login from './auth/Login'
import Register from './auth/Register'
import Products from './products/Products'
import ProductDetail from './common/ProductDetail'
import Cart from './cart/Cart'
import User from './user/User'
import NotFound from './common/NotFound'
import './Main.css'

function Main() {

    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={ <Home /> }/>
                <Route exact path="/login" element={ <Login /> }/>
                <Route exact path="/register" element={ <Register /> }/>
                <Route exact path="/products" element={ <Products /> }/>
                <Route exact path="/product-detail/:productid" element={ <ProductDetail /> }/>
                <Route exact path="/admin" element={ <Admin /> }/>
                <Route exact path="/cart" element={ <Cart /> }/>
                <Route exact path="/user" element={ <User /> }/>   
                <Route exact path="*" element={ <NotFound /> }/>
            </Routes>
        </div>
    )
}

export default Main