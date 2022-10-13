import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
import * as Leafletmaps from "../../../data/Maps/Leafletmaps/Leafletmaps";
export default function LeafletMaps() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Maps</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Maps
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
      <Row className="row row-sm">
        <Col lg={12}>
          <Card className="card mg-b-20" id="map">
            <Card.Header>
              <Card.Title>Basic</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="ht-300" id="leaflet1" style={{ height: "300px" }}>
                <Leafletmaps.Basic />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className="card mg-b-20" id="map2">
            <Card.Header>
              <Card.Title>With Popup</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="ht-300" id="leaflet2" style={{ height: "300px" }}>
                <Leafletmaps.Popups />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card className="card" id="map1">
            <Card.Header>
              <Card.Title>Map With Circle</Card.Title>
            </Card.Header>
            <Card.Body>
              <div
                className="ht-200 ht-sm-300 ht-md-400"
                id="leaflet3"
                style={{ height: "300px" }}
              >
                <Leafletmaps.Circles />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
