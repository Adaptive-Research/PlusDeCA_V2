import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation} from "../../../data/customlibs/utils" ;
import {getBusinessCardCategories, getUserBusinessCards} from "../../../data/customlibs/api";
import CardBusinessCard from "./CardBusinessCard" ;
import ModalEditBusinessCard from "./ModalEditBusinessCard" ;
import {FaUpload} from 'react-icons/fa';
import '../../../assets/css/ModalEditBusinessCard.css';
import ModalImportBusinessCard from "./ModalImportBusinessCard.js";
import ModalEditCategoryBusinessCard from "./ModalEditCategoryBusinessCard.js";
import ModalClassifyBusinessCard from "./ModalClassifyBusinessCard.js";
import '../../../assets/css/GlobalInputbackground.css';

    
  



export default function ContactList() {
    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;

    // pour l'affichage des fenetres modales
    const [showImportContact, setShowImportContact] = useState(false) ;
    const [showEditBusinessCard, setShowEditBusinessCard] = useState(false) ;
    const [showClassifyBusinessCard, setShowClassifyBusinessCard] = useState(false) ;
    const [showEditCategoryBusinessCard, setShowEditCategoryBusinessCard] = useState(false);


    const AllTranslations = JSON.parse(localStorage.getItem('AllTranslations')) ;

    console.log('Mes traductions');
    console.log(AllTranslations);

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
    const [reloadTraductions, setReloadTraductions] = useState(true) ;

     //Pour les Tabs
     const sBusinessCards = 'Business Cards';
    //Pour les Boutons
    const sImportLeads ='Import Leads';
    const sAddCard = 'Add Card';
    const sManageCategories ='Manage Categories';
    const sCancel = 'Cancel';
    const sSave = 'Save';
    const sClose = 'Close';

    //Pour les Modales 
    const sImportBusinessCard = 'Import Business Card';
    const sBusinessCard = 'Business Card';
    const sAddFile = 'Add a File';
    const sCategories = 'Categories'
    const sAdd = 'Add';
    // Pour les Champs de Modales 
    const sCompanyInfo = 'Company Info';
    const sContactInfo = 'Contact Info';
    const sMeetingPlace = 'Meeting Place';
    const sCompany = 'Company';
    const sBusinessPhone = 'Company Phone';
    const sTelephoneContact = 'Phone';
    const sWebsite = 'Website';
    const sActivity='Interested by Activity';
    const sName= 'Name';
    const sFirstName = 'Firstname';
    const sGender = 'Gender';
    const sFunction = 'Job';
    const sEmail = 'E-mail'; 
    const sMan ='Man';


    const [cancel, setCancel] = useState(sCancel);
    const [save, setSave] = useState(sSave);
    const [titleBusinessCards, setTitleBusinessCards] = useState(sBusinessCards);
    const [importLeads, setImportLeads] = useState(sImportLeads);
    const [addCard, setAddCard] = useState(sAddCard);
    const [manageCategories, setManageCategories] = useState(sManageCategories);
    const [close, setClose] = useState(sClose);
    const [importBusinessCard, setImportBusinessCard]=useState(sImportBusinessCard);
    const [businessCard, setBusinessCard]=useState(sBusinessCard);
    const [addFile, setAddFile]=useState(sAddFile);
    const [categories, setCategories]=useState(sCategories);
    const [add, setAdd]=useState(sAdd);
    const [companyInfo, setCompanyInfo]=useState(sCompanyInfo);
    const [contactInfo, setContactInfo]=useState(sContactInfo);
    const [meetingPlace, setMeetingPlace]=useState(sMeetingPlace);
    const [company, setCompany]=useState(sCompany);
    const [businessPhone, setBusinessPhone]=useState(sBusinessPhone);
    const [website, setWebsite]=useState(sWebsite);
    const [telephoneContact, setTelephoneContact]=useState(sTelephoneContact);
    const [activity, setActivity]=useState(sActivity);
    const [name, setName]=useState(sName);
    const [firstName, setFirstName]=useState(sFirstName);
    const [gender, setGender]=useState(sGender);
    const [cFunction, setCFunction]=useState(sFunction);
    const [cEmail, setCEmail]=useState(sEmail);
    const [man, setMan]=useState(sMan);
    const [idEntreprise,setIdEntreprise]=useState("0") ;
    const [idActivite,setIdActivite]=useState("0") ;





    function TranslateAll(data,Page){

        console.log('TranslateAll') ;
        console.log(data);
    
        let t = FindTranslation(data,Page, sBusinessCards) ;
        if (t !== "Not Found")
        setTitleBusinessCards(t) ;

        t = FindTranslation(data,Page, sCancel) ;
        if (t !== "Not Found")
          setCancel(t) ;
    
        t = FindTranslation(data,Page, sSave) ;
        if (t !== "Not Found")
          setSave(t) ;

        t = FindTranslation(data,Page, sImportLeads) ;
        if (t !== "Not Found")
          setImportLeads(t) ;
          
        t = FindTranslation(data,Page, sAddCard) ;
        if (t !== "Not Found")
          setAddCard(t) ;

        t = FindTranslation(data,Page, sManageCategories) ;
        if (t !== "Not Found")
          setManageCategories(t) ;

        t = FindTranslation(data,Page, sClose) ;
        if (t !== "Not Found")
          setClose(t) ;

        t = FindTranslation(data,Page, sBusinessCard) ;
        if (t !== "Not Found")
          setBusinessCard(t) ;

        t = FindTranslation(data,Page, sAddFile) ;
        if (t !== "Not Found")
          setAddFile(t) ;

        t = FindTranslation(data,Page, sAdd) ;
        if (t !== "Not Found")
          setAdd(t) ;

        t = FindTranslation(data,Page, sCategories) ;
        if (t !== "Not Found")
          setCategories(t) ;

        t = FindTranslation(data,Page, sCompanyInfo) ;
        if (t !== "Not Found")
          setCompanyInfo(t) ;

        t = FindTranslation(data,Page, sContactInfo) ;
        if (t !== "Not Found")
          setContactInfo(t) ;

        t = FindTranslation(data,Page, sMeetingPlace) ;
        if (t !== "Not Found")
          setMeetingPlace(t) ;

        t = FindTranslation(data,Page, sCompany) ;
        if (t !== "Not Found")
          setCompany(t) ;

        t = FindTranslation(data,Page, sBusinessPhone) ;
        if (t !== "Not Found")
          setBusinessPhone(t) ;

        t = FindTranslation(data,Page, sWebsite) ;
        if (t !== "Not Found")
          setWebsite(t) ;

        t = FindTranslation(data,Page, sTelephoneContact) ;
        if (t !== "Not Found")
          setTelephoneContact(t) ;

        t = FindTranslation(data,Page, sActivity) ;
        if (t !== "Not Found")
          setActivity(t) ;

        t = FindTranslation(data,Page, sName) ;
        if (t !== "Not Found")
          setName(t) ;

        t = FindTranslation(data,Page, sFirstName) ;
        if (t !== "Not Found")
          setFirstName(t) ;

        t = FindTranslation(data,Page, sGender) ;
        if (t !== "Not Found")
          setGender(t) ;

        t = FindTranslation(data,Page, sFunction) ;
        if (t !== "Not Found")
          setCFunction(t) ;

        t = FindTranslation(data,Page, sMan) ;
        if (t !== "Not Found")
          setMan(t) ;

        t = FindTranslation(data,Page, sEmail) ;
        if (t !== "Not Found")
          setCEmail(t) ;

        t = FindTranslation(data,Page, sImportBusinessCard) ;
        if (t !== "Not Found")
          setImportBusinessCard(t) ;
    }
    







    console.log("ContactList") ;
    const storedToken = localStorage.getItem('token') ;


    
 
    if (reloadTraductions === true) {
        TranslateAll(AllTranslations,"ContactList") ;
        setReloadTraductions(false) ;
    }
      
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
        ClearBusinessCard() ;

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


    function ClearBusinessCard() {
        console.log("ClearBusinessCard") ;
        
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
        setIdEntreprise("0") ;
        setIdActivite("0") ;
    }





    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendBusinessCardData(Mode, BusinessCard) {
        console.log("SendBusinessCardData")
        if (Mode === "Add")
        {
            setModeEdit("Add") ;
            ClearBusinessCard() ;
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
            setIdEntreprise(BusinessCard.idEntreprise) ;
        }
        setCompteur(compteur+1) ;

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
                        {importLeads}
                    </button>
                    <button className='btn btn-success' onClick={() => {SendBusinessCardData("Add",null)}}  style={{marginLeft: "0.5rem",marginRight: "0.5rem"  }}>
                        <span> <i className="fe fe-plus"></i></span>
                        {addCard}
                    </button>
                    <button className='btn btn-success' onClick={() => {setShowEditCategoryBusinessCard(true)}} >
                        <span> <i className="fe fe-plus"></i></span>
                        {manageCategories}
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
                                            idEntreprise={idEntreprise}
                                            idActivite={idActivite}
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
                                            CompanyInfo={companyInfo}
                                            ContactInfo={contactInfo}
                                            Man={man}
                                            EmailField={cEmail}
                                            FunctionField={cFunction}
                                            NameField={name}
                                            FirstnameField={firstName}
                                            GenderField={gender}
                                            MeetingPlace={meetingPlace}
                                            CompanyField={company}
                                            BusinessPhone={businessPhone}
                                            WebsiteField={website}
                                            TelephoneContactField={telephoneContact}
                                            ActivityField={activity}
                                            SaveButton={save}
                                            CancelButton={cancel}
                                        />


                                        <ModalImportBusinessCard
                                            Render={compteur}
                                            show={showImportContact} 
                                            SendCloseMessage={ModalImportBusinessCardClose}  
                                            ForceRenderBusinessCard={ForceRenderBusinessCard}
                                            TitleBusinessCards={titleBusinessCards}
                                            AddFileLabel={addFile}
                                            ImportBusinessCard={importBusinessCard}
                                            CloseButton={close}
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
                                            CategoriesTitle={categories}
                                            AddButton={add}
                                            SaveButton={save}
                                            CancelButton={cancel}
                                        />





                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="BusinessCard"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >

                                            <Tab eventKey="BusinessCard" title={titleBusinessCards}>
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
