import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Col,Row,Card } from "react-bootstrap";
import * as piecharts from "../../../data/charts/piecharts/piecharts"

export default function PieCharts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Pie Charts</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Charts
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Pie Charts
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
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart</h3>
            </Card.Header>
            <Card.Body className="apexchart">
                  <piecharts.Apexcharts/>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart with Multiple colors</h3>
            </Card.Header>
            <Card.Body className="apexchart">
              <piecharts.Apexcharts2/>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart3</h3>
            </Card.Header>
            <Card.Body className="apexchart">
              <piecharts.Apexcharts3/>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart4</h3>
            </Card.Header>
            <Card.Body className="apexchart">
                 <piecharts.Apexcharts4/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
