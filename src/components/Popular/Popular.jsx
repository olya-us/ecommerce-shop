import Item from '../Item/Item'
import data_product from '../../constants/data'
import './Popular.css'

const Popular = () => {
  return (
    <div className="popular">
        <h2>Popular in women</h2>
        <div className="popular-item">
            {data_product.map((item, i) => (
              <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            ))}
        </div>
    </div>
  )
}

export default Popular