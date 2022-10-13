import React from "react";
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
  Breadcrumb,
  Card,
  Row,Col
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function DropDowns() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Dropdowns</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Dropdown
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
              <h3 className="card-title">Single button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <Dropdown className="btn-group mt-2 mb-2 me-2 ">
                    <Dropdown.Toggle
                      type="button"
                      variant="default"
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="btn-group mt-2 mb-2 me-2">
                    <DropdownButton
                      type="button"
                      variant="primary"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      variant="success"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton type="button" variant="info" title="Action">
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      variant="warning"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      variant="danger"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      className=" btn-default btn-pill "
                      variant=""
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2 roundbtn">
                    <DropdownButton
                      type="button"
                      className=" btn-primary btn-pill "
                      variant="primary"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      className=" btn-success btn-pill "
                      variant="success"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      className=" btn-info btn-pill "
                      variant="info"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      className=" btn-warning btn-pill "
                      variant="warning"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <DropdownButton
                      type="button"
                      className="btn-danger btn-pill "
                      variant="danger"
                      title="Action"
                    >
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </DropdownButton>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Split button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="default">Action</Button>
                      <Dropdown.Toggle split variant="default" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="primary">Action</Button>
                      <Dropdown.Toggle split variant="primary" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="success">Action</Button>
                      <Dropdown.Toggle split variant="success" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="info">Action</Button>
                      <Dropdown.Toggle split variant="info" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="warning">Action</Button>
                      <Dropdown.Toggle split variant="warning" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button variant="danger">Action</Button>
                      <Dropdown.Toggle split variant="danger" />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded Split button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-pill btn-default" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-default"
                        split
                        variant="default"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-pill btn-primary" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-primary"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-pill btn-success"
                        variant="success"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-success"
                        split
                        variant="success"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-pill btn-info" variant="info">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-info"
                        split
                        variant="info"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-pill btn-warning"
                        variant="warning"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-warning"
                        split
                        variant="warning"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-pill btn-danger"
                        variant="danger"
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-pill btn-danger dropdown-toggle"
                        split
                        variant="danger"
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">
                Single Square outline button dropdowns
              </h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <Dropdown className="btn-group mt-2 mb-2 me-2 ">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-primary dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-success dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-info dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-warning dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-danger dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-primary btn-pill dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-success btn-pill dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-info btn-pill dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="btn-group mt-2 mb-2  me-2">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-outline-warning btn-pill dropdown-toggle"
                      variant=""
                      title="Action"
                    >
                      Action
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="dropdown-plus-title">
                        Dropdown
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-4">
                        Separated link
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Split button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-outline-primary" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-primary "
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-outline-success" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-success "
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-outline-info" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-info "
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-outline-warning" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-warning dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button className="btn btn-outline-danger" variant="">
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-danger dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded Split button dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-outline-primary btn-pill"
                        variant=""
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-primary btn-pill dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-outline-success btn-pill"
                        variant=""
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-success btn-pill dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-outline-info btn-pill"
                        variant=""
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-info btn-pill dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-outline-warning btn-pill"
                        variant=""
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-warning btn-pill dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown as={ButtonGroup}>
                      <Button
                        className="btn btn-outline-danger btn-pill"
                        variant=""
                      >
                        Action
                      </Button>
                      <Dropdown.Toggle
                        className="btn btn-outline-danger btn-pill dropdown-toggle"
                        split
                        variant=""
                      />
                      <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Dropup variation</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="dropup btn-group mt-2 mb-2  me-2">
                  {["up"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="primary"
                      title={"Dropup1"}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
                <div className="dropup btn-group mt-2 mb-2  me-2">
                  {["up"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="info"
                      title={"Dropup2"}
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                  ))}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">social Icon</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      className="btn btn-facebook btn-pill"
                    >
                      <Dropdown.Toggle
                        className="fa fa-facebook caret"
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      className="btn btn-twitter btn-pill"
                    >
                      <Dropdown.Toggle
                        variant=""
                        className="fa fa-twitter caret"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown type="button" className="btn btn-google btn-pill">
                      <Dropdown.Toggle
                        variant=""
                        className="fa fa-google caret"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      className="btn btn-youtube btn-pill"
                    >
                      <Dropdown.Toggle
                        variant=""
                        className="fa fa-youtube caret"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown type="button" className="btn btn-vimeo btn-pill ">
                      <Dropdown.Toggle
                        variant=""
                        className="fa fa-vimeo caret"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown type="button" className="btn btn-github btn-pill">
                      <Dropdown.Toggle
                        className="fa fa-github caret"
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Icon Drop Downs dropdowns</h3>
            </Card.Header>
            <Card.Body>
              <div className="example panel panel-default">
                <div className="panel-body p-0">
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      id="dropdown-button-drop-up"
                      drop="up"
                      className="btn btn-dropdown-icon btn-pill "
                    >
                      <Dropdown.Toggle
                        className="fa fa-cog"
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      id="dropdown-button-drop-up"
                      drop="up"
                      className="btn btn-dropdown-icon btn-pill "
                    >
                      <Dropdown.Toggle
                        className="fa fa-ellipsis-h"
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      id="dropdown-button-drop-up"
                      drop="up"
                      className="btn btn-dropdown-icon btn-pill "
                    >
                      <Dropdown.Toggle
                        className="fa fa-ellipsis-v"
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="btn-group mt-2 mb-2  me-2">
                    <Dropdown
                      type="button"
                      id="dropdown-button-drop-up"
                      drop="up"
                      className="btn btn-dropdown-icon1 btn-pill "
                    >
                      <Dropdown.Toggle
                        className="fa fa-chain "
                        variant=""
                      ></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item className="dropdown-plus-title">
                          Dropdown
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Separated link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
