import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import  InterviewImg  from "../../../assets/images/interviews/interview.png";
import {Link} from "react-router-dom";
import FirstQuestion from './TestQuestions/FirstQuestion';
import SecondQuestion from './TestQuestions/SecondQuestion';
import ThirdQuestion from './TestQuestions/ThirdQuestion';
import FouthQuestion from './TestQuestions/FouthQuestion';
import {getInterviewQuestions} from "../../../data/customlibs/utils";
import { useState,useRef } from 'react';
import axios from "axios";



const steps = {
    //On definir les Etapes du Formulaire de l'interview;
    1: FirstQuestion,
    2: SecondQuestion,
    3: ThirdQuestion,
    4: FouthQuestion
};


export const InterviewQuestions = () => {
    //Définition des Variables et fonctions liés au Etapes du formulaire
    const [step, setStep] = useState(1);

    const Step = steps[step];

    const onNext = () =>{
        setStep(step + 1);
    }
    const onBack = () =>{
        setStep(step - 1);
    }

    console.log("Les Questions Interview");
    //Ici on récupère le Token de L'utilisateur et et on fait un texte pour voir si cela s'affiche
    const storedToken = localStorage.getItem('token') ;
    console.log(storedToken);

    // pour le ForceRender
    const downloaded_InterviewQuestions = useRef(false) ;

    function RenderAfterLoad(variable) {
        if (variable === "interviewQuestions")
            downloaded_InterviewQuestions.current = true ;
            console.log(downloaded_InterviewQuestions.current);
    }
        

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        getInterviewQuestions(storedToken,RenderAfterLoad) ;

        setReloadInfos(false) ;
    }

    

//Method to get all Interviews created by this user
    
    const getInterviewQuestions = async (tok,ForceRender) => {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_QUESTIONS_FOR_INTERVIEW_URL;
    const response = await axios.post(url, {
        token: tok,
        //debug: 1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    let variable = "interviewQuestions" ;
    let data = response.data ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let Questions = [];

        data.forEach((element) => {
            Questions.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(Questions));
    }
    ForceRender(variable) ;
}

    const questions = JSON.parse(localStorage.getItem("interviewQuestions"));
    console.log("Questions");
    console.log(questions);

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