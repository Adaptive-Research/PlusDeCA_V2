import React, { useState,useRef} from "react";

import {Button,Row,Col,Card} from "react-bootstrap";

import {getIDFromToken,FindTranslation} from "../../../data/customlibs/utils";
import {getCompaniesForUser ,getActivitiesForUser, getEntrepriseUtilisateur} from "../../../data/customlibs/api";
import CardCompany from "./CardCompany" ;
import ModalEditCompany from "./ModalEditCompany" ;
import ModalEditActivity from "./ModalEditActivity" ;
import ModalLinkCompany from "./ModalLinkCompany" ;






export default function CompanyList(props) {

    console.log("CompanyList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
  


    

    const sCompany = "Company" ;
    const sCreateNewCompany = "Create a new company";
    const sLinkExistingCompany = "Link with an existing company";
    const sAccessRights = "Access rights";
    const sFounder = "Founder";
    const sAddActivity = "Add an activity";
    const sJobLabel = "Job";
    const sCancel = 'Cancel';
    const sSave = 'Save';
    const sClose = 'Close';
    const sEmailLabel = "E-mail";
    const [company, setCompany] = useState(sCompany) ;
    const [createNewCompany,setCreateNewCompany] = useState(sCreateNewCompany);
    const [linkExistingCompany, setLinkExistingCompany] = useState(sLinkExistingCompany);
    const [addActivityBtn, setAddActivityBtn] = useState(sAddActivity);
    const [founderLabel,setFounderLabel] = useState(sFounder)
    const [accessRightsLabel, setAcessRightsLabel] = useState(sAccessRights);
    const [emailLabel, setEmailLabel]=useState(sEmailLabel);
    const [jobLabel,setJobLabel]= useState(sJobLabel);
    const [saveBtn, setSaveBtn] = useState(sSave);
    const [cancelBtn, setCancelBtn] = useState(sCancel);
    const [closeBtn, setCloseBtn] = useState(sClose); 



    // pour l'affichage des fenetres modales
    const [showEditCompany, SetShowEditCompany] = useState(false) ;
    const [showEditActivity, SetShowEditActivity] = useState(false) ;
    const [showLinkCompany, SetShowLinkCompany] = useState(false) ;


    // les informations pour la fenetre modale ModalEditEntreprise 
    const sAjouterEntreprise = "Add a company" ;
    const sEditEntreprise = "Edit company information" ;
    const sName = "Name";
    const sWebsite = "Website";
    const sPhone = "Phone";
    const [titleModalEditCompany, SetTitleModalEditCompany] = useState( sAjouterEntreprise ) ;
    const [companyModalTitle, setCompanyModalTitle] = useState(titleModalEditCompany);
    const [nameLabel, setNameLabel] = useState(sName);
    const [websiteLabel,setWebsiteLabel] = useState(sWebsite);
    const [phoneLabel,setPhoneLabel] = useState(sPhone);
    // les informations pour la fenetre modale ModalEditActivity 
    const sAjouterActivite = "Add an activity" ;
    const sEditActivite = "Edit activity information" ;
    const [titleModalEditActivity, SetTitleModalEditActivity] = useState( sAjouterActivite ) ;
    const [activityModalTitle, setActivityModalTitle] = useState(titleModalEditActivity);
    const sDescription = "Description";
    const [descriptionLabel, setDescriptionLabel] = useState(sDescription);



    const [modeEdit,SetModeEdit]= useState("") ;
    const [idEntreprise, SetIdEntreprise] = useState("");
    const [idActivite, SetIdActivite] = useState("");
    const [siret, SetSiret] = useState("");
    const [name, SetName] = useState("");
    const [website, SetWebsite] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");
    const [description, SetDescription] = useState("");
    const [job, SetJob] = useState("");
    const [fondateur, SetFondateur] = useState("");


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    const [myCompanies,setMyCompanies] = useState([]) ;
    


    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;


    // pour le ForceRender
    const downloaded_UserActivities = useRef(false) ;
    const downloaded_UserCompanies = useRef(false) ;
    const downloaded_EntrepriseUtilisateur = useRef(true) ;


    function TranslateAll(data,Page) 
    {
        let t = FindTranslation(data, Page,  sCompany);
        if (t !== "Not Found")
            setCompany(t);

        t = FindTranslation(data, Page,  sCreateNewCompany);
        if (t !== "Not Found")
            setCreateNewCompany(t);

        t = FindTranslation(data, Page,  sAddActivity);
        if (t !== "Not Found")
            setAddActivityBtn(t);

        t = FindTranslation(data, Page,  sLinkExistingCompany);
        if (t !== "Not Found")
            setLinkExistingCompany(t);

        t = FindTranslation(data, Page,  sFounder);
        if (t !== "Not Found")
            setFounderLabel(t);

        t = FindTranslation(data, Page,  sEmailLabel);
        if (t !== "Not Found")
            setEmailLabel(t);

        t = FindTranslation(data, Page,  sAccessRights);
        if (t !== "Not Found")
            setAcessRightsLabel(t);

        t = FindTranslation(data, Page,  sJobLabel);
        if (t !== "Not Found")
            setJobLabel(t);

        t = FindTranslation(data, Page,  sCancel);
        if (t !== "Not Found")
            setCancelBtn(t);

        t = FindTranslation(data, Page,  sClose);
        if (t !== "Not Found")
            setCloseBtn(t);

        t = FindTranslation(data, Page,  sSave);
        if (t !== "Not Found")
            setSaveBtn(t);

        t = FindTranslation(data, Page,  titleModalEditCompany);
        if (t !== "Not Found")
            setCompanyModalTitle(t);

        t = FindTranslation(data, Page,  titleModalEditActivity);
        if (t !== "Not Found")
            setActivityModalTitle(t);

        t = FindTranslation(data, Page,  sName);
        if (t !== "Not Found")
            setNameLabel(t);

        t = FindTranslation(data, Page,  sWebsite);
        if (t !== "Not Found")
            setWebsiteLabel(t);

        t = FindTranslation(data, Page,  sPhone);
        if (t !== "Not Found")
            setPhoneLabel(t);

        t = FindTranslation(data, Page,  sDescription);
        if (t !== "Not Found")
            setDescriptionLabel(t);
    }



    
    if (reloadTraductions === true) {
        setReloadTraductions(false) ;
        TranslateAll(Translations_Text,"CompanyList") ;
       
    }


    



    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        //console.log("reloadInfos") ;
        getActivitiesForUser("userActivities",storedToken,idUser,RenderAfterLoad) ;
        getCompaniesForUser("userCompanies",storedToken,idUser,RenderAfterLoad) ;

        /**
        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "CompanyList";
        const VL = "FR";

        TranslateAll(url, Page, VL); */
            
        setReloadInfos(false) ;
    }




    // Les callbacks


    // le callback qui est appele apres le chargement des donnees
    function RenderAfterLoad(variable) {

        //console.log("RenderAfterLoad: "+ variable) ;

        if (variable === "userActivities")
            downloaded_UserActivities.current = true ;

        if (variable === "userCompanies")
            downloaded_UserCompanies.current = true ;

        if (variable === 'EntrepriseUtilisateur')
            downloaded_EntrepriseUtilisateur.current = true ;                
            
        
        if (downloaded_UserActivities.current && downloaded_UserCompanies.current && downloaded_EntrepriseUtilisateur.current)
        {
            ClearCompanyData() ;
            setMyCompanies(JSON.parse(localStorage.getItem("userCompanies"))) ;
            setCompteur(compteur+1) ; 
        }
        
        
    }










    // Callbacks pour la fenetre ModalEditCompany
    // il y en a 3
    // - ModalEditCompanyClose
    // - SendCompanyData
    // - ForceRenderCompany


    // C'est le callback appele quand on ferme ModalEditCompany 
    function ModalEditCompanyClose()
    {
        //console.log("ModalEditCompanyClose") ;
        SetShowEditCompany(false) ;
    }


    function ClearCompanyData() {
        SetIdEntreprise("") ;
        SetSiret("") ;
        SetName("") ;
        SetWebsite("") ;
        SetEmail("") ;
        SetPhone("") ;
        SetJob("") ;
        SetFondateur("") ;
    }

    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendCompanyData(ShowWindow, Ligne) {
        //console.log("SendCompanyData")
        if (Ligne === null)
        {
            SetModeEdit("Add") ;
            SetTitleModalEditCompany(sAjouterEntreprise) ;
            setReloadTraductions(true);
            
            ClearCompanyData() ;
        }
        else
        {
            SetModeEdit("Edit") ;
            setReloadTraductions(true);
            SetTitleModalEditCompany(sEditEntreprise) ;
            setCompanyModalTitle(sEditEntreprise);
            SetIdEntreprise(Ligne.idEntreprise) ;
            SetSiret(Ligne.Siret) ;
            SetName(Ligne.NomEntreprise) ;
            SetWebsite(Ligne.SiteWeb) ;
            SetEmail(Ligne.Email) ;
            SetPhone(Ligne.Telephone) ;
            SetJob(Ligne.Fonction) ;
            SetFondateur(Ligne.Fondateur) ;
        }


        if (ShowWindow === "false")
            SetShowEditCompany(false) ;
        else
            SetShowEditCompany(true) ;
    }



    function ForceRenderCompany() {
        console.log("ForceRenderCompany") ;

        setMyCompanies([]) ;
        downloaded_UserCompanies.current = false ;
        getCompaniesForUser("userCompanies",storedToken,idUser,RenderAfterLoad) ;

        // On doit recharger les droits d'access
        downloaded_EntrepriseUtilisateur.current = false ;
        getEntrepriseUtilisateur('EntrepriseUtilisateur',storedToken,RenderAfterLoad) ; 

    }










    // Callbacks pour la fenetre ModalEditActivity
    // il y en a 3
    // - ModalEditActivityClose
    // - SendActivityData
    // - ForceRenderActivity




     // C'est le callback appele quand on ferme ModalEditActivity
    function ModalEditActivityClose()
    {
        //console.log("ModalEditActivityClose") ;
        SetShowEditActivity(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardActivity, il sert a replir la fenetre ModalEditActivity
    function SendActivityData(ShowWindow,idEntreprise2, Ligne) {
        //console.log("SendActivityData: " + idEntreprise2) ;


        if (Ligne === null)
        {
            SetModeEdit("Add") ;

            SetTitleModalEditActivity(sAjouterActivite) ;
            SetIdEntreprise(idEntreprise2) ;
            SetIdActivite("") ;
            SetName("") ;
            SetWebsite("") ;
            SetEmail("") ;
            SetPhone("") ;
            SetDescription("") ;
        }
        else
        {
            SetModeEdit("Edit") ;


            SetTitleModalEditActivity(sEditActivite) ;
            SetIdEntreprise(idEntreprise2) ;
            SetIdActivite(Ligne.idActivite) ;
            SetName(Ligne.Activite_Nom) ;
            SetWebsite(Ligne.Activite_SiteWeb) ;
            SetEmail(Ligne.Activite_Email) ;
            SetPhone(Ligne.Activite_Telephone) ;
            SetDescription(Ligne.Description) ;
        }


        if (ShowWindow === "false")
            SetShowEditActivity(false) ;
        else
            SetShowEditActivity(true) ;

    }


    
    function ForceRenderActivity() {
        //console.log("ForceRenderActivity") ;

        downloaded_UserActivities.current = false ;
        getActivitiesForUser("userActivities",storedToken,idUser,RenderAfterLoad) ;
    }

    




    function ModalLinkCompanyClose()
    {
        //console.log("ModalEditActivityClose") ;
        SetShowLinkCompany(false) ;
    }


    // C'est le handle du bouton Link a company 
    const LinkCompany = (e) => {
        e.preventDefault();
        SetShowLinkCompany(true) ;
    }


    



    // C'est le handle du bouton Add a company 
    const AddCompany = (e) => {
        e.preventDefault();
        SendCompanyData(true,null) ;
    }




    // le render du composant
    function RenderCompanies() {
        //console.log("renderCompanies") ;
      
   
        if (myCompanies !== null ) 
        {
            return myCompanies.map( (Ligne) => <CardCompany 
                                                        key={Ligne.idEntreprise} 
                                                        Ligne={Ligne} 

                                                        Render={compteur}

                                                        SendCompanyData={SendCompanyData}  
                                                        SendActivityData={SendActivityData} 
                                                        ForceRenderCompany = {ForceRenderCompany}
                                                        ForceRenderActivity = {ForceRenderActivity}
                                                        
                                                        addActivityBtn={addActivityBtn}
                                                        founderLabel={founderLabel}
                                                        accessRightsLabel={accessRightsLabel}
                                                        jobLabel={jobLabel}
                                                        emailLabel={emailLabel}
                                                        nameLabel={nameLabel}
                                                        websiteLabel={websiteLabel}
                                                        phoneLabel={phoneLabel}
                                                        
                                                        />  );
        }

    }


    function RenderAll() {
        return ( 
            <>
                <Button variant="primary" onClick={AddCompany} >{createNewCompany}</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={LinkCompany} >{linkExistingCompany}</Button>
                { RenderCompanies() } 
            </>
            ) ;
    }


    return (
        <>
            <div className="page-header">
                <h1 className="page-title">{company}</h1>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 profiletabs">

                                        <div className="tab-pane profiletab show">
                                            <div id="profile-log-switch">

                                                <ModalEditCompany 
                                                Render={compteur}
                                                show={showEditCompany} 
                                                SendCloseMessage={ModalEditCompanyClose}  
                                                ForceRender={ForceRenderCompany}
                                                Mode={modeEdit}
                                                
                                                idEntreprise={idEntreprise}
                                                Titre={companyModalTitle} 
                                                Siret = {siret} 
                                                Nom= {name}
                                                SiteWeb = {website}
                                                Email = {email}
                                                Telephone = {phone}
                                                Fondateur={fondateur}
                                                Fonction={job}

                                                founderLabel={founderLabel}
                                                accessRightsLabel={accessRightsLabel}
                                                jobLabel={jobLabel}
                                                emailLabel={emailLabel}
                                                nameLabel={nameLabel}
                                                websiteLabel={websiteLabel}
                                                phoneLabel={phoneLabel}
                                                cancelBtn={cancelBtn}
                                                saveBtn={saveBtn}
                                                closeBtn={closeBtn}
                                                />

                                                <ModalEditActivity
                                                Render={compteur}
                                                show={showEditActivity} 
                                                SendCloseMessage={ModalEditActivityClose}  
                                                ForceRenderActivity={ForceRenderActivity}
                                                Mode={modeEdit}
                                                idEntreprise={idEntreprise}
                                                idActivite={idActivite}
                                                Titre={activityModalTitle} 
                                                Nom= {name}
                                                SiteWeb = {website}
                                                Email = {email}
                                                Telephone = {phone}
                                                Description = {description}
                                                descriptionLabel={descriptionLabel}
                                                founderLabel={founderLabel}
                                                accessRightsLabel={accessRightsLabel}
                                                jobLabel={jobLabel}
                                                emailLabel={emailLabel}
                                                nameLabel={nameLabel}
                                                websiteLabel={websiteLabel}
                                                phoneLabel={phoneLabel}
                                                cancelBtn={cancelBtn}
                                                saveBtn={saveBtn}
                                                closeBtn={closeBtn}
                                                />

                                                <ModalLinkCompany 
                                                Render={compteur}
                                                show={showLinkCompany} 
                                                SendCloseMessage={ModalLinkCompanyClose}  
                                                ForceRender={ForceRenderCompany}
                                                cancelBtn={cancelBtn}
                                                saveBtn={saveBtn}
                                                closeBtn={closeBtn}
                                                companyLabel={company}
                                                founderLabel={founderLabel}
                                                jobLabel={jobLabel}
                                                />

                                                {RenderAll()}


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </Card>
                    </Col>
                </Row>
        </>
    );

}

