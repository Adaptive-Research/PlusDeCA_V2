
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
                            <strong>Full Name :</strong> Elizabeth
                            Dyer
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Location :</strong> USA
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Languages :</strong> English,
                            German, Spanish.
                        </td>
                    </tr>
                    </tbody>
                    <tbody className="col-lg-12 col-xl-6 p-0">
                    <tr>
                        <td>
                            <strong>Website :</strong> abcdz.com
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Email :</strong>
                            georgemestayer@abcdz.com
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Phone :</strong> +125 254 3562
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <Row className="row profie-img">
                <Col md={12}>
                    <div className="media-heading">
                        <h5>
                            <strong>Biography</strong>
                        </h5>
                    </div>
                    <p>
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
                    </p>
                </Col>
            </Row>
        </Card.Body>
        </Card>)
}