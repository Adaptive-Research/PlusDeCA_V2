import React, {useState,useRef} from "react";
import axios from "axios";
import {  Row, Button, Modal} from "react-bootstrap";
import InterviewQuestions  from "./InterviewQuestions";
import {getUserInterviews} from "../../../data/customlibs/utils";

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

    function RenderAfterLoad(variable) {
        if (variable === "interviewQuestions")
            downloaded_InterviewQuestions.current = true ;
    
        if (downloaded_InterviewQuestions.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_InterviewQuestions.current = false ;      
    }
    
    // pour les reponses
    const reponses = useRef([]) ;
    



    
    const getInterviewQuestions = async (variable,tok,idInter, ForceRender) => {
        console.log(" getInterviewQuestions") ;
        //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
        const url =  process.env.REACT_APP_API_SHOW_QUESTIONS_FOR_INTERVIEW_URL;
        const response = await axios.post(url, {
            token: tok,
            //debug: 1,
            Submit: 1,
            idInterview:idInter
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });

        console.log("response.data") ;
        console.log(response.data) ;
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



    
    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        getInterviewQuestions("interviewQuestions",storedToken,props.idInterview,RenderAfterLoad) ;
        //getInterviewAnswers("interviewReponses",storedToken,props.idInterview,RenderAfterLoad) ;

        setReloadInfos(false) ;
    }






    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }



 

    // callback pour que les reponses arrivent de InterviewQuestions a ModalEditInterview
    function SendReponses(rep){
        console.log("SendReponses") ;
        console.log(rep.current) ;
        reponses.current = rep.current ;
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
        for (let i = 0 ; i < reponses.current.length ; i++ ){
            let rep = reponses.current[i] ;
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
                    <InterviewQuestions Render={compteur} SendReponses={SendReponses}/>
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
