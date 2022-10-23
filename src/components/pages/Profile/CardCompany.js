
import {useNavigate} from "react-router";
import {Card, Table} from "react-bootstrap";
import {getIDFromToken} from "../../../functions_Dan.js";
import {CardActivity} from "./CardActivity" ;
import axios from "axios";











function renderActivities(idEntreprise) {
        
    console.log("renderActivities: " +idEntreprise ) ;
    const myActivities = JSON.parse(localStorage.getItem("userActivities"));


    if (myActivities !== null ) {

        return myActivities.map( (Ligne, index) => {
            if (Ligne.idEntreprise === idEntreprise)
                return CardActivity(Ligne) ;

        })
    }
    
}


const deleteCompany = (id,token) => {
    const url = process.env.REACT_APP_API_DELETE_ENTERPRISE_URL;
    const response = axios.post(
        url, {
            token: token,
            Submit: 1,
            id: id
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    ).then(
        (response) => {
            console.log(response.data);
        }
    )

}






export function CardCompany(Ligne) {

    console.log("CardCompany") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    //console.log(storedToken) ;  
    //console.log(idUser) ;

    const navigate = useNavigate();



    console.log("renderCompany: " + Ligne.idEntreprise + " " + Ligne.NomEntreprise) ;
    return (
        <Card key={Ligne.idEntreprise} className="block">
            <Card.Body className="bg-white">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="btn" className="btn float-left">
                                <h5><strong>{Ligne.NomEntreprise}</strong></h5>
                            </button>


                            <button type="btn" className="btn btn-danger float-end"
                                    onClick={() => deleteCompany(Ligne.idEntreprise,storedToken)}>
                                    <i className="fe fe-trash"></i> 
                            </button>

                            <button type="btn" className="btn btn-primary float-end"
                                    onClick={() => {
                                        /*
                                        const companyDetails = [company.id, company.Nom, company.Siret, company.Email, company.Telephone, company.SiteWeb];
                                        localStorage.setItem("targetCompany", JSON.stringify(companyDetails));

                                        navigate(`${process.env.PUBLIC_URL}/pages/updateCompany`)
                                        */
                                    }}

                            >
                                <i className="fe fe-edit"></i> 
                            </button>

                        </div>
                    </div>
                </div>



                <div className="table-responsive p-1">
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

                
                {renderActivities(Ligne.idEntreprise)}
              

            </Card.Body>
        </Card>
    )
}