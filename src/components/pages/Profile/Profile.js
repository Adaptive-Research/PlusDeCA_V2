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






export default function Profile(props) {

    console.log("Profile") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
  



    
    const navigate = useNavigate();


    const sProfile = "Profile";
    const sCompany = "Company";

    const [idActivity,setIdActivity] =useState(0) ;

    const [profile, setProfile] = useState(sProfile);
    const [company, setCompany] = useState(sCompany);
    const [defDisplay, setDefDisplay] = useState("block");

     // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;


    // pour le ForceRender
    const [downloaded_UserActivities,setDownloaded_UserActivities] = useState(false) ;
    const [downloaded_UserEnterprises,setDownloaded_UserEnterprises] = useState(false) ;
    const [reRender, setReRender] = useState(0) ;


   
    
   


    if (reloadInfos === true)
    {
        getActivitiesForUser("userActivities",storedToken,idUser,ForceRender) ;
        getEnterprisesByUser("userEnterprises",storedToken,idUser,ForceRender) ;

        TranslateAll(url, Page, VL);
        setReloadInfos(false) ;
    }




    function ForceRender(variable) {
        console.log("ForceRender: "+ variable) ;

        if (variable == "userActivities")
            setDownloaded_UserActivities(true) ;

        if (variable == "userEnterprises")
            setDownloaded_UserEnterprises(true) ;
            
        if ((downloaded_UserActivities === true) && (downloaded_UserEnterprises === true))
            setReRender(reRender+1) ;
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




    function renderCompanies() {
        console.log("renderCompanies") ;
        const myCompanies = JSON.parse(localStorage.getItem("userEnterprises"));

        console.log("userEnterprises") ;
        console.log(myCompanies) ;

        
        if (myCompanies !== null ) 
            return myCompanies.map(CardCompany) ;

    }




    function Render() {

        return (
            <div toto={reRender}>

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
                                                defaultActiveKey="Profile"
                                                id=" tab-51"
                                                className="tab-content tabesbody "
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


                                                            <Row>
                                                                <Col lg={10} xl={8} md={12} sm={12}>
                                                                    {renderCompanies()}
                                                                </Col>

                                                                
                                                                <Col>

                                                                    
                                                                    
                                                                </Col>
                                                                
                                                            </Row>


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

