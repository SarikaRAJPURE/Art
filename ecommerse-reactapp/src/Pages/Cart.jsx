import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./cart.css";
import { useSelector } from "react-redux";
import { addProduct, removeProduct } from '../Redux/cartRedux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
//import StripeCheckout from "react-stripe-checkout"

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();



  const handleRemoveFromCart = () => {
    dispatch(removeProduct());
  }

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
                Shopping Bag(2)</span>
              <span className="TopText">
                Your Wishlist(5)</span>
            </div>
            <button className="TopButton" style={{ backgroundColor: "black", color: "white" }}>CHECKOUT NOW</button>
          </div>
          <div className="Bottom">
            <div className="CartInfo">
              {
                cart.cartproducts.map(product => (
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
                        <FontAwesomeIcon icon={faMinus} onClick={() => (product.quantity -= 1)} />
                        {product.quantity}
                        <FontAwesomeIcon icon={faPlus} onClick={() => (product.quantity += 1)} />
                      </div>
                      <div className="ProductPrice" >
                        ₹{product.price * product.quantity}
                      </div>
                    </div>
                    <div className="DeleteProduct">
                      <FontAwesomeIcon icon={faTrashCan} onClick={handleRemoveFromCart} />
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
                  ₹ {cart.total + 9.98 - 5.98}
                </span>
              </div>
              <button className="SummaryButton">Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
};

export default Cart;
