import React from 'react'

const Buttons = ({onNext, onBack, QuestionsNumber, BackButton, NextButton}) => {
  return (
    <div className='Question_Btns_Container'>
        {onBack && <button onClick={onBack} className="BackBtn">{BackButton}</button>}
        {onNext && <button onClick={onNext} className="NextBtn">{ QuestionsNumber ? "FINAL" : NextButton}</button>}
    </div>
  )
}

export default Buttons;