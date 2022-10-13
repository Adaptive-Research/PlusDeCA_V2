import React from "react";
import * as rating from "../../../data/Rating/rating";
import { Link } from "react-router-dom";
import {Breadcrumb, Card,Row, Col} from "react-bootstrap"
export default function Ratings() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Rating</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Rating
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
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Static Star Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-warning  fs-25">
                <rating.CustomizedRating1 />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Static Rating </h3>
            </Card.Header>
            <Card.Body>
              <div className="text-primary  fs-15">
                <rating.CustomizedRating9 />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Fractional Star rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="star-ratings">
                <div className=" stars-example-fontawesome-o">
                  <rating.CustomizedRating4 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Font Awesome Star Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="star-ratings start-ratings-main clearfix">
                <div className=" stars-example-fontawesome">
                  <rating.CustomizedRating />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Natural Behavior.</h3>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box-body">
                  <rating.CustomizedRating6 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Opinion rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-movie">
                <div className="box-body">
                  <rating.CustomizedRating5 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Circle Rating </h3>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-square">
                <div className="box-body">
                  <rating.CustomizedRating7 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Color Rating </h3>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="box  box-example-pill ">
                <div className="box-body">
                  <rating.CustomizedRating8 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6} xl={4}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Static Opinion Rating</h3>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-horizontal">
                <div className="box-body">
                  <rating.CustomizedRating2 />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
