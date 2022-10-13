import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  Tabs,
  Tab,
  OverlayTrigger,
  Tooltip,
  Breadcrumb,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as formelement from "../../../data/Form/formelement/formelement";
export default function FormElements() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Form-Elements</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Form-Elements
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
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Inputs & Textareas </h3>
            </Card.Header>
            <Card.Body className="pb-2">
              <Row className="row row-sm">
                <Col className="col-lg">
                  <input
                    className="form-control mb-4"
                    placeholder="Input box"
                    type="text"
                  />
                </Col>
                <Col className="col-lg mg-t-10 mg-lg-t-0">
                  <input
                    className="form-control mb-4"
                    placeholder="Input box (readOnly)"
                    readOnly
                    type="text"
                  />
                </Col>
                <Col className="col-lg mg-t-10 mg-lg-t-0">
                  <input
                    className="form-control mb-4"
                    disabled
                    placeholder="Input box (disabled)"
                    type="text"
                  />
                </Col>
              </Row>
              <Row className="row row-sm">
                <Col className="col-lg">
                  <textarea
                    className="form-control mb-4"
                    placeholder="Textarea"
                    rows="3"
                  ></textarea>
                </Col>
                <Col className="col-lg mg-t-10">
                  <textarea
                    className="form-control mb-4"
                    placeholder="Textarea (readOnly)"
                    readOnly
                    rows="3"
                  ></textarea>
                </Col>
                <Col className="col-lg mg-t-10">
                  <textarea
                    className="form-control mb-4"
                    disabled
                    placeholder="Texarea (disabled)"
                    rows="3"
                  ></textarea>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Input Sizes</h3>
            </Card.Header>
            <Card.Body>
              <Row className="row row-sm">
                <Col className="col-lg">
                  <input
                    className="form-control form-control-sm  mb-4"
                    placeholder="Input sm box"
                    type="text"
                  />
                  <input
                    className="form-control  mb-4"
                    placeholder="Input box"
                    type="text"
                  />
                  <input
                    className="form-control form-control-lg"
                    placeholder="Input lg box"
                    type="text"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className="card-title">Valid Inputs</h3>
            </Card.Header>
            <Card.Body className="pb-2">
              <Form className="needs-validation was-validated">
                <Row className="row row-sm">
                  <div className="col-lg-6">
                    <Form.Group>
                      <input
                        className="form-control  mb-4 is-valid state-valid"
                        placeholder="Input box (success state)"
                        required=""
                        type="text"
                        defaultValue="This is input"
                      />
                      <textarea
                        className="form-control mb-4 is-valid state-valid"
                        placeholder="Textarea (success state)"
                        required=""
                        rows="3"
                        defaultValue="This is textarea"
                      ></textarea>
                    </Form.Group>
                  </div>
                  <div className="col-lg-6">
                    <Form.Group>
                      <input
                        className="form-control mb-4 is-invalid state-invalid"
                        placeholder="Input box (invalid state)"
                        required=""
                        type="text"
                      />
                      <textarea
                        className="form-control mb-4 is-invalid state-invalid"
                        placeholder="Textarea (invalid state)"
                        required=""
                        rows="3"
                      ></textarea>
                    </Form.Group>
                  </div>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Form elements</h3>
            </Card.Header>
            <div className="card-body pt-2">
              <Form.Group>
                <Form.Label>Country</Form.Label>

                <formelement.Country />
              </Form.Group>
              <Form.Group>
                <Form.Label>Input group</Form.Label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-text btn btn-primary">Go!</span>
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>Input group buttons</Form.Label>
                <Dropdown className="input-group">
                  <input type="text" className="form-control" />
                  <Button className="btn btn-primary">Action</Button>
                  <Dropdown.Toggle className="btn btn-primary dropdown-toggle"></Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end ">
                    <Dropdown.Item className="dropdown-item" href="#">
                      News
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Messages
                    </Dropdown.Item>
                    <Dropdown.Divider className="dropdown-divider m-0"></Dropdown.Divider>
                    <Dropdown.Item className="dropdown-item" href="#">
                      Edit Profile
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group>
                <Form.Label>Separated inputs</Form.Label>
                <Row>
                  <Col className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                  </Col>
                  <span className="col-auto mb-2">
                    <button className="btn btn-secondary">
                      <i className="fe fe-search"></i>
                    </button>
                  </span>
                </Row>
              </Form.Group>
              <Form.Group>
                <div className="input-icon">
                  <span className="input-icon-addon">
                    <i className="fe fe-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Label>ZIP Code</Form.Label>
                <div className="row gutters-sm">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                  </div>
                  <OverlayTrigger
                    placement="left"
                    overlay={
                      <Tooltip className="tooltip-primary ">
                        <p>
                          ZIP Code must be US or CDN format. You can use an
                          extended ZIP+4 code to determine address more
                          accurately.
                        </p>{" "}
                        <p className="mb-0">
                          <Link to="#">USP ZIP codes lookup tools</Link>
                        </p>
                      </Tooltip>
                    }
                  >
                    <span className="col-auto align-self-center">
                      <span className="form-help">?</span>
                    </span>
                  </OverlayTrigger>
                </div>
              </Form.Group>

              <Form.Group>
                <div className="form-label">Bootstrap's Custom File Input</div>
                <input className="form-control" type="file" id="formFile" />
              </Form.Group>

              <div className="form-group m-0">
                <Form.Label>Date of birth</Form.Label>
                <Row>
                  <div className="col-sm-5 col-xs-12 mb-2">
                    <formelement.Selectdate />
                  </div>
                  <div className="col-sm-3 col-xs-12 mb-2">
                    <formelement.Dateofbirth />
                  </div>
                  <div className="col-sm-4 col-xs-12 mb-2">
                    <formelement.Selectyear />
                  </div>
                </Row>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Gerenal Elements</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                <div className="col-lg-6 col-md-12">
                  <form className="form-horizontal">
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Text</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Typing....."
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label
                        className="col-md-3 form-label"
                        htmlFor="example-email"
                      >
                        Email
                      </label>
                      <div className="col-md-9">
                        <input
                          type="email"
                          id="example-email"
                          name="example-email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Password</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Password"
                          password="true"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Placeholder</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="text"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">readOnly</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          className="form-control"
                          readOnly
                          defaultValue="readOnly value"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Disabled</label>
                      <div className="col-md-9">
                        <input
                          id="disabled"
                          type="text"
                          className="form-control"
                          disabled
                          defaultValue="Disabled value"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4 mb-0">
                      <label className="col-md-3 form-label">Number</label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          type="number"
                          name="number"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 col-md-12">
                  <form className="form-horizontal">
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Name</label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Text area</label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          rows="3"
                          defaultValue="Hiiiii....."
                        ></textarea>
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">URL</label>
                      <div className="col-md-9">
                        <input className="form-control" type="url" name="url" />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Search</label>
                      <div className="col-md-9">
                        <input
                          className="form-control"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                    <div className=" row mb-4">
                      <label className="col-md-3 form-label">Tel</label>
                      <div className="col-md-9">
                        <input className="form-control" type="tel" name="tel" />
                      </div>
                    </div>
                    <div className=" row mb-4 mb-0">
                      <label className="col-md-3 form-label">
                        Input Select
                      </label>
                      <div className="col-md-9">
                        <formelement.InputSelect />
                      </div>
                    </div>
                  </form>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Row>
        <Col lg={12} md={12}>
          <form method="post" className="card">
            <Card.Header>
              <h3 className="card-title">form elements</h3>
            </Card.Header>
            <div className=" card-body">
              <Row>
                <div className="col-md-6 col-lg-6">
                  <Form.Group>
                    <div className="form-label">Toggle switch single</div>
                    <label className="custom-switch">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description">
                        I agree with terms and conditions
                      </span>
                    </label>
                  </Form.Group>
                  <div className="form-group ">
                    <Form.Label>Your skills</Form.Label>
                    <div className="selectgroup selectgroup-pills">
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="HTML"
                          className="selectgroup-input"
                          defaultChecked=""
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">HTML</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="CSS"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">CSS</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="PHP"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">PHP</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="JavaScript"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">JavaScript</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="Angular"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">Angular</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="Java"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">Java</span>
                      </label>
                      &nbsp;&nbsp;
                      <label className="selectgroup-item">
                        <input
                          type="checkbox"
                          name="value"
                          defaultValue="C++"
                          className="selectgroup-input"
                        />
                        &nbsp;&nbsp;
                        <span className="selectgroup-button">C++</span>
                      </label>
                      &nbsp;&nbsp;
                    </div>
                  </div>
                  <div className="form-group m-0">
                    <Form.Label>Select Color</Form.Label>
                    <Row>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="azure"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-azure"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="indigo"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-indigo"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="purple"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-purple"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="pink"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-pink"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="red"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-red"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="orange"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-orange"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="yellow"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-yellow"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="lime"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-lime"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="green"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-green"></span>
                        </label>
                      </div>
                      <div className="col-auto">
                        <label className="colorinput">
                          <input
                            name="color"
                            type="checkbox"
                            defaultValue="teal"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-teal"></span>
                        </label>
                      </div>
                    </Row>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="form-group ">
                    <div className="form-label">Radios</div>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios"
                          defaultValue="option3"
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled
                        </span>
                      </label>
                      <label className="custom-control custom-radio">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="example-radios2"
                          defaultValue="option4"
                          disabled
                          defaultChecked
                        />
                        <span className="custom-control-label">
                          Option Disabled defaultChecked
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group m-0">
                    <div className="form-label">Checkboxes</div>
                    <div className="custom-controls-stacked">
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox1"
                          defaultValue="option1"
                          defaultChecked
                        />
                        <span className="custom-control-label">Option 1</span>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox2"
                          defaultValue="option2"
                        />
                        <span className="custom-control-label">Option 2</span>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox3"
                          defaultValue="option3"
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled
                        </span>
                      </label>
                      <label className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="example-checkbox4"
                          defaultValue="option4"
                          defaultChecked
                          disabled
                        />
                        <span className="custom-control-label">
                          Option Disabled defaultChecked
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
          </form>
        </Col>
        <div className="col-lg-12">
          <Card>
            <Card.Header>
              <div className="card-title">Switches </div>
            </Card.Header>
            <Card.Body>
              <ul className="list-group">
                <li className="list-group-item">
                  Bootstrap Switch Default
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionDefault"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionDefault"
                      className="label-default"
                    ></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Primary
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionPrimary"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionPrimary"
                      className="label-primary"
                    ></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Success
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionSuccess"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionSuccess"
                      className="label-success"
                    ></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Info
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionInfo"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionInfo"
                      className="label-info"
                    ></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Warning
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionWarning"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionWarning"
                      className="label-warning"
                    ></label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Danger
                  <div className="material-switch pull-right">
                    <input
                      id="someSwitchOptionDanger"
                      name="someSwitchOption001"
                      type="checkbox"
                    />
                    <label
                      htmlFor="someSwitchOptionDanger"
                      className="label-danger"
                    ></label>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Vertical Form</h4>
            </Card.Header>
            <Card.Body>
              <form>
                <div className="">
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox2"
                      defaultValue="option2"
                    />
                    <span className="custom-control-label">Check me Out</span>
                  </label>
                </div>
                <button className="btn btn-primary mt-4 mb-0">Submit</button>
              </form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-12 col-xl-6 col-md-12 col-sm-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Horizontal Form</h4>
            </Card.Header>
            <Card.Body>
              <form className="form-horizontal">
                <div className=" row mb-4">
                  <label htmlFor="inputName" className="col-md-3 form-label">
                    User Name
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className=" row mb-4">
                  <label htmlFor="inputEmail3" className="col-md-3 form-label">
                    Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className=" row mb-4">
                  <label
                    htmlFor="inputPassword3"
                    className="col-md-3 form-label"
                  >
                    Password
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="password"
                    />
                  </div>
                </div>
                <div className="mb-0 row justify-content-end">
                  <div className="col-md-9">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        defaultValue="option2"
                      />
                      <span className="custom-control-label">Check me Out</span>
                    </label>
                  </div>
                </div>
                <div className="mb-0 mt-4 row justify-content-end">
                  <div className="col-md-9">
                    <button className="btn btn-primary me-2">Sign in</button>
                    <button className="btn btn-secondary me-2">Cancel</button>
                  </div>
                </div>
              </form>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <h3 className="card-title">Shipping Details</h3>
            </Card.Header>
            <Card.Body>
              <div className="form-row">
                <div className="form-group col-md-6 mb-3">
                  <Form.Group>
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="First Name"
                    />
                  </Form.Group>
                </div>
                <div className="form-group col-md-6 mb-3">
                  <Form.Group>
                    <input
                      type="text"
                      className="form-control"
                      id="name2"
                      placeholder="Last Name"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="form-group ">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail5"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="AddressLine1"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 mb-3">
                  <Form.Group>
                    <input
                      type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                    />
                  </Form.Group>
                </div>
                <div className="form-group col-md-6 mb-3">
                  <Form.Group>
                    <input
                      type="text"
                      className="form-control"
                      id="region"
                      placeholder="Country/Region"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 mb-0">
                  <Form.Group>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                    />
                  </Form.Group>
                </div>
                <div className="form-group col-md-6 mb-0">
                  <Form.Group>
                    <input
                      type="number"
                      className="form-control"
                      id="postal"
                      placeholder="Zip/Postal"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="form-footer mt-2">
                <Link to="#" className="btn btn-primary">
                  Confirm Details
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <h3 className="card-title">CheckOut</h3>
              <div className="card-options">
                <Dropdown className="btn-group">
                  <Dropdown.Toggle
                    className="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                  >
                    Visa<span className="caret"></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu">
                    <Dropdown.Item>
                      <Link to="#">Visa</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="#">Rupay</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="#">Mastercard</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="#">PayPal</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="form">
                <Form.Group>
                  <Form.Group>
                    <Form.Label>Card Holder Name</Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      id="name11"
                      placeholder="First Name"
                    />
                  </Form.Group>
                </Form.Group>
              </div>
              <div className="form-row">
                <div className="form-group col-md-9 mb-0">
                  <Form.Group>
                    <Form.Label>Credit card Number</Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="number"
                    />
                  </Form.Group>
                </div>
                <div className="form-group col-md-3 mb-0">
                  <Form.Group>
                    <Form.Label>CVV Number</Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      id="region1"
                      placeholder="675"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="form-group m-0">
                <Form.Label>Expiration Date</Form.Label>
                <Row>
                  <Col className="col-6">
                    <formelement.Dateofbirth />
                  </Col>
                  <Col className="col-6">
                    <formelement.Selectyear />
                  </Col>
                </Row>
              </div>
              <div className="mt-4 mb-0 text-dark">
                Your Credit card information is encrypted
              </div>
              <div className="form-footer mt-2">
                <Link to="#" className="btn btn-primary">
                  Make Payment
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Billing Information</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      First Name <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      Last Name <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>
                      Company Name <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company name"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>
                      Email address <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>
                      Country <span className="text-red">*</span>
                    </Form.Label>

                    <formelement.BillingInformationCounrty />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>
                      Address <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Home Address"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      City <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group>
                    <Form.Label>
                      Postal Code <span className="text-red">*</span>
                    </Form.Label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="ZIP Code"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Payment Information</h3>
            </Card.Header>
            <Card.Body>
              <div className="card-pay">
                <Tabs
                  defaultActiveKey="tab20"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="tab20" title="CreditCard">
                    <div className="tab-pane active show" id="tab20">
                      <div
                        className="bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4"
                        role="alert"
                      >
                        Please Enter Valid Details
                      </div>
                      <Form.Group>
                        <Form.Label>Card Holder Name</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Card number</Form.Label>
                        <div className="input-group">
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
                        </div>
                      </Form.Group>
                      <Row>
                        <div className="col-sm-8">
                          <Form.Group>
                            <Form.Label>Expiration</Form.Label>
                            <div className="input-group">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="MM"
                                name="Month"
                              />
                              <input
                                type="number"
                                className="form-control"
                                placeholder="YY"
                                name="Year"
                              />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-sm-4">
                          <Form.Group>
                            <Form.Label>
                              CVV <i className="fa fa-question-circle"></i>
                            </Form.Label>
                            <input
                              type="number"
                              className="form-control"
                              required=""
                            />
                          </Form.Group>
                        </div>
                      </Row>
                      <Link to="#" className="btn  btn-lg btn-primary mt-2">
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
                <div className="tab-content"></div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
