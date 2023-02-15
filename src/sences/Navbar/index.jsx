import './Navbar.css'

export const Navbar = () => {
  return (<nav className='nav__bar'>
    <a href="" className="logo">
      Sound<span className="red">DZign</span>
    </a>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">Course Details</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Testimonials</a></li>
    </ul>
  </nav>)
}