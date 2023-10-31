import React, { useEffect, useState } from 'react'
import "../Pages/product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from "../requestMethods";
import { addProduct } from '../Redux/cartRedux'
import { useDispatch } from 'react-redux'
const Product = () => {
    //to get id 
    const location = useLocation();
    //console.log(location.pathname.split("/")[2]);
    const id = location.pathname.split("/")[2];
    console.log(id);

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(
                    `products/find/${id}`
                );
                // console.log(res.data);
                setProduct(res.data);
            } catch (error) { }
        };
        getProduct();
    }, [id]);

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }
    const handleMinus = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    return (
        <>
            <div className='Productpage'>
                <div className="ProductWrapper">
                    <div className="ProductImgContainer">
                        <img className="ProductImg" src={product.img} alt={product.name} />
                    </div>
                    <div className="ProductInfoContainer">
                        <h1 className="ProdTitle">
                            {product.name}
                        </h1>
                        <p className="ProdDescription">
                            {product.description}
                        </p>
                        <span className="Price">{product.price}</span>
                        <div className="FilterContainer">
                            <div className="Filter">
                                <span className="ColorFilterText">Color:</span>
                                {
                                    //I had the same error and solved it by first asking if the array existed.

                                    product.color?.map((c) => (<div key={c} className="FilterColor" style={{ backgroundColor: c }} onClick={() => setColor(c)} />))
                                }
                                {/* <option className='Option' value="Yellow">Yellow</option>
                        <option className='Option' value="Red">Red</option> */}
                            </div>
                            <div className="Filter">
                                <span className="SizeFilterText">Size:</span>
                                <select className='FilterSize' name="SizeSort" id="SizeSort" onChange={(e) => !e ? setSize(product.size[0].value) : setSize(e.target.value)} >
                                    {product.size?.map(s => (
                                        <option key={s} className='Option' value={s.value}>{s}</option>))
                                    }
                                    {/*  <option className='Option' value="Small">Small</option>
                                    <option className='Option' value="Medium">Medium</option>
                                    <option className='Option' value="Large">Large</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="AddContainer">

                            <div className="AmountContainer">
                                <FontAwesomeIcon icon={faPlus} onClick={handlePlus} />
                                <div className="Amount">{quantity}</div>
                                <FontAwesomeIcon icon={faMinus} onClick={handleMinus} />
                            </div>

                            <button className='CartButton' onClick={handleAddToCart}>ADD TO CART</button>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Product