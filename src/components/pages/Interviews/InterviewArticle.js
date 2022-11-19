import React from 'react'
import "../../../assets/css/InterviewQuestions.css";
import "../../../assets/css/style_Dan.css";
import { useState,useRef } from 'react';
import {createArticle} from "../../../data/customlibs/utils";




export default function InterviewArticle(props) {
    console.log("InterviewArticle");

   

    const Texte = useRef("") ;

  
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;







    if (reloadInfos === true)
    {
        let Questions = JSON.parse(localStorage.getItem("interviewQuestions"));
        let Answers = JSON.parse(localStorage.getItem("interviewAnswers"));

        console.log("reloadInfos === true");
        console.log("Questions");
        console.log(Questions);
        console.log("Answers");
        console.log(Answers);

        if (Questions === null)
            Questions = [] ;

        if (Answers === null)
            Answers = [] ;

        
        Texte.current = createArticle(Questions,Answers,RenderArticleQuestionReponse) ;

        setReloadInfos(false) ;
    }





    function RenderArticleQuestionReponse(q,a) {
        return "<div class='Question'>"+ q + "</div> <p class='Reponse'>" + a + "</p>" ;
    }



    return  <div>
                <h4 className='title'>Votre Interview</h4>
                <div className='Interview-View-Mode'>
                    <div className='View-Question-Reponse' dangerouslySetInnerHTML={{ __html:  Texte.current }}></div>
                </div>
            </div>
    
    
}