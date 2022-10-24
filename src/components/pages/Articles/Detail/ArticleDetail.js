import React from "react";
import {Link} from "react-router-dom";
import {Breadcrumb, Card, Col, Row,} from "react-bootstrap";

export default function ArticleDetails() {
    return (
        <div>
            <div>
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Details Article</h1>
                        <Breadcrumb className="breadcrumb">
                            <Breadcrumb.Item className="breadcrumb-item" href="#">
                                Pages
                            </Breadcrumb.Item>
                            <li className="breadcrumb-item active breadcrumds" aria-current="page">
                                Details Article
                            </li>
                        </Breadcrumb>
                    </div>
                    <div className="ms-auto pageheader-btn">
                        <Link to={`${process.env.PUBLIC_URL}/pages/ArticleEdit`} className="btn btn-warning btn-icon text-white me-3">
              <span>
                <i className="fe fe-refresh-ccw"></i>&nbsp;
              </span>
                            Editer
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`} className="btn btn-danger btn-icon text-white me-3">
              <span>
                <i className="fe fe-trash"></i>&nbsp;
              </span>
                            Supprimer
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`} className="btn btn-success btn-icon text-white">
              <span>
                <i className="fe fe-log-in"></i>&nbsp;
              </span>
                            Retour
                        </Link>
                    </div>
                </div>
                {/* PAGE-HEADER END */}
                {/* ROW-1 OPEN */}
                <Row>
                    <Col xl={10} className="mx-auto">
                        <Card>
                            <img
                                className="card-img-top br-7 br-bl-0 br-br-0"
                                src={require("../../../../assets/images/media/blog11.jpg")}
                                alt="Card cap"
                            />
                            <Card.Body>
                                <div className="d-md-flex">
                                    <Link to="#" className="d-flex me-4 mb-2">
                                        <i className="fe fe-calendar fs-16 me-1 p-3 bg-secondary-transparent text-secondary bradius"/>
                                        <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">
                                            Sep-25-2021
                                        </div>
                                    </Link>
                                    <Link
                                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                                        className="d-flex mb-2"
                                    >
                                        <i className="fe fe-user fs-16 me-1 p-3 bg-primary-transparent text-primary bradius"/>
                                        <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">
                                            Harry Fisher
                                        </div>
                                    </Link>
                                    {/*<div className="ms-auto">*/}
                                    {/*    <Link to="#" className="d-flex mb-2">*/}
                                    {/*        <i className="fe fe-message-square fs-16 me-1 p-3 bg-success-transparent text-success bradius" />*/}
                                    {/*        <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">*/}
                                    {/*            13 Comments*/}
                                    {/*        </div>*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <h3>
                                    <Link to="#"> Voluptatem quia voluptas</Link>
                                </h3>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <p>
                                    Lorem ipsum dolor sit amet, quis Neque porro quisquam est,
                                    nostrud exercitation ullamco laboris commodo consequat.
                                    There’s an old maxim that states, “No fun for the writer, no
                                    fun for the reader.”No matter what industry you’re working in,
                                    as a blogger, you should live and die by this statement.
                                </p>
                                <p>
                                    I must explain to you how all this mistaken idea of denouncing
                                    pleasure and praising pain was born and I will give you a
                                    complete account of the system, and expound the actual
                                    teachings of the great explorer of the truth, the
                                    master-builder of human happiness. No one rejects, dislikes,
                                    or avoids pleasure itself, because it is pleasure.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
