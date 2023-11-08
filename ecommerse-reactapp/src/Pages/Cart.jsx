import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./cart.css";
import { useSelector } from "react-redux";
import { removeProduct, getTotal, increaseItemQuantity, decreaseItemQuantity } from '../Redux/cartRedux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
//import axios from "axios";
import { userRequest } from "../requestMethods.js"
//import Pay from "../Pages/Pay"
const { STRIPE_PUBLISHABLE_KEY } = process.env;
const publishable_key = 'pk_test_51O3p7iGAqra8ohDBySZPkhpBBLotcMG6khlNEM8n5gByocUKxxjFyXzQemmWtIn6PgzcnwsEXHNDcG9dgYhGmeA100juPQwVzw';
console.log(publishable_key);
//process.env.STRIPE_PUBLISHABLE_KEY;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const makeRequest = async () => {
      try {
        debugger;
        const res = await userRequest.post(
          `/checkout/payment`,
          {
            tokenId: stripeToken.id,
            amount: cart.total * 100,

          }
        );
        navigate('/success', { data: res.data });
        console.log(JSON.stringify(res.data));
        //console.log("success");
        // navigate('/success', { data: res.data });

      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
    //console.log(stripeToken);
  }, [stripeToken, cart.total, navigate]);

  useEffect(() => {
    dispatch(getTotal());
  }, /* [cart] */);

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  }
  //console.log(stripeToken);

  return (
    <div>
      <div className="Cart">
        <div className="CartWrapper">
          <h1 className="CartTitle">Shopping Cart</h1>
          <div className="Top">
            <Link to='/shop'><button className="TopButton" style={{ backgroundColor: "white", color: "black" }}>
              CONTINUE SHOPPING</button></Link>
            <div className="TopTexts">
              <span className="TopText">
                Shopping Bag({cart.products.length})</span>
              <span className="TopText">
                Your Wishlist(5)</span>
            </div>
            <button className="TopButton" style={{ backgroundColor: "black", color: "white" }}>CHECKOUT NOW</button>
          </div>
          <div className="Bottom">
            <div className="CartInfo">
              {
                cart.products.map(product => (
                  <div className="CartProduct" key={product._id}>
                    <div className="ProductDetail">
                      <img src={product.img} alt={product.name} />
                      <div className="Details">
                        <span className="ProductName">
                          <b>Product:</b> {product.name}
                        </span>
                        <span className="ProductId">
                          <b>ID:</b>{product._id}
                        </span>
                        <div className="Color">
                          <span> <b>Color:</b></span>
                          <div className="ProductColor" style={{ backgroundColor: product.color }}>
                          </div>
                        </div>
                        <span className="ProductSize">
                          <b>Size:</b>{product.size}
                        </span>
                      </div>
                    </div>
                    <div className="PriceDetail">
                      <div className="ProductAmountContainer">
                        <FontAwesomeIcon icon={faMinus} onClick={() => dispatch(decreaseItemQuantity(product._id))} />
                        {product.quantity}
                        <FontAwesomeIcon icon={faPlus} onClick={() => dispatch(increaseItemQuantity(product._id))} />
                      </div>
                      <div className="ProductPrice" >
                        ₹{product.price * product.quantity}
                      </div>
                    </div>
                    <div className="DeleteProduct">
                      <FontAwesomeIcon icon={faTrashCan} onClick={() => { dispatch(removeProduct(product._id)) }} />
                    </div>
                    <hr />
                  </div>))
              }
            </div>

            <div className="CartSummary">
              <h1 className="SummaryTitle">
                ORDER SUMMARY
              </h1>
              <div className="SummaryItem">
                <span className="SummaryItemText">
                  Subtotal ({cart.quantity} items)
                </span>
                <span className="SummaryItemPrice">
                  ₹ {cart.total}
                </span>
              </div>
              <div className="SummaryItem">
                <span className="SummaryItemText">
                  Estimated Shipping
                </span>
                <span className="SummaryItemPrice">
                  ₹9.98
                </span>
              </div>
              <div className="SummaryItem">
                <span className="SummaryItemText">
                  Shipping Discount
                </span>
                <span className="SummaryItemPrice">
                  ₹ -5.98
                </span>
              </div>
              <div className="SummaryItem" style={{ fontWeight: 500, fontSize: "24px" }}>
                <span className="SummaryItemText">
                  Total ({cart.quantity} items)
                </span>
                <span className="SummaryItemPrice">
                  ₹ {parseInt((cart.total + 9.98 - 5.98).toFixed(2))}
                </span>
              </div>
              {/*<Pay cartItems={cart.products} /> */}
              <StripeCheckout
                name="ArtGirlZ Shop"
                /*  image="/images/logo.png" */
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total} `}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={publishable_key}
              >
                <button className="SummaryButton">Proceed to checkout</button>
              </StripeCheckout>

            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Cart;
