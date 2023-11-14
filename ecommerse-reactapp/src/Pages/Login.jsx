import React, { useState } from 'react'
import "../Pages/login.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/apiCalls';
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    //use preventDefault(e) at handleClick to prevent the page from refreshing.
    e.preventDefault();
    login(dispatch, { username, password });
    //localStorage.setItem("isLoggedIn", true)
  }
  return (
    <div className='Login'>
      <div className="LogWrapper">
        {/* <div className='center'>
          <h1 className='logo'>ArtGirlZ</h1>
        </div> */}
        <h1 className="RegTitle">
          SIGN IN
        </h1>
        <form action="" className='LogForm'>
          <input type="text" className='LogInput' placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
          <input type="password" className='LogInput' placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
          <button className='loginBtn' disabled={isFetching} onClick={handleClick}>
            LOGIN</button>
          <br></br>
          {error && <span className='Error'>Something Went wrong ...</span>}
          <p className='havanacc'>Already have an account? <span>Sign in</span></p>
          <div className="Link">
            {/* <a href="" >FORGOT PASSWORD?</a>
          <a href="" >CREATE A NEW ACCOUNT</a>  */}
          </div>
        </form>

      </div>

    </div>
  )
}

export default Login