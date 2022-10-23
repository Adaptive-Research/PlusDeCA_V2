import {Card, Table} from "react-bootstrap";
import {useNavigate} from "react-router";

export default function CardModifyActivity(element) {
    const navigate = useNavigate();

    return (

        <Card>
            <Card.Body
                className="bg-white">
                <div
                    className="media-heading">
                    <h5>
                        <strong>{element.TypeActivite}</strong>
                    </h5>
                </div>
                <div
                    className="table-responsive p-1">
                    <Table
                        className="table row table-borderless">
                        <tbody
                            className="col-lg-12 col-xl-6 p-0">
                        <tr>
                            <td>
                                <strong>Activity
                                    Name
                                    :</strong> {element.Nom}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Activity
                                    Description
                                    :</strong> {element.Description}
                            </td>
                        </tr>
                        </tbody>
                        <tbody
                            className="col-lg-12 col-xl-6 p-0">
                        <tr>
                            <td>
                                <strong>Website
                                    :</strong> {element.SiteWeb}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Email
                                    :</strong>
                                {element.Email}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Phone
                                    :</strong> {element.Telephone}
                            </td>
                        </tr>
                        </tbody>
                        <tbody
                            className="col-lg-12 col-xl-4 p-0"
                        >
                        <tr>
                            <td>
                                <button
                                    className="btn btn-danger me-1"
                                    onClick={() => deleteActivity(element.id,storedToken)}>
                                    <i className="fa fa-trash"></i> delete
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button
                                    className="btn btn-warning me-1"
                                    onClick={() => {
                                        const targetActivity = [element.id, element.Nom, element.Description, element.SiteWeb, element.Email, element.Telephone, element.TypeActivite, element.idEntreprise];
                                        console.log(targetActivity);
                                        localStorage.setItem("activityDetails", JSON.stringify(targetActivity));
                                        navigate(`${process.env.PUBLIC_URL}/pages/updateActivity`)

                                    }}
                                >
                                    <i className="fa fa-edit"></i> edit
                                </button>
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </div>

            </Card.Body>
        </Card>
    )
}
