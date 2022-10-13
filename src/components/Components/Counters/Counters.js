import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import {Breadcrumb ,Row,Col, Card} from "react-bootstrap"
import * as countersdata from "../../../data/Component/countersdata/countersdata"
export default function Counters() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Counters</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Counters
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
      <Row className=" row-cards">
        <Col md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Numbers counter</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto me-auto">
                <i className="fe fe-users text-white mb-5 "></i>
              </div>
              <h5>Employess</h5>
              <h2 className="counter">
                <CountUp end={2569} separator="," start={0} duration={1.94} />
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} xl={4}>
          <Card >
            <Card.Header>
              <h3 className="card-title">Numbers counter</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-danger-gradient box-shadow-danger brround ms-auto me-auto">
                <i className="fe fe-dollar-sign text-white mb-5 "></i>
              </div>
              <h5>Profit</h5>
              <h2 className="counter">
                <CountUp
                  end={256989}
                  separator=","
                  start={0.0}
                  duration={1.94}
                />
                .32
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col  md={12} lg={4} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Numbers counter</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="counter-icon bg-secondary-gradient  box-shadow-secondary brround ms-auto me-auto">
                <i className="fe fe-alert-octagon text-white mb-5 "></i>
              </div>
              <h5>Errors</h5>
              <h2 className="counter">
                0.
                <CountUp end={8998} start={0} duration={1.4} />
              </h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time Counting From 0</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-primary br-7">
                <span id="timer-countup" className="h3 text-white">
                  <countersdata.Uptimer/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time Counting From 60 to 20</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-secondary br-7">
                <span
                  id="timer-countinbetween"
                  className="h3 text-white"
                >
                  <countersdata.Timers min={1}/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time 1 minute counter</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <div className="example bg-info br-7">
                <span 
                  className="h3 text-white"
                >
                  <countersdata.Middle/>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Time Counting days Limit</h3>
            </Card.Header>
             <Card.Body className=" text-center">
              <Row>
                <Col md={6} className=" mx-auto">
                  <div className=" example bg-success br-7"> 
                 <countersdata.TimeCountingdaysLimit/>
                </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} >
          <Card>
            <Card.Header>
              <h3 className="card-title">Day Counter</h3>
            </Card.Header>
            <Card.Body className=" text-center">
              <countersdata.DayCounter/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
