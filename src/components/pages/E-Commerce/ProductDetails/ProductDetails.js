import React from "react";
import {
  Tabs,
  Tab,
  Breadcrumb,
  Row,
  Col,
  Card,
  FormGroup,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as productdetails from "../../../../data/E-commerece/productdetails/productdetails";
export default function ProductDetails() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Product Details</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              E-Commerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Product Details
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
        <Col lg={8} md={12}>
          <Card className="productdesc">
            <Card.Body>
              <div className="productdec text-center">
                <div className="bg-light-gray p-6 text-center br-5">
                  <img
                    alt="Product"
                    src={require("../../../../assets/images/pngs/31.png")}
                  />
                </div>
              </div>
              <div className="text-center mt-5 pb-5 border-bottom">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/e-commerce/shoppingCart/`}
                  className="btn btn-primary me-2"
                >
                  <i className="ti-shopping-cart"> </i> Add to cart
                </Link>
                <Link to="#" className="btn btn-secondary me-2">
                  <i className="ti-shopping-cart"> </i> Buy Now
                </Link>
              </div>

              <div className="mt-4 mb-4">
                <h3>Lenovo Headset 330 Pentium Quad Core </h3>
                <h5 className="mb-3 mt-2">Description</h5>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized .
                </p>
              </div>
              <div className="panel panel-primary">
                <div className="tab-menu-heading border ">
                  <div className="tabs-menu ">
                    <Tabs
                      variant="info"
                      defaultActiveKey="Specification"
                      id="uncontrolled-tab-example"
                      className="nav panel-tabs "
                    >
                      <Tab
                        eventKey="Specification"
                        title="Specification"
                        className="me-2"
                      >
                        <hr />
                        <div className="tab-pane active" id="tab1">
                          <h4 className="mb-5 mt-3">General</h4>
                          <ul className="list-unstyled mb-0">
                            <li className="row">
                              <Col sm={3} lg={4} xl={3} className="text-muted ">
                                Brand
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                CASAMOTION
                              </Col>
                            </li>
                            <li className="row">
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Model Number
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                AHLF016
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Model Name
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                casamotion
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Suitable For
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Table, Floor
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Material
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Wood
                              </Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Color
                              </Col>
                              <Col sm={3} lg={8} xl={3}>
                                Brown
                              </Col>
                            </li>
                          </ul>
                        </div>
                      </Tab>
                      &nbsp;
                      <Tab
                        eventKey="Dimensions"
                        title="Dimensions"
                        className=" me-2"
                      >
                        <hr />
                        <div className="tab-pane" id="tab2">
                          <ul className="list-unstyled mb-0">
                            <li className="row" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Width
                              </Col>
                              <Col sm={3}>6.1 inch</Col>
                            </li>
                            <li className="row" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Height
                              </Col>
                              <Col sm={3}>24 inch</Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Depth
                              </Col>
                              <Col sm={3}>6.1 inch</Col>
                            </li>
                            <li className="row p-b-20" >
                              <Col sm={3} lg={4} xl={3} className="text-muted">
                                Other Dimensions
                              </Col>
                              <Col sm={3}>15.5*15.5*24CM</Col>
                            </li>
                          </ul>
                        </div>
                      </Tab>
                      &nbsp;
                      <Tab eventKey="Reviews" title="Reviews " className="me-2">
                        <hr />
                        <div className="tab-pane" id="tab3">
                          <div className="media mb-5">
                            <div className=" me-3">
                              <Link to="#">
                                <img
                                  className="media-object rounded-circle thumb-sm"
                                  alt="64x64"
                                  src={require("../../../../assets/images/users/5.jpg")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-0">Gavin Murray</h5>
                              <div className="text-warning mb-0">
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star-o"></i>
                              </div>
                              <p className="font-13 text-muted mb-0">
                                Good Looking.........
                              </p>
                              <Link to="#">
                                <span className="badge btn-custom rounded-pill me-2">
                                  Reply
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="media mb-5">
                            <div className="me-3">
                              <Link to="#">
                                <img
                                  className="media-object rounded-circle thumb-sm"
                                  alt="64x64"
                                  src={require("../../../../assets/images/users/15.jpg")}
                                />
                              </Link>
                            </div>
                            <div className="media-body">
                              <h5 className="mt-0 mb-0">Paul Smith</h5>
                              <div className="text-warning mb-0">
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star"></i>
                                <i className="me-1 fa fa-star-o"></i>
                                <i className="me-1 fa fa-star-o"></i>
                              </div>
                              <p className="font-13 text-muted mb-0">
                                Very nice ! On the other hand, we denounce with
                                righteous indignation and dislike men who are so
                                beguiled and demoralized by the
                              </p>
                              <Link to="#">
                                <span className="badge btn-custom rounded-pill me-2" >
                                  Reply
                                </span>
                              </Link>
                            </div>
                          </div>
                          <h5 className="mb-3">Add Review</h5>
                          <Form
                            className="form-horizontal  m-t-20"
                            action="index.html"
                          >
                            <FormGroup>
                              <Col xs={12}>
                                <Form.Control
                                  className="form-control mb-2"
                                  type="text"
                                  required=""
                                  placeholder="Username*"
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col xs={12}>
                                <Form.Control
                                  className="form-control mb-2"
                                  type="email"
                                  required=""
                                  placeholder="Email*"
                                />
                              </Col>
                            </FormGroup>
                            <FormGroup>
                              <Col xs={12}>
                                <textarea
                                  className="form-control mb-2"
                                  rows="5"
                                  defaultValue="Your Review*"
                                ></textarea>
                              </Col>
                            </FormGroup>
                            <div className="">
                              <Link
                                to="#"
                                className="btn btn-primary btn-rounded  waves-effect waves-light"
                              >
                                Submit
                              </Link>
                            </div>
                          </Form>
                        </div>
                      </Tab>
                      &nbsp;
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={12}>
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
                <label htmlFor="checkbox-1" className="custom-control-label">
                  Mens
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-2"
                />
                <label htmlFor="checkbox-2" className="custom-control-label">
                  Womens
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-3" className="custom-control-label">
                  Kids
                </label>
              </div>
              <div className="custom-checkbox custom-control">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkbox-4"
                />
                <label htmlFor="checkbox-4" className="custom-control-label">
                  Others
                </label>
              </div>
              <div className="form-group mt-3">
                <label className="form-label">Category</label>
                <productdetails.Category />
              </div>
              <FormGroup>
                <label className="form-label">Brand</label>
                <productdetails.Brand />
              </FormGroup>
              <FormGroup>
                <label className="form-label">Type</label>

                <productdetails.Type />
              </FormGroup>
              <FormGroup>
                <label className="form-label">Color</label>

                <productdetails.Color />
              </FormGroup>
              <Link className="btn btn-primary me-2 my-4" to="#">
                Apply Filter
              </Link>
              <Link className="btn btn-danger me-2 my-4" to="#">
                Search Now
              </Link>
            </Card.Body>
          </Card>
          <Card className="productdesc-1">
            <Card.Body className="bg_gray">
              <div
                id="carouselExampleControls"
                className="carousel slide  p-2 border br-5"
              >
                <productdetails.Carouseldatalist />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
