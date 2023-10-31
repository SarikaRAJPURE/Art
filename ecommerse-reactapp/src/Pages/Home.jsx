import React from 'react'
import Newsletter from '../components/Newsletter/Newsletter'
//import ImageSlider from '../components/ImageSlider/ImageSlider'
import Slider from '../components/Slider/Slider'
import { sliderItems } from "../components/data"
import Categories from '../components/Categories/Categories'
//import Popular from "../components/PopularProducts/Popular"
import Products from '../components/Products/Products'
//import { sliderData } from "../components/data1"
const Home = () => {
  return (

    <div>

      <Slider slides={sliderItems} />
      {/*<ImageSlider slides={sliderData}/>*/}
      <Categories />
      <Products />
      {/* <Popular cat={cat} />*/}
      <Newsletter />
    </div>
  )
}

export default Home
