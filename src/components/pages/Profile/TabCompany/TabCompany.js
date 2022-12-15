import React, { useState,useRef} from "react";

import {Button} from "react-bootstrap";

import {getIDFromToken} from "../../../../data/customlibs/utils";
import {getCompaniesForUser ,getActivitiesForUser} from "../../../../data/customlibs/api";
import CardCompany from "./CardCompany" ;
import ModalEditCompany from "./ModalEditCompany" ;
import ModalEditActivity from "./ModalEditActivity" ;






export default function TabCompany(props) {

    console.log("Profile") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const AllTranslations = JSON.parse(localStorage.getItem('AllTranslations')) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
  


    






    // pour l'affichage des fenetres modales
    const [showEditCompany, SetShowEditCompany] = useState(false) ;
    const [showEditActivity, SetShowEditActivity] = useState(false) ;


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
    const downloaded_UserEnterprises = useRef(false) ;


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
        TranslateAll(AllTranslations,"TabCompany") ;
        setReloadTraductions(false) ;
    }


    



    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        //console.log("reloadInfos") ;
        getActivitiesForUser("userActivities",storedToken,idUser,RenderAfterLoad) ;
        getCompaniesForUser("userEnterprises",storedToken,idUser,RenderAfterLoad) ;


        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "TabCompany";
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

        if (variable === "userEnterprises")
            downloaded_UserEnterprises.current = true ;
            
        
        if ((downloaded_UserActivities.current === true) && (downloaded_UserEnterprises.current === true))
        {
            //console.log("compteur+1") ;
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

        downloaded_UserEnterprises.current = false ;
        getCompaniesForUser("userEnterprises",storedToken,idUser,RenderAfterLoad) ;
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

    








    



    // C'est le handle du bouton Add a company 
    const AddCompany = (e) => {
        e.preventDefault();
        SendCompanyData(true,null) ;
    }




    // le render du composant
    function RenderCompanies() {
        //console.log("renderCompanies") ;
        const myCompanies = JSON.parse(localStorage.getItem("userEnterprises"));
   
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
                <Button variant="primary" onClick={AddCompany} > Add a company</Button>
                { RenderCompanies() } 
            </>
            ) ;
    }


    return (

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

                {RenderAll()}


            </div>
        </div>
    );

}

