import user18 from "../../../assets/images/users/18.jpg";

import { Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function TabFollowers(props) {

    return (

        <div className="tab-pane" id="tab-81">
            <Row className="profiletab">
                <Col lg={6} md={12}>
                    <Card className="border p-0 over-flow-hidden">
                        <Card.Body className="media media-xs overflow-visible ">
                                <img
                                    className="avatar brround avatar-md me-3"
                                    src={user18}
                                    alt="avatar-img"
                                />
                                <div className="media-body valign-middle">
                                    <Link
                                        to=""
                                        className=" fw-semibold text-dark"
                                    >
                                        John Paige
                                    </Link>
                                    <p className="text-muted mb-0">
                                        johan@gmail.com
                                    </p>
                                </div>
                                <div
                                    className="media-body valign-middle text-end overflow-visible mt-2">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Follow
                                    </button>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} md={12}>
                    <Card className="border p-0 over-flow-hidden">
                        <Card.Body className="media media-xs overflow-visible ">
                                <span className="avatar cover-image avatar-md brround bg-pink me-3">LQ</span>
                                <div className="media-body valign-middle mt-0">
                                    <Link
                                        to=""
                                        className="fw-semibold text-dark"
                                    >
                                        Lillian Quinn
                                    </Link>
                                    <p className="text-muted mb-0">
                                        lilliangore
                                    </p>
                                </div>
                                <div
                                    className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Follow
                                    </button>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} md={12}>
                    <Card className=" border p-0 over-flow-hidden mb-lg-0">
                        <Card.Body className="media media-xs overflow-visible ">
                                <span className="avatar cover-image avatar-md brround me-3 bg-primary">IH</span>
                                <div className="media-body valign-middle mt-0">
                                    <Link
                                        to=""
                                        className="fw-semibold text-dark"
                                    >
                                        Irene Harris
                                    </Link>
                                    <p className="text-muted mb-0">
                                        ireneharris@gmail.com
                                    </p>
                                </div>
                                <div
                                    className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Follow
                                    </button>
                                </div>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
  
) ;
}