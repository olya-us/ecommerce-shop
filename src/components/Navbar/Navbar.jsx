import './Navbar.css'
import logo from '../../assets/logo.svg'
import cart_icon from '../../assets/cart_icon.svg'
import { useState } from 'react'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('shop')

    return (
        <div className="navbar-wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="nav-logo">
                        <img src={logo} alt="logo icon" />
                    </div>
                    <ul className="nav-menu">
                        <li className={activeMenu === 'shop' ? 'active' : ''} onClick={() => {setActiveMenu('shop')}}>Shop</li>
                        <li className={activeMenu === 'men' ? 'active' : ''} onClick={() => {setActiveMenu('men')}}>Men</li>
                        <li className={activeMenu === 'women' ? 'active' : ''} onClick={() => {setActiveMenu('women')}}>Women</li>
                        <li className={activeMenu === 'kids' ? 'active' : ''} onClick={() => {setActiveMenu('kids')}}>Kids</li>
                    </ul>
                    <div className="nav-login-cart">
                        <img src={cart_icon} alt="" />
                        <div className="nav-cart-count">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar