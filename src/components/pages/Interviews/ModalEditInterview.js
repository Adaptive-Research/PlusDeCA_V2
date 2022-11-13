import React, {useState,useRef} from "react";
import axios from "axios";
import {  Row, Button, Modal} from "react-bootstrap";
import InterviewQuestions  from "./InterviewQuestions";
import {getInterviewAnswers,getInterviewQuestions} from "../../../data/customlibs/utils";

export default function ModalEditInterview(props) {


    const storedToken = localStorage.getItem('token');

    console.log("ModalEditInterview") ;
    console.log("props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    
    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    


    // pour le ForceRender
    const downloaded_InterviewQuestions = useRef(false) ;
    const downloaded_InterviewAnswers = useRef(false) ;

    function RenderAfterLoad(variable) {
        if (variable === "interviewQuestions")
            downloaded_InterviewQuestions.current = true ;

        if (variable === "interviewAnswers")
            downloaded_InterviewAnswers.current = true ;

    
        if (downloaded_InterviewQuestions.current === true &&  downloaded_InterviewAnswers.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_InterviewQuestions.current = false ;      
    }
    

    
    // pour les Answers
    const Answers = useRef([]) ;
    





    
    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        getInterviewQuestions("interviewQuestions",storedToken,props.idInterview,RenderAfterLoad) ;
        getInterviewAnswers("interviewAnswers",storedToken,props.idInterview,RenderAfterLoad) ;

        setReloadInfos(false) ;
    }






    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }



 

    // callback pour que les Answers arrivent de InterviewQuestions a ModalEditInterview
    function SendAnswers(rep){
        console.log("SendAnswers") ;
        console.log(rep.current) ;
        Answers.current = rep.current ;
    }







    // Function that sends axios requesst to save an answer for am Interview
    async function SaveReponse (tok, idInter, idQ, rep ) {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
        console.log("SaveInterview") ;
      
        const url =  process.env.REACT_APP_API_SAVE_ANSWER_URL;
        const response = await axios.post(url, {
            Submit: 1,
            token: tok,
            idInterview: idInter,
            idQuestion: idQ,
            Reponse: rep 

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        //console.log(response.data)

        if (response.data.includes("ERROR:")) 
            console.log(`Error found: ${response.data}`);
         else 
            console.log("Answer saved");
    }




    function SaveInterview(){
        console.log("SaveInterview") ;
        for (let i = 0 ; i < Answers.current.length ; i++ ){
            let rep = Answers.current[i] ;
            let srep = rep.Reponse ;
            srep = srep.replace("'","''") ;
            SaveReponse (storedToken, props.idInterview, rep.idQuestion, srep ) 
        }

    }

      // Function that handle the submit event on the form
      const handleSave = (e) => {
        e.preventDefault();
        try {
            SaveInterview();
        } catch (e) {
            console.log(e);
        }
    }

 


    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    return (
        <div>

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                <Row className="mb-4">
                    <InterviewQuestions Render={compteur} SendAnswers={SendAnswers}/>
                </Row>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
