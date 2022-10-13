import React from "react";
import * as gallerydata from "../../../data/Pages/gallerydata/gallerydata";

import {
  Breadcrumb,
  Row,
  Col,
  Card,
  Pagination,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Gallerys() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Gallery</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
            Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Gallery
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

      <Card className="demo-gallery card">
        <Card.Header>
          <Card.Title>Light Gallery</Card.Title>
        </Card.Header>
        <Card.Body>
          <gallerydata.GalleryImages2 />
        </Card.Body>
      </Card>

      <Row className="row mb-5">
        <Col className=" mt-1 d-none d-md-block" md={6}>
          1 - 10 of 234 photos
        </Col>
        <Col md={6}>
          <div className="float-end">
            <Pagination>
              <Pagination.Prev disabled>Prev </Pagination.Prev>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Next>Next </Pagination.Next>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
}
