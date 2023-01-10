import React from "react";
import {Link} from "react-router-dom";
import {Card, Col, Row,} from "react-bootstrap";

export default function GroupDetails() {
    return (
        <div>
            <div>
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Details Groupe</h1>
                        {/*<Breadcrumb className="breadcrumb">*/}
                        {/*    <Breadcrumb.Item className="breadcrumb-item" href="#">*/}
                        {/*        Pages*/}
                        {/*    </Breadcrumb.Item>*/}
                        {/*    <li className="breadcrumb-item active breadcrumds" aria-current="page">*/}
                        {/*        Details Group*/}
                        {/*    </li>*/}
                        {/*</Breadcrumb>*/}
                    </div>
                    <div className="ms-auto pageheader-btn">
                        <Link to={`${process.env.PUBLIC_URL}/pages/GroupEdit`}
                              className="btn btn-warning btn-icon text-white me-3">
              <span>
                <i className="fe fe-refresh-ccw"></i>&nbsp;
              </span>
                            Editer
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/pages/GroupList`}
                              className="btn btn-danger btn-icon text-white me-3">
              <span>
                <i className="fe fe-trash"></i>&nbsp;
              </span>
                            Supprimer
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/pages/GroupList`}
                              className="btn btn-success btn-icon text-white">
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
                    <Col xl={8}>
                        <Card>
                            <img
                                className="card-img-top br-7 br-bl-0 br-br-0"
                                src={require("../../../assets/images/media/blog11.jpg")}
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

                    <Col xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Historique</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <div className="d-flex overflow-visible blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image me-3"
                                        >
                                            <img
                                                className=" br-5 mb-3 "
                                                src={require("../../../assets/images/media/19.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center center',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-1 flex-column">
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                                >
                                                    Titre le plus récent 1
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                <p>
                                                    Le contenu du titre le plus recent est ici
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image me-3"
                                        >
                                            <img
                                                className=" br-5 mb-3"
                                                src={require("../../../assets/images/media/22.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center center',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-1 flex-column">
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                                >
                                                    Titre le plus recent 2 ...
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                <p className="font-13 text-muted">
                                                    Contenu du titre le plus recent 2
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                            className="card-aside-column br-5 cover-image me-3"
                                        >
                                            <img
                                                className=" br-5 mb-3"
                                                src={require("../../../assets/images/media/12.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center center',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-1 flex-column">
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                                >
                                                    Titre le plus recent 3
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                <p>
                                                    Contenu du titre le plus recent 3
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                            className="card-aside-column br-5 cover-image me-3"
                                        >
                                            <img
                                                className=" br-5 mb-3"
                                                src={require("../../../assets/images/media/25.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center center',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-1 flex-column">
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/GroupDetail`}
                                                >
                                                    Titre le plus recent 4 ...
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                <p>
                                                    Contenu du titre le plus recent 4 ...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
