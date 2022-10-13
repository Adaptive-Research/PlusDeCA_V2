import React from "react";
import { Breadcrumb, Card, Row, Col } from "react-bootstrap";
import * as rangeslider from "../../../data/Component/rangeslider/rangeslider";
import { Link } from "react-router-dom";

export default function RangeSlider() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">RangeSlider</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              RangeSlider
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

      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
              <rangeslider.DiscreteSliderMarks
                className="rangeslider1"
                name="example_name"
                type="text"
                defaultValue=""
              />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.Rangeslider2
                className="rangeslider2"
                name="example_name"
                type="text"
                defaultValue=""
              />
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
              <rangeslider.RangeSlider3
                className="rangeslider3"
                name="example_name"
                type="text"
                defaultValue=""
              />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.RangeSlider4
                className="rangeslider3"
                name="example_name"
                type="text"
                defaultValue=""
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Customized Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
              <rangeslider.CustomizedSlider
                className="rangeslider1 irs-modern"
                data="true"
                extra="true"
                name="example_name"
                type="text"
              />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.CustomizedSlider1 />
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
              <rangeslider.CustomizedSlider2 />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.CustomizedSlider4 />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Track Inverted Slider</div>
        </Card.Header>
        <Card.Body>
          <Row className="row-sm">
            <Col lg={12}>
              <rangeslider.TrackFalseSlider />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.TrackFalseSlider1 />
            </Col>
          </Row>
          <Row className="row-sm">
            <Col lg={12} className=" mt-4">
              <rangeslider.TrackInvertedSlider />
            </Col>
            <Col lg={12} className=" mt-4">
              <rangeslider.TrackInvertedSlider1 />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header className="border-bottom-0">
          <div className="card-title">Vertical Customized Range Slider</div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col className=" mt-4" lg={3} md={3}>
              <rangeslider.VerticalSlider />
            </Col>
            <Col className=" mt-4" lg={3} md={3}>
              <rangeslider.VerticalSlider1 />
            </Col>

            <Col className=" mt-4" lg={3} md={3}>
              <rangeslider.VerticalSlider2 />
            </Col>
            <Col className=" mt-4" lg={3} md={3}>
              <rangeslider.VerticalSlider4 />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
