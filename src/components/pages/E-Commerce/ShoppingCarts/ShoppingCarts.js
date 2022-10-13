import React from "react";
import { Link } from "react-router-dom";
import * as shopping from "../../../../data/E-commerece/shopping/shopping";
import {
  Row,
  Card,
  Col,
  Form,
  FormGroup,
  InputGroup,
  FormControl,
  Table,
  Breadcrumb,
} from "react-bootstrap";

export default function ShoppingCarts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Cart</h1>
          <Breadcrumb>
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              E-Commerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Cart
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
          <Card className="cart">
            <Card.Header>
              <Card.Title as="h3">Shopping Cart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <shopping.ShoppingData />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Have coupon?</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <FormGroup>
                  <InputGroup>
                    <FormControl
                      type="text"
                      className="form-control coupon"
                      placeholder="Coupon code"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary btn-apply coupon">
                        Apply
                      </button>
                    </span>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Price Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table className="border-top-0">
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
              </Table>
            </Card.Body>
            <Card.Footer>
              <div className="step-footer text-end">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/e-commerce/shop/`}
                  className="btn btn-primary me-2 mb-1"
                >
                  <i className="fa fa-arrow-left me-1"></i>Continue Shopping
                </Link>
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/e-commerce/checkout/`}
                  className="btn btn-success me-2 mb-1"
                >
                  Check out<i className="fa fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
