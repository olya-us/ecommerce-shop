import './Navbar.css'
import logo from '../../assets/logo.svg'
import cart_icon from '../../assets/cart_icon.svg'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('shop')
    const { getTotalCartItems } = useContext(ShopContext)

    return (
        <div className="navbar-wrapper">
            <div className="container">
                <div className="navbar">
                    <div className="nav-logo">
                        <Link to='/'><img src={logo} alt="logo icon" /></Link>
                    </div>
                    <ul className="nav-menu">
                        <li className={activeMenu === 'shop' ? 'active' : ''} onClick={() => {setActiveMenu('shop')}}><Link to="/">Shop</Link></li>
                        <li className={activeMenu === 'men' ? 'active' : ''} onClick={() => {setActiveMenu('men')}}><Link to='/men'>Men</Link></li>
                        <li className={activeMenu === 'women' ? 'active' : ''} onClick={() => {setActiveMenu('women')}}><Link to='/women'>Women</Link></li>
                        <li className={activeMenu === 'kids' ? 'active' : ''} onClick={() => {setActiveMenu('kids')}}><Link to='/kids'>Kids</Link></li>
                    </ul>
                    <div className="nav-login-cart">
                        <Link to='/cart'>  
                            <img src={cart_icon} alt="cart icon" />
                            <div className="nav-cart-count">{getTotalCartItems()}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar