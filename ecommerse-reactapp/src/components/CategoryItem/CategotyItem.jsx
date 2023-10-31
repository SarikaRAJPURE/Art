import React from 'react'
import "../CategoryItem/CategoryItem.css"
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return (
    <div className='CategoryItemContainer'>
      <Link to={`/products/${item.cat}`}>
      <img src={item.img} alt="Categoryimage" className="Image" />
      <div className="Info">
        <h1 className="Title">
          {item.title}
        </h1>
        <button className='Button'>SHOP NOW</button>
      </div>
      </Link>
    </div>
  )
}

export default CategoryItem