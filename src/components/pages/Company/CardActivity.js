import React, { useState,useRef} from "react";
import {Table} from "react-bootstrap";
import {DeleteActivity} from "../../../data/customlibs/api";
import {IsFullAdmin} from "../../../data/customlibs/utils";

var CryptoJS = require("crypto-js");



export default function CardActivity(props) {
     //console.log("CardActivity") ;
    let Ligne = props.Ligne ;
    //console.log(Ligne) ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    //console.log(storedToken) ;  

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // pour les droits utilisateurs 
    const EntrepriseUtilisateur = useRef([]) ;
 

     


    let SendActivityData = props.SendActivityData ;

    
    if (reloadInfos === true)
    {

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




    function EditActivite(token) {
        console.log("EditActivite") ;
        if (SendActivityData !== null)
            SendActivityData(true, Ligne.idEntreprise, Ligne) ;
    }


    function renderButtons() {
        if (IsFullAdmin(EntrepriseUtilisateur.current,Ligne.idEntreprise))
            return ( 
                <>
                    <button type="btn" className="btn btn-danger mt-1 float-end"
                            onClick={() => DeleteActivity(storedToken,Ligne.idActivite,props.ForceRenderActivity)}>
                            <i className="fe fe-trash"></i> 
                    </button>

                    <button type="btn" className="btn btn-success  mt-1 float-end"
                            onClick={() => { EditActivite(storedToken) }} >
                            
                        <i className="fe fe-edit"></i> 
                    </button>
                </> ) ;
        else 
            return <></> ;

    }

    
    if (window.innerWidth > 960) {
        return  (                              

            <div key={Ligne.idActivite} className="border">
                
                <div className="bg-teal-100 min-height">

                    <button type="btn" className="btn pt-3 float-left no-border">
                        <h5>  <strong>{Ligne.Activite_Nom} </strong> </h5>
                    </button>

                    {renderButtons()}

                </div>

                <div key={Ligne.idActivite} className="table-responsive p-1 bg-teal-50" >

                    <Table className="table row table-borderless bg-teal-50">
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr className="d-flex">
                                <td className="col-4">
                                    <strong>Website:</strong> {Ligne.Activite_SiteWeb}
                                </td>
                                <td className="col-5">
                                    <strong>Email :</strong> {Ligne.Activite_Email}
                                </td>
                                <td className="col-3">
                                    <strong>Phone :</strong> {Ligne.Activite_Telephone}
                                </td>
                            </tr>
                        </tbody>
                
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr>
                                <td>
                                    <strong>Description </strong>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    {Ligne.Description}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            ) ;
        }

        else 
         return (

            <div key={Ligne.idActivite} className="border">
                
            <div className="bg-teal-100 min-height">

                <button type="btn" className="btn pt-3 float-left no-border">
                    <h5>  <strong>{Ligne.Activite_Nom} </strong> </h5>
                </button>

                {renderButtons()}

            </div>

            <div key={Ligne.idActivite} className="table-responsive p-1 bg-teal-50" >

                <Table className="table row table-borderless bg-teal-50">
                    <tbody className="col-sm-12 p-0">
                        <tr className="d-flex">
                            <td>
                                <strong>Website : </strong> {Ligne.Activite_SiteWeb}
                            </td>
                        </tr>

                        <tr>
                            <td className="col-5">
                                <strong>Email : </strong> {Ligne.Activite_Email}
                            </td>
                        </tr>

                        <tr>
                            <td className="col-3">
                                <strong>Phone : </strong> {Ligne.Activite_Telephone}
                            </td>
                        </tr>
                    </tbody>
            
                    <tbody className="col-lg-12 col-xl-12 p-0">
                        <tr>
                            <td>
                                <strong>Description </strong>
                            </td>

                        </tr>

                        <tr>
                            <td>
                                {Ligne.Description}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
        
