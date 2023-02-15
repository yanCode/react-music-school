import './Feedback.css'
import {feedback1, feedback2, feedback3} from "../../assets";

export const Feedback = () => {
  return (<section id='feedback' className='background-dark-grey'>
    <div className="wrapper">
      <h2>What will you learn?</h2>
      <div className="content-container">
        <div className="feedback">
          <img src={feedback1} alt="feedback1"/>
          <p className="name">Peter Adams</p>
          <p className="review">This is a great course. I got to learn a lot.</p>
        </div>
        <div className="feedback">
          <img src={feedback2} alt="feedback1"/>
          <p className="name">Robert Fox</p>
          <p className="review">I got to learn a lot about
            Music Production with this course. Thanks :)</p>
        </div>
        <div className="feedback">
          <img src={feedback3} alt="feedback1"/>
          <p className="name">Emily Smith</p>
          <p className="review">Awesome! Great job!!</p>
        </div>
      </div>
    </div>
  </section>)
}