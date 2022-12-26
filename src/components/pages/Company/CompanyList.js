import React, { useState,useRef} from "react";

import {Button,Row,Col,Card} from "react-bootstrap";

import {getIDFromToken} from "../../../data/customlibs/utils";
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
    const [company, SetCompany] = useState(sCompany) ;




    // pour l'affichage des fenetres modales
    const [showEditCompany, SetShowEditCompany] = useState(false) ;
    const [showEditActivity, SetShowEditActivity] = useState(false) ;
    const [showLinkCompany, SetShowLinkCompany] = useState(false) ;


    // les informations pour le fenetre modale ModalEditEntreprise 
    const sAjouterEntreprise = "Ajouter une entreprise" ;
    const sEditEntreprise = "Modifier les informations d'une entreprise" ;
    const [titleModalEditCompany, SetTitleModalEditCompany] = useState( sAjouterEntreprise ) ;

    // les informations pour le fenetre modale ModalEditActivity 
    const sAjouterActivite = "Ajouter une activité" ;
    const sEditActivite = "Modifier les informations d'une activité" ;
    const [titleModalEditActivity, SetTitleModalEditActivity] = useState( sAjouterActivite ) ;


    const [modeEdit,SetModeEdit]= useState("") ;
    const [idEntreprise, SetIdEntreprise] = useState("");
    const [idActivite, SetIdActivite] = useState("");
    const [siret, SetSiret] = useState("");
    const [name, SetName] = useState("");
    const [website, SetWebsite] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");
    const [description, SetDescription] = useState("");


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    


    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;


    // pour le ForceRender
    const downloaded_UserActivities = useRef(false) ;
    const downloaded_UserCompanies = useRef(false) ;
    const downloaded_EntrepriseUtilisateur = useRef(true) ;


    function TranslateAll(data,Page) 
    {
        /*
        let t = FindTranslation(data, Page,  sMyProfile);
        if (t !== "Not Found")
            setMyProfile(t);
        t = FindTranslation(data, Page,  sSignOut);
        if (t !== "Not Found")
            setSignOut(t);
        t = FindTranslation(data, Page,  sAccountSettings);
        if (t !== "Not Found")
            setSettings(t);
        t = FindTranslation(data, Page,  sMyMessages);
        if (t !== "Not Found")
            setMyMessages(t);
        t = FindTranslation(data, Page,  sMyMails);
        if (t !== "Not Found")
            setMyMails(t);
        */
    }



    
    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"CompanyList") ;
        setReloadTraductions(false) ;
    }


    



    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        //console.log("reloadInfos") ;
        getActivitiesForUser("userActivities",storedToken,idUser,RenderAfterLoad) ;
        getCompaniesForUser("userCompanies",storedToken,idUser,RenderAfterLoad) ;


        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "CompanyList";
        const VL = "FR";

        TranslateAll(url, Page, VL);
            
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


    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendCompanyData(ShowWindow, Ligne) {
        //console.log("SendCompanyData")
        if (Ligne === null)
        {
            SetModeEdit("Add") ;
            SetTitleModalEditCompany(sAjouterEntreprise) ;
            SetIdEntreprise("") ;
            SetSiret("") ;
            SetName("") ;
            SetWebsite("") ;
            SetEmail("") ;
            SetPhone("") ;
        }
        else
        {
            SetModeEdit("Edit") ;
            SetTitleModalEditCompany(sEditEntreprise) ;
            SetIdEntreprise(Ligne.idEntreprise) ;
            SetSiret(Ligne.Siret) ;
            SetName(Ligne.NomEntreprise) ;
            SetWebsite(Ligne.SiteWeb) ;
            SetEmail(Ligne.Email) ;
            SetPhone(Ligne.Telephone) ;
        }


        if (ShowWindow === "false")
            SetShowEditCompany(false) ;
        else
            SetShowEditCompany(true) ;
    }



    function ForceRenderCompany() {
        //console.log("ForceRenderCompany") ;

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
        const myCompanies = JSON.parse(localStorage.getItem("userCompanies"));
   
        if (myCompanies !== null ) 
        {
            return myCompanies.map( (Ligne) => <CardCompany 
                                                        key={Ligne.idEntreprise} 
                                                        Ligne={Ligne} 
                                                        SendCompanyData={SendCompanyData}  
                                                        SendActivityData={SendActivityData} 
                                                        ForceRenderCompany = {ForceRenderCompany}
                                                        ForceRenderActivity = {ForceRenderActivity}
                                                        />  );
        }

    }


    function RenderAll() {
        return ( 
            <>
                <Button variant="primary" onClick={AddCompany} > Create a new company</Button>&nbsp;&nbsp;&nbsp;
                <Button variant="primary" onClick={LinkCompany} > Link with an existing company</Button>
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
                                                Titre={titleModalEditCompany} 
                                                Siret = {siret} 
                                                Nom= {name}
                                                SiteWeb = {website}
                                                Email = {email}
                                                Telephone = {phone}
                                                />

                                                <ModalEditActivity
                                                Render={compteur}
                                                show={showEditActivity} 
                                                SendCloseMessage={ModalEditActivityClose}  
                                                ForceRenderActivity={ForceRenderActivity}
                                                Mode={modeEdit}
                                                idEntreprise={idEntreprise}
                                                idActivite={idActivite}
                                                Titre={titleModalEditActivity} 
                                                Nom= {name}
                                                SiteWeb = {website}
                                                Email = {email}
                                                Telephone = {phone}
                                                Description = {description}
                                                />

                                                <ModalLinkCompany 
                                                Render={compteur}
                                                show={showLinkCompany} 
                                                SendCloseMessage={ModalLinkCompanyClose}  
                                                ForceRender={ForceRenderCompany}
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

