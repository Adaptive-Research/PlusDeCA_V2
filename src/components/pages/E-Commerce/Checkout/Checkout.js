import React from "react";

import * as productdetails from "../../../../data/E-commerece/productdetails/productdetails";
import {
  Tabs,
  Tab,
  Breadcrumb,
  Row,
  Col,
  Card,
  FormGroup,
  InputGroup,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Checkout() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Checkout</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              E-Commerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Checkout
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
        <Col xl={8} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Billing Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      First Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      Last Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Company Name <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Email address <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Country <span className="text-red">*</span>
                    </Form.Label>

                    <productdetails.Counrtcheckout />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Form.Label>
                      Address <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Home Address"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      City <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </FormGroup>
                </Col>
                <Col sm={6} md={6}>
                  <FormGroup>
                    <Form.Label>
                      Postal Code <span className="text-red">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Payment Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <Tabs defaultActiveKey="tab20" id="checkout" className="mb-3 ">
                  <Tab eventKey="tab20" title="CreditCard" className="">
                    <div className="tab-pane active show" id="tab20">
                      <div
                        className="bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4"
                        role="alert"
                      >
                        Please Enter Valid Details
                      </div>
                      <FormGroup>
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Form.Label>Card number</Form.Label>
                        <InputGroup>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for..."
                          />
                          <span className="input-group-text btn btn-success shadow-none">
                            <i className="fa fa-cc-visa"></i> &nbsp;
                            <i className="fa fa-cc-amex"></i> &nbsp;
                            <i className="fa fa-cc-mastercard"></i>
                          </span>
                        </InputGroup>
                      </FormGroup>
                      <Row>
                        <Col sm={8}>
                          <FormGroup>
                            <Form.Label>Expiration</Form.Label>
                            <InputGroup>
                              <FormControl
                                type="number"
                                className="form-control"
                                placeholder="MM"
                                name="Month"
                              />
                              <FormControl
                                type="number"
                                className="form-control"
                                placeholder="YY"
                                name="Year"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup>
                            <Form.Label>
                              CVV <i className="fa fa-question-circle"></i>
                            </Form.Label>
                            <FormControl
                              type="number"
                              className="form-control"
                              required=""
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Link to="#" className="btn btn-lg btn-primary mt-2">
                        Confirm
                      </Link>
                    </div>
                  </Tab>
                  <Tab eventKey="tab21" title=" Paypal">
                    <div className="tab-pane" id="tab21">
                      <p>Paypal is easiest way to pay online</p>
                      <p>
                        <Link to="#" className="btn btn-primary">
                          <i className="fa fa-paypal"></i> Log in my Paypal
                        </Link>
                      </p>
                      <p className="mb-0">
                        <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="tab22" title="Bank Transfer">
                    <div className="tab-pane" id="tab22">
                      <p>Bank account details</p>
                      <dl className="card-text">
                        <dt>BANK: </dt>
                        <dd> THE UNION BANK 0456</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>Account Number: </dt>
                        <dd> 67542897653214</dd>
                      </dl>
                      <dl className="card-text">
                        <dt>IBAN: </dt>
                        <dd>543218769</dd>
                      </dl>
                      <p className="mb-0">
                        <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt.
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">Your Order</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-md-flex">
                <div className="d-flex">
                  <img
                    className="img-fluid avatar-xl border p-0 br-7"
                    src={require("../../../../assets/images/pngs/9.png")}
                    alt="img"
                  />

                  <div className="ms-3 mt-2">
                    <h4 className="mb-1 fw-semibold fs-14">
                      <Link to="#">bracelets</Link>
                    </h4>
                    <div className="mb-2 text-warning fs-14">
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star-half-o"></i>
                      <i className="me-1 fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
                <div className="ms-auto my-auto">
                  <span className="me-4 my-auto fs-16 fw-semibold">$438</span>
                </div>
              </div>
              <div className="d-md-flex mt-5">
                <div className="d-flex">
                  <img
                    className="img-fluid avatar-xl border p-0 br-7"
                    src={require("../../../../assets/images/pngs/1.png")}
                    alt="img"
                  />

                  <div className="ms-3 mt-2">
                    <h4 className="mb-1 fw-semibold fs-14">
                      <Link to="#">Cup</Link>
                    </h4>
                    <div className="mb-2 text-warning fs-14">
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star-half-o"></i>
                      <i className="me-1 fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
                <div className="ms-auto my-auto">
                  <span className="me-4 my-auto fs-16 fw-semibold">$765</span>
                </div>
              </div>
              <div className="d-md-flex mt-5">
                <div className="d-flex">
                  <img
                    className="img-fluid avatar-xl border p-0 br-7"
                    src={require("../../../../assets/images/pngs/6.png")}
                    alt="img"
                  />

                  <div className="ms-3 mt-2">
                    <h4 className="mb-1 fw-semibold fs-14">
                      <Link to="#">Goggles</Link>
                    </h4>
                    <div className="mb-2 text-warning fs-14">
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star"></i>
                      <i className="me-1 fa fa-star-o"></i>
                      <i className="me-1 fa fa-star-o"></i>
                    </div>
                  </div>
                </div>
                <div className="ms-auto my-auto">
                  <span className="me-4 my-auto fs-16 fw-semibold">$543</span>
                </div>
              </div>
              <table className="table mt-5">
                <tbody>
                  <tr>
                    <td className="border-top-0">Sub Total</td>
                    <td className="text-end fw-bold border-top-0">$4,360</td>
                  </tr>
                  <tr>
                    <td className="border-top-0">Discount</td>
                    <td className="text-end fw-bold border-top-0">5%</td>
                  </tr>
                  <tr>
                    <td className="border-top-0">Shipping</td>
                    <td className="text-end fw-bold border-top-0">Free</td>
                  </tr>
                  <tr>
                    <td className="fs-20 fw-bold border-top-0">Total</td>
                    <td className="text-end fs-20 fw-bold border-top-0">
                      $3,976
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link to="#" className="btn btn-primary">
                Place Order
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
