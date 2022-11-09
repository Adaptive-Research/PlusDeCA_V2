import React from 'react'
import Buttons from './Buttons';

const SecondQuestion = ({onNext, onBack}) => {
  return (
    <div className='QuestionContainer'>
        <div className='QuestionContent'>
          <h4 className='Question'>En quelle année a-t-elle été créée ?</h4>
          <form action='' method='POST'>
            <input type='text' name='UserAnswer'/>
          </form>
        </div>
        <Buttons onNext={onNext} onBack={onBack}/>
    </div>
  )
}

export default SecondQuestion;