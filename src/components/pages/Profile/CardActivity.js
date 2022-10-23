
import {Card, Table} from "react-bootstrap";
import axios from "axios";





const deleteActivity = (id,token) => {
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
}





export function CardActivity(Ligne) {

    return  (                              
        <div key={Ligne.idActivite} className="table-responsive p-1" >

            <Table className="table row table-borderless bg-light">
                <tbody className="col-lg-12 col-xl-12 p-0">
                    <tr className="d-flex">
                        <td className="col-6">
                            <strong>Activite</strong> {Ligne.Activite_Nom}
                        </td>
                        <td className="col-6">
                            <strong>Website:</strong> {Ligne.Activite_SiteWeb}
                        </td>
                    </tr>

                    <tr className="d-flex">
                        <td className="col-6">
                            <strong>Email :</strong> {Ligne.Activite_Email}
                        </td>
                        <td className="col-6">
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
    )
}
        
