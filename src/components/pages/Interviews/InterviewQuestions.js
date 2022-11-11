import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import  InterviewImg  from "../../../assets/images/interviews/interview.png";
import {Link} from "react-router-dom";
import FirstQuestion from './TestQuestions/FirstQuestion';
import SecondQuestion from './TestQuestions/SecondQuestion';
import ThirdQuestion from './TestQuestions/ThirdQuestion';
import FouthQuestion from './TestQuestions/FouthQuestion';
import { useState,useRef } from 'react';
import axios from "axios";
import Buttons from './Buttons';
import  Step  from './Step';


/*
const steps = {
    //On definir les Etapes du Formulaire de l'interview;
    1: FirstQuestion,
    2: SecondQuestion,
    3: ThirdQuestion,
    4: FouthQuestion
};
*/
export default function InterviewQuestions(props) {
    console.log("InterviewQuestions");

 /*   //Définition des Variables et fonctions liés au Etapes du formulaire
    const [step, setStep] = useState(1);

    const Step = steps[step];

    const onNext = () =>{
        setStep(step + 1);
    }
    const onBack = () =>{
        setStep(step - 1);
    }
*/
    //Ici on récupère le Token de L'utilisateur et et on fait un texte pour voir si cela s'affiche
    const storedToken = localStorage.getItem('token') ;
    //console.log(storedToken);


    

        




   
    


    const Questions = JSON.parse(localStorage.getItem("interviewQuestions"));

    let QuestionsLength = Questions.length;

    console.log("Questions");
    console.log(Questions);

    console.log("QuestionsLength");
    console.log(QuestionsLength);

    const [step, setStep] = useState(0);

    
    const onNext = () =>{
        setStep(step + 1);
    }
    const onBack = () =>{
        setStep(step - 1);
    }

    let InterviewQuestion = Questions[step];
    
    console.log("InterviewQuestion");
    console.log(InterviewQuestion);
    
    
    return (
        <div className='InterviewQuestions'>
            <div className='InterviewQuestionsIMG'>
                <img src={InterviewImg} alt=''/>
            </div> 
            <div className='AnswerContainer'>
                <div className='MultiStepForm'>
                    <div className='box'>
                            
                            <div className='BoxContent'>
                                <div className='QuestionContainer'>
                                        <div className='QuestionContent'>
                                            <h4 className='Question'>{InterviewQuestion.Question}</h4>
                                            <form action='' method='POST'>
                                                <input type='text' name='UserAnswer'/>
                                            </form>
                                            { /*InterviewQuestion.Question == 1 ? <Buttons onNext={onNext}/> : ''*/}
                                            {
                                                Questions.map((question)=>{
                                                    if (question.idQuestion < QuestionsLength) {
                                                        return <Buttons onNext={onNext} onBack={onBack}/>;
                                                    }
                                                })
                                            }
                                            { /*InterviewQuestion.Question == QuestionsLength ? <Buttons onBack={onBack} QuestionsNumber={QuestionsLength}/> : ''*/}
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/**<Step onBack={onBack} onNext={onNext} step={step}/> */}