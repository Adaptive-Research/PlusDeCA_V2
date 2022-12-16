import React, { useState} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {getUserInterviews} from "../../../data/customlibs/api";
import {FindTranslation} from  "../../../data/customlibs/utils" ;
import '../../../assets/css/InterviewsList.css';
import CardInterview from "./CardInterview.js";
import ModalEditInterview from "./ModalEditInterview.js";




export default function InterviewList() {


    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const AllTranslations = JSON.parse(localStorage.getItem('AllTranslations')) ;
    
    //Pour les Tabs
    const sToAnswer = "To Answer";
    const sValid = "Validated";
    const sPublished = "Published";
    // Pour le Titre
    const sMyInterviews = "My Interviews";
    //Pour les boutons de la Modal
    const sBack ='Back';
    const sNext ='Next';
    const sCancel = 'Cancel';
    const sSave = 'Save';
    const sClose = 'Close';

    const [toAnswer,setToAnswer] = useState(sToAnswer);
    const [valid, setValid] = useState(sValid);
    const [published, setPublished] = useState(sPublished);
    const [cancel, setCancel] = useState(sCancel);
    const [save, setSave] = useState(sSave);
    const [back, setBack] = useState(sBack);
    const [next, setNext] = useState(sNext);
    const [close, setClose] = useState(sClose);
    const [myInterviews, setMyInterviews] = useState(sMyInterviews);



    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
     // pour l'affichage de la fenetre modale
    const [showEditInterview, setShowEditInterview] = useState(false) ;




    // le callback qui est appele apres le chargement des donnees
    function RenderAfterLoad(variable) {
            setCompteur(compteur+1) ; 
    }
    



    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;



 function TranslateAll(data,Page){

        console.log('InterviewList Translations') ;
        console.log(data);
    
        let t = FindTranslation(data,Page, sMyInterviews) ;
        if (t !== "Not Found")
          setMyInterviews(t) ;
    
        t = FindTranslation(data,Page, sValid) ;
        if (t !== "Not Found")
          setValid(t) ;
    
        t = FindTranslation(data,Page, sPublished) ;
        if (t !== "Not Found")
          setPublished(t) ;
    
        t = FindTranslation(data,Page, sToAnswer) ;
        if (t !== "Not Found")
          setToAnswer(t) ;
    
        t = FindTranslation(data,Page, sBack) ;
        if (t !== "Not Found")
          setBack(t) ;
    
        t = FindTranslation(data,Page, sNext) ;
        if (t !== "Not Found")
          setNext(t) ;
    
        t = FindTranslation(data,Page, sCancel) ;
        if (t !== "Not Found")
          setCancel(t) ;
    
        t = FindTranslation(data,Page, sSave) ;
        if (t !== "Not Found")
          setSave(t) ;
        t = FindTranslation(data,Page, sClose) ;
        if (t !== "Not Found")
          setClose(t) ;
    }
    
    

    if (reloadTraductions === true) {
        TranslateAll(AllTranslations,"InterviewList") ;
        setReloadTraductions(false) ;
    }
                

    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        getUserInterviews("userInterviews",storedToken,RenderAfterLoad) ;
        setReloadInfos(false) ;
    }



    // Les différentes fonctions permettant d'éditer les Interviews 
    const [id,setId] = useState("") ;
    const [modeEdit,setModeEdit]= useState("") ;



    // C'est le callback appele quand on ferme ModalEditInterview
    function ModalEditInterviewClose()
    {
        setShowEditInterview(false) ;
    }





    
    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    
    function SendInterviewData(ShowWindow, Interview) {
        setId(Interview.idInterview) ;
        
        if (ShowWindow === "false")
            setShowEditInterview(false) ;
        else
            setShowEditInterview(true) ;
    }  


    //Mode d'Edition de l'Interview
    function EditMode(Mode){
        if(Mode === "Edit"){
            setModeEdit("Edit");
        }else{
            setModeEdit("Show_Only");
        }
    }






    //La fonction forceRender permettant de recharger automatiquement les données
    function ForceRenderInterview() {
        setShowEditInterview(false) ;
        // la fonction ci-dessous est obligatoire pour recharger quand on a valide ou devalide une interview
        getUserInterviews("userInterviews",storedToken,RenderAfterLoad) ;
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
                        return <Col md={4} key={Interview.idInterview}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                        EditMode={EditMode}
                                    /> 
                                </Col> ;
                    }
                }else if(TypeInterview === 'Valide'){
                    if (Interview.iscurrent === "1" && Interview.isValidated === "1" && Interview.isPublished === "0")
                        return  <Col md={4} key={Interview.idInterview}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                        EditMode={EditMode}
                                    /> 
                                </Col> ;
                }else if(TypeInterview === 'Public'){
                    if (Interview.iscurrent === "1"  && Interview.isPublished === "1")
                        return  <Col md={4} key={Interview.idInterview}> 
                                    <CardInterview 
                                        Interview={Interview}
                                        TypeInterview={TypeInterview}
                                        SendInterviewData={SendInterviewData}  
                                        ForceRenderInterview = {ForceRenderInterview}
                                        EditMode={EditMode}
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
                    <h1 className="page-title">{myInterviews}</h1>
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
                                            Compteur={compteur}
                                            show={showEditInterview} 
                                            SendCloseMessage={ModalEditInterviewClose}  
                                            ForceRenderInterview ={ForceRenderInterview }
                                            EditMode={EditMode}
                                            Mode={modeEdit}
                                            idInterview={id}
                                            BackButton={back}
                                            NextButton={next}
                                            CancelButton={cancel}
                                            SaveButton={save}
                                            CloseButton={close}
                                    />


                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="A Répondre"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="A Répondre" title={toAnswer}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderInterviews('A_Repondre')}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            <Tab eventKey="Validé" title={valid}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                         {renderInterviews('Valide')}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            <Tab eventKey="Publié" title={published}>
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




