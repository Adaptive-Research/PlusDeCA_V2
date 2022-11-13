import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import "../../../assets/css/style_Dan.css";
import  InterviewImg  from "../../../assets/images/interviews/interview.png";
import { useState,useRef } from 'react';
import Buttons from './Buttons';




export default function InterviewQuestions(props) {
    console.log("InterviewQuestions");

    // les champs ci-dessous contiennent le contenu de la reponse pour la question en cours
    // il y a 3 types de champs de reponse (un inputText, un textarea, un select) 
    const [reponseInput,setReponseInput] = useState("") ;
    const [selectInput,setSelectInput] = useState("-1") ;
    const [text, setText] = useState("") ;


    const path = useRef([]);  // sert pour sauvegarder l'enchainement des questions. utilise par le bouton Back et la fonction onBack()
    const reponses = useRef([]) ; // sert a sauvegarder les reponses faites par l'utlisateur


    const [step, setStep] = useState(0); // contient l'index de la question en cours dans le tableau de questions
  
    

    //Ici on récupère le Token de L'utilisateur et et on fait un texte pour voir si cela s'affiche
    const storedToken = localStorage.getItem('token') ;
    //console.log(storedToken);


    
    // on recupere les questions
    const Questions = JSON.parse(localStorage.getItem("interviewQuestions"));
    console.log("Questions");
    console.log(Questions);

        



    function RenderSelect(idQuestion) {
        let OptionsList = Questions.map( (question)=>{
                if (question.idQuestion === idQuestion) {
                    return <option key={question.idSelectOption} value={question.idSelectOption}> {question.SelectOption} </option> 
                }
                                                
        })
        return OptionsList ;
    }


    function RenderQuestionReponse() {
        if (step < Questions.length)
        {
            if (InterviewQuestion.idSelectOption === "0")
            {
                if (InterviewQuestion.isMultiline === "0")
                    return (
                        <>
                            <h4 className='Question'>{InterviewQuestion.Question}</h4>
                            <form action=''>
                            <input type='text' name={InterviewQuestion.idQuestion} value={reponseInput} onChange={(e) =>  setReponseInput(e.target.value)}/>
                            </form>
                        </>
                    )
                   
                else 
                    return (
                        <>
                            <h4 className='Question'>{InterviewQuestion.Question}</h4>
                            <form action=''>
                                <textarea  className="form-control not-resizable" name={InterviewQuestion.idQuestion} rows="11" value={text}  onChange={(e) =>  setText(e.target.value) }></textarea>
                            </form>
                        </>
                    )
            }
            else {
                return (
                    <>
                        <h4 className='Question'>{InterviewQuestion.Question}</h4>
                        <form action=''>
                            <select name={InterviewQuestion.idQuestion}  value={selectInput} onChange={(e) =>  setSelectInput(e.target.value)}>
                                {RenderSelect(InterviewQuestion.idQuestion)}
                            </select>
                        </form>
                    </>
                   
                    )

            }
        }
        else
         return (
             <>
                <h3>
                Cette interview est terminée. Merci d'y avoir répondu. Vous pouvez maintenant la sauvegarder.
                </h3>
             </>

         )
    }
















    

    function FindQuestionFromID(idQuestion) {
        for (let i=0 ; i < Questions.length ; i++)
        {
            if (Questions[i].idQuestion === idQuestion)
                return i ;
        }
        return -1 ;
    }

    function FindNextQuestionFromIDAndAnswer(idQuestion,Answer) {
        console.log("FindNextQuestionFromIDAndAnswer") ;
        console.log("idQuestion: " +idQuestion) ;
        console.log("Answer: "+Answer) ;
        for (let i=0 ; i < Questions.length ; i++)
        {
            if (Questions[i].idQuestion === idQuestion && Questions[i].idSelectOption === Answer) {
                console.log("idQuestionSuivante: " + Questions[i].idQuestionSuivante) ;
                return Questions[i].idQuestionSuivante ;
            }
        }
        return -1 ;
    }
    


    function RemoveReponse(idQuestion){
        for (let i = 0 ; i < reponses.current.length; i++) {
            if (reponses.current[i].idQuestion === idQuestion)
                return reponses.current.splice(i,1) ;
        }
    }

    function AddReponse() {
        let rep = "" ;
        if (InterviewQuestion.idSelectOption === "0")
        {
            if (InterviewQuestion.isMultiline === "0") {

                RemoveReponse(InterviewQuestion.idQuestion) ;
                rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": reponseInput }
                reponses.current.push(rep) ;

            }
            else {
                RemoveReponse(InterviewQuestion.idQuestion) ;
                rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": text }
                reponses.current.push(rep) ;

            }
        }
        else {
            RemoveReponse(InterviewQuestion.idQuestion) ;
            rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": selectInput }
            reponses.current.push(rep) ;
        }

        console.log("reponses.current") ;
        console.log(reponses.current) ;

        if (props.SendReponses !== null)
            props.SendReponses(reponses) ;
    }




    const onNext = () =>{
        console.log("onNext") ;


        AddReponse() ;

        let res = -1 ;
        if (Questions[step].idSelectOption === "0") {
            if (Questions[step].idQuestionSuivante > 0)
            {
                path.current.push(step) ; 
                res = FindQuestionFromID(Questions[step].idQuestionSuivante) ;
                if (res > -1) {
                    setStep(res) ;
                    SetReponse(res)
                }
            }
            else 
                setStep(Questions.length) ;
        }
        else{
            //console.log("selectInput: " + selectInput) ;
            res = FindNextQuestionFromIDAndAnswer(Questions[step].idQuestion,selectInput) ;
            if (res > 0)
            {
                path.current.push(step) ; 

                res = FindQuestionFromID(res) ;
                if (res > -1) {
                    setStep(res) ;
                    SetReponse(res)
                }
                   
            }
            else {
                if (res == 0)
                {
                    setStep(Questions.length) ;
                }
            }
            
          
        }
        //console.log("path.current") ;
        //console.log(path.current) ;
    }



    function FindReponse(idQuestion) {
        for (let i = 0 ; i < reponses.current.length; i++) {
            if (reponses.current[i].idQuestion === idQuestion)
                return reponses.current[i].Reponse ;
        }
        return "" ;
    }


    function SetReponse(s) {
        //console.log("SetReponse: "+s) ;

        let rep = FindReponse(Questions[s].idQuestion) ;

        if ( Questions[s].idSelectOption === "0")
        {
            if ( Questions[s].isMultiline === "0") {
                setReponseInput(rep) ;
            }
            else {
                setText(rep) ;
            }
        }
        else {
            if (rep !== "")
                setSelectInput(rep) ;
            else
                setSelectInput(Questions[s].idSelectOption) ;
        }
        //console.log("reponseInput: " + reponseInput) ;
        //console.log("text: "+text) ;
        //console.log("selectInput: "+selectInput)
    }



    const onBack = () =>{
        console.log("onBack") ;
        if (path.current.length > 0)
        {

            let s = path.current[path.current.length-1] ;
            setStep(s);
            path.current.pop() ;

            SetReponse(s) ;

            //console.log("path.current") ;
            //console.log(path.current) ;

            //console.log("reponses.current") ;
            //console.log(reponses.current) ;
        }
    }




    let InterviewQuestion = "" ; 
    if (step < Questions.length)
        InterviewQuestion = Questions[step];









    
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
                                            { RenderQuestionReponse() }

                                          
                                        </div>
                                </div>
                              
                                {
                                                Questions.map((question)=>{
                                                    if (step < Questions.length) {
                                                        return <Buttons onNext={onNext} onBack={onBack}/>;
                                                    }
                                                    else  return <Buttons onBack={onBack}/>;
                                                })
                                            }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
{/**<Step onBack={onBack} onNext={onNext} step={step}/> */}