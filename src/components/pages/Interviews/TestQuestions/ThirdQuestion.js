import React from 'react'
import Buttons from './Buttons';

const ThirdQuestion = ({onNext, onBack}) => {
  return (
    <div className='QuestionContainer'>
        <div className='QuestionContent'>
          <h4 className='Question'>Quels sont vos objectifs?</h4>
          <form action='' method='POST'>
            <input type='text' name='UserAnswer'/>
            <Buttons onNext={onNext} onBack={onBack}/>
          </form>
        </div>
    </div>
  )
}

export default ThirdQuestion;