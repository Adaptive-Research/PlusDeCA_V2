import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function ArticlesList() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Articles</h1>
                    {/*<Breadcrumb className="breadcrumb">*/}
                    {/*    <Breadcrumb.Item className="breadcrumb-item" href="#">*/}
                    {/*        Pages*/}
                    {/*    </Breadcrumb.Item>*/}
                    {/*    <li className="breadcrumb-item active breadcrumds" aria-current="page">*/}
                    {/*        Articles*/}
                    {/*    </li>*/}
                    {/*</Breadcrumb>*/}
                </div>
                <div className="ms-auto pageheader-btn">
                    <Link to={`${process.env.PUBLIC_URL}/pages/ArticleAdd`}
                          className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
                        Ajouter
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard`} className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
                        Retour
                    </Link>
                </div>
            </div>

            <Row className="row-cards ">
                <Col md={4}>
                    <Card>
                        <img
                            className="card-img-top br-tr-7 br-tl-7"
                            src={require("../../../../assets/images/media/19.jpg")}
                            alt="Card cap"
                        />
                        <Card.Header>
                            <Card.Title as="h5"> Titre </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>

                                Le manteau scintillant sous la lumière du soleil,
                                Le loup blanc court sur les pentes enneigées
                                Il domine les cimes par son hurlement glacé
                                Et entretient avec ses terres un amour passionnel
                                L'animal craint par l'homme est l'âme de ces lieux
                                Il est source de légende et de mysticité
                                Ne souillant jamais de sang sa fourrure immaculée
                                Il protège et gouverne ses étendues gelées.
                                Je suis le seul à l'avoir aperçu.
                            </Card.Text>
                            <Link to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`} className="float-end">
                                Read more <i className="fa fa-angle-double-right"></i>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <img
                            className="card-img-top br-tr-7 br-tl-7"
                            src={require("../../../../assets/images/media/19.jpg")}
                            alt="Card cap"
                        />
                        <Card.Header>
                            <Card.Title as="h5"> Titre </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>

                                Le manteau scintillant sous la lumière du soleil,
                                Le loup blanc court sur les pentes enneigées
                                Il domine les cimes par son hurlement glacé
                                Et entretient avec ses terres un amour passionnel
                                L'animal craint par l'homme est l'âme de ces lieux
                                Il est source de légende et de mysticité
                                Ne souillant jamais de sang sa fourrure immaculée
                                Il protège et gouverne ses étendues gelées.
                                Je suis le seul à l'avoir aperçu.
                            </Card.Text>
                            <Link to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`} className="float-end">
                                Read more <i className="fa fa-angle-double-right"></i>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <img
                            className="card-img-top br-tr-7 br-tl-7"
                            src={require("../../../../assets/images/media/19.jpg")}
                            alt="Card cap"
                        />
                        <Card.Header>
                            <Card.Title as="h5"> Titre </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>

                                Le manteau scintillant sous la lumière du soleil,
                                Le loup blanc court sur les pentes enneigées
                                Il domine les cimes par son hurlement glacé
                                Et entretient avec ses terres un amour passionnel
                                L'animal craint par l'homme est l'âme de ces lieux
                                Il est source de légende et de mysticité
                                Ne souillant jamais de sang sa fourrure immaculée
                                Il protège et gouverne ses étendues gelées.
                                Je suis le seul à l'avoir aperçu.
                            </Card.Text>
                            <Link to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`} className="float-end">
                                Read more <i className="fa fa-angle-double-right"></i>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
}
