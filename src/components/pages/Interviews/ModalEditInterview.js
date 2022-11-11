import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import * as blogpost from "../../../data/Pages/blogpost/blogpost";
import axios from "axios";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import InterviewQuestions  from "./InterviewQuestions";

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
    


    
//Method to get all Interviews created by this user
    
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

        setReloadInfos(false) ;
    }






    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }



 



    // Function that sends axios requesst to create a new Interview
    const SaveInterview = async () => {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
        console.log("SaveInterview") ;

/*        
        if (modeEdit.current === "Add")
        {
            const url =  process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            //console.log(response.data)

            if (response.data.includes("ERROR:")) {
                console.log(`Error found: ${response.data}`);
                setMsg("Une erreur est survenue, veuillez reessayer")
            } else {
                console.log("Interview created");
                if (props.ForceRenderInterview !== null)
                    props.ForceRenderInterview() ;

            }
        }
        else{
            const url =  process.env.REACT_APP_API_EDIT_INTERVIEW_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
                idInterview: idInterview,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            //console.log(response.data)

            if (response.data.includes("ERROR:")) {
                console.log(`Error found: ${response.data}`);
                setMsg("Une erreur est survenue, veuillez reessayer")
            } else {
                console.log("Interview updated");
                if (props.ForceRenderInterview !== null)
                    props.ForceRenderInterview() ;
            }

        }
        */
    }


    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;

        SaveInterview();
    }



    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    // Function that handle the submit event on the form
    const handleSave = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } finally {
            console.log("Attempted to save Interview")
        }
    }


    return (
        <div>

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                <Row className="mb-4">
                    <InterviewQuestions Render={compteur} />
                </Row>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
