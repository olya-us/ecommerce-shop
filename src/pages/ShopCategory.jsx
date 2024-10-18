import { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/Item/Item'
import dropdown_icon from '../assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)

  return (
    <div className="container">
      <div className="shop-category">
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt='dropdown icon'/>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => (
            props.category === item.category ? <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/> : ''
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory