import React, { createContext } from "react";
import { popularProducts } from "../components/data.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { popularProducts };
    //create empty cart as an object where 
    //key will be productId 
    //and value will be product quantity
    /*  const getDefaultCart = () =>{
         let cart ={};
         for (let index = 1; index < popularProducts.length+1; index++) {
          //initialise each product quantity to be 0 in cart.
          cart[index] = 0;  
         }
         return cart;
     } */

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );

}

//export default ShopContextProvider;