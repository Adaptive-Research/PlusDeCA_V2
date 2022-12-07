import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getBusinessCardCategories, getUserBusinessCards} from "../../../data/customlibs/api";
import CardBusinessCard from "./CardBusinessCard" ;
import ModalEditBusinessCard from "./ModalEditBusinessCard" ;
import {FaUpload} from 'react-icons/fa';
import '../../../assets/css/ModalEditBusinessCard.css';
import ModalImportBusinessCard from "./ModalImportBusinessCard.js";
import ModalEditCategoryBusinessCard from "./ModalEditCategoryBusinessCard.js";
import ModalClassifyBusinessCard from "./ModalClassifyBusinessCard.js";
    
  



export default function ContactList() {
    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;

    // pour l'affichage des fenetres modales
    const [showImportContact, setShowImportContact] = useState(false) ;
    const [showEditBusinessCard, setShowEditBusinessCard] = useState(false) ;
    const [showClassifyBusinessCard, setShowClassifyBusinessCard] = useState(false) ;
    const [showEditCategoryBusinessCard, setShowEditCategoryBusinessCard] = useState(false);


    // pour le ForceRender
    const downloaded_BusinessCards = useRef(false) ;
    const downloaded_BusinessCardsCategories = useRef(false) ;


    // pour la ModalEditBusinessCard
    const [modeEdit,setModeEdit]= useState("") ;


    //Les variables pour la sauvegarde des Cartes de Visites

    const [lieuRencontre,setLieuRencontre] = useState("");
    const [entreprise,setEntreprise] = useState("");
    const [telephoneEntreprise,setTelephoneEntreprise] = useState("");
    const [siteWeb,setSiteWeb] = useState("");
    const [sexe,setSexe] = useState("");
    const [prenom,setPrenom] = useState("");
    const [nom,setNom] = useState("");
    const [fonction,setFonction] = useState("");
    const [telephone,setTelephone] = useState("");
    const [idBusinessCard,setIdBusinessCard] = useState("");
    const [email,setEmail] = useState("");

    // pour le reload des infos
    const reloadInfos = useRef(true) ;

   


    console.log("ContactList") ;
    const storedToken = localStorage.getItem('token') ;


    

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        getUserBusinessCards("userBusinessCards",storedToken,RenderAfterLoad) ;
        getBusinessCardCategories("BusinessCardsCategories",storedToken,RenderAfterLoad) ;
            
        reloadInfos.current = false ;
    }


    function RenderAfterLoad(variable) {
        reloadInfos.current = false ;
        console.log("RenderAfterLoad: " + variable ) ;

        if (variable === "userBusinessCards")
            downloaded_BusinessCards.current = true ;            
    
        if (variable === "BusinessCardsCategories")
            downloaded_BusinessCardsCategories.current = true ;            
        
        if ( downloaded_BusinessCards.current === true && downloaded_BusinessCardsCategories.current === true )
            setCompteur(compteur+1) ; 
        
    }
  






    // C'est le callback appele quand on ferme ModalEditBusinessCard
    function ModalEditBusinessCardClose(){
        setShowEditBusinessCard(false) ;
    }

    // C'est le callback appele quand on ferme ModalImportBusinessCard
    function ModalImportBusinessCardClose(){
        setShowImportContact(false) ;
    }

    // C'est le callback appele quand on ferme ModalEditCategoryBusinessCard
    function ModalEditCategoryBusinessCardClose(){
        setShowEditCategoryBusinessCard(false) ;
    }

    function ModalClassifyBusinessCardClose(){
        setShowClassifyBusinessCard(false) ;
    }








    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendBusinessCardData(Mode, BusinessCard) {
        console.log("SendBusinessCardData")
        if (Mode === "Add")
        {
            setModeEdit("Add") ;
            setLieuRencontre("");
            setEntreprise("");
            setTelephoneEntreprise("");
            setSiteWeb("");
            setSexe(1);
            setPrenom("");
            setNom("");
            setFonction("");
            setTelephone("");
            setEmail("");
            setShowEditBusinessCard(true) ;
        }
        
        if (Mode === "Edit")
        {
            setModeEdit("Edit") ;
            setLieuRencontre(BusinessCard.LieuRencontre);
            setEntreprise(BusinessCard.Entreprise);
            setTelephoneEntreprise(BusinessCard.TelephoneEntreprise);
            setIdBusinessCard(BusinessCard.id);
            setSiteWeb(BusinessCard.SiteWeb);
            setSexe(BusinessCard.Sexe);
            setPrenom(BusinessCard.Prenom);
            setNom(BusinessCard.Nom);
            setFonction(BusinessCard.Fonction);
            setTelephone(BusinessCard.TelephoneContact);
            setEmail(BusinessCard.Email);
            setShowEditBusinessCard(true) ;
        }

        if (Mode === "Classify")
        {
            console.log("businesscard.id: " + BusinessCard.id) ;
            setIdBusinessCard(BusinessCard.id);
            setShowClassifyBusinessCard(true) ;
        }

    
    }   









    function ForceRenderBusinessCard() {
        setShowEditBusinessCard(false) ;
        setShowImportContact(false);

        downloaded_BusinessCards.current = false ;    
        getUserBusinessCards("userBusinessCards",storedToken, RenderAfterLoad) ;
    }


    //la fonction de ForceRender des Categories de BusinessCards
    function ForceRenderCategoriesBusinessCards() {
        setShowEditCategoryBusinessCard(false);
        downloaded_BusinessCardsCategories.current = false;
        getBusinessCardCategories("BusinessCardsCategories", storedToken, RenderAfterLoad);
        downloaded_BusinessCards.current = false ;
        getUserBusinessCards("userBusinessCards",storedToken,RenderAfterLoad) ;

    }



    const BusinessCardsCategories = JSON.parse(localStorage.getItem("BusinessCardsCategories"));
    const BusinessCards = JSON.parse(localStorage.getItem("userBusinessCards"));
    





    const renderBusinessCardsForTab = (idCategorie) => {
        console.log("renderBusinessCardsForTab") ;
        console.log("BusinessCards");
        console.log(BusinessCards);

        if (BusinessCards !== null)
        {
            return BusinessCards.map((Ligne) => {
                        if (Ligne.idCategorie === idCategorie)
                            return <Col md={6}  key={Ligne.id}> 
                                        <CardBusinessCard
                                            BusinessCard={Ligne}
                                            SendBusinessCardData={SendBusinessCardData}  
                                            ForceRenderBusinessCard = {ForceRenderBusinessCard}
                                        /> 
                                    </Col> ;
                })
        }
        else
            return "" ;
    }


    const RenderBusinessCardsCategoriesTabs = () =>{
        if(BusinessCardsCategories !== null){
            console.log("RenderBusinessCardsCategoriesTabs") ;
            console.log('BusinessCardsCategories');
            console.log(BusinessCardsCategories);
            return BusinessCardsCategories.map((BusinessCardCategorie) => {
                if(BusinessCardCategorie.Categorie !== null){
                    return  <Tab eventKey={BusinessCardCategorie.Categorie} title={BusinessCardCategorie.Categorie}>
                                <div className="tab-pane " id="tab-61">
                                    <Row className="row-cards ">
                                        {renderBusinessCardsForTab(BusinessCardCategorie.idAncestor)}
                                    </Row>
                                </div>
                            </Tab>
                }
            }); 

        }
    }




    const renderBusinessCards = () => {
        console.log("renderBusinessCards");
        console.log("BusinessCards");
        console.log(BusinessCards);

        if (BusinessCards !== null)
        {
            return BusinessCards.map((Ligne) => {
                        if ((Ligne.idCategorie === null) || (Ligne.idCategorie === '0') || (Ligne.Ordre === null) )
                            return <Col md={6}  key={Ligne.id}> 
                                        <CardBusinessCard
                                            BusinessCard={Ligne}
                                            SendBusinessCardData={SendBusinessCardData}  
                                            ForceRenderBusinessCard = {ForceRenderBusinessCard}
                                        /> 
                                    </Col> ;
                })
        }
        else
            return "" ;
    }

   
   





    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">Contacts</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {setShowImportContact(true)  ;}}>
                        <span style={{marginRight: '5px'}}><FaUpload/></span>
                        Importer Prospects
                    </button>
                    <button className='btn btn-success' onClick={() => {SendBusinessCardData("Add",null)}}  style={{marginLeft: "0.5rem",marginRight: "0.5rem"  }}>
                        <span> <i className="fe fe-plus"></i></span>
                        Ajouter une Carte
                    </button>
                    <button className='btn btn-success' onClick={() => {setShowEditCategoryBusinessCard(true)}} >
                        <span> <i className="fe fe-plus"></i></span>
                        Gérer les Catégories
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
                                            LieuRencontre={lieuRencontre}
                                            Entreprise={entreprise}
                                            TelephoneEntreprise={telephoneEntreprise}
                                            SiteWeb={siteWeb}
                                            Sexe={sexe}
                                            Prenom={prenom}
                                            Nom={nom}
                                            Fonction={fonction}
                                            Telephone={telephone}
                                            Email={email}
                                            IdBusinessCard={idBusinessCard}
                                        />


                                        <ModalImportBusinessCard
                                            Render={compteur}
                                            show={showImportContact} 
                                            SendCloseMessage={ModalImportBusinessCardClose}  
                                            ForceRenderBusinessCard={ForceRenderBusinessCard}
                                        />
                                        

                                        <ModalClassifyBusinessCard
                                            IdBusinessCard={idBusinessCard}
                                            Render={compteur}
                                            show={showClassifyBusinessCard} 
                                            SendCloseMessage={ModalClassifyBusinessCardClose}  
                                            ForceRenderBusinessCard={ForceRenderBusinessCard}
                                        />


                                        <ModalEditCategoryBusinessCard
                                            Render={compteur}
                                            show={showEditCategoryBusinessCard} 
                                            SendCloseMessage={ModalEditCategoryBusinessCardClose}  
                                            ForceRenderCategoriesBusinessCards={ForceRenderCategoriesBusinessCards}
                                        />





                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="BusinessCard"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >

                                            <Tab eventKey="BusinessCard" title="Cartes de visite">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderBusinessCards()}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            {RenderBusinessCardsCategoriesTabs()}
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
