import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown, Breadcrumb,Row,Col,Card } from "react-bootstrap";
export default function Navigation() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Navigation</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
            Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Navigation
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
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
        <Col className="col-12">
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Nav</h3>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 br-7" defaultActiveKey="active">
                <Nav.Item>
                  <Nav.Link className="nav-item1" eventKey="active">
                    Active
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-item1 " eventKey="link">
                    Link
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-item1" eventKey="links">
                    Links
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link className="nav-item1 disabled"  >
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Nav Vertical</h3>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 flex-column br-7 " defaultActiveKey="active">
                <Nav.Link className="nav-item1 "eventKey="active" >
                  Active
                </Nav.Link>

                <Nav.Link className="nav-item1 p-6" eventKey="link">
                  Link
                </Nav.Link>

                <Nav.Link className="nav-item1 p-6" eventKey="links">
                  Links
                </Nav.Link>

                <Nav.Link className="nav-item1 disabled p-6" eventKey="disable" >
                  Disabled
                </Nav.Link>
              </Nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color Navigation</h3>
            </Card.Header>
            <Card.Body>
              <Nav variant="pills" className="nav niv nav-pills" defaultActiveKey="active">
                <Nav.Item className="nav-item m-1">
                  <Nav.Item>
                    <Nav.Link eventKey="active" className="nav-link px-3 py-1">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </Nav.Item>
                <Nav.Item className="nav-item dropdown m-2">
                  <NavDropdown title="Dropdown" id="nav-dropdown" >
                    <NavDropdown.Item href="#" className="dropdown-item">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className="dropdown-item">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#" className="dropdown-item">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider className="dropdown-divider m-0" />
                    <NavDropdown.Item href="#" className="dropdown-item">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Item>
                <Nav.Item className="nav-item m-1">
                  <Nav.Link className="nav-link px-3 py-1"  eventKey="link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item m-1">
                  <Nav.Link className="nav-link disabled px-3 py-1"  eventKey="disabled">
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Icon Navigation</h3>
            </Card.Header>
            <Card.Body>
              <Nav
                className="nav niv nav-pills nav-pills-circle"
                id="tabs_2"
                role="tablist"
                defaultActiveKey="videos"
              >
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border py-2 px-4 m-1"
                    id="tab1"
                    role="tab"
                    aria-selected="false"
                    eventKey="home"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="fe fe-home"></i> Home
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border py-2 px-4 m-1"
                    id="tab2"
                    role="tab"
                    aria-selected="false"
                    eventKey="lock"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="fe fe-unlock"></i> Lock
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link py-2 px-4  border show m-1"
                    id="tab3"
                    role="tab"
                    aria-selected="true"
                    eventKey="videos"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="fe fe-play"></i> Videos
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border py-2 px-4 m-1"
                    id="tab4"
                    role="tab"
                    aria-selected="false"
                    eventKey="severs"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="fe fe-layers"></i> Severs
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border py-2 px-4 m-1"
                    id="tab5"
                    role="tab"
                    aria-selected="false"
                    eventKey="gallery"
                  >
                    <span className="nav-link-icon d-block">
                      <i className="fe fe-image"></i> Gallery
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Icon Nav Bar</h3>
            </Card.Header>
            <Card.Body>
              <Nav
                className="nav niv nav-pills nav-pills-circle"
                id="tabs_3"
                role="tablist"
                defaultActiveKey="#tabs_2_1"
              >
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border w-7 h-7 text-center br-100 m-2"
                    id="tab21"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="false"
                    eventKey="#tabs_2_1"
                  >
                    <span className="nav-link-icon d-block text-center mx-auto">
                      <i className="fe fe-home fs-15"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border w-7 h-7 br-100 m-2"
                    id="tab22"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                    eventKey="#tabs_2_2"
                  >
                    <span className="nav-link-icon d-block text-center mx-auto">
                      <i className="fe fe-unlock fs-15"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border show w-7 h-7 br-100 m-2"
                    id="tab23"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="true"
                    eventKey="#tabs_2_3"
                  >
                    <span className="nav-link-icon d-block text-center mx-auto">
                      <i className="fe fe-play fs-15"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border w-7 h-7 br-100 m-2"
                    id="tab24"
                    role="tab"
                    aria-controls="tab4"
                    aria-selected="false"
                    eventKey="#tabs_2_4"
                  >
                    <span className="nav-link-icon d-block text-center mx-auto">
                      <i className="fe fe-layers fs-15"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-item">
                  <Nav.Link
                    className="nav-link border  w-7 h-7 br-100 m-2"
                    id="tab25"
                    role="tab"
                    aria-controls="tab5"
                    aria-selected="false"
                    eventKey="#tabs_2_5"
                  >
                    <span className="nav-link-icon d-block text-center mx-auto">
                      <i className="fe fe-image fs-16"></i>
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Navigation backgrounds</h3>
            </Card.Header>
            <Card.Body>
              <Nav className="nav1 bg-primary br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>

              <Nav className="nav1 bg-info mt-4 br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>

              <Nav className="nav1 bg-success mt-4 br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>

              <Nav className="nav1 bg-danger mt-4 br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>
              <Nav className="nav1 bg-secondary mt-4 br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>

              <Nav className="nav1 bg-yellow mt-4 br-7">
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white active" href="#">
                      Active
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link className="nav-link text-white" href="#">
                      Link
                    </Nav.Link>
                  </Nav.Item>
                </li>
                <li className="nav-item1">
                  <Nav.Item>
                    <Nav.Link
                      className="nav-link disabled text-white-50"
                      href="#"
                    >
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </li>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
