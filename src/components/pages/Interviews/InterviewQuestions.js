import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import  InterviewImg  from "../../../assets/images/interviews/interview.png";
import {Link} from "react-router-dom";
import FirstQuestion from './TestQuestions/FirstQuestion';
import SecondQuestion from './TestQuestions/SecondQuestion';
import ThirdQuestion from './TestQuestions/ThirdQuestion';
import FouthQuestion from './TestQuestions/FouthQuestion';
import { useState } from 'react';


const steps = {
    //On definir les Etapes du Formulaire de l'interview;
    1: FirstQuestion,
    2: SecondQuestion,
    3: ThirdQuestion,
    4: FouthQuestion
};


const InterviewQuestions = () => {
    //Définition des Variables et fonctions liés au Etapes du formulaire
    const [step, setStep] = useState(1);

    const Step = steps[step];

    const onNext = () =>{
        setStep(step + 1);
    }
    const onBack = () =>{
        setStep(step - 1);
    }

//<Header step={step}/>
  return (
    <div className='InterviewQuestions'>
        <div className='InterviewQuestionsIMG'>
            <img src={InterviewImg} alt=''/>
        </div> 
        <div className='AnswerContainer'>
            <div className='MultiStepForm'>
                <div className='box'>
                        
                        <div className='BoxContent'>
                            <Step onBack={onBack} onNext={onNext} step={step}/>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InterviewQuestions;