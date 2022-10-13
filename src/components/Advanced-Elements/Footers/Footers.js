import React from "react";
import { Breadcrumb, Col, Card, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footers() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Footers</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Footers
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
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style01</h3>
              </Card.Title>
            </Card.Header>
            <div className="footer border-top-0 footer-1">
              <Container>
                <Row className=" align-items-center">
                  <Col className="social">
                    <ul className="text-center">
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-rss"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-youtube"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link className="social-icon" to="#">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <div lg={12} sm={12} className=" mt-3 mt-lg-0 text-center">
                    Copyright © 2022 <Link to="#">Zanex</Link>. Designed by
                    <Link to="#">Spruko</Link> All rights reserved.
                  </div>
                </Row>
              </Container>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style02</h3>
              </Card.Title>
            </Card.Header>
            <div className="footer border-top-0 footer-1">
              <Container>
                <Row className=" align-items-center">
                  <Col
                    lg={6}
                    md={5}
                    sm={12}
                    className="mt-3 mt-lg-0 text-center d-none d-md-block"
                  >
                    <div className="social">
                      <ul className="text-center">
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-rss"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-youtube"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col
                    lg={6}
                    sm={12}
                    md={7}
                    className="mt-3 mt-lg-0 text-center"
                  >
                    Copyright © 2022 <Link to="#">Zanex</Link>. Designed by
                    <Link to="#">Spruko</Link> All rights reserved.
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style03</h3>
              </Card.Title>
            </Card.Header>
            <div className="footer border-top-0 footer-1">
              <Container>
                <Row className=" align-items-center text-center">
                  <Col lg={6} md={6} className=" d-none d-md-block ">
                    <div className="social">
                      <ul className="text-center m-0 ">
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-rss"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-youtube"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link className="social-icon" to="#">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <div lg={6} md={6} className=" text-end privacy">
                    <Link to="#" className="btn btn-link">
                      Privacy
                    </Link>
                    <Link to="#" className="btn btn-link">
                      Terms
                    </Link>
                    <Link to="#" className="btn btn-link">
                      About Us
                    </Link>
                  </div>
                </Row>
                <Row className=" align-items-center flex-row-reverse">
                  <Col lg={12} sm={12} className=" mt-3 mt-lg-0 text-center">
                    Copyright © 2022 <Link to="#">Zanex</Link>. Designed by
                    <Link to="#">Spruko</Link> All rights reserved.
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style04</h3>
              </Card.Title>
            </Card.Header>
            <div className="footer border-top-0 footer-1">
              <Container>
                <Row className=" align-items-center flex-row-reverse">
                  <Col lg={12} sm={12} className=" mt-3 mt-lg-0 text-center">
                    Copyright © 2022 <Link to="#">Zanex</Link>. Designed by
                    <Link to="#">Spruko</Link> All rights reserved.
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style05</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="top-footer">
                <Row>
                  <Col md={12} lg={4}>
                    <h6>About</h6>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                      occaecat .
                    </p>
                  </Col>
                  <Col md={12} lg={2}>
                    <h6>Pages</h6>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <Link to="#">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="#">Elements</Link>
                      </li>
                      <li>
                        <Link to="#">Forms</Link>
                      </li>
                      <li>
                        <Link to="#">Charts</Link>
                      </li>
                      <li>
                        <Link to="#">Tables</Link>
                      </li>
                      <li>
                        <Link to="#">Other Pages</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={12} lg={2}>
                    <h6>Information</h6>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <Link to="#">Our Team</Link>
                      </li>
                      <li>
                        <Link to="#">Contact US</Link>
                      </li>
                      <li>
                        <Link to="#">About</Link>
                      </li>
                      <li>
                        <Link to="#">Services</Link>
                      </li>
                      <li>
                        <Link to="#">Blog</Link>
                      </li>
                      <li>
                        <Link to="#">Terms and Services</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={12} lg={4}>
                    <h6>Location</h6>
                    <ul className="list-unstyled mb-4">
                      <li>
                        <Link to="#">
                          Address1:7363 Old Livingston Drive Dyersburg
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Address2:4 Harrison St.Fairborn, OH 45324
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Phno1: +123 456 8976</Link>
                      </li>
                      <li>
                        <Link to="#">Phno2: +567 234 7865</Link>
                      </li>
                      <li>
                        <Link to="#">Mail1: yourdomain@gmail.com</Link>
                      </li>
                      <li>
                        <Link to="#">Mail2: infodomain@gmail.com</Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <footer className="main-footer ps-0 pe-0">
                <Row>
                  <Col lg={12} xl={8} md={12} className=" footer1">
                    Copyright ©Zanex 2022. Design By
                    <Link to="https://spruko.com/"> Spruko</Link>
                  </Col>
                  <Col xl={4} lg={12} md={12} className=" ms-auto text-end">
                    <ul className="footer-social-list ">
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-google"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Footer style06</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="top-footer">
                <Row>
                  <Col md={12} lg={4}>
                    <h6>About</h6>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="mb-5 mb-lg-2">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur Excepteur sint
                      occaecat .
                    </p>
                  </Col>
                  <Col md={12} lg={2}>
                    <h6>Pages</h6>
                    <ul className="list-unstyled mb-5 mb-lg-0">
                      <li>
                        <Link to="#">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="#">Elements</Link>
                      </li>
                      <li>
                        <Link to="#">Forms</Link>
                      </li>
                      <li>
                        <Link to="#">Charts</Link>
                      </li>
                      <li>
                        <Link to="#">Tables</Link>
                      </li>
                      <li>
                        <Link to="#">Other Pages</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={12} lg={2}>
                    <h6>Information</h6>
                    <ul className="list-unstyled mb-5 mb-lg-0">
                      <li>
                        <Link to="#">Our Team</Link>
                      </li>
                      <li>
                        <Link to="#">Contact US</Link>
                      </li>
                      <li>
                        <Link to="#">About</Link>
                      </li>
                      <li>
                        <Link to="#">Services</Link>
                      </li>
                      <li>
                        <Link to="#">Blog</Link>
                      </li>
                      <li>
                        <Link to="#">Terms and Services</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={12} lg={4}>
                    <h6>Posts</h6>
                    <img
                      alt=""
                      src={require("../../../assets/images/media/1.jpg")}
                    />
                    <img
                      alt=""
                      src={require("../../../assets/images/media/2.jpg")}
                    />
                    <img
                      alt=""
                      src={require("../../../assets/images/media/3.jpg")}
                    />
                    <img
                      alt=""
                      src={require("../../../assets/images/media/4.jpg")}
                    />
                    <hr />
                    <h6 className="mb-0 m-t-30">Payments</h6>
                    <ul className="footer-payments">
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-cc-amex text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-cc-visa text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-credit-card-alt text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-cc-mastercard text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa fa-cc-paypal text-muted"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <footer className="main-footer ps-0 pe-0">
                <Row>
                  <Col lg={12} xl={8} md={12} className=" footer1">
                    Copyright ©Zanex 2022. Design By
                    <Link to="https://spruko.com/"> Spruko</Link>
                  </Col>
                  <Col xl={4} lg={12} md={12} className=" ms-auto text-end">
                    <ul className="footer-social-list ">
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-google"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
