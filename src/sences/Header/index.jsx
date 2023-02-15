import './Header.css'
import {Navbar} from "../Navbar/index.jsx";

export const Header = () => {
  return (
    <header>
      <div className='wrapper'>
        <Navbar/>
        <div className="cta" >
          <p className="course-name">Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <button className="demo-button">Demo Lesson</button>
        </div>
      </div>
    </header>
  )
}