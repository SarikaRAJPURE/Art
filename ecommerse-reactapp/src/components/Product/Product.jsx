import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./product.css"
import { Link } from 'react-router-dom'
//import { useDispatch } from 'react-redux'
//import { addProduct } from '../Redux/cartRedux'

const Product = ({ item }) => {
  //const dispatch = useDispatch();

  //const handleAddToCart = () => {
  //  dispatch(addProduct({ ...product, quantity, color, size }));
  //}

  return (
    <div className='product' key={item._id}>
      <div className="circle">
      </div>
      <img className='Image' src={item.img} alt={item.name} />
      <div className="productInfo">
        <div className="productIcon">
          <FontAwesomeIcon icon={faCartPlus} /* onClick={handleAddToCart}  */ />
        </div>
        <div className="productIcon">
          <Link to={`/product/${item._id}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
        <div className="productIcon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <p className='item-name'>{item.name}</p>
      <div className="item-price">
        ₹{item.price}
      </div>
    </div>
  )
}


export default Product