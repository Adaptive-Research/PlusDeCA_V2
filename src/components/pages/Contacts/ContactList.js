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
    
  



export default function ContactList() {
    console.log("ContactList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

   


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditContact, setShowEditContact] = useState(false) ;
    const [showEditBusinessCard, setShowEditBusinessCard] = useState(false) ;

    // pour le ForceRender
    const downloaded_Contacts = useRef(false) ;
    const downloaded_BusinessCards = useRef(false) ;
    const downloaded_BusinessCardsCategories = useRef(false) ;


    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [modeEditCategories,setModeEditCategories]= useState("") ;


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

    //Les variables Pour la sauvegarde des Categories de Cartes de Visites;
    const [showEditCategoryBusinessCard, setShowEditCategoryBusinessCard] = useState(false);
    
    /*
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("<p>Hey this <strong>test</strong> rocks 😀</p>");
    const [photo, setPhoto] = useState("");
    */

    // pour le reload des infos
    const reloadInfos = useRef(true) ;

   

    

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        //console.log(reloadInfos.current) ;
        //getUserContacts("userContacts",storedToken,RenderAfterLoad) ;
        getUserBusinessCards("userBusinessCards",storedToken,RenderAfterLoad) ;
        getBusinessCardCategories("BusinessCardsCategories",storedToken,RenderAfterLoad) ;
            
        reloadInfos.current = false ;
    }

    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;

        if (variable === "userBusinessCards")
            downloaded_BusinessCards.current = true ;            
    
        if (variable === "BusinessCardsCategories")
            downloaded_BusinessCardsCategories.current = true ;            
        
        if ( downloaded_BusinessCards.current === true && downloaded_BusinessCardsCategories.current === true )
            setCompteur(compteur+1) ; 
        
    }
  

       
        
  





    // Callbacks pour la fenetre ModalEditContact
    // il y en a 3
    // - ModalEditContactClose
    // - SendContactData
    // - ForceRenderContact



    // C'est le callback appele quand on ferme ModalEditContact
    function ModalEditContactClose()
    {
        setShowEditContact(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendContactData(ShowWindow, Contact) {
        //console.log("SendCompanyData")
        if (Contact === null)
        {
            setModeEdit("Add") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;

        }
        


        if (ShowWindow === "false")
            setShowEditContact(false) ;
        else
            setShowEditContact(true) ;
    }    


    function ForceRenderContact() {
        
        //console.log("ForceRenderContact") ;
        setShowEditContact(false) ;

        downloaded_Contacts.current = false ;
        //getUserContacts("userContacts",storedToken, RenderAfterLoad) ;
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

// C'est le callback appele quand on ferme ModalImportBusinessCard
function ModalImportBusinessCardClose()
{
    setShowEditContact(false) ;
}

// C'est le callback appele quand on ferme ModalEditCategoryBusinessCard
function ModalEditCategoryBusinessCardClose()
{
    setShowEditCategoryBusinessCard(false) ;
}



// C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
function SendBusinessCardData(ShowWindow, BusinessCard) {
    //console.log("SendCompanyData")
    if (BusinessCard === null)
    {
        setModeEdit("Add") ;
        console.log("Mode Edit des BusinessCard") ;
        console.log(modeEdit) ;

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
        
    }
    else
    {
        setModeEdit("Edit") ;
        console.log("Mode Edit") ;
        console.log("BusinessCard") ;
        console.log(BusinessCard) ;
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
    }
    if(ShowWindow === true){
        //alert("C'est bon");
        setShowEditBusinessCard(true) ;
    }


    /*if (ShowWindow === "true")
        setShowEditBusinessCard(true) ;
    else
        setShowEditBusinessCard(false) ;
    */
console.log("ShowWindow");
console.log(ShowWindow);
console.log("showEditBusinessCard");
console.log(showEditBusinessCard);
}   






function ForceRenderBusinessCard() {

    setShowEditBusinessCard(false) ;
    setShowEditContact(false);

    downloaded_BusinessCards.current = false ;    
    getUserBusinessCards("userBusinessCards",storedToken, RenderAfterLoad) ;
}


//la fonction de ForceRender des Categories de BusinessCards
function ForceRenderCategoriesBusinessCards() {
    
    setShowEditCategoryBusinessCard(false);
    downloaded_BusinessCardsCategories.current = false;
    getBusinessCardCategories("BusinessCardsCategories", storedToken, RenderAfterLoad);

}





    





    const renderContacts = () => {
        const BusinessCards = JSON.parse(localStorage.getItem("userBusinessCards"));
        console.log("BusinessCards");
        console.log(BusinessCards);

        if (BusinessCards !== null)
        {
            return BusinessCards.map((Ligne) => {
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





    const renderBusinessCards = () => {
        const BusinessCards = JSON.parse(localStorage.getItem("userBusinessCards"));
        console.log("BusinessCards");
        console.log(BusinessCards);

        if (BusinessCards !== null)
        {
            return BusinessCards.map((Ligne) => {
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
        const BusinessCardsCategories = JSON.parse(localStorage.getItem("BusinessCardsCategories"));
        if(BusinessCardsCategories !== null){
            console.log('BusinessCardsCategories');
            console.log(BusinessCardsCategories);
            return BusinessCardsCategories.map((BusinessCardCategorie) => {
                if(BusinessCardCategorie.Categorie !== null){
                    return  <Tab eventKey={BusinessCardCategorie.Categorie} title={BusinessCardCategorie.Categorie}>
                                <div className="tab-pane " id="tab-61">
                                    <Row className="row-cards ">
                                        Nothing Added
                                    </Row>
                                </div>
                            </Tab>
                }
            });

        }else{
            console.log("Aucune formation n'est disponible");
        }
    }






    console.log("setShowEditBusinessCard");
    console.log(showEditBusinessCard);
    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">Contacts</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendContactData(true, null) ;}} style={{marginRight: "20px"}}>
                        <span style={{marginRight: '5px'}}><FaUpload/></span>
                        Importer Prospects
                    </button>
                    <button className='btn btn-success' onClick={() => {SendBusinessCardData(true,null)}}>
                        <span> <i className="fe fe-plus"></i></span>
                        Ajouter une Carte
                    </button>
                    <button className='btn btn-success' onClick={() => {setShowEditCategoryBusinessCard(true)}} style={{marginLeft: "20px"}}>
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
                                            show={showEditContact} 
                                            SendCloseMessage={ModalImportBusinessCardClose}  
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
