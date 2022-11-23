import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getUserBusinessCards} from "../../../data/customlibs/api";
import CardBusinessCard from "./CardBusinessCard" ;
import ModalEditBusinessCard from "./ModalEditBusinessCard" ;


    
  



export default function BusinessCardList() {
    console.log("BusinessCardList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

   


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditBusinessCard, setShowEditBusinessCard] = useState(false) ;

    // pour le ForceRender
    const downloaded_BusinessCards = useRef(false) ;

    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("<p>Hey this <strong>test</strong> rocks 😀</p>");
    const [photo, setPhoto] = useState("");

    // pour le reload des infos
    const reloadInfos = useRef(true) ;

   

    

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        getUserBusinessCards("userBusinessCards",storedToken,RenderAfterLoad) ;
            
        reloadInfos.current = false ;
    }




    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_BusinessCards.current") ;
        //console.log(downloaded_BusinessCards.current) ;
        
        if (variable === "userBusinessCards")
            downloaded_BusinessCards.current = true ;


    
        if (downloaded_BusinessCards.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_BusinessCards.current = false ;      
    }
  





    // Callbacks pour la fenetre ModalEditBusinessCard
    // il y en a 3
    // - ModalEditBusinessCardClose
    // - SendBusinessCardData
    // - ForceRenderBusinessCard



    // C'est le callback appele quand on ferme ModalEditBusinessCard
    function ModalEditBusinessCardClose()
    {
        setShowEditBusinessCard(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendBusinessCardData(ShowWindow, BusinessCard) {
        //console.log("SendCompanyData")
        if (BusinessCard === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setCategory("1") ;
            setText("") ;
            setHtml("") ;
            setPhoto("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            //console.log("BusinessCard") ;
            //console.log(BusinessCard) ;

            setIdAncestor(BusinessCard.idAncestor) ;
            setTitle(BusinessCard.BusinessCard_Title) ;
            setCategory(BusinessCard.BusinessCard_Category) ;
            setText(BusinessCard.BusinessCard_Text) ;
            setHtml(BusinessCard.BusinessCard_Html) ;
            setPhoto(BusinessCard.BusinessCard_Image) ;
        }
        


        if (ShowWindow === "false")
            setShowEditBusinessCard(false) ;
        else
            setShowEditBusinessCard(true) ;
    }    


    function ForceRenderBusinessCard() {
        
        //console.log("ForceRenderBusinessCard") ;
        setShowEditBusinessCard(false) ;

        getUserBusinessCards("userBusinessCards",storedToken, RenderAfterLoad) ;
    }


















    





    // Separate drafts from published BusinessCards
    const renderBusinessCards = (TypeBusinessCard) => {
        const BusinessCards = JSON.parse(localStorage.getItem("userBusinessCards"));

        if (BusinessCards !== null)
        {
            //console.log("BusinessCards") ;
            //console.log(BusinessCards);

            return BusinessCards.map((Ligne) => {
                //console.log("Ligne.id: "+Ligne.id) ;
                if  (TypeBusinessCard === "Brouillon") {
                    if (Ligne.iscurrent === "1" && Ligne.isValidated === "0" && Ligne.isPublished === "0") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardBusinessCard
                                        BusinessCard={Ligne}
                                        TypeBusinessCard={TypeBusinessCard}
                                        SendBusinessCardData={SendBusinessCardData}  
                                        ForceRenderBusinessCard = {ForceRenderBusinessCard}
                                    /> 
                                </Col> ;
                }
                else if(TypeBusinessCard === "Valide"){
                    if(Ligne.iscurrent === "1" && Ligne.isValidated === "1" && Ligne.isPublished === "0"){
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardBusinessCard
                                        key={Ligne.id}
                                        BusinessCard={Ligne}
                                        TypeBusinessCard={TypeBusinessCard}
                                        SendBusinessCardData={SendBusinessCardData}  
                                        ForceRenderBusinessCard = {ForceRenderBusinessCard}
                                    /> 
                                </Col> ;
                    }
                }
            })
        }
        else
            return "" ;
    }


   






    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">BusinessCards</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendBusinessCardData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                        Ajouter un contact
                    </button>

                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">


                                        <ModalEditBusinessCard
                                            Render={compteur}
                                            show={showEditBusinessCard} 
                                            SendCloseMessage={ModalEditBusinessCardClose}  
                                            ForceRenderBusinessCard={ForceRenderBusinessCard}
                                            ModeEdit={modeEdit}
                                            idAncestor={idAncestor}
                                            Title={title} 
                                            Category = {category} 
                                            Html= {html}
                                            Text={text}
                                            Photo = {photo}
                                        />


                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Brouillon"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Brouillon" title="Réseau PlusDeCA">
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderBusinessCards("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title="Cartes de visite">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderBusinessCards("Valide")}
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
