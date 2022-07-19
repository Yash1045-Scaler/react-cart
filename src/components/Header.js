import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'


const Header = ({setPage}) => {
    return (
        <nav className='header'>
            <div className='header__nav nav'>
                <span className='nav__brand' onClick={() => 
                setPage('products')}>Shopping Cart</span>
                <div className='nav__cart cart' onClick={() => setPage('cart')}>
                    <FaShoppingCart color="white" fontSize="25px"/>
                </div>
            </div>
        </nav>
    )
}

export default Header