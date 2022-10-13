import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb,Row,Col,Card} from"react-bootstrap"
export default function Panels() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Panels</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Panels
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
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple Panels</h3>
            </Card.Header>
            <Card.Body>
              <div className="expanel expanel-default mt-4">
                <div className="expanel-body">Basic panel example</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Panel with heading</h3>
            </Card.Header>
            <Card.Body>
              <div className="row mt-4">
                <Col lg={6}>
                  <div className="expanel expanel-default">
                    <div className="expanel-heading">
                      Panel heading without title
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-default">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Panel with footer</h3>
            </Card.Header>
            <Card.Body>
              <div className="expanel expanel-default mt-4">
                <div className="expanel-body">Panel content</div>
                <div className="expanel-footer">Panel footer</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Panel with color header</h3>
            </Card.Header>
            <Card.Body>
              <Row className="row mt-4">
                <Col lg={6}>
                  <div className="expanel expanel-primary">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-secondary">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="expanel expanel-success">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="expanel expanel-danger">
                    <div className="expanel-heading">
                      <h3 className="expanel-title">Panel title</h3>
                    </div>
                    <div className="expanel-body">Panel content</div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
