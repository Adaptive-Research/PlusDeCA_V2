import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
export default function Thumbnails() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Thumbnails</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Thumbnails
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link>
        </div>
      </div>

      <Row>
        <Col lg={12} md={12} >
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Thumbnails</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Row className="row mt-4">
                  <Col xl={3} md={6} >
                    <Link to="#" className="thumbnail ">
                      <img
                        src={
                          require("../../../assets/images/media/1.jpg")
                        }
                        alt={"thumb1"}
                        className="thumbimg"
                      />
                    </Link>
                  </Col>
                  <Col xl={3} md={6}>
                    <Link to="#" className="thumbnail">
                      <img
                        src={
                          require("../../../assets/images/media/2.jpg")
                        }
                        alt={"thumb1"}
                        className="thumbimg"
                      />
                    </Link>
                  </Col>
                  <Col xl={3} md={6}>
                    <Link to="#" className="thumbnail">
                      <img
                        src={
                          require("../../../assets/images/media/3.jpg")
                        }
                        alt={"thumb1"}
                        className="thumbimg"
                      />
                    </Link>
                  </Col>
                  <Col xl={3} md={6}>
                    <Link to="#" className="thumbnail">
                      <img
                        src={
                          require("../../../assets/images/media/5.jpg")
                        }
                        alt={"thumb1"}
                        className="thumbimg"
                      />
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Custom content Thumbnails</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Row className="row mt-4">
                  <Col md={12} xl={4} >
                    <div className="thumbnail">
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/19.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <p>
                          <Link
                            to="#"
                            className="btn btn-primary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-secondary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xl={4}>
                    <div className="thumbnail">
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/20.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <p>
                          <Link
                            to="#"
                            className="btn btn-primary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-secondary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={12} xl={4}>
                    <div className="thumbnail">
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/21.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                        <p>
                          <Link
                            to="#"
                            className="btn btn-primary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-secondary me-2"
                            role="button"
                          >
                            Button
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Custom content Thumbnails</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Row className="row mt-4">
                  <Col lg={6} xl={3} md={12}>
                    <div className="thumbnail">
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/22.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incidi dunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} xl={3} md={12}>
                    <div className="thumbnail">
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/23.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incidi dunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} xl={3} md={12}>
                    <div className="thumbnail">
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incidi dunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation.
                        </p>
                      </div>
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/24.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                    </div>
                  </Col>
                  <Col lg={6} xl={3} md={12}>
                    <div className="thumbnail">
                      <div className="caption">
                        <h4>
                          <strong>Thumbnail label</strong>
                        </h4>
                        <p>
                          sed do eiusmod tempor incidi dunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation.
                        </p>
                      </div>
                      <Link to="#">
                        <img
                          src={
                            require("../../../assets/images/media/25.jpg")
                              
                          }
                          alt={"thumb1"}
                          className="thumbimg"
                        />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
