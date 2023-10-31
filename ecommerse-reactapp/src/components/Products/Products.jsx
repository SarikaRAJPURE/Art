import React, { useEffect, useState } from 'react'
//import { popularProducts } from '../data'
import "../Products/products.css"
import axios from 'axios'
import Product from '../Product/Product';

const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:3000/api/products?category=${cat}`
            : "http://localhost:3000/api/products"
        );
        // console.log(res.data);
        setProducts(res.data);
      } catch (error) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    // console.log(`value:${products.filter(item => Object.entries(filters).every(([key, value]) => item[key].includes(value)))}`);
    //key is size or color and value will be S,M,L,red,yellow,pink [size, M]
    //for (const [key, value] of Object.entries(filters)) {
    //console.log(`${key}:${value}`);
    //console.log(Object.entries(filters));
    // }
    cat && setfilteredProducts(
      products.filter(item =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value))
      )
    )
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } else if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className='products'>
      {
        cat ?
          filteredProducts.map((item) => (<Product item={item} key={item._id} />))
          : products.slice(0, 15).map((item) => (<Product item={item} key={item._id} />))
      }
    </div>
  )
}

export default Products