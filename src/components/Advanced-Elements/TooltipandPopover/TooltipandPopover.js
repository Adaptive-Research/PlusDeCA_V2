import React from "react";
import * as tooltipandpopover from "../../../data/Advancedelements/tooltipandpopover/tooltipandpopover";
import { Link } from "react-router-dom";
import { Breadcrumb, Row,Col,Card } from "react-bootstrap";
export default function TooltipandPopover() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tooltip and Popover</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Tooltip and Popover
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
        <Col lg={12}>
          <Card id="Tooltip">
            <Card.Header className="border-bottom-0">
              <div className="card-title">Default Tooltip</div>
            </Card.Header>
            <Card.Body>
              <div className="form-label mb-2">Static Example</div>
              <div className="tooltip-static-demo mb-4 border br-3">
                <Row>
                  <Col sm={6} lg={3}>
                    <div className="tooltip bs-tooltip-top" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <div className="tooltip bs-tooltip-bottom" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div className="tooltip bs-tooltip-end" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the rigth</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div className="tooltip bs-tooltip-start" role="tooltip">
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="bg-light p-3 border br-3">
                <div className="row  text-center">
                  <Col sm={6} lg={3} className="mt-2 mb-2">
                    <tooltipandpopover.DefaultTooltipprimary />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.DefaultTooltipsuccess />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.DefaultTooltipdanger />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.DefaultTooltipinfo />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card id="Tooltip1">
            <Card.Header className="border-bottom-0">
              <div className="card-title">Color Tooltip</div>
            </Card.Header>
            <Card.Body>
              <div className="form-label  mb-2">Static Example</div>
              <div className="tooltip-static-demo mb-4 border br-3">
                <Row>
                  <Col sm={6} lg={3}>
                    <div
                      className="tooltip tooltip-primary bs-tooltip-top"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the top</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-sm-t-0">
                    <div
                      className="tooltip tooltip-success bs-tooltip-bottom"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the bottom</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div
                      className="tooltip tooltip-danger bs-tooltip-end"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the right</div>
                    </div>
                  </Col>
                  <Col sm={6} lg={3} className="mg-t-30 mg-lg-t-0">
                    <div
                      className="tooltip tooltip-info bs-tooltip-start"
                      role="tooltip"
                    >
                      <div className="tooltip-arrow"></div>
                      <div className="tooltip-inner">Tooltip on the left</div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="bg-light p-3 border br-3">
                <div className="row  text-center">
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Colorprimary />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Colorsuccess />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Colordanger />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Colorinfo />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="border-bottom-0">
              <div className="card-title">Default Popover</div>
            </Card.Header>
            <Card.Body>
              <div className="form-label  mb-2">Static Example</div>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <div className="row row-sm">
                  <div  className="col-md-6 mt-4">
                    <div className="popover bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="col-md-6 mt-4">
                    <div className="popover bs-popover-bottom">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="col-md-6 mt-4">
                    <div className="popover bs-popover-start">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Left</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="col-md-6 mt-4">
                    <div className="popover bs-popover-end">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Right</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="bg-light p-3 border br-3">
                <div className="row row-sm text-center">
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Popoverprimary />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Popoversuccess />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Popoverdanger />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.Popoverinfo />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="border-bottom-0">
              <div className="card-title">Colored Head Popover</div>
            </Card.Header>
            <Card.Body>
              <div className="form-label  mb-2">Static Example</div>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <div className="row row-sm">
                  <div className="col-md-6">
                    <div className="popover popover-head-primary bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="col-md-6 mt-5 mt-md-0">
                    <div className="popover popover-head-secondary bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="bg-light p-3 border br-3">
                <div className="row row-sm text-center">
                  <Col sm={6} lg={3} className="mt-2 mb-2 text-center">
                    <tooltipandpopover.Headerprimary />
                  </Col>
                  <Col sm={6} lg={3} className="mt-2 mb-2text-center">
                    <tooltipandpopover.Headersecondary />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="border-bottom-0">
              <div className="card-title">Full Colored Popover</div>
            </Card.Header>
            <Card.Body>
              <div className="form-label  mb-2">Static Example</div>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <div className="row row-sm">
                  <div  className="col-md-6 mt-4">
                    <div className="popover popover-primary bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="col-md-6 mt-4">
                    <div className="popover popover-secondary bs-popover-end">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Right</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="bg-light p-3 border br-3">
                <div className="row row-sm text-center">
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.FullColoredPopoverprimary />
                  </Col>
                  <Col sm={6} lg={3} className=" mt-2 mb-2">
                    <tooltipandpopover.FullColoredPopoversecondary />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}