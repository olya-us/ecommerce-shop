import { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)

    return (
        <div className="productdisplay">
            <div className="productdispaly-left">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="productdispaly-right">
                <h1>{product.name}</h1>
                <div className="productdispaly-price">
                    Price: {product.price}
                </div>
                <div className="productdisplay-category">
                    Category: {product.category}
                </div>
                <button onClick={() => {addToCart(product.id)}}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDisplay