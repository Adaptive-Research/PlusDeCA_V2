import React from 'react'
import Buttons from './Buttons';

const FirstQuestion = ({onNext}) => {
  return (
    <div className='QuestionContainer'>
        <div className='QuestionContent'>
          <h4 className='Question'>Quel est le nom de votre entreprise ?</h4>
          <form action='' method='POST'>
            <input type='text' name='UserAnswer'/>
            <Buttons onNext={onNext}/>
          </form>
        </div>
    </div>
  )
}

export default FirstQuestion;