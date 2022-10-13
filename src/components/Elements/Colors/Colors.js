import React from "react";
import { Card, Col, Row, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Colors() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Colors</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Colors
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
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Contextual colors</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-primary me-4 br-7"></div>
                        <div>
                          <strong>Primary</strong>
                          <br />
                          <code>.bg-primary</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-info me-4 br-7"></div>
                        <div>
                          <strong>Info</strong>
                          <br />
                          <code>.bg-info</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-secondary me-4 br-7"></div>
                        <div>
                          <strong>Secondary</strong>
                          <br />
                          <code>.bg-secondary</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-warning me-4 br-7"></div>
                        <div>
                          <strong>Warning</strong>
                          <br />
                          <code>.bg-warning</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-danger me-4 br-7"></div>
                        <div>
                          <strong>Danger</strong>
                          <br />
                          <code>.bg-danger</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-success me-4 br-7"></div>
                        <div>
                          <strong>Success</strong>
                          <br />
                          <code>.bg-success</code>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Gradient colors</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-primary-gradient me-4 br-7"></div>
                        <div>
                          <strong>Primary</strong>
                          <br />
                          <code>.bg-primary-gradient</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-info-gradient me-4 br-7"></div>
                        <div>
                          <strong>Info</strong>
                          <br />
                          <code>.bg-info-gradient</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-secondary-gradient me-4 br-7"></div>
                        <div>
                          <strong>Secondary</strong>
                          <br />
                          <code>.bg-secondary-gradient</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-warning-gradient me-4 br-7"></div>
                        <div>
                          <strong>Warning</strong>
                          <br />
                          <code>.bg-warning-gradient</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-danger-gradient me-4 br-7"></div>
                        <div>
                          <strong>Danger</strong>
                          <br />
                          <code>.bg-danger-gradient</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-success-gradient me-4 br-7"></div>
                        <div>
                          <strong>Success</strong>
                          <br />
                          <code>.bg-success-gradient</code>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Other colors</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-primary-transparent me-4 br-7"></div>
                        <div>
                          <strong>primary</strong>
                          <br />
                          <code>.bg-primary-transparent</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-secondary-transparent me-4 br-7"></div>
                        <div>
                          <strong>secondary</strong>
                          <br />
                          <code>.bg-secondary-transparent</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-success-transparent me-4 br-7"></div>
                        <div>
                          <strong>success</strong>
                          <br />
                          <code>.bg-success-transparent</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-warning-transparent me-4 br-7"></div>
                        <div>
                          <strong>warning</strong>
                          <br />
                          <code>.bg-warning-transparent</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-danger-transparent me-4 br-7"></div>
                        <div>
                          <strong>danger</strong>
                          <br />
                          <code>.bg-danger-transparent</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-info-transparent me-4 br-7"></div>
                        <div>
                          <strong>info</strong>
                          <br />
                          <code>.bg-info-transparent</code>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Other colors</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-blue me-4 br-7"></div>
                        <div>
                          <strong>Blue</strong>
                          <br />
                          <code>.bg-blue</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-red me-4 br-7"></div>
                        <div>
                          <strong>Red</strong>
                          <br />
                          <code>.bg-red</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-teal me-4 br-7"></div>
                        <div>
                          <strong>Teal</strong>
                          <br />
                          <code>.bg-teal</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-azure me-4 br-7"></div>
                        <div>
                          <strong>Azure</strong>
                          <br />
                          <code>.bg-azure </code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-orange me-4 br-7"></div>
                        <div>
                          <strong>Orange</strong>
                          <br />
                          <code>.bg-orange</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-cyan me-4 br-7"></div>
                        <div>
                          <strong>Cyan</strong>
                          <br />
                          <code>.bg-cyan</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-indigo me-4 br-7"></div>
                        <div>
                          <strong>Indigo</strong>
                          <br />
                          <code>.bg-indigo</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-yellow me-4 br-7"></div>
                        <div>
                          <strong>Yellow</strong>
                          <br />
                          <code>.bg-yellow</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-gray me-4 br-7"></div>
                        <div>
                          <strong>Gray</strong>
                          <br />
                          <code>.bg-gray</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-purple me-4 br-7"></div>
                        <div>
                          <strong>Purple</strong>
                          <br />
                          <code>.bg-purple </code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-lime me-4 br-7"></div>
                        <div>
                          <strong>Lime</strong>
                          <br />
                          <code>.bg-lime</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-gray-dark me-4 br-7"></div>
                        <div>
                          <strong>Dark Gray</strong>
                          <br />
                          <code>.bg-gray-dark</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-pink me-4 br-7"></div>
                        <div>
                          <strong>Pink</strong>
                          <br />
                          <code>.bg-pink </code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-green me-4 br-7"></div>
                        <div>
                          <strong>Green</strong>
                          <br />
                          <code>.bg-green</code>
                        </div>
                      </div>
                    </Col>
                    <Col md={6} lg={4} sm={6}>
                      <div className="d-flex align-items-center mb-3 mt-3">
                        <div className="w-7 h-7 bg-secondary me-4 br-7"></div>
                        <div>
                          <strong>secondary</strong>
                          <br />
                          <code>.bg-secondary</code>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
