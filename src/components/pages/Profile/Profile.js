import React, { useState} from "react";

import {Breadcrumb, Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";

import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import * as profiledata from "../../../data/Pages/profiledata/profiledata";
import CardBodyProfile from "./CardBodyProfile" ;
import CardPersonalInformation from "./CardPersonalInformation" ;
import TabFriends from "./TabFriends" ;
import TabFollowers from "./TabFollowers" ;
import TabCompany from "./TabCompany/TabCompany" ;
import {getTranslations} from "../../../data/customlibs/api";
import {getProfile} from "../../../data/customlibs/api";





export default function Profile(props) {

    console.log("Profile") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
  

    // pour l'affichage des tabs
    const [key, setKey] = useState('Profile')


 // pour les traductions
    const sProfile = "Profile";
    const sCompany = "Company";

    const [profile, setProfile] = useState(sProfile);
    const [company, setCompany] = useState(sCompany);

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const [userProfile,setUserProfile] = useState([]) ;




  // pour le reload des infos
  //const [reloadTraductions, setReloadTraductions] = useState(true) ;


 



    function TranslateAll(url, Page,VL) 
    {
        let data = getTranslations(url,Page,VL) ;


        let t = FindTranslation(data, Page, VL, sProfile);
        if (t !== "Not Found")
            setProfile(t);
        t = FindTranslation(data, Page, VL, sCompany);
        if (t !== "Not Found")
            setCompany(t);
    
    }
    





    function RenderAfterLoad(response){
        console.log("RenderAfterLoad") ;
        setUserProfile(JSON.parse(localStorage.getItem("profileDetails")));
        console.log("Profil Utilisateur");
        console.log(userProfile);
    }




    // recuperation des informations au depart
    if (reloadInfos === true)
    {
       
        getProfile(storedToken,idUser, RenderAfterLoad) ;
     

        let k = localStorage.getItem('key_Profile') ;
        if (k != null)
            setKey(k) ;

        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "Profile";
        const VL = "FR";

        TranslateAll(url, Page, VL);
        setReloadInfos(false) ;
    }



    // pour les tabs
    function SaveKey(key)
    {
        localStorage.setItem('key_Profile',key) ;
        setKey(key) ;
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
                    {/*
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
                    */}
                </div>

                <Row id="user-profile">
                    <Col lg={12}>
                        <Card className=" bg-transparent shadow-none border-0">
                            <CardBodyProfile UserProfile={userProfile}/>


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
                                                            <CardPersonalInformation UserProfile={userProfile}/>
                                                        </div>
                                                    </div>
                                                </Tab>


                                                <Tab eventKey="Company" title={company}>
                                                    <TabCompany />
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

