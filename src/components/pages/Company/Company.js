import React, { useState} from "react";

import {Card, Col, Row} from "react-bootstrap";

import {FindTranslation,getIDFromToken} from  "../../../data/customlibs/utils";
import TabCompany from "./TabCompany/TabCompany" ;
import {getProfile} from "../../../data/customlibs/api";





export default function Company(props) {

    console.log("Company") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;
  

    

 // pour les traductions
    const sCompany = "Company";

    const [company, setCompany] = useState(sCompany);

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const [userProfile,setUserProfile] = useState([]) ;

    const [reloadTraductions, setReloadTraductions] = useState(true) ;




  // pour le reload des infos
  //const [reloadTraductions, setReloadTraductions] = useState(true) ;


 



    function TranslateAll(data,Page) 
    {
        let t = FindTranslation(data, Page, sCompany);
        if (t !== "Not Found")
            setCompany(t);
    
    }
    


    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"Profile") ;
        setReloadTraductions(false) ;
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
     


        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "Company";
        const VL = "FR";

        TranslateAll(url, Page, VL);
        setReloadInfos(false) ;
    }




    function Render() {
        return (
            <div>

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
                                            <TabCompany />
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

