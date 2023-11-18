import { Link } from "react-router-dom"
import "./product.css"
import React from 'react'
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material"
const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">
                    Product
                </h1>
                <Link to="/newproduct">
                    <button className="productAddButton">
                        Create
                    </button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} datakey="Sales" title="Sales Peroformance" /></div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img className="productInfoImg"
                            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                        <span className="productName">
                            Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Id:
                            </span>
                            <span className="productInfoValue">
                                123
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Sales:
                            </span>
                            <span className="productInfoValue">
                                5123
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Active:
                            </span>
                            <span className="productInfoValue">
                                Yes
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                InStock:
                            </span>
                            <span className="productInfoValue">
                                No
                            </span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">
                                Id:
                            </span>
                            <span className="productInfoValue">
                                123
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg" alt="" 
                            className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
