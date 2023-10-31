import React from 'react'
import "../Footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,/*  faLocationDot, */ faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='Footer'>
            {/* <a className="white"
                href="https://www.flaticon.com/free-icons/mandala" title="mandala icons">Mandala icons created by Freepik - Flaticon</a> */}

            <div className="LeftFooter">
                <h1 className="Logo">ArtGirlZ</h1>
                <p className="Description">
                    Bringing the vibrant hues of India's traditions to your doorstep. Explore our exquisite range of ready made Rangoli.
                </p>
                <div className="SocialContainer">
                    <div className="SocialIcon">
                    </div>
                    <div className="SocialIcon">
                    </div>
                </div>
            </div>
            <div className="CenterFooter">
                <h3 className='footerTitle'>Useful Links</h3>
                <ul className='footerList'>
                    <li className='ListItem'>Home</li>
                    <li className='ListItem'>Cart</li>
                    <li className='ListItem'>Accessories</li>
                    <li className='ListItem'>My Account</li>
                    <li className='ListItem'>Order Tracking</li>
                    <li className='ListItem'>Wish List</li>
                    <li className='ListItem'>Terms</li>
                </ul>
            </div>
            <div className="RightFooter">
                <h3 className="footerTitle">NEED TO GET IN TOUCH?</h3>
                <div className="ContactItem">
                    Monday - Friday 10am - 5pm IST
                    {/*  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 10 }} />
                    Flat No. 301 Building no.GB 3/4 , Ajmera Colony, Pimpri Pune 411018.*/}
                </div>

                <div className="ContactItem">
                    <FontAwesomeIcon icon={faPhone} style={{ marginRight: 10 }} />
                    +91 952761875
                </div>
                <div className="ContactItem">
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />
                    customercare@artgirlz.com                </div>
                <div className="Payment">
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="paymentImage" />
                </div>
            </div>

        </div>)
}

export default Footer