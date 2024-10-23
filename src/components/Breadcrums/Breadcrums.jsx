import './Breadcrums.css'
import arrow_icon from '../../assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const { product } = props;

    return (
        <div className="breadcrum">
            Home <img src={arrow_icon}/> Shop <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name}
        </div>
    )
}

export default Breadcrums