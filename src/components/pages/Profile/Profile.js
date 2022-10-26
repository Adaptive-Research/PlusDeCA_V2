import React, {useEffect, useState} from "react";

import {Breadcrumb, Card, Col, Row, Tab, Table, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";

import axios from "axios";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getEnterprisesByUser ,getActivitiesForUser} from "../../../data/customlibs/utils";
import * as profiledata from "../../../data/Pages/profiledata/profiledata";
import {useNavigate} from "react-router";
import CardCompany from "./CardCompany" ;
import CardBodyProfile from "./CardBodyProfile" ;
import CardPersonalInformation from "./CardPersonalInformation" ;
import TabFriends from "./TabFriends" ;
import TabFollowers from "./TabFollowers" ;
import ModalEditCompany from "./ModalEditCompany" ;
import ModalEditActivity from "./ModalEditActivity" ;






export default function Profile(props) {

    console.log("Profile") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
  



    
    const navigate = useNavigate();


    // pour les traductions
    const sProfile = "Profile";
    const sCompany = "Company";

    const [profile, setProfile] = useState(sProfile);
    const [company, setCompany] = useState(sCompany);

    // pour l'affichage des tabs
    const [key, setKey] = useState('Profile')


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



    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;


    // pour le ForceRender
    const [downloaded_UserActivities,setDownloaded_UserActivities] = useState(false) ;
    const [downloaded_UserEnterprises,setDownloaded_UserEnterprises] = useState(false) ;


   




    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        console.log("reloadInfos") ;
        getActivitiesForUser("userActivities",storedToken,idUser,ForceRender) ;
        getEnterprisesByUser("userEnterprises",storedToken,idUser,ForceRender) ;

        let k = localStorage.getItem('key_Profile') ;
        if (k != null)
            setKey(k) ;


        TranslateAll(url, Page, VL);
        setReloadInfos(false) ;
    }



    // pour les tabs
    function SaveKey(key)
    {
        localStorage.setItem('key_Profile',key) ;
        setKey(key) ;
    }




    // Les callbacks


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








     // C'est le callback appele quand on ferme ModalEditActivity
    function ModalEditActivityClose()
    {
        //console.log("ModalEditActivityClose") ;
        SetShowEditActivity(false) ;
    }


      // C'est le callback appele quand on clique sur + ou Edit dans CardActivity, il sert a replir la fenetre ModalEditActivity
      function SendActivityData(ShowWindow,idEntreprise2, Ligne) {
        //console.log("SendActivityData") ;

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







    function ForceRender(variable) {
        //console.log("ForceRender: "+ variable) ;

        if (variable === "userActivities")
            setDownloaded_UserActivities(true) ;

        if (variable === "userEnterprises")
            setDownloaded_UserEnterprises(true) ;
            
        if ((downloaded_UserActivities === true) && (downloaded_UserEnterprises === true))
            navigate(0) ;
    }


    






    // Pour la traduction
    const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
    const Page = "Profile";
    const VL = "FR";

    async function TranslateAll(url, Page, VL) {
        const response = axios.post(url, {
            Submit: 1,
            Page: Page,
            ValueLangue: VL
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(function (response) {


            let t = FindTranslation(response.data, Page, VL, sProfile);
            if (t !== "Not Found")
                setProfile(t);
            t = FindTranslation(response.data, Page, VL, sCompany);
            if (t !== "Not Found")
                setCompany(t);


        })
    }









    // le render du composant


    function renderCompanies() {
        //console.log("renderCompanies") ;
        const myCompanies = JSON.parse(localStorage.getItem("userEnterprises"));


        
        if (myCompanies !== null ) 
        {
            let map1 =  myCompanies.map( (Ligne) => <CardCompany 
                                                        key={Ligne.idEntreprise} 
                                                        Ligne={Ligne} SendCompanyData={SendCompanyData}  
                                                        SendActivityData={SendActivityData} 
                                                        ForceRender = {ForceRender}
                                                        />  );
            return map1 ;
        }

    }




    function Render() {

        return (
            <div>

                <div className="page-header">
                    <div>
                        <h1 className="page-title">{profile}</h1>
                        <Breadcrumb className="breadcrumb">
                            <Breadcrumb.Item className="breadcrumb-item" href="#">
                                Pages
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                className="breadcrumb-item active breadcrumds"
                                aria-current="page"
                            >
                                {profile}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ms-auto pageheader-btn">
                        <Link to="#" className="btn btn-primary btn-icon text-white me-3">
                            <span>
                            <i className="fe fe-plus"></i>&nbsp;
                            </span>
                            Add Account
                        </Link>
                        <Link to="#" className="btn btn-success btn-icon text-white">
                            <span>
                            <i className="fe fe-log-in"></i>&nbsp;
                            </span>
                            Export
                        </Link>
                    </div>
                </div>

                <Row id="user-profile">
                    <Col lg={12}>
                        <Card className=" bg-transparent shadow-none border-0">
                            <CardBodyProfile />


                            <div className="border-top ">
                                <div className="wideget-user-tab">
                                    <div className="tab-menu-heading">
                                        <div className="tabs-menu1 profiletabs">
                                            <Tabs
                                                variant="Tabs"
                                                id=" tab-51"
                                                className="tab-content tabesbody "
                                                activeKey={key} onSelect={(e) => SaveKey(e)}
                                            >


                                                <Tab eventKey="Profile" title={profile}>
                                                    <div className="tab-pane profiletab show">
                                                        <div id="profile-log-switch">
                                                            <CardPersonalInformation />
                                                        </div>
                                                    </div>
                                                </Tab>


                                                <Tab eventKey="Company" title={company}>
                                                    <div className="tab-pane profiletab show">
                                                        <div id="profile-log-switch">

                                                        <ModalEditCompany 

                                                        show={showEditCompany} 
                                                        SendCloseMessage={ModalEditCompanyClose}  
                                                        ForceRender={ForceRender}
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
                                                        show={showEditActivity} 
                                                        SendCloseMessage={ModalEditActivityClose}  
                                                        ForceRender={ForceRender}
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

                                                        {renderCompanies()}


                                                        </div>
                                                    </div>
                                                </Tab>

                                                <Tab eventKey="Friends" title="Friends">
                                                    <TabFriends />
                                                </Tab>

                                                <Tab eventKey="Gallery" title="Gallery">
                                                    <div className="tab-pane profiletab" id="tab-71">
                                                        <profiledata.GalleryImagesprofile/>
                                                    </div>
                                                </Tab>
                                         
                                                <Tab eventKey="Followers" title="Followers">
                                                    <TabFollowers />
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


    return Render() ;
}

