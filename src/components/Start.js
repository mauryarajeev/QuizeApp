import React from 'react';
import quizImage from '../Images/Quize.jpg'; // assuming the image file is stored in the same directory as this component
// import { FaIcon } from './FaIcon'; // assuming a custom icon component is imported here

const Start = ({ startQuiz, showStart }) => {
  return (
    <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-4" >
            <img src={quizImage} alt="quiz" className="mb-8"   style={{ maxWidth: '100%', height: 'auto' }} /> 
            <h1 className='fw-bold mb-4'>Welcome to the Basic React JS Quiz</h1> {/* new heading tag */}
            <p className="lead">Test your knowledge of React with this fun and interactive quiz!</p> {/* new paragraph text */}
            <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">Start Quiz</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
