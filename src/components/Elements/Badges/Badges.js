import React from "react";
import { Badge, Button, Card, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Badges() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Badges</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
            Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Badges
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
              <h3 className="card-title">Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge bg="default" className="badge bg-default me-1 mb-1 mt-1">
                  Default
                </Badge>
                <Badge
                  bg="primary"
                  className="badge bg-primary  me-1 mb-1 mt-1"
                >
                  Primary
                </Badge>
                <Badge
                  bg="success"
                  className="badge bg-success  me-1 mb-1 mt-1"
                >
                  Success
                </Badge>
                <Badge bg="danger" className="badge bg-danger  me-1 mb-1 mt-1">
                  Danger
                </Badge>
                <Badge bg="info" className="badge bg-info  me-1 mb-1 mt-1">
                  Info
                </Badge>
                <Badge
                  bg="warning"
                  className="badge bg-warning  me-1 mb-1 mt-1"
                >
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Gradient Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge bg="default" className="badge bg-default me-1 mb-1 mt-1">
                  Default
                </Badge>
                <Badge
                  bg="primary"
                  className="badge bg-primary-gradient  me-1 mb-1 mt-1"
                >
                  Primary
                </Badge>
                <Badge
                  bg="success"
                  className="badge bg-success-gradient  me-1 mb-1 mt-1"
                >
                  Success
                </Badge>
                <Badge
                  bg="danger"
                  className="badge bg-danger-gradient  me-1 mb-1 mt-1"
                >
                  Danger
                </Badge>
                <Badge
                  bg="info"
                  className="badge bg-info-gradient  me-1 mb-1 mt-1"
                >
                  Info
                </Badge>
                <Badge
                  bg="warning"
                  className="badge bg-warning-gradient  me-1 mb-1 mt-1"
                >
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pill Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge
                  bg="default"
                  className="badge rounded-pill bg-default me-1 mb-1 mt-1"
                >
                  Default
                </Badge>
                <Badge
                  bg="primary"
                  className="badge rounded-pill bg-primary me-1 mb-1 mt-1"
                >
                  Primary
                </Badge>
                <Badge
                  bg="success"
                  className="badge rounded-pill bg-success me-1 mb-1 mt-1"
                >
                  Success
                </Badge>
                <Badge
                  bg="danger"
                  className="badge rounded-pill bg-danger me-1 mb-1 mt-1"
                >
                  Danger
                </Badge>
                <Badge
                  bg="info"
                  className="badge rounded-pill bg-info me-1 mb-1 mt-1"
                >
                  Info
                </Badge>
                <Badge
                  bg="warning"
                  className="badge rounded-pill bg-warning me-1 mb-1 mt-1"
                >
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Gradient Pill Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge
                  bg="default"
                  className="badge rounded-pill bg-default me-1 mb-1 mt-1"
                >
                  Default
                </Badge>
                <Badge
                  bg="primary"
                  className="badge rounded-pill bg-primary-gradient me-1 mb-1 mt-1"
                >
                  Primary
                </Badge>
                <Badge
                  bg="success"
                  className="badge rounded-pill bg-success-gradient me-1 mb-1 mt-1"
                >
                  Success
                </Badge>
                <Badge
                  bg="danger"
                  className="badge rounded-pill bg-danger-gradient me-1 mb-1 mt-1"
                >
                  Danger
                </Badge>
                <Badge
                  bg="info"
                  className="badge rounded-pill bg-info-gradient me-1 mb-1 mt-1"
                >
                  Info
                </Badge>
                <Badge
                  bg="warning"
                  className="badge rounded-pill bg-warning-gradient me-1 mb-1 mt-1"
                >
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Buttons with square Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Button
                  variant="primary"
                  type="button"
                  className="btn btn-primary mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    2
                  </Badge>
                </Button>

                <Button
                  variant="secondary"
                  type="button"
                  className="btn btn-secondary mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    1
                  </Badge>
                </Button>

                <Button
                  variant="success"
                  type="button"
                  className="btn btn-success mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    5
                  </Badge>
                </Button>

                <Button
                  variant="info"
                  type="button"
                  className="btn btn-info mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    3
                  </Badge>
                </Button>

                <Button
                  variant="warning"
                  type="button"
                  className="btn btn-warning mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    6
                  </Badge>
                </Button>

                <Button
                  variant="danger"
                  type="button"
                  className="btn btn-danger mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white" bg="white">
                    4
                  </Badge>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Border buttons with square Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-primary mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge className="badge  bg-primary" bg="primary">
                    2
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-success mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge className="badge  bg-success" bg="success">
                    65
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-secondary mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge className="badge  bg-secondary" bg="secondary">
                    1
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-info mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge className="badge  bg-info" bg="info">
                    5333
                  </Badge>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Buttons with rounded Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Button
                  variant="info"
                  type="button"
                  className="btn btn-info mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge bg-white rounded-pill" bg="white">
                    3
                  </Badge>
                </Button>

                <Button
                  variant="primary"
                  type="button"
                  className="btn btn-primary mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white rounded-pill" bg="white">
                    22
                  </Badge>
                </Button>

                <Button
                  variant="secondary"
                  type="button"
                  className="btn btn-secondary mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white rounded-pill" bg="white">
                    145
                  </Badge>
                </Button>

                <Button
                  variant="success"
                  type="button"
                  className="btn btn-success mt-1 mb-1 me-3"
                >
                  <span>Notifications</span>
                  <Badge className="badge  bg-white rounded-pill" bg="white">
                    3225
                  </Badge>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Border buttons with rounded Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-primary mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge
                    className="badge  bg-primary rounded-pill"
                    bg="primary"
                  >
                    2
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-success mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge
                    className="badge  bg-success rounded-pill"
                    bg="success"
                  >
                    65
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-secondary mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge
                    className="badge  bg-secondary rounded-pill"
                    bg="secondary"
                  >
                    43
                  </Badge>
                </Button>

                <Button
                  variant=""
                  type="button"
                  className="btn btn-outline-info mt-1 mb-1 me-3"
                >
                  Notifications
                  <Badge className="badge  bg-info rounded-pill" bg="info">
                    563
                  </Badge>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <h1>
                  Heading 01 <Badge bg="default">New</Badge>
                </h1>
                <h2>
                  Heading 02 <Badge bg="default">New</Badge>
                </h2>
                <h3>
                  Heading 03 <Badge bg="default">New</Badge>
                </h3>
                <h4>
                  Heading 04 <Badge bg="default">New</Badge>
                </h4>
                <h5>
                  Heading 05 <Badge bg="default">New</Badge>
                </h5>
                <h6>
                  Heading 06 <Badge bg="default">New</Badge>
                </h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Colored Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <h1 className="text-primary">
                  Heading 01 <Badge className="badge" bg="primary"> New</Badge>
                </h1>
                <h2 className="text-red">
                  Heading 02 <Badge className="badge" bg="danger">New</Badge>
                </h2>
                <h3 className="text-yellow">
                  Heading 03 <Badge className="badge " bg="warning">New</Badge>
                </h3>
                <h4 className="text-green">
                  Heading 04 <Badge className="badge" bg="success">New</Badge>
                </h4>
                <h5 className="text-info">
                  Heading 05 <Badge className="badge " bg="info">New</Badge>
                </h5>
                <h6 className="text-secondary">
                  Heading 06 <Badge className="badge" bg="secondary">New</Badge>
                </h6>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Contextual variations</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge bg="default" className="badge  mt-2 me-1">
                  Default
                </Badge>
                <Badge bg="primary" className="badge  mt-2 me-1">
                  Primary
                </Badge>
                <Badge bg="success" className="badge  mt-2 me-1">
                  Success
                </Badge>
                <Badge bg="danger" className="badge  mt-2 me-1">
                  Danger
                </Badge>
                <Badge bg="info" className="badge mt-2 me-1">
                  Info
                </Badge>
                <Badge bg="warning" className="badge  mt-2 ">
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pill Badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <Badge bg="default" className="badge rounded-pill  mt-2 me-1">
                  Default
                </Badge>
                <Badge bg="primary" className="badge rounded-pill  mt-2 me-1">
                  Primary
                </Badge>
                <Badge bg="success" className="badge rounded-pill mt-2 me-1">
                  Success
                </Badge>
                <Badge bg="danger" className="badge rounded-pill mt-2 me-1">
                  Danger
                </Badge>
                <Badge bg="info" className="badge rounded-pill mt-2 me-1">
                  Info
                </Badge>
                <Badge bg="warning" className="badge rounded-pill mt-2 ">
                  Warning
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
