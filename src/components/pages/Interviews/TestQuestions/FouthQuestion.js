import React from 'react'
import Buttons from './Buttons';

const FouthQuestion = ({onNext, onBack, step}) => {
    // Définition de la Variable Pour l'Etape finale du Formulaire
    const onNextLocal = () =>{
        if (step === 4) {
          alert("Etape finale de Soumission");
          return;
        }
          onNext();
    }
  return (
    <div className='QuestionContainer'>
        <div className='QuestionContent'>
          <h4 className='Question'>Quel est votre vision de l'avenir?</h4>
          <form action='' method='POST'>
            <input type='text' name='UserAnswer'/>
            <Buttons onNext={onNextLocal} onBack={onBack} step={step}/>
          </form>
        </div>
    </div>
  )
}

export default FouthQuestion;