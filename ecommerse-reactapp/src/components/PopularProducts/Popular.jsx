import React from 'react'
import "./popular.css"
import { popularProducts } from '../data'
import Product from '../Product/Product'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>TOP SELLING PRODUCTS</h1>
      <div className='popular-products'>
      {
        popularProducts.slice(0,9).map((item) => (<Product item={item} key={item._id} name={item.name} price={item.price}/>))
      }
    </div>
    </div>
  )
}

export default Popular
