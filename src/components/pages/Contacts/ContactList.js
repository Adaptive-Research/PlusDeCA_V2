import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {/*getUserContacts,*/getUserBusinessCards} from "../../../data/customlibs/api";
import CardContact from "./CardContact" ;
import ModalEditContact from "./ModalEditContact" ;
import CardBusinessCard from "./CardBusinessCard" ;
import ModalEditBusinessCard from "./ModalEditBusinessCard" ;
import {FaUpload} from 'react-icons/fa';
import '../../../assets/css/ModalEditBusinessCard.css';
    
  



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


    // pour 
    const [modeEdit,setModeEdit]= useState("") ;


    //Les variables pour la sauvegarde des Cartes de Visites

    const [lieuRencontre,setLieuRencontre] = useState("");
    const [entreprise,setEntreprise] = useState("");
    const [siteWeb,setSiteWeb] = useState("");
    const [sexe,setSexe] = useState("");
    const [prenom,setPrenom] = useState("");
    const [nom,setNom] = useState("");
    const [fonction,setFonction] = useState("");
    const [telephone,setTelephone] = useState("");
    const [email,setEmail] = useState("");



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
            
        reloadInfos.current = false ;
    }

    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
       // console.log("downloaded_BusinessCards.current") ;
        //console.log(downloaded_BusinessCards.current) ;
        
      /*  if (variable === "userContacts")
            downloaded_Contacts.current = true ;
*/
        if (variable === "userBusinessCards")
            downloaded_BusinessCards.current = true ;            
    
        if ( downloaded_BusinessCards.current === true )
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
            /*
            setIdAncestor("") ;
            setTitle("") ;
            setCategory("1") ;
            setText("") ;
            setHtml("") ;
            setPhoto("") ;
            */
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            //console.log("Contact") ;
            //console.log(Contact) ;

            /*
            setIdAncestor(Contact.idAncestor) ;
            setTitle(Contact.Contact_Title) ;
            setCategory(Contact.Contact_Category) ;
            setText(Contact.Contact_Text) ;
            setHtml(Contact.Contact_Html) ;
            setPhoto(Contact.Contact_Image) ;
            */
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
        setSiteWeb(BusinessCard.SiteWeb);
        setSexe(BusinessCard.Sexe);
        setPrenom(BusinessCard.Prenom);
        setNom(BusinessCard.Nom);
        setFonction(BusinessCard.Fonction);
        setTelephone(BusinessCard.Telephone);
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
    
    //console.log("ForceRenderBusinessCard") ;
    setShowEditBusinessCard(false) ;

    downloaded_BusinessCards.current = false ;    
    getUserBusinessCards("userBusinessCards",storedToken, RenderAfterLoad) ;
}














    





    const renderContacts = () => {
        const Contacts = JSON.parse(localStorage.getItem("userContacts"));

        if (Contacts !== null)
        {
            //console.log("Contacts") ;
            //console.log(Contacts);

            return Contacts.map((Ligne) => {
                //console.log("Ligne.id: "+Ligne.id) ;
                    if (Ligne.iscurrent === "1") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardContact
                                        Contact={Ligne}
                                        SendContactData={SendContactData}  
                                        ForceRenderContact = {ForceRenderContact}
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
                    if (Ligne.iscurrent === "1") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardBusinessCard
                                        BusinessCard={Ligne}
                                        //SendBusinessCardData={SendBusinessCardData}  
                                        ForceRenderBusinessCard = {ForceRenderBusinessCard}
                                    /> 
                                </Col> ;
                })
        }
        else
            return "" ;
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
                        Importer Contacts
                    </button>
                    <button className='btn btn-success' onClick={() => {SendBusinessCardData(true,null)}}>
                        <span> <i className="fe fe-plus"></i></span>
                        Ajouter une Carte
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


                                        <ModalEditContact
                                            Render={compteur}
                                            show={showEditContact} 
                                            SendCloseMessage={ModalEditContactClose}  
                                            ForceRenderContact={ForceRenderContact}
                                            ModeEdit={modeEdit}
                                        />


                                        <ModalEditBusinessCard
                                            Render={compteur}
                                            show={showEditBusinessCard} 
                                            SendCloseMessage={ModalEditBusinessCardClose}  
                                            ForceRenderBusinessCard={ForceRenderBusinessCard}
                                            ModeEdit={modeEdit}
                                            LieuRencontre={lieuRencontre}
                                            Entreprise={entreprise}
                                            SiteWeb={siteWeb}
                                            Sexe={sexe}
                                            Prenom={prenom}
                                            Nom={nom}
                                            Fonction={fonction}
                                            Telephone={telephone}
                                            Email={email}
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
                                                        {renderContacts()}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title="Cartes de visite">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderBusinessCards()}
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
