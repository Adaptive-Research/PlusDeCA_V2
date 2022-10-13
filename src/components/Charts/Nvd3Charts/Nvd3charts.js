import React from "react";
import Nvd3Charts from "react-nvd3";
import { Breadcrumb,Card,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../../node_modules/nvd3/build/nv.d3.css";
import * as nvd3 from "../../../data/charts/nvd3/nvd3";
export default function Nvd3Chart() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Nvd3-Charts</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Charts
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Nvd3-Charts
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
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Bar Chart With Multiple colors</h3>
            </Card.Header>
            <Card.Body>
              <div className="h-400">
                <Nvd3Charts
                  id="nvd3-chart1"
                  type="discreteBarChart"
                  datum={nvd3.BarChart}
                  x="label"
                  y="value"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Bar Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="h-400">
                <Nvd3Charts
                  id="nvd3-chart2"
                  type="discreteBarChart"
                  datum={nvd3.BarChart2}
                  x="label"
                  y="value"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Line Chart With Zooming Options</h3>
            </Card.Header>
            <Card.Body>
              <div id="chartZoom">
                <Link
                  to="#"
                  className="btn btn-outline-secondary btn-sm"
                  id="zoomIn"
                >
                  +
                </Link>
                <Link
                  to="#"
                  className="btn btn-outline-secondary btn-sm"
                  id="zoomOut"
                >
                  -
                </Link>
              </div>
              <div className="with-transitions h-400  ">
                <Nvd3Charts
                  id="nvd3-chart3"
                  type="lineChart"
                  datum={nvd3.LineChart}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
