import React from 'react'
import "./success.css"
import { useLocation } from 'react-router-dom'
const Success = () => {
    const location = useLocation();
   
    console.log(location);

    return (
        <div className='successContainer'>
            <button className='SuccessBtn'>Successfull.</button>
            <p className='successpara'>Your order is being prepared.Thanks for shopping with us.
            </p>
        </div>
    )
}

export default Success
