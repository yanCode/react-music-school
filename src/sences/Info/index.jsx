import './Info.css'
import {file, redCorner, student} from "../../assets";

export const Info = () => {
  return (<section id="info" className="background-dark-grey">
    <div className='wrapper'>
      <div className='info_container'>
        <div className='info-content'>
          <img src={student} alt='student icon'/>
          <div className='amount'>23,000+</div>
          <div className="type">Students</div>
        </div>
        <div className='info-content'>
          <img src={file} alt='file icon'/>
          <div className='amount'>26 Hrs</div>
          <div className="type">Video Content</div>
        </div>
      </div>
      <img className="red-corner" src={redCorner} alt="red corner"/>
    </div>
  </section>)
}