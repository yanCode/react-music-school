import './Navbar.css'
import {useState} from "react";
import {closeIcon, menuIcon} from "../../assets";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <nav className='nav__bar'>
        <a href="" className="logo">
          Sound<span className="red">DZign</span>
        </a>
        <ul className='menu-content'>
          <li><a href="#">About</a></li>
          <li><a href="#">Course Details</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
        <div className="menuIcon" onClick={() =>
          setShowMobileMenu(true)}>
          <img src={menuIcon} alt="menu icon"/>
        </div>
      </nav>

      <div className={`mobile_menu_container ${showMobileMenu?'active':''}`}>
        <div className='closeIcon' onClick={() => setShowMobileMenu(false)}>
          <img src={closeIcon}/></div>
        <ul className='menu-items'>
          <li><a href="#">About</a></li>
          <li><a href="#">Course Details</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>

    </>

  )
}