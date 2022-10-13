import React from "react";
import { Pagination, Breadcrumb, Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Searchdata from "../../../data/Advancedelements/Searchdata/Searchdata";
export default function Search() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Search</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Search
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

      <Row className="row row-cards">
        <Col lg={12} xl={3}>
          <Row>
            <Col md={12} lg={6} xl={12}>
              <Card>
                <Card.Header>
                  <Card.Title> Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label className="form-label mt-0">Mens</Form.Label>
                    <Searchdata.Singleselect13 />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="form-label">Women</Form.Label>
                    <Searchdata.Singleselect1s />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="form-label">Baby & Kids</Form.Label>
                    <Searchdata.Singleselect1w />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="form-label">Electronics</Form.Label>
                    <Searchdata.Singleselect1ele />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="form-label">
                      Sport,Books & More
                    </Form.Label>
                    <Searchdata.Singleselect1book />
                  </Form.Group>
                  <Link to="#" className="btn btn-primary d-grid mt-5">
                    Submit
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6} xl={12}>
              <Card>
                <Card.Body className=" h-100">
                  <div className="mb-4 text-center">
                    <img
                      src={require("../../../assets/images/pngs/5.png")}
                      alt="img"
                      className="img-fluid br-5"
                    />
                  </div>
                  <h4 className="card-title text-center">
                    Womens Shopping Zone
                  </h4>
                  <Card.Subtitle className="card-subtitle text-center">
                    Upto 50% Discount slaes Every shopping items
                  </Card.Subtitle>
                  <div className="text-center">
                    <div className="mt-3 d-grid">
                      <Link to="#" className="btn btn-primary ">
                        View More
                      </Link>
                    </div>
                    <div className="mt-3 d-grid">
                      <Link
                        to={`${process.env.process}../../../../pages/e-commerce/shoppingCart`}
                        className="btn btn-secondary"
                      >
                        <i className="fe fe-plus"></i> Add to cart
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={12} xl={9}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="" />
            <div className="input-group-text btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div className="card mt-5 users store">
            <div className="table-responsive">
              <Searchdata.Tablesearchdata />
            </div>
          </div>
          <div>
            <Pagination className="pagination mb-5 float-end">
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
