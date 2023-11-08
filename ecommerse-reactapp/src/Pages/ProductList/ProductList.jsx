import React, { useState } from 'react'
import "../ProductList/productlist.css"
import Products from '../../components/Products/Products'
//import Newsletter from '../../components/Newsletter/Newsletter'
//import Footer from '../../components/Footer/Footer'
//import Navbar from '../../components/Navbar/Navbar'
//import Announcement from '../../components/Announcement/Announcement'
import { useLocation } from "react-router-dom";
const ProductList = () => {

    //to get selected category name passed from home page
    // use react router doms use location hook
    const location = useLocation();
    // console.log(location.pathname.split("/")[2]);
    const cat = location.pathname.split("/")[2];
    console.log(cat);
    //for selected filters
    const [filters, SetFilters] = useState({});
    const [sort, SetSort] = useState("Newest");
    const handleFilterSelection = (event) => {
        const value = event.target.value;
        SetFilters({
            ...filters,
            [event.target.name]: value
        });
    }
    console.log(filters);
    const handleSort = (event) => {
        SetSort(event.target.value);
    }
    return (
        <div className='ProductList'>

            <h1 className="FilterTitle">
                {cat}
            </h1>
            <div className="ProductFilterContainer">
                <div className="Filter">
                    <span className="FilterText">Filter Products:</span>
                    <select className='Select' onChange={handleFilterSelection} name="size" id="sizeFilter">
                        <option className='Option' value="S">Small</option>
                        <option className='Option' value="M">Medium</option>
                        <option className='Option' value="L">Large</option>
                        {/* <option className='Option' value="Featured">Featured</option>
                        <option className='Option' value="Avg. Customer Reviews">Avg. Customer Reviews</option>
                        <option className='Option' value="Newest Arrivals">Newest Arrivals</option> */}
                    </select>
                    <select className='Select' onChange={handleFilterSelection} name="color" id="colorFilter">
                        <option className='Option' value="red">Red</option>
                        <option className='Option' value="yellow">Yellow</option>
                        <option className='Option' value="pink">Pink</option>
                        {/* <option className='Option' value="Featured">Featured</option>
                        <option className='Option' value="Avg. Customer Reviews">Avg. Customer Reviews</option>
                        <option className='Option' value="Newest Arrivals">Newest Arrivals</option> */}
                    </select>
                </div>
                <div className="Filter">
                    <span className="FilterText">Sort Products:</span>
                    <select className='Select' name="Sort" id="PriceSort" onClick={handleSort}>
                        <option className='Option' value="Newest">Newest Arrivals</option>
                        <option className='Option' value="asc">Price:Low to High</option>
                        <option className='Option' value="desc">Price:High to Low</option>
                    </select>
                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />

        </div>
    )
}

export default ProductList