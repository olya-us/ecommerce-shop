import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`}>    
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                ${props.price}
            </div>
        </div>
    </Link>
  )
}

export default Item