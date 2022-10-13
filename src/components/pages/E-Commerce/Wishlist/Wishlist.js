import React from "react";
import { Breadcrumb, Col, Pagination, Row, Card } from "react-bootstrap";
import * as Wishlistdata from "../../../../data/E-commerece/wishlistdata/wishlistdata";
import { Link } from "react-router-dom";
export default function Wishlist() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Wish List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              E-Commerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Wish List
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
        <Col xl={12} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">My Wish List</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Wishlistdata.Wishlistdata />
              </div>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
