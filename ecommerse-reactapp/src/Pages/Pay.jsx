//import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../Pages/pay.css"
//import StripeCheckout from "react-stripe-checkout"
//import axios from "axios";
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;
//console.log(KEY);

const Pay = ({ cartItems }) => {
    const handleCheckout = () => {
        //console.log(cartItems);

        const res = userRequest.post(
            "/checkout/create-checkout-session",
            {
                cartItems,
            }).then((res) => {
                //if(res.data.userRequest)
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            });

    };
    return (
        <div className='pay'>

            <button onClick={handleCheckout()} className="payBtn">Check Out</button>
        </div>)
    /*   const [stripeToken, setStripeToken] = useState(null);
  
      const onToken = (token) => {
          setStripeToken(token);
      }
      //console.log(stripeToken);
  
      useEffect(() => {
          const makeRequest = async () => {
              try {
                  const res = await axios.post(
                      `http://localhost:3000/api/checkout/payment`,
                      {
                          tokenId: stripeToken.id,
                          amount: 2000
                      });
                  console.log("data", res.data);
                  //navigate("/success", { data: res.data });
              } catch (error) {
                  console.log(error);
              }
          };
          stripeToken && makeRequest();
          //console.log(stripeToken);
      }, [stripeToken]);
  
      return (
          <div className='pay'>
  
              <StripeCheckout
                  name="ArtGirlZ Shop"
                  image="/images/logo.png"
                  billingAddress
                  shippingAddress
                  description="Your total is $20"
                  amount={2000}
                  token={onToken}
                  stripeKey={KEY}
              >
                  <button className='payBtn'>Pay Now</button>
              </StripeCheckout>
          </div>
      ) */
}

export default Pay
