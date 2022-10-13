import React from "react";
import { Breadcrumb, Card, Row, Col,Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Headers() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Headers</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item href="#" className="breadcrumb-item">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Headers
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
              <h3 className="card-title">Default Header</h3>
            </Card.Header>
            <div className="header header-1 py-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    className="animated-arrow horizontal-navtoggle-1-1"
                  >
                    <span></span>
                  </Link>
                  <Link
                    className="header-brand"
                    to={`${process.env.PUBLIC_URL}/dashboard/`}
                  >
                    <img
                      src={require("../../../assets/images/brand/logo-3.png")}
                      className="header-brand-img logo-3"
                      alt="Zanex logo"
                    />
                    <img
                      src={require("../../../assets/images/brand/logo.png")}
                      className="header-brand-img logo"
                      alt="Zanex logo"
                    />
                  </Link>

                  <div className="d-flex order-lg-2 ms-auto header-right-icons">
                    <Link
                      to="#"
                      className="nav-link nav-link-lg d-md-none navsearch"
                    >
                      <i className="ion ion-search" />
                    </Link>
                    <div className="default-header">
                      <Form className="form-inline">
                        <div className="search-element">
                          <input
                            type="search"
                            className="form-control header-search"
                            placeholder="Search…"
                            aria-label="Search"
                            tabIndex={1}
                          />
                          <Button
                            className="btn btn-primary-color"
                            
                            variant=""
                          >
                            <i className="ion ion-search" />
                          </Button>
                        </div>
                      </Form>
                    </div>

                    <div className="dropdown d-md-flex">
                      <Link
                        to="#"
                        className="nav-link icon full-screen-link nav-link-bg"
                      >
                        <i
                          className="fe fe-maximize-2"
                          id="fullscreen-button1"
                        />
                      </Link>
                    </div>

                    <div className="dropdown d-md-flex notifications">
                      <Link to="#" className="nav-link icon">
                        <i className="fe fe-bell" />
                        <span className="nav-unread badge bg-success rounded-pill">
                          2
                        </span>
                      </Link>
                    </div>

                    <div className="dropdown d-md-flex message">
                      <Link to="#" className="nav-link icon text-center">
                        <i className="fe fe-message-square" />
                        <span className=" nav-unread badge bg-danger  rounded-pill">
                          6
                        </span>
                      </Link>
                    </div>

                    <div className="dropdown text-center selector profile-1">
                      <Link to="#" className="nav-link leading-none d-flex">
                        <span>
                          <img
                            src={require("../../../assets/images/users/8.jpg")}
                            alt="profile-user"
                            className="avatar avatar-sm brround cover-image mb-1 ms-0"
                          />
                        </span>
                        <span className=" ms-3 d-none d-lg-block ">
                          <span className="text-dark">Elizabeth Dyer</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Header Style-01</h3>
            </Card.Header>
            <div className="header header-2 p-3">
              <div className="container">
                <nav className=" navbar header-nav navbar-expand-lg main-navbar p-0">
                  <Link
                    to="#"
                    className="animated-arrow horizontal-navtoggle-1-1"
                  >
                    <span />
                  </Link>
                  <Link
                    className="header-brand"
                    to={`${process.env.PUBLIC_URL}/dashboard/`}
                  >
                    <img
                      src={require("../../../assets/images/brand/logo-3.png")}
                      className="header-brand-img logo-3"
                      alt="Zanex logo"
                    />
                    <img
                      src={require("../../../assets/images/brand/logo.png")}
                      className="header-brand-img logo"
                      alt="Zanex logo"
                    />
                  </Link>
                  <ul className="navbar-nav navbar-right me-auto">
                    <li className="dropdown dropdown-list-toggle envelope">
                      <Link
                        to="#"
                        className="nav-link notification-toggle nav-link-lg"
                      >
                        <span className="badge bg-danger nav-link-badge">
                          5
                        </span>
                        <i className="fe fe-message-square" />
                      </Link>
                    </li>
                    <li className="dropdown dropdown-list-toggle d-none d-sm-block">
                      <Link to="#" className="nav-link  nav-link-lg ">
                        <span className="badge bg-secondary nav-link-badge">
                          6
                        </span>
                        <i className="fe fe-bell" />
                      </Link>
                    </li>
                    <li className="dropdown dropdown-list-toggle d-none d-lg-block">
                      <Link
                        to="#"
                        className="nav-link nav-link-lg full-screen-link"
                      >
                        <i
                          className="fe fe-maximize-2 "
                          id="fullscreen-button2"
                        />
                      </Link>
                    </li>
                  </ul>
                  <div className="header2">
                    <Form className="form-inline">
                      <div className="search-element">
                        <input
                          type="search"
                          className="form-control header-search"
                          placeholder="Search…"
                          aria-label="Search"
                          tabIndex={1}
                        />
                        <Button
                          className="btn btn-primary-color"
                          variant=""
                          
                        >
                          <i className="ion ion-search" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                  <div className="dropdown ms-2 ">
                    <Link
                      to="#"
                      className="nav-link header-style-2 dropdown-toggle nav-link-lg d-flex"
                    >
                      <span>
                        <img
                          src={require("../../../assets/images/users/8.jpg")}
                          alt="profile-user"
                          className="avatar avatar-sm brround cover-image w-32 me-2"
                        />
                      </span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Header style 2</h3>
            </Card.Header>
            <div className="header header-1 header-style py-4">
              <div className="container">
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    className="animated-arrow horizontal-navtoggle-1-1"
                  >
                    <span />
                  </Link>
                  <Link
                    className="header-brand"
                    to={`${process.env.PUBLIC_URL}/dashboard/`}
                  >
                    <img
                      src={require("../../../assets/images/brand/logo-3.png")}
                      className="header-brand-img logo-3"
                      alt="Zanex logo"
                    />
                    <img
                      src={require("../../../assets/images/brand/logo.png")}
                      className="header-brand-img logo"
                      alt="Zanex logo"
                    />
                  </Link>
                  <div className="header3">
                    <Form className="form-inline">
                      <div className="search-element">
                        <input
                          type="search"
                          className="form-control header-search"
                          placeholder="Search…"
                          aria-label="Search"
                          tabIndex={1}
                        />
                        <Button
                          className="btn btn-primary-color"
                          variant=""
                          
                        >
                          <i className="ion ion-search" />
                        </Button>
                      </div>
                    </Form>
                  </div>

                  <div className="d-flex order-lg-2 ms-auto header-right-icons ">
                    <Link
                      to="#"
                      className="nav-link nav-link-lg d-md-none navsearch"
                    >
                      <i className="ion ion-search" />
                    </Link>
                    <div className="dropdown d-md-flex">
                      <Link
                        to="#"
                        className="nav-link icon full-screen-link nav-link-bg"
                      >
                        <i
                          className="fe fe-maximize-2"
                          id="fullscreen-button3"
                        />
                      </Link>
                    </div>

                    <div className="dropdown d-md-flex notifications">
                      <Link to="#" className="nav-link icon">
                        <i className="fe fe-bell" />
                        <span className="nav-unread badge bg-success rounded-pill">
                          3
                        </span>
                      </Link>
                    </div>

                    <div className="dropdown d-md-flex message">
                      <Link to="#" className="nav-link icon text-center">
                        <i className="fe fe-message-square" />
                        <span className=" nav-unread badge bg-danger  rounded-pill">
                          6
                        </span>
                      </Link>
                    </div>

                    <div className="dropdown text-center selector profile-1">
                      <Link to="#" className="nav-link leading-none d-flex">
                        <span>
                          <img
                            src={require("../../../assets/images/users/8.jpg")}
                            alt="profile-user"
                            className="avatar avatar-sm brround cover-image mb-1 ms-0"
                          />
                        </span>
                        <span className=" ms-3 d-none d-lg-block ">
                          <span className="text-dark">Elizabeth Dyer</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="header-toggler d-lg-none ms-lg-0"
                    data-target="#headerMenuCollapse"
                  >
                    <span className="header-toggler-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
