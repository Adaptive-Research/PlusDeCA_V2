
import {Card, Table} from "react-bootstrap";
import axios from "axios";
import {getIDFromToken} from "../../../functions_Dan.js";







export default function CardActivity(props) {

    let Ligne = props.Ligne ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;


    const AddActivity = (id,token) => {

/*        
        const url = process.env.REACT_APP_API_DELETE_ACTIVITY_URL;
        const response = axios.post(url, {
            token: token,
            Submit: 1,
            id: id
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            console.log(response.data);
            window.location.reload();
        })
*/        
    }


    const EditActivity = (id,token) => {

/*        
        const url = process.env.REACT_APP_API_DELETE_ACTIVITY_URL;
        const response = axios.post(url, {
            token: token,
            Submit: 1,
            id: id
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            console.log(response.data);
            window.location.reload();
        })
*/        
    }




    const DeleteActivity = (id,token) => {

/*        
        const url = process.env.REACT_APP_API_DELETE_ACTIVITY_URL;
        const response = axios.post(url, {
            token: token,
            Submit: 1,
            id: id
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            console.log(response.data);
            window.location.reload();
        })
*/        
    }


    return  (                              

        <div key={Ligne.idActivite} className="border">
            
            <div className="bg-teal-100">

                <button type="btn" className="btn float-left">
                    <h5>  <strong>Activité {Ligne.Activite_Nom} </strong> </h5>
                </button>


                <button type="btn" className="btn btn-danger float-end"
                        onClick={() => DeleteActivity(Ligne.idActivity,storedToken)}>
                        <i className="fe fe-trash"></i> 
                </button>

                <button type="btn" className="btn bg-green-500 me-3 float-end"
                        onClick={() => { EditActivity(Ligne.idActivity,storedToken) }} >
                            {/*
                            const companyDetails = [company.id, company.Nom, company.Siret, company.Email, company.Telephone, company.SiteWeb];
                            localStorage.setItem("targetCompany", JSON.stringify(companyDetails));

                            navigate(`${process.env.PUBLIC_URL}/pages/updateCompany`)
                            */}
                        
                    <i className="fe fe-edit"></i> 
                </button>

                <button type="btn" className="btn bg-green-500 me-1 float-end"
                        onClick={() => AddActivity(storedToken)}>
                        <i className="fe fe-plus"></i> 
                </button>

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
    )
}
        
