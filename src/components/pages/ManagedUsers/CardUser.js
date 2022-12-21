
import React, {useEffect, useState} from "react";
import {Button,Card, Table} from "react-bootstrap";
import {DeleteCompany} from "../../../data/customlibs/api";
import {getRole} from  "../../../data/customlibs/utils";






export default function CardUser(props) {
    //console.log("CardCompany: ") ;
    //console.log(props) ;



    let Ligne = props.Ligne ;
    let SendData = props.SendData ;



    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    //console.log(storedToken) ;  
    







    function EditUser(ligne) {
        //console.log("EditUser") ;
        if (SendData !== undefined)
            if (SendData !== null)
                SendData(true, ligne.idEntreprise, ligne) ;
    }






     // quand on n'a pas cree d'activite pour l'entreprise
     function DeleteUser(e) {
        e.preventDefault();
        //props.SendData(true,Ligne.idEntreprise,null) ;
    }












    return (
            <div key={Ligne.idUtilisateur} className="padding-10" >
                <div className="min-height bg-teal-100">

                     
                    <button type="btn" className="btn btn-danger mt-1 float-end" 
                            onClick={ () => DeleteUser(storedToken, Ligne.idUser, props.ForceRender) }>
                            <i className="fe fe-trash"></i> 
                    </button>

                    <button type="btn" className="btn btn-primary  mt-1 float-end"
                            onClick={ () => EditUser(Ligne) }>
                            <i className="fe fe-edit"></i> 
                    </button>

                </div>



                <div className="table-responsive p-1 bg-teal-50">
                    <Table className="table row table-borderless">
                        <tbody className="col-lg-12 col-xl-12 p-0">
                            <tr className="d-flex">
                                <td className="col-6">
                                    <strong>Email :</strong> {Ligne.Email}
                                </td>
                                <td className="col-6">
                                    <strong>Droits d'accès :</strong> {getRole(Ligne.idRole)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>  
              

    )
}