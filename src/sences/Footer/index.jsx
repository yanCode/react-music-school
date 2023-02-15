import './Footer.css'
import {facebookLogo, instgramLogo, twitterLogo} from "../../assets";

export const Footer = () => {
  return (
    <section id='footer' className='background-black'>
      <section className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">DZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="facebook Logo"/>
              </a>
              <a href="#">
                <img src={twitterLogo} alt="twitter Logo"/>
              </a>
              <a href="#">
                <img src={instgramLogo} alt="instgram Logo"/>
              </a>
            </div>
            <p className='copyright'>This website is designed by GTCoding Ⓒ 2022</p>
          </div>
          <div className="links">
            <h3>
              Quick Links
            </h3>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="links">
            <h3>
              Contact Us
            </h3>
            <ul>
              <li><a href="">contact@email.com</a></li>
              <li><a href="">+1 999 9999 999</a></li>
            </ul>
          </div>

        </div>
      </section>
    </section>)
}