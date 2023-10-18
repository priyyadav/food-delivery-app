import React from 'react'
import Router from '../../routes/Router'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Cart from '../UI/cart/Carts'

import { useSelector } from "react-redux";
const Layout = () => {
    const showCart = useSelector((state) => state?.cartUi?.cartIsVisible);
    console.log(showCart)

    return (
        <div>
            <Header />
            {showCart && <Cart />}
            <div>
                <Router />

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Layout