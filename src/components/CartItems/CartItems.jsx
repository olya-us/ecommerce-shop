import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

    return (
        <div className="container">
            <div className="cartitems">
                <h1>Bag</h1>
                <div className="cartitems-format-main">
                    <p>Product</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return <div className="cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon'/>
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.price * cartItems[e.id]}</p>
                            <button className='cartitems-remove' onClick={() => {removeFromCart(e.id)}}><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M13.75 10v7m-3.5-7v7m-3.5-8.5V17c0 1.24 1.01 2.25 2.25 2.25h6c1.24 0 2.25-1.01 2.25-2.25V7.75h2.25m-10-3h3.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4.5"></path></svg></button>
                        </div>
                    }
                    return null
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h2>Cart total</h2>
                        <div className="cartitems-total-items">
                            <div className="cartitems-total-item">
                                <p>Subtatal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <div className="cartitems-total-item">
                                <p>Shipping free</p>
                                <p>Free</p>
                            </div>
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems