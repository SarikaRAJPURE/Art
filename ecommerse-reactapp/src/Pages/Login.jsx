import React from 'react'
import "../Pages/login.css"
const Login = () => {
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
          <input type="text" className='LogInput' placeholder='username' />
          <input type="text" className='LogInput' placeholder='password' />
          <button className='RegButon'>
            LOGIN</button>
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