
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
                    
                    { props.UserProfile.EmailVisible == 1 ? <tr><td><strong>Email : </strong>{props.UserProfile.Email}</td></tr> : ''}
                    { props.UserProfile.TelephoneVisible == 1 ? <tr><td><strong>Phone : </strong>{props.UserProfile.Telephone}</td></tr> : ''}
                
                </tbody>
                </Table>
            </div>
            <Row className="row profie-img">
                { props.UserProfile.BioVisible == 1 ? <Col md={12}><div><h5><strong>Biography</strong></h5></div><p>{props.UserProfile.Bio}</p>  </Col>: ''}
                    {
                        /** <p>
                        Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo
                        minus id quod maxime placeat facere
                        possimus, omnis voluptas assumenda est,
                        omnis dolor repellendus
                    </p>
                    <p className="mb-0">
                        because it is pleasure, but because those
                        who do not know how to pursue pleasure
                        rationally encounter but because those who
                        do not know how to pursue consequences
                        that are extremely painful. Nor again is
                        there anyone who loves or pursues or
                        desires to obtain pain of itself, because
                        it is pain, but because occasionally
                        circumstances occur in which toil and pain
                        can procure him some great pleasure.
                    </p> */
                    }
            </Row>
        </Card.Body>
        </Card>)
}