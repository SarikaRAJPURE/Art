import React from 'react';
import "../Navbar/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
//import { Shop } from "../../Pages/Shop/Shop"
import { useSelector } from "react-redux";

const Navbar = ({ user }) => {
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);

  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <div className='Nav-Left'>
          <span className='language'>EN</span>
          <div className='search-container'>
            <input type="text" className='NavInput' name="SearchInput" />
            <div className='search' >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className='Nav-Center'>
          <h1 className='Logo'><Link style={{ color: 'inherit', textDecoration: 'none' }} to='/'>ArtGirlZ</Link></h1>
        </div>
        <div className='Nav-Right'>
          <div className='link-container'>
            <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none' }}><div className="menu-item">Shop</div></Link>
            <Link to="/register" style={{ textDecoration: 'none' }}><div className="menu-item">Register</div></Link>
            <Link to="/login" style={{ textDecoration: 'none' }}><div className="menu-item">Login</div></Link>
            <span className='userName'>{user}</span>
            <Link to="/cart" style={{ textDecoration: 'none' }}><div className="menu-item">
              <FontAwesomeIcon className='Carticon' icon={faCartPlus} />
              <span className="badge">{quantity}</span>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar