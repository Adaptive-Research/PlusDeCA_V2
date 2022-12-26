import React, { useState, useRef } from "react";

import {Card, Col, Row} from "react-bootstrap";

import {FindTranslation,getIDFromToken,IsAdmin} from  "../../../data/customlibs/utils";
import {getManagedUsers, getCompaniesForUser} from "../../../data/customlibs/api";
import CardCompany from "./CardCompany" ;
import ModalEditUser from "./ModalEditUser" ;


var CryptoJS = require("crypto-js");


export default function ManagedUsersList(props) {

    console.log("ManageUsersList") ;
    //console.log(props) ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;
   
   
    

 // pour les traductions
    const sUsers = "Users";

    const [users, setUsers] = useState(sUsers);

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;
    const [showEditUser, SetShowEditUser] = useState(false) ;

    // 
    const [modeEdit,SetModeEdit]= useState("") ;
    const [idEntreprise, SetIdEntreprise] = useState("");
    const [ligneUser, SetLigneUser] = useState(null);

     // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    const downloaded_ManagedUsers = useRef(false) ;
    const downloaded_Companies = useRef(false) ;

    const EntrepriseUtilisateur = useRef([]) ;




    function RenderAfterLoad(variable){
        console.log("RenderAfterLoad") ;
         //console.log("RenderAfterLoad: "+ variable) ;

         if (variable === "ManagedUsers")
                downloaded_ManagedUsers.current = true ;


        if (variable === "userCompanies")
            downloaded_Companies.current = true ;    
        
        if (downloaded_ManagedUsers.current === true)
        {
            //console.log("compteur+1") ;
            setCompteur(compteur+1) ; 
        }
     
    }


    // on charge les entreprises pour l'utilisateur si elles n'ont pas ete chargees dans une autre page
    const myCompanies = JSON.parse(localStorage.getItem("userCompanies"));
    if (myCompanies === null)
        getCompaniesForUser("userCompanies",storedToken, idUser,RenderAfterLoad) ;
    else 
        downloaded_Companies.current = true ;    



    // on charge les entreprises pour l'utilisateur si elles n'ont pas ete chargees dans une autre page
    const myUsers = JSON.parse(localStorage.getItem("ManagedUsers"));
    if (myUsers === null)
        getManagedUsers("ManagedUsers",storedToken, RenderAfterLoad) ;
    else 
        downloaded_ManagedUsers.current = true ;    
    
    
    


   



    function TranslateAll(data,Page) 
    {
        let t = FindTranslation(data, Page, sUsers);
        if (t !== "Not Found")
            setUsers(t);
    
    }
    


    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        //getManagedUsers(storedToken,idUser, RenderAfterLoad) ;

        // Pour la traduction
        const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL;
        const Page = "Company";
        const VL = "FR";

        TranslateAll(url, Page, VL);



        // pour charger les droits utilisateurs sur les entreprises     
        let chaine = localStorage.getItem('EntrepriseUtilisateur') ;
        console.log("chaine: "+chaine) ;
        if ( chaine !== null) {
            var bytes = CryptoJS.AES.decrypt( chaine, "rtyGH;6435@fzw");
            EntrepriseUtilisateur.current = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            console.log("EntrepriseUtilisateur") ;
            console.log(EntrepriseUtilisateur.current) ;
        }



        setReloadInfos(false) ;
    }





    
    // C'est le callback appele quand on clique sur + ou Edit dans CardActivity, il sert a replir la fenetre ModalEditActivity
    function SendData(ShowWindow, idEntreprise2, Ligne) {
        console.log("SendData: ") ;
        console.log(Ligne) ;

        if (Ligne === null)
        {
            SetModeEdit("Add") ;
            SetIdEntreprise(idEntreprise2) ;
            SetLigneUser(null) ;
        }
        else
        {
            SetModeEdit("Edit") ;
            SetIdEntreprise(idEntreprise2) ;
            SetLigneUser(Ligne) ;
        }


        if (ShowWindow === "false")
            SetShowEditUser(false) ;
        else
            SetShowEditUser(true) ;

    }


    function ForceRender() {
        downloaded_ManagedUsers.current = false ;
        getManagedUsers("ManagedUsers",storedToken, RenderAfterLoad) ;
    }


     // le render du composant
    function RenderCompanies() {
        if (myCompanies !== null ) 
        {
            return myCompanies.map( (Ligne) => {
                
                if (IsAdmin(EntrepriseUtilisateur.current,Ligne.idEntreprise))
                    return  (   <CardCompany 
                                    key={Ligne.idEntreprise} 
                                    Ligne={Ligne} 
                                    SendData = {SendData}
                                    ForceRender = {ForceRender}
                                /> ) ;
            } );
        }

    }


    // C'est le callback appele quand on ferme ModalEditActivity
    function ModalEditUserClose()
    {
        //console.log("ModalEditActivityClose") ;
        SetShowEditUser(false) ;
    }
  
    function ForceRenderUsers() {
        downloaded_ManagedUsers.current = false ;
        getManagedUsers("ManagedUsers",storedToken, RenderAfterLoad) ;
    }



    function Render() {
        return (
            <div>

                <div className="page-header">
                    <h1 className="page-title">{users}</h1>
                </div>

                <ModalEditUser
                    Render={compteur}
                    show={showEditUser} 
                    SendCloseMessage={ModalEditUserClose}  
                    ForceRender={ForceRenderUsers}

                    Mode={modeEdit}
                    idEntreprise={idEntreprise}
                    Ligne={ligneUser} 
                />

                { RenderCompanies() } 

            </div>
        );

    }


    return Render() ;
}


