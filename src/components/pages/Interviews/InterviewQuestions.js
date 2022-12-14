import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import "../../../assets/css/style_Dan.css";
import  InterviewImg  from "../../../assets/images/interviews/interview.png";
import  InterviewImg2  from "../../../assets/images/interviews/Interview2.png";
import { useState,useRef } from 'react';
import Buttons from './Buttons';
import {createArticle} from "../../../data/customlibs/utils";




export default function InterviewQuestions(props) {
    console.log("InterviewQuestions");

   


    // les champs ci-dessous contiennent le contenu de la reponse pour la question en cours
    // il y a 3 types de champs de reponse (un inputText, un textarea, un select) 
    const [reponseInput,setReponseInput] = useState("") ;
    const [selectInput,setSelectInput] = useState("-1") ;
    const reponseSelect = useRef("") ;
    const [text, setText] = useState("") ;

    const Questions = useRef([]) ;
    const path = useRef([]);  // sert pour sauvegarder l'enchainement des Questions.current. utilise par le bouton Back et la fonction onBack()
    const Answers = useRef([]) ; // sert a sauvegarder les Answers faites par l'utlisateur


    const [step, setStep] = useState(0); // contient l'index de la question en cours dans le tableau de questions
  
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;




    const Texte = useRef("") ;


    if (reloadInfos === true)
    {
        Questions.current = JSON.parse(localStorage.getItem("interviewQuestions"));
        Answers.current = JSON.parse(localStorage.getItem("interviewAnswers"));

        console.log("reloadInfos === true");
        console.log("Questions");
        console.log(Questions.current);
        console.log("Answers");
        console.log(Answers.current);

        if (Questions.current === null)
            Questions.current = [] ;

        if (Answers.current === null)
            Answers.current = [] ;

        if (Questions.current !== null)    
            SetReponse(0) ;
        
        
        setReloadInfos(false) ;
    }



    
   
    

    function RenderSelect(idQuestion) {
        let OptionsList = Questions.current.map( (question)=>{
                if (question.idQuestion === idQuestion) {
                    return <option key={question.idSelectOption} value={question.idSelectOption}> {question.SelectOption} </option> 
                }
                return "" ;
        }) ;
        return OptionsList ;
    }





    function RenderQuestionReponse() {
        if (Questions.current.length > 0)
        {
            if (step < Questions.current.length)
            {
                if (InterviewQuestion.idSelectOption === "0")
                {
                    if (InterviewQuestion.isMultiline === "0")
                        return (
                            <>
                                <h4 className='Question'>{InterviewQuestion.Question}</h4>
                                <form className='Charbel-div-center-line-wrap'>
                                    <input type='text' name={InterviewQuestion.idQuestion} value={reponseInput} onChange={(e) =>  setReponseInput(e.target.value)}/>
                                </form>
                            </>
                        )
                    
                    else 
                        return (
                            <>
                                <h4 className='Question'>{InterviewQuestion.Question}</h4>
                                <form>
                                    <textarea  className="form-control not-resizable" name={InterviewQuestion.idQuestion} rows="11" value={text}  onChange={(e) =>  setText(e.target.value) }></textarea>
                                </form>
                            </>
                        )
                }
                else {
                    return (
                        <>
                            <h4 className='Question'>{InterviewQuestion.Question}</h4>
                            <form>
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
                        Cette interview est termin??e. Merci d'y avoir r??pondu. Vous pouvez maintenant la sauvegarder.
                        </h3>
                    </>

                )
        }
        else
            return (
                <>
                    <h4 className='Question'>{InterviewQuestion.Question}</h4>
                    <form action=''>
                    <input type='text' name={InterviewQuestion.idQuestion} value={reponseInput} onChange={(e) =>  setReponseInput(e.target.value)}/>
                    </form>
                </>
            )

    }













    

    function FindQuestionFromID(idQuestion) {
        for (let i=0 ; i < Questions.current.length ; i++)
        {
            if (Questions.current[i].idQuestion === idQuestion)
                return i ;
        }
        return -1 ;
    }

    function FindNextQuestionFromIDAndAnswer(idQuestion,Answer) {
        //console.log("FindNextQuestionFromIDAndAnswer") ;
        //console.log("idQuestion: " +idQuestion) ;
        //console.log("Answer: "+Answer) ;
        for (let i=0 ; i < Questions.current.length ; i++)
        {
            if (Questions.current[i].idQuestion === idQuestion && Questions.current[i].idSelectOption === Answer) {
                //console.log("idQuestionSuivante: " + Questions.current[i].idQuestionSuivante) ;
                return Questions.current[i].idQuestionSuivante ;
            }
        }
        return -1 ;
    }
    



    function RemoveReponse(idQuestion){
        for (let i = 0 ; i < Answers.current.length; i++) {
            if (Answers.current[i].idQuestion === idQuestion)
                return Answers.current.splice(i,1) ;
        }
    }


    function AddReponse() {

        console.log("AddReponse") ;
        let rep = "" ;
        if (InterviewQuestion.idSelectOption === "0")
        {
            if (InterviewQuestion.isMultiline === "0") {

                RemoveReponse(InterviewQuestion.idQuestion) ;
                rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": reponseInput }
                Answers.current.push(rep) ;

            }
            else {
                RemoveReponse(InterviewQuestion.idQuestion) ;
                rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": text }
                Answers.current.push(rep) ;

            }
        }
        else {
            RemoveReponse(InterviewQuestion.idQuestion) ;
            rep = {"idQuestion":InterviewQuestion.idQuestion, "Reponse": selectInput }
            Answers.current.push(rep) ;
        }

        if (props.SendAnswers !== null)
            props.SendAnswers(Answers) ;
        
    }




    

    function FindReponse(idQuestion) {
        //console.log("FindReponse:" + idQuestion) ;
        //console.log(Answers) ;
        for (let i = 0 ; i < Answers.current.length; i++) {
            if (Answers.current[i].idQuestion === idQuestion)
                return Answers.current[i].Reponse ;
        }
        return "" ;
    }


    function SetReponse(s) {
        //console.log("SetReponse: "+s) ;

        let rep = "" ;

        // on remet a zero tous les champs des reponse
        setReponseInput("") ;
        setText("") ;
        setSelectInput("-1") ;


        if (s < Questions.current.length)
        {
            rep = FindReponse(Questions.current[s].idQuestion) ;

            if ( Questions.current[s].idSelectOption === "0")
            {
                if ( Questions.current[s].isMultiline === "0") {
                    setReponseInput(rep) ;
                }
                else {
                    setText(rep) ;
                }
            }
            else {
                if (rep !== "") {
                    setSelectInput(rep) ;
                    //console.log("reponseSelect.current") ;
                    //console.log(reponseSelect.current) ;
                }
                else {
                    setSelectInput(Questions.current[s].idSelectOption) ;
                    //console.log("reponseSelect.current") ;
                    //console.log(reponseSelect.current) ;
                }
            }
        }
    }








    const onNext = () =>{
        console.log("onNext") ;


        AddReponse() ;

        let res = -1 ;
        if (Questions.current[step].idSelectOption === "0") {
            if (Questions.current[step].idQuestionSuivante > 0)
            {
                path.current.push(step) ; 
                res = FindQuestionFromID(Questions.current[step].idQuestionSuivante) ;
                if (res > -1) {
                    setStep(res) ;
                    SetReponse(res)
                }
            }
            else 
                setStep(Questions.current.length) ;
        }
        else{
            //console.log("selectInput: " + selectInput) ;
            res = FindNextQuestionFromIDAndAnswer(Questions.current[step].idQuestion,selectInput) ;
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
                if (res === 0)
                {
                    setStep(Questions.current.length) ;
                }
            }
            
          
        }
        //console.log("path.current") ;
        //console.log(path.current) ;
    }


    



    const onBack = () =>{
        //console.log("onBack") ;
        if (path.current.length > 0)
        {

            let s = path.current[path.current.length-1] ;
            setStep(s);
            path.current.pop() ;

            SetReponse(s) ;

            //console.log("path.current") ;
            //console.log(path.current) ;

            //console.log("Answers.current") ;
            //console.log(Answers.current) ;
        }
    }




    let InterviewQuestion = "" ; 
    if (step < Questions.current.length)
        InterviewQuestion = Questions.current[step];





    return  <div className='InterviewQuestions Charbel-div-center-line-wrap'>
                <div className='InterviewQuestionsIMG Charbel-div-center-line-wrap'>
                    <img src={InterviewImg} alt=''/>
                </div> 
                <div className='AnswerContainer'>
                    <div className='MultiStepForm       Charbel-div-center-line-wrap      Fill-Container-Relative'>
                        <div className='box             Charbel-div-center-line-wrap       Fill-Container-Relative'>
                                <div className='BoxContent   Charbel-div-center-line-wrap   Fill-Container-Relative'>
                                    <div className='QuestionContainer   Charbel-div-center-col  Fill-Container-Relative'>
                                        <div className='QuestionContent   Charbel-div-center-col'>
                                            {RenderQuestionReponse()}
                                        </div>
                                    </div>
                                
                                    {
                                        Questions.current.map((question)=>{
                                            if (step < Questions.current.length) {
                                                return <Buttons onNext={onNext} onBack={onBack} BackButton={props.BackButton} NextButton={props.NextButton}/>;
                                            }
                                            else  return <Buttons onBack={onBack} BackButton={props.BackButton}/>;
                                        })
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
}