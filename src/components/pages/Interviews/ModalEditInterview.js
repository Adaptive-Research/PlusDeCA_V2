import React, {useState,useRef} from "react";
import {  Row, Button, Modal} from "react-bootstrap";
import InterviewQuestions  from "./InterviewQuestions";
import InterviewArticle  from "./InterviewArticle";
import {getInterviewAnswers,getInterviewQuestions,SaveAnswer} from "../../../data/customlibs/api";
import "../../../assets/css/InterviewQuestions.css";
import {PrintLog} from  "../../../data/customlibs/utils";




export default function ModalEditInterview(props) {


    const storedToken = localStorage.getItem('token');

    //PrintLog("ModalEditInterview") ;
    //PrintLog("props") ;
    //PrintLog(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    

    // pour le ForceRender
    const downloaded_InterviewQuestions = useRef(false) ;
    const downloaded_InterviewAnswers = useRef(false) ;


    

    function RenderAfterLoad(variable) {
        PrintLog("RenderAfterLoad: "+variable) ;
        if (variable === "interviewQuestions")
            downloaded_InterviewQuestions.current = true ;

        if (variable === "interviewAnswers")
            downloaded_InterviewAnswers.current = true ;


        // quand tout a ete charge, on peut envoyer l'info au composant InterviewQuestions
        if (downloaded_InterviewQuestions.current === true &&  downloaded_InterviewAnswers.current === true)
        {
            setIsModalOpen(props.show) ;
            setLastIsModalOpen(props.show) ;
            return Render() ;
        }
    
    }
    


    


    if (props.show !== lastIsModalOpen)
    {
        if (props.show === true)
        {
            downloaded_InterviewQuestions.current = false ;
            downloaded_InterviewAnswers.current = false ;

            getInterviewQuestions("interviewQuestions",storedToken,props.idInterview,RenderAfterLoad) ;
            getInterviewAnswers("interviewAnswers",storedToken,props.idInterview,RenderAfterLoad) ;
        }
        else
        {
            setIsModalOpen(props.show) ;
            setLastIsModalOpen(props.show) ;
        }
    }


  



    // pour les Answers
    const Answers = useRef([]) ;



 

    // callback pour que les Answers arrivent de InterviewQuestions a ModalEditInterview
    function SendAnswers(rep){
        //PrintLog("SendAnswers") ;
        //PrintLog(rep.current) ;
        Answers.current = rep.current ;
    }







   


    function SaveInterview(){
        PrintLog("SaveInterview") ;
        for (let i = 0 ; i < Answers.current.length ; i++ ){
            let rep = Answers.current[i] ;
            let srep = rep.Reponse ;
            srep = srep.replace("'","''") ;
            SaveAnswer(storedToken, props.idInterview, rep.idQuestion, srep ) ;
        }

        downloaded_InterviewQuestions.current = false ;
        downloaded_InterviewAnswers.current = false ;
        getInterviewQuestions("interviewQuestions",storedToken,props.idInterview,RenderAfterLoad) ;
        getInterviewAnswers("interviewAnswers",storedToken,props.idInterview,RenderAfterLoad) ;

        if (props.ForceRenderInterview !== null)
            props.ForceRenderInterview() ;
    }



      // Function that handle the submit event on the form
    const handleSave = (e) => {
        e.preventDefault();
        try {
            SaveInterview();
        } catch (e) {
            PrintLog(e);
        }
    }

 


    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    function Render() 
    {
        //PrintLog("Render()") ;

        if(props.Mode === 'Edit'){
            return <div>

                <Modal size="xl" show={isModalOpen}>

                    <Modal.Body>
                    <Row className="mb-4">
                        <InterviewQuestions SendAnswers={SendAnswers} BackButton={props.BackButton} NextButton={props.NextButton}/>
                    </Row>
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleCancel}>
                            {props.CancelButton}
                        </Button>

                        <Button variant="primary" onClick={handleSave}>
                            {props.SaveButton}
                        </Button>

                    </Modal.Footer>

                </Modal>

            </div>
        }
        else if(props.Mode === 'Show_Only'){
            return <div>

                <Modal size="xl" show={isModalOpen} className='Modal-View'>

                    <Modal.Body>
                        <InterviewArticle />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancel}>
                            {props.CloseButton}
                        </Button>
                    </Modal.Footer>

                </Modal>

            </div>
        }
    }


    return Render() ;
}
