import React from "react";
import { Card,Row, Col } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
export default function Breadcrumbs() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Breadcrumbs</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Breadcrumbs
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span>
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
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple Breadcrumbs</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item1 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 active  text-muted">
                    About
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item1 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 active  text-muted">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item1 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 " href="#">
                    Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item1 active text-muted">
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Breadcrumbs-Right align</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="breadcrumb-1">
                  <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item1 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item1 active  text-muted">
                      About
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="breadcrumb-2">
                  <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item1 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item1 active  text-muted">
                      Library
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="breadcrumb-6">
                  <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item1 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item1" href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item1 active text-muted">
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple Breadcrumbs Type 2</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Breadcrumb className="breadcrumb2">
                  <Breadcrumb.Item className="breadcrumb-item2 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item2 active  text-muted">
                    About
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item2 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item2 active  text-muted">
                    Library
                  </Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item className="breadcrumb-item2 active">
                    <i
                      className="fa fa-home me-1 text-transparant"
                      aria-hidden="true"
                    ></i>
                    Home
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item2" href="#">
                    Library
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="breadcrumb-item2 active text-muted">
                    Data
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Type 2 Breadcrumbs-Right align</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="breadcrumb-2">
                  <Breadcrumb className="breadcrumb2">
                    <Breadcrumb.Item className="breadcrumb-item2 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item2 active  text-muted">
                      About
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="breadcrumb-2">
                  <Breadcrumb className="breadcrumb1">
                    <Breadcrumb.Item className="breadcrumb-item2 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item2 active  text-muted">
                      Library
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div className="breadcrumb-6">
                  <Breadcrumb className="breadcrumb1 mb-0">
                    <Breadcrumb.Item className="breadcrumb-item2 active">
                      <i
                        className="fa fa-home me-1 text-transparant"
                        aria-hidden="true"
                      ></i>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item2" href="#">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="breadcrumb-item2 active text-muted">
                      Data
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
