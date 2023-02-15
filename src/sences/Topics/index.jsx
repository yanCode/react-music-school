import './Topics.css'
import {topic_01, topic_02, topic_03, topic_04, topic_05, yellowCorner} from "../../assets";
import {useState} from "react";

export const Topics = () => {
  const [currentImage, setCurrentImage] = useState(topic_01);
  return (<section id="topics" className="background-black">
    {/*<div className='topic__wrapper'>*/}
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className='content__container'>
           <ul className='topic__list'>
             <li onMouseEnter={()=>setCurrentImage(topic_01)}>What are frequencies?</li>
             <li onMouseEnter={()=>setCurrentImage(topic_02)}>Using DAW</li>
             <li onMouseEnter={()=>setCurrentImage(topic_03)}>Vocals Processing</li>
             <li onMouseEnter={()=>setCurrentImage(topic_04)}>Mixing</li>
             <li onMouseEnter={()=>setCurrentImage(topic_05)}>Mixing Console</li>
             <li onMouseEnter={()=>setCurrentImage(topic_04)}>Mastering</li>
           </ul>
          <div className='topic__image'>
            <img src={currentImage} alt= 'topic_image'/>
          </div>
        </div>
        <img src={yellowCorner} alt="right corner" className='yellow-bg-corner'/>
      </div>
    {/*</div>*/}
  </section>)
}