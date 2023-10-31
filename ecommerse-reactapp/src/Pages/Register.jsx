import React from 'react'
import "../Pages/register.css"

const Register = () => {
  return (
    <div className='Register'>

      <div className="RegWrapper">
        {/* <div className='center'>
          <h1 className='logo'>ArtGirlZ</h1>
        </div> */}
        <h1 className="RegTitle">
          CREATE AN ACCOUNT
        </h1>
        <form action="" className='Form'>
          <input type="text" className='RegInput' placeholder='first name' />
          <input type="text" className='RegInput' placeholder='last name' />
          <input type="text" className='RegInput' placeholder='username' />
          <input type="text" className='RegInput' placeholder='email' />
          <input type="text" className='RegInput' placeholder='password' />
          <input type="text" className='RegInput' placeholder='confirm password' />
          <span className='Agreement'>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
          </span>
          <button className='RegButon'>CREATE</button>

        </form>
      </div>
    </div>
  )
}

export default Register