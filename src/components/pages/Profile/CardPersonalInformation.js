
import {Card, Col, Row,Table } from "react-bootstrap";

export default function CardPersonalInformation(props){

    return (   


        <Card>
        <Card.Body className="bg-white">
            <div className="media-heading">
                <h5>
                    <strong>Personal Information</strong>
                </h5>
            </div>
            <div className="table-responsive p-1">
                <Table className="table row table-borderless">
                    <tbody className="col-lg-12 col-xl-6 p-0">
                    <tr>
                        <td>
                            <strong>Full Name : </strong> 
                            {props.UserProfile.Prenom}  {props.UserProfile.Nom}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Location : </strong> USA
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Languages : </strong> English,
                            German, Spanish.
                        </td>
                    </tr>
                    </tbody>
                    <tbody className="col-lg-12 col-xl-6 p-0">
                    <tr>
                        <td>
                            <strong>Website : </strong> abcdz.com
                        </td>
                    </tr>
                    
                    {  <tr><td><strong>Email : </strong>{props.UserProfile.Email}</td></tr> }
                    {  <tr><td><strong>Phone : </strong>{props.UserProfile.Telephone}</td></tr> }
                
                </tbody>
                </Table>
            </div>
            <Row className="row profie-img">
                {  <Col md={12}><div><h5><strong>Biography</strong></h5></div><p>{props.UserProfile.Bio}</p>  </Col>}
            </Row>
        </Card.Body>
        </Card>)
}