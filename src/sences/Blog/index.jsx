import './Blog.css'
import {blog1, blog2, blog3} from "../../assets";

export const Blog = () => {
  return (<section id='blog' className='background-pink'>
    <div className='wrapper'>
      <h2 className="light">Latest Posts</h2>
      <div className='blog-container'>
        {/*--post 1---*/}
        <div className='post'>
          <div className='tag'>DAW</div>
          <a href="#">
            <img src={blog1} alt="blog1"/>
          </a>
          <a href="#">
            <h3>How To Use Drum Machine in Logic Pro X</h3>
          </a>
        </div>
        {/*--post 2---*/}
        <div className='post'>
          <div className='tag'>Mixing</div>
          <a href="#">
            <img src={blog2} alt="blog1"/>
          </a>
          <a href="#">
            <h3>How To Mix Guitars Effectively</h3>
          </a>
        </div>
        {/*--post 3---*/}
        <div className='post'>
          <div className='tag'>Vox</div>
          <a href="#">
            <img src={blog3} alt="blog1"/>
          </a>
          <a href="#">
            <h3>The Real Power of Harmonies in Music Production</h3>
          </a>
        </div>
      </div>
      <div className='btn-container'>
        <button className='all-posts'>All Posts</button>
      </div>
    </div>
  </section>)
}