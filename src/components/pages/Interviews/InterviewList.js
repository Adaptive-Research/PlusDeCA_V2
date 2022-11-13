import React, {useRef, useState} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {Link} from "react-router-dom";
import {getUserInterviews} from "../../../data/customlibs/utils";
import '../../../assets/css/InterviewsList.css';
import CardInterview from "./CardInterview.js";
import ModalEditInterview from "./ModalEditInterview.js";









export default function InterviewList() {

    console.log("InterviewList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

    // pour le ForceRender
   const downloaded_Interviews = useRef(false) ;

    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
     // pour l'affichage de la fenetre modale
    const [showEditInterview, setShowEditInterview] = useState(false) ;

    // le callback qui est appele apres le chargement des donnees
    function RenderAfterLoad(variable) {
        if (variable === "userInterviews")
            downloaded_Interviews.current = true ;

        if (downloaded_Interviews.current === true)
            setCompteur(compteur+1) ; ;
    }
    
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        getUserInterviews("userInterviews",storedToken,RenderAfterLoad) ;
            
        setReloadInfos(false) ;
    }

    // Les différentes fonctions permettant d'éditer les Interviews 
    const [modeEdit,setModeEdit]= useState("") ;
    const [id,setId] = useState("") ;



    // C'est le callback appele quand on ferme ModalEditInterview
    function ModalEditInterviewClose()
    {
        setShowEditInterview(false) ;
    }





    
    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendInterviewData(ShowWindow, Interview) {
        //console.log("SendCompanyData")
        if (Interview === null)
        {
            setModeEdit("Add") ;
            setId("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            console.log("Interview") ;
            console.log(Interview) ;

            setId(Interview.idInterview) ;
        }
        

        if (ShowWindow === "false")
            setShowEditInterview(false) ;
        else
            setShowEditInterview(true) ;
    }  

    //La fonction forceRender permettant de recharger automatiquement les données
    function ForceRenderInterview() {
            
        console.log("ForceRenderInterview") ;
        setShowEditInterview(false) ;

        getUserInterviews("userInterviews",storedToken, RenderAfterLoad) ;
    }


    // La fonction suivante servira à récupérer les interviews et à les rendre en fonction de leur type
    const renderInterviews = (TypeInterview) => {
    const interviews = JSON.parse(localStorage.getItem("userInterviews"));
        if (interviews !== null)
        {
            //console.log("interviews") ;
            //console.log(interviews);

            return interviews.map((Interview) => {
                if  (TypeInterview === 'A_Repondre') {
                    if (Interview.iscurrent === "1" && Interview.isValidated === "0" && Interview.isPublished === "0"){
                        return <Col md={4}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                    /> 
                                </Col> ;
                    }
                }else if(TypeInterview === 'Valide'){
                    if (Interview.iscurrent === "1" && Interview.isValidated === "1" && Interview.isPublished === "0")
                        return  <Col md={4}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                    /> 
                                </Col> ;
                }else if(TypeInterview === 'Public'){
                    if (Interview.iscurrent === "1"  && Interview.isPublished === "1")
                        return  <Col md={4}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                    /> 
                                </Col> ;
                }
            })
        }
    }



    return (
        <div>

            <div className="page-header">
                <div>
                    <h1 className="page-title">Mes Interviews</h1>
                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">

                                    <ModalEditInterview 
                                            show={showEditInterview} 
                                            SendCloseMessage={ModalEditInterviewClose}  
                                            ForceRenderInterview ={ForceRenderInterview }
                                            ModeEdit={modeEdit}
                                            idInterview={id}
                                    />


                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="A Répondre"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="A Répondre" title="A Répondre">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderInterviews('A_Repondre')}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            <Tab eventKey="Validé" title="Validé">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                         {renderInterviews('Valide')}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            <Tab eventKey="Publié" title="Publié">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderInterviews('Public')}
                                                    </Row>
                                                </div>
                                            </Tab>
                                            
                                            
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}




