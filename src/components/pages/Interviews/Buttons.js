import React from 'react'

const Buttons = ({onNext, onBack, QuestionsNumber}) => {
  return (
    <div className='Question_Btns_Container'>
        {onBack && <button onClick={onBack} className="BackBtn">BACK</button>}
        {onNext && <button onClick={onNext} className="NextBtn">{ QuestionsNumber ? "FINAL" : "NEXT"}</button>}
    </div>
  )
}

export default Buttons;