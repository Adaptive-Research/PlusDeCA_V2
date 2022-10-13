import React from "react";
import ReactEcharts from "echarts-for-react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as echarts from "../../../data/charts/echarts/echarts";
export default function Echarts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">ECharts</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Charts
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              ECharts
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
              <h3 className="card-title">Line chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart2"
                className="chartsh"
                option={echarts.echart2.option}
                series={echarts.echart2.series}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Combination of Line & Bar Chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart1"
                className="chartsh"
                option={echarts.echart1.option}
                series={echarts.echart1.series}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Vertical Line chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart3"
                className="chartsh"
                option={echarts.echart3.option}
                series={echarts.echart3.series}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">
                Vertical Combination of Line & Bar Chart
              </h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart4"
                className="chartsh"
                option={echarts.echart4.option}
                series={echarts.echart4.series}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Bar Chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart5"
                className="chartsh"
                option={echarts.echart5.option}
                series={echarts.echart5.series}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Horizontal Bar Chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart6"
                className="chartsh"
                option={echarts.echart6.option}
                series={echarts.echart6.series}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Single line chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart7"
                className="chartsh"
                option={echarts.echart7.option}
                series={echarts.echart7.series}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Single smooth line chart</h3>
            </Card.Header>
            <Card.Body>
              <ReactEcharts
                id="echart8"
                option={echarts.echart8.option}
                series={echarts.echart8.series}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
