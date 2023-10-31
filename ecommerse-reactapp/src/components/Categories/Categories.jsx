import React from 'react'
import "../Categories/Categories.css"
import { CategoriesData } from '../data'
import CategoryItem from '../CategoryItem/CategotyItem'


const Categories = () => {
    return (
        <div className='category'>
            {
                CategoriesData.map(item=><CategoryItem item={item} key={item.id}/>)
            }
            
        </div>
    )
}

export default Categories