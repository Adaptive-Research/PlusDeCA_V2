import React from "react";
import * as chart from "../../../data/charts/chartjs/chartjs";
import { Breadcrumb,Card,Col,Row, } from "react-bootstrap";
import { Bar, Pie, Radar, Line, Doughnut, PolarArea } from "react-chartjs-2";
import { Link } from "react-router-dom";

export default function ChartJs() {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">ChartJs</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Charts
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              ChartJs
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
              <h3 className="card-title">Line Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Line
                  options={chart.Linechart}
                  data={chart.linechartdata}
                  className="barchart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Bar Chart1</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Bar
                  options={chart.Barchart1}
                  data={chart.barchart1data}
                  className="barchart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Bar Chart2</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Bar
                  options={chart.Barchart2}
                  data={chart.barchart2data}
                  className="barchart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Area Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Line
                  options={chart.Areachart}
                  data={chart.areachart}
                  className="barchart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Donut Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Doughnut
                  data={chart.dchart}
                  className="h-275 w-250 chartjs-render-monitor "
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Pie Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Pie
                  data={chart.piechart}
                  className="h-275 w-250 chartjs-render-monitor piechart"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Radar Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <Radar
                  data={chart.Radarchart1}
                  className="h-275 w-250 chartjs-render-monitor radarchart1"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Polar Chart</h3>
            </Card.Header>
            <Card.Body>
              <div className="chart-container">
                <div>
                  <PolarArea
                    data={chart.Polarchart1}
                    className="h-275 w-250 chartjs-render-monitor polarchart1"
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
