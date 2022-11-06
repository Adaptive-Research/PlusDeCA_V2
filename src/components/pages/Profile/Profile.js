import React, { useState} from "react";

import axios from "axios";
import {Breadcrumb, Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";

import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import * as profiledata from "../../../data/Pages/profiledata/profiledata";
import CardBodyProfile from "./CardBodyProfile" ;
import CardPersonalInformation from "./CardPersonalInformation" ;
import TabFriends from "./TabFriends" ;
import TabFollowers from "./TabFollowers" ;
import TabCompany from "./TabCompany/TabCompany" ;






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






    async function TranslateAll(url, Page, VL) {
        //console.log("TranslateAll") ;
        const response = axios.post(url, {
            Submit: 1,
            debug:1 ,
            Page: Page,
            ValueLangue: VL
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(function (response) {

            //console.log(response.data) ;
                        
            let t = FindTranslation(response.data, Page, VL, sProfile);
            if (t !== "Not Found")
                setProfile(t);
            t = FindTranslation(response.data, Page, VL, sCompany);
            if (t !== "Not Found")
                setCompany(t);
        })
    }




    // recuperation des informations au depart
    if (reloadInfos === true)
    {
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

