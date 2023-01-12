
import React, { useState,useRef} from "react";
import {Button,Card, Table} from "react-bootstrap";
import CardActivity from "./CardActivity" ;
import {DeleteCompany,DeleteLinkCompany} from "../../../data/customlibs/api";
import {IsFullAdmin,FindEntrepriseUtilisateur, getDecryptedData} from "../../../data/customlibs/utils";




export default function CardCompany(props) {
    //PrintLog("CardCompany: ") ;
    //PrintLog(props) ;

    let Ligne = props.Ligne ;
    let SendCompanyData = props.SendCompanyData ;



    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    //PrintLog(storedToken) ;  
    
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // pour les droits utilisateurs 
    const EntrepriseUtilisateur = useRef([]) ;




    function EditCompany(ligne) {
        //PrintLog("EditCompany") ;
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
        EntrepriseUtilisateur.current = getDecryptedData(chaine) ;

        setReloadInfos(false) ;
    }





    function renderActivities(idEntreprise) {
            
        //PrintLog("renderActivities: " +idEntreprise ) ;
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
        PrintLog("renderButtons:" + Ligne.idEntreprise) ;
        PrintLog(EntrepriseUtilisateur.current) ;

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
                <Button variant="primary" onClick={AddActivity} >{props.addActivityBtn}</Button> 
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



    if (window.innerWidth > 960) {

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
                                        <strong>{props.websiteLabel}:</strong> {Ligne.SiteWeb}
                                    </td>
                                </tr>

                                <tr className="d-flex">
                                    <td className="col-6">
                                        <strong>{props.emailLabel} :</strong> {Ligne.Email}
                                    </td>
                                    <td className="col-6">
                                        <strong> {props.phoneLabel}:</strong> {Ligne.Telephone}
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
                                        <strong>{props.founderLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fondateur")}
                                    </td>
                                    <td className="col-4">
                                        <strong>{props.jobLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fonction")}
                                    </td>
                                    <td className="col-4">
                                        <strong>{props.accessRightsLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "idRole")}
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
    else {
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
                            <tbody className="col-sm-12  p-0">
                                <tr className="d-flex">
                                    <td>
                                        <strong>Siret :</strong> {Ligne.Siret}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>{props.websiteLabel}:</strong> {Ligne.SiteWeb}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>{props.emailLabel} :</strong> {Ligne.Email}
                                    </td>
                                </tr>

                                <tr>

                                    <td>
                                        <strong> {props.phoneLabel}:</strong> {Ligne.Telephone}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="table-responsive p-1 bg-blue2-100">
                        <Table className="table row table-borderless">
                            <tbody className="col-sm-12 p-0">
                                <tr className="d-flex">
                                    <td className="col-4">
                                        <strong>{props.founderLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fondateur")}
                                    </td>
                                </tr>

                                <tr>

                                    <td className="col-4">
                                        <strong>{props.jobLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "Fonction")}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="col-4">
                                        <strong>{props.accessRightsLabel} :</strong> {FindEntrepriseUtilisateur(EntrepriseUtilisateur.current, Ligne.idEntreprise, "idRole")}
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
}