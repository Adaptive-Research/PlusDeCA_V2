
import React, { useState,useRef} from "react";
import {Button,Card, Table} from "react-bootstrap";
import CardActivity from "./CardActivity" ;
import {DeleteCompany,DeleteLinkCompany} from "../../../data/customlibs/api";
import {IsFullAdmin,FindEntrepriseUtilisateur} from "../../../data/customlibs/utils";


var CryptoJS = require("crypto-js");




export default function CardCompany(props) {
    //console.log("CardCompany: ") ;
    //console.log(props) ;

    let Ligne = props.Ligne ;
    let SendCompanyData = props.SendCompanyData ;



    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    //console.log(storedToken) ;  
    
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // pour les droits utilisateurs 
    const EntrepriseUtilisateur = useRef([]) ;




    function EditCompany(ligne) {
        //console.log("EditCompany") ;
        if (SendCompanyData !== null)
            SendCompanyData(true, ligne) ;
    }






    // quand on n'a pas cree d'activite pour l'entreprise
    function AddActivity(e) {
        e.preventDefault();
        props.SendActivityData(true,Ligne.idEntreprise,null) ;
    }


    if (reloadInfos === true)
    {

        // pour charger les droits utilisateurs sur les entreprises     
        let chaine = localStorage.getItem('EntrepriseUtilisateur') ;
        console.log("chaine: "+chaine) ;
        if ( chaine !== null) {
            var bytes = CryptoJS.AES.decrypt( chaine, "rtyGH;6435@fzw");
            var sVar = bytes.toString(CryptoJS.enc.Utf8) ;
            console.log("sVar: "+sVar+"*") ;
            if (sVar !== "") 
                EntrepriseUtilisateur.current = JSON.parse(sVar);
            console.log("EntrepriseUtilisateur") ;
            console.log(EntrepriseUtilisateur.current) ;
        }

        setReloadInfos(false) ;
    }





    function renderActivities(idEntreprise) {
            
        //console.log("renderActivities: " +idEntreprise ) ;
        const myActivities = JSON.parse(localStorage.getItem("userActivities"));

        if (myActivities !== null ) {
            if (myActivities.length > 0) {
                return myActivities.map( (LigneActivity, index) => 
                {
                    if (LigneActivity.idEntreprise === idEntreprise)
                    {
                        if (LigneActivity.idActivite !== null)
                        {
                            return (<CardActivity 
                                        key={LigneActivity.idActivite} 
                                        Ligne={LigneActivity} 
                                        SendActivityData={props.SendActivityData}
                                        ForceRenderActivity = {props.ForceRenderActivity}
                                    /> ) ;
                        }    
                    }
                })

            }

        }
    }

    function renderButtons() {
        console.log("renderButtons:" + Ligne.idEntreprise) ;
        console.log(EntrepriseUtilisateur.current) ;

        if (IsFullAdmin(EntrepriseUtilisateur.current,Ligne.idEntreprise))
            return ( 
                <>
                    <button type="btn" className="btn btn-danger mt-1 float-end" 
                            onClick={ () => DeleteCompany(storedToken, Ligne.idEntreprise, props.ForceRenderCompany) }>
                            <i className="fe fe-trash"></i> 
                    </button>

                    <button type="btn" className="btn btn-primary  mt-1 float-end"
                            onClick={ () => EditCompany(Ligne) }>
                            <i className="fe fe-edit"></i> 
                    </button> 
                </> ) ;
        else 
            return <>
                <button type="btn" className="btn btn-warning mt-1 float-end" 
                            onClick={ () => DeleteLinkCompany(storedToken, Ligne.idEntreprise, props.ForceRenderCompany) }>
                            <i className="fe fe-x"></i> 
                    </button>

            </> ;

    }


    function renderAll(){
        if (IsFullAdmin(EntrepriseUtilisateur.current,Ligne.idEntreprise))
            return ( 
                <>
                <Button variant="primary" onClick={AddActivity} > Add an activity</Button> 
                {renderActivities(Ligne.idEntreprise)}
                </>
            ) ;
        else
            return ( 
                <>
                {renderActivities(Ligne.idEntreprise)}
                </>
            ) ;
    }




    return (
        <Card key={Ligne.idEntreprise} className="block">
            <Card.Body className="bg-white">

                <div className="bg-blue2-200">
                     
                    <button type="btn" className="btn pt-3 float-left no-border">
                        <h5><strong>{Ligne.NomEntreprise}</strong></h5>
                    </button>
                    
                    {renderButtons()}
                   

                </div>



                <div className="table-responsive p-1 bg-blue2-50">
                    <Table className="table row table-borderless">
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr className="d-flex">
                                <td className="col-6">
                                    <strong>Siret :</strong> {Ligne.Siret}
                                </td>
                                <td className="col-6">
                                    <strong>Website:</strong> {Ligne.SiteWeb}
                                </td>
                            </tr>

                            <tr className="d-flex">
                                <td className="col-6">
                                    <strong>Email :</strong> {Ligne.Email}
                                </td>
                                <td className="col-6">
                                    <strong>Phone :</strong> {Ligne.Telephone}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className="table-responsive p-1 bg-blue2-100">
                    <Table className="table row table-borderless">
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr className="d-flex">
                                <td className="col-4">
                                    <strong>Fondateur :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fondateur")}
                                </td>
                                <td className="col-4">
                                    <strong>Fonction :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fonction")}
                                </td>
                                <td className="col-4">
                                    <strong>Droits d'accès :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "idRole")}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                
                {renderAll()}
              

            </Card.Body>
        </Card>
    )
}