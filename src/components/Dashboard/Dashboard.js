import React from "react";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import * as dashboard from "../../data/dashboard/dashboard";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <div className="page-header ">
        <div>
          <h1 className="page-title">Dashboard 01</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Dashboard 01
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
        <Col lg={12} md={12} sm={12} xl={12}>
          <Row>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Sales</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp
                          end={34516}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-primary me-1">
                          <i className="fa fa-chevron-circle-up text-primary me-1"></i>
                          <span>3% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary brround ms-auto">
                        <i className="fe fe-trending-up text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Leads</h6>
                      <h3 className="mb-2 number-font">
                        <CountUp
                          end={56992}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-secondary me-1">
                          <i className="fa fa-chevron-circle-up text-secondary me-1"></i>
                          <span>3% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger brround  ms-auto">
                        <i className="icon icon-rocket text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className="card overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Profit</h6>
                      <h3 className="mb-2 number-font">
                        $
                        <CountUp
                          end={42567}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-success me-1">
                          <i className="fa fa-chevron-circle-down text-success me-1"></i>
                          <span>0.5% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary brround ms-auto">
                        <i className="fe fe-dollar-sign text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} xl={3}>
              <Card className=" overflow-hidden">
                <Card.Body className="card-body">
                  <Row>
                    <div className="col">
                      <h6 className="">Total Cost</h6>
                      <h3 className="mb-2 number-font">
                        $
                        <CountUp
                          end={34789}
                          separator=","
                          start={0}
                          duration={2.94}
                        />
                      </h3>
                      <p className="text-muted mb-0">
                        <span className="text-danger me-1">
                          <i className="fa fa-chevron-circle-down text-danger me-1"></i>
                          <span>0.2% </span>
                        </span>
                        last month
                      </p>
                    </div>
                    <div className="col col-auto">
                      <div className="counter-icon bg-success-gradient box-shadow-success brround  ms-auto">
                        <i className="fe fe-briefcase text-white mb-5 "></i>
                      </div>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-12 col-md-12 col-lg-12 col-xl-9">
          <Card>
            <Card.Header className="card-header">
              <h3 className="card-title">Total Transactions</h3>
            </Card.Header>
            <Card.Body className="card-body pb-0">
              <div id="chartArea" className="chart-donut">
                <ReactApexChart
                  options={dashboard.totalTransactions.options}
                  series={dashboard.totalTransactions.series}
                  type="area"
                  height={300}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={3}>
          <Card className="card custom-card ">
            <Card.Header className="card-header">
              <h3 className="card-title">Recent Orders</h3>
            </Card.Header>
            <Card.Body className="pt-0 px-3">
              <div id="recentorders" className="apex-charts apexs">
                <div id="chart">
                  <ReactApexChart
                    options={dashboard.Recentorders.options}
                    series={dashboard.Recentorders.series}
                    type="radialBar"
                    height={310}
                  />
                </div>
              </div>
              <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p mt-6">
                <div className="col-md-6 col justify-content-center text-center ">
                  <p className="mb-0 d-flex justify-content-center">
                    <span className="legend bg-primary"></span>Delivered
                  </p>
                  <h3 className="mb-1 fw-bold">5238</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </div>
                <div className="col-md-6 col text-center float-end">
                  <p className="mb-0 d-flex justify-content-center ">
                    <span className="legend bg-background2"></span>Cancelled
                  </p>
                  <h3 className="mb-1 fw-bold">3467</h3>
                  <div className="d-flex justify-content-center ">
                    <p className="text-muted mb-0">Last 6 months</p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={4} md={12}>
          <Card className=" overflow-hidden">
            <Card.Header className="card-header">
              <div>
                <h3 className="card-title">Timeline</h3>
              </div>
            </Card.Header>
            <Card.Body className="card-body pb-0 pt-4">
              <div className="activity1">
                <div className="activity-blog">
                  <div className="activity-img brround bg-primary-transparent text-primary">
                    <i className="fa fa-user-plus fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Mr John </span>
                      </b>
                      Started following you
                      <span className="d-flex text-muted fs-11">
                        01 June 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-primary text-white">1m</span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img brround bg-secondary-transparent text-secondary">
                    <i className="fa fa-comment fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Lily </span>
                      </b>
                      1 Commented applied
                      <span className="d-flex text-muted fs-11">
                        01 July 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-danger text-white">3m</span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img brround bg-success-transparent text-success">
                    <i className="fa fa-thumbs-up fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Kevin </span>
                      </b>
                      liked your site
                      <span className="d-flex text-muted fs-11">
                        05 July 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-warning text-white">5m</span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img brround bg-info-transparent text-info">
                    <i className="fa fa-envelope fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Andrena </span>
                      </b>
                      posted a new article
                      <span className="d-flex text-muted fs-11">
                        09 October 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-info text-white">5m</span>
                    </div>
                  </div>
                </div>
                <div className="activity-blog">
                  <div className="activity-img brround bg-danger-transparent text-danger">
                    <i className="fa fa-shopping-bag fs-20"></i>
                  </div>
                  <div className="activity-details d-flex">
                    <div>
                      <b>
                        <span className="text-dark"> Sonia </span>
                      </b>
                      Delivery in progress
                      <span className="d-flex text-muted fs-11">
                        12 October 2020
                      </span>
                    </div>
                    <div className="ms-auto fs-13 text-dark fw-semibold">
                      <span className="badge bg-warning text-white">5m</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12} className="col-xl-4 col-md-12">
          <Card className="card">
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Browser Usage</h4>
            </Card.Header>
            <Card.Body className="card-body pt-2 pb-2">
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-flex">
                  <i className="fa fa-chrome bg-secondary-gradient text-white me-2"></i>
                  <p className="fs-16 my-auto mb-0">Chrome</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className="my-auto fs-16">35,502</span>
                    <span className="text-success fs-15">
                      <i className="fe fe-arrow-up"></i>12.75%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-flex">
                  <i className="fa fa-opera text-white bg-danger-gradient me-2"></i>
                  <p className="fs-16 my-auto mb-0">Opera</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className="my-auto fs-16">12,563</span>
                    <span className="text-danger fs-15">
                      <i className="fe fe-arrow-down"></i>15.12%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-flex">
                  <i className="fa fa-firefox text-white bg-purple-gradient me-2"></i>
                  <p className="fs-16 my-auto mb-0">IE</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className=" my-auto fs-16">25,364</span>
                    <span className="text-success fs-15">
                      <i className="fe fe-arrow-up"></i>24.37%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-flex">
                  <i className="fa fa-edge text-white bg-info-gradient me-2"></i>
                  <p className="fs-16 my-auto mb-0">Firefox</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className=" my-auto fs-16">14,635</span>
                    <span className="text-success fs-15">
                      <i className="fe fe-arrow-up"></i>15,63%
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-md-flex align-items-center browser-stats">
                <div className="d-flex">
                  <i className="fa fa-android text-white bg-success-gradient me-2"></i>
                  <p className="fs-16 my-auto mb-0">Android</p>
                </div>
                <div className="ms-auto my-auto">
                  <div className="d-flex">
                    <span className=" my-auto fs-16">15,453</span>
                    <span className="text-danger fs-15">
                      <i className="fe fe-arrow-down"></i>23.70%
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header className="card-header">
              <h4 className="card-title fw-semibold ">Daily Activity</h4>
            </Card.Header>
            <Card.Body className="card-body pb-0">
              <ul className="task-list">
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Finished &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Adam Berry finished task on &nbsp;
                    <Link to="#" className="fw-semibold">
                      Project Management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    New Comment &nbsp;
                    <span className="text-muted fs-11 ms-2">25 Oct 2020</span>
                  </h6>
                  <p className="text-muted fs-12">
                    Victoria commented on Project &nbsp;
                    <Link to="#" className="fw-semibold">
                      AngularJS Template
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-secondary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">14 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
                <li>
                  <i className="task-icon bg-primary"></i>
                  <h6>
                    Task Overdue &nbsp;
                    <span className="text-muted fs-11 ms-2">29 Oct 2020</span>
                  </h6>
                  <p className="text-muted mb-0 fs-12">
                    Petey Cruiser finished task &nbsp;
                    <Link to="#" className="fw-semibold">
                      Integrated management
                    </Link>
                  </p>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h3 className="card-title mb-0">Product Sales</h3>
            </Card.Header>
            <Card.Body>
              <div className="salesdatatable">
                <div className="table-responsive">
                  <dashboard.Productsales />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
