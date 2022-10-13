import React from "react";
import { Link } from "react-router-dom";
import * as shop from "../../../../data/E-commerece/shoplist/shoplist";
import {
  Pagination,
  Row,
  Card,
  FormGroup,
  InputGroup,
  FormControl,
  Form,
  Breadcrumb,Col,
} from "react-bootstrap";

export default function Shop() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Shop</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              E-Commerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Shop
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

      <Row className="row-cards">
        <Col xl={3} lg={4}>
          <Row>
            <Col md={12} lg={12}>
              <form className="shop__filter card">
                <Card.Header>
                  <Card.Title as="h3">Colors</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row className="gutters-xs">
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="azure"
                          className="colorinput-input"
                          defaultChecked="checked"
                        />
                        <span className="colorinput-color bg-azure"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="indigo"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-indigo"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="purple"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-purple"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="pink"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-pink"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="red"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-red"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="orange"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-orange"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="yellow"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-yellow"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="lime"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-lime"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="green"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-green"></span>
                      </label>
                    </div>
                    <div className="col-auto">
                      <label className="colorinput">
                        <input
                          name="color"
                          type="radio"
                          value="teal"
                          className="colorinput-input"
                        />
                        <span className="colorinput-color bg-teal"></span>
                      </label>
                    </div>
                  </Row>
                </Card.Body>
              </form>
              <Card>
                <Card.Header>
                  <Card.Title> Categories &amp; Fliters</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-1"
                      defaultChecked="checked"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="custom-control-label"
                    >
                      Mens
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-2"
                    />
                    <label
                      htmlFor="checkbox-2"
                      className="custom-control-label"
                    >
                      Womens
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-3"
                    />
                    <label
                      htmlFor="checkbox-3"
                      className="custom-control-label"
                    >
                      Kids
                    </label>
                  </div>
                  <div className="custom-checkbox custom-control">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-4"
                    />
                    <label
                      htmlFor="checkbox-4"
                      className="custom-control-label"
                    >
                      Others
                    </label>
                  </div>
                  <FormGroup className="mt-3">
                    <Form.Label className="form-label">Category</Form.Label>

                    <shop.Category />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label className="form-label">Brand</Form.Label>

                    <shop.Brand />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label className="form-label">Type</Form.Label>

                    <shop.Type />
                  </FormGroup>
                  <FormGroup>
                    <Form.Label className="form-label">Color</Form.Label>

                    <shop.Color />
                  </FormGroup>
                  <Link className="btn btn-primary me-2  mb-1 mt-1" to="#">
                    Apply Filter
                  </Link>
                  <Link className="btn btn-danger me-2 mb-1 mt-1" to="#">
                    Search Now
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl={9} lg={8}>
          <Card>
            <Row className="card-body p-2">
              <Col sm={12} className="p-0">
                <InputGroup>
                  <FormControl
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                  />
                  <button className="input-group-text btn btn-primary">
                    Search
                  </button>
                </InputGroup>
              </Col>
            </Row>
          </Card>
          <Row>
            <shop.Shopcardlist />
          </Row>
          <div className="mb-5">
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
          </div>
        </Col>
      </Row>
    </div>
  );
}
