
import React, {useEffect, useState} from "react";
import {Button,Card, Table} from "react-bootstrap";
import {getIDFromToken} from "../../../../functions_Dan.js";
import CardActivity from "./CardActivity" ;
import axios from "axios";






export default function CardCompany(props) {
    //console.log("CardCompany: ") ;
    //console.log(props) ;



    let Ligne = props.Ligne ;
    let SendCompanyData = props.SendCompanyData ;


  


    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;
    










    // quand on n'a pas cree d'activite pour l'entreprise
    const AddActivity = (e) => {
        e.preventDefault();
        props.SendActivityData(true,Ligne.idEntreprise,null) ;
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

    function renderAll(idEntreprise){
        return ( 
            <>
            <Button variant="primary" onClick={AddActivity} > Add an activity</Button> 
            {renderActivities(Ligne.idEntreprise)}
            </>
        ) ;
    }







    function EditCompany(idEntreprise,token) {
        //console.log("EditCompany") ;
        //console.log('Ligne.idEntreprise') ;
        //console.log(Ligne.idEntreprise) ;
        if (SendCompanyData !== null)
            SendCompanyData(true, Ligne) ;
    }



    function DeleteCompany(idEntreprise,token) {
        //console.log("DeleteCompany") ;

        const url = process.env.REACT_APP_API_DELETE_ENTERPRISE_URL;
        const response = axios.post(
            url, {
                token: token,
                Submit: 1,
                debug:1 ,
                id: idEntreprise
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        ).then(
            (response) => {
                //console.log(response.data);
                props.ForceRenderCompany() ;
            }
        )
    }




    return (
        <Card key={Ligne.idEntreprise} className="block">
            <Card.Body className="bg-white">

                <div className="bg-blue2-100">
                     
                    <button type="btn" className="btn pt-3 float-left no-border">
                        <h5><strong>{Ligne.NomEntreprise}</strong></h5>
                    </button>
                    
                    <button type="btn" className="btn btn-danger mt-1 float-end" 
                            onClick={ () => DeleteCompany(Ligne.idEntreprise,storedToken) }>
                            <i className="fe fe-trash"></i> 
                    </button>

                    <button type="btn" className="btn btn-primary  mt-1 float-end"
                            onClick={ () => EditCompany(Ligne.idEntreprise,storedToken) }>
                            <i className="fe fe-edit"></i> 
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

                
                {renderAll(Ligne.idEntreprise)}
              

            </Card.Body>
        </Card>
    )
}