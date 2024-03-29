
import React, {useEffect, useState} from "react";
import {Button,Card, Table} from "react-bootstrap";
import CardUser from "./CardUser" ;
import {PrintLog} from  "../../../data/customlibs/utils";




export default function CardCompany(props) {
    //PrintLog("CardCompany: ") ;
    //PrintLog(props) ;



    let Ligne = props.Ligne ;




    // quand on n'a pas cree d'utilisateur pour l'entreprise
    function AddUser(e) {
        e.preventDefault();
        props.SendData(true,Ligne.idEntreprise,null) ;
    }










    function renderUsers(idEntreprise) {
        PrintLog("renderUsers: " +idEntreprise ) ;
        const ManagedUsers = localStorage.getItem("ManagedUsers") ;


        if (ManagedUsers !== null) {
            const myUsers = JSON.parse(ManagedUsers);
       
            if (myUsers !== null ) {
                if (myUsers.length > 0) {
                    return myUsers.map( (Ligne) => 
                    {
                        if (Ligne.idEntreprise === idEntreprise)
                        {
                            if (Ligne.idUser !== null)
                            {
                                return (<CardUser
                                            key={Ligne.idUtilisateur} 
                                            Ligne={Ligne} 
                                            SendData={props.SendData}
                                            ForceRender = {props.ForceRender}
                                            accessRightsField={props.accessRightsField}
                                            emailField={props.emailField}
                                        /> ) ;
                            }    
                        }
                    })
    
                }
    
            }
        }
        
    }



    function renderAll(idEntreprise){
        return ( 
            <>
            <Button variant="primary" onClick={AddUser} >{props.addUserBtn}</Button> 
            {renderUsers(Ligne.idEntreprise)}
            </>
        ) ;
    }




    return (
        <Card key={Ligne.idEntreprise} className="block">
            <Card.Body className="bg-white">

                <div className="bg-blue2-100">
                     
                    <button type="btn" className="btn pt-3 float-left no-border">
                        <h5><strong>{Ligne.NomEntreprise}</strong></h5>
                    </button>

                </div>



                <div className="table-responsive p-1 bg-blue2-50">
                    <Table className="table row table-borderless">
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr className="d-flex">
                                <td className="col-6">
                                    <strong>Siret :</strong> {Ligne.Siret}
                                </td>
                                <td className="col-6">
                                    <strong>{props.phoneField}:</strong> {Ligne.SiteWeb}
                                </td>
                            </tr>

                            <tr className="d-flex">
                                <td className="col-6">
                                    <strong>{props.emailField} :</strong> {Ligne.Email}
                                </td>
                                <td className="col-6">
                                    <strong>{props.phoneField}  :</strong> {Ligne.Telephone}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                
                {renderAll(Ligne.idEntreprise)}
              

            </Card.Body>
        </Card>
    )
}