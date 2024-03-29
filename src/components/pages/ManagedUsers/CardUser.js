
import React  from "react";
import {Table} from "react-bootstrap";
import {printRole} from  "../../../data/customlibs/utils";
import {DeleteUser} from "../../../data/customlibs/api";
import {PrintLog} from  "../../../data/customlibs/utils";






export default function CardUser(props) {
    PrintLog("CardUser: ") ;
    PrintLog(props) ;



    let Ligne = props.Ligne ;
    let SendData = props.SendData ;



    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    //PrintLog(storedToken) ;  
    







    function EditUser(ligne) {
        //PrintLog("EditUser") ;
        if (SendData !== undefined)
            if (SendData !== null)
                SendData(true, ligne.idEntreprise, ligne) ;
    }














    return (
            <div key={Ligne.idUtilisateur} className="padding-10" >
                <div className="min-height bg-teal-100">

                     
                    <button type="btn" className="btn btn-danger mt-1 float-end" 
                            onClick={ () => DeleteUser(storedToken, Ligne.idUtilisateur, props.ForceRender) }>
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
                                    <strong>{props.emailField} :</strong> {Ligne.Email}
                                </td>
                                <td className="col-6">
                                    <strong>{props.accessRightsField} :</strong> {printRole(Ligne.idRole)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>  
              

    )
}