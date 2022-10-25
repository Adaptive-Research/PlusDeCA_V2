import React from "react";
import {Card, Col, Row, Tab, Table, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ArticleList() {
    return (
        <div>

            <div className="page-header">
                <div>
                    <h1 className="page-title">Articles</h1>
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

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">
                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Profile"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Publié" title="Publié">
                                                <div className="tab-pane profiletab show">
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
                                                                    <button className="btn btn-success"
                                                                            style={{marginLeft: "50%"}}>
                                                                        urgence
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
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
                                                                    <button className="btn btn-success"
                                                                            style={{marginLeft: "50%"}}>
                                                                        santé
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
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
                                                                    <button className="btn btn-success"
                                                                            style={{marginLeft: "50%"}}>
                                                                        basket
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
                                                                    </Link>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Brouillon" title="Brouillon">
                                                <div className="tab-pane " id="tab-61">
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
                                                                    <button className="btn btn-warning"
                                                                            style={{marginLeft: "50%"}}>
                                                                        tests
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
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
                                                                    <button className="btn btn-warning"
                                                                            style={{marginLeft: "50%"}}>
                                                                        infos
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
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
                                                                    <button className="btn btn-warning"
                                                                            style={{marginLeft: "50%"}}>
                                                                        sport
                                                                    </button>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <Card.Text>

                                                                        Le manteau scintillant sous la lumière du
                                                                        soleil,
                                                                        Le loup blanc court sur les pentes enneigées
                                                                        Il domine les cimes par son hurlement glacé
                                                                        Et entretient avec ses terres un amour
                                                                        passionnel
                                                                        L'animal craint par l'homme est l'âme de ces
                                                                        lieux
                                                                        Il est source de légende et de mysticité
                                                                        Ne souillant jamais de sang sa fourrure
                                                                        immaculée
                                                                        Il protège et gouverne ses étendues gelées.
                                                                        Je suis le seul à l'avoir aperçu.
                                                                    </Card.Text>
                                                                    <Link
                                                                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                                                        className="float-end">
                                                                        Read more <i
                                                                        className="fa fa-angle-double-right"></i>
                                                                    </Link>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>

                                                    </Row>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
