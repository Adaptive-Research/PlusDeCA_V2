import React from "react";
import * as formelement from "../../../data/Form/formelement/formelement";
import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Form,
  FormGroup,
  FormControl,
  ListGroup,
  Breadcrumb,
} from "react-bootstrap";
export default function EditProfile() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Edit Profile</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Edit Profile
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
        <Col lg={12} xl={4} md={12} sm={12}>
          <Card className="profile-edit">
            <Card.Header>
              <Card.Title>Edit Password</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="d-flex mb-3">
                <img
                  alt="User Avatar"
                  className="rounded-circle avatar-lg me-2"
                  src={require("../../../assets/images/users/8.jpg")}
                />
                <div className="ms-auto mt-xl-2 mt-lg-0 me-lg-2">
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                    className="btn btn-primary btn-sm mt-1 mb-1 me-2"
                  >
                    <i className="fe fe-camera me-1"></i>Edit profile
                  </Link>
                  <Link to="#" className="btn btn-danger btn-sm mt-1 mb-1 me-2">
                    <i className="fe fe-camera-off me-1"></i>Delete profile
                  </Link>
                </div>
              </div>
              <FormGroup>
                <Form.Label className="form-label">Change Password</Form.Label>
                <FormControl
                  type="password"
                  className="form-control"
                  defaultValue="password"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label">New Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  defaultValue="password"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className="form-control"
                  defaultValue="password"
                />
              </FormGroup>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link to="#" className="btn btn-primary me-2">
                Updated
              </Link>
              <Link to="#" className="btn btn-danger">
                Cancel
              </Link>
            </Card.Footer>
          </Card>
          <Card className="panel-theme">
            <Card.Header>
              <div className="float-start">
                <Card.Title as="h3">Contact</Card.Title>
              </div>
              <div className="clearfix"></div>
            </Card.Header>
            <Card.Body className="no-padding">
              <ListGroup className="no-margin">
                <ListGroup.Item className="list-group-item">
                  <i className="fa fa-envelope list-contact-icons border text-center br-100"></i>
                  <span className="contact-icons">support@demo.com</span>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  <i className="fa fa-globe list-contact-icons border text-center br-100"></i>
                  <span className="contact-icons"> www.abcd.com</span>
                </ListGroup.Item>
                <ListGroup.Item className="list-group-item">
                  <i className="fa fa-phone list-contact-icons border text-center br-100"></i>
                  <span className="contact-icons">+125 5826 3658 </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12} xl={8} md={12} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Edit Profile</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <label htmlFor="exampleInputname">First Name</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputname"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <label htmlFor="exampleInputname1">Last Name</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputname1"
                      placeholder="Enter Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup className="mt-2">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="email address"
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <label htmlFor="exampleInputnumber">Conatct Number</label>
                <Form.Control
                  type="number"
                  className="form-control"
                  id="exampleInputnumber"
                  placeholder="ph number"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label">About Me</Form.Label>
                <textarea
                  className="form-control"
                  rows="6"
                  defaultValue="My bio........."
                ></textarea>
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label">Website</Form.Label>
                <Form.Control
                  className="form-control"
                  placeholder="http://splink.com"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className="form-label">Date Of Birth</Form.Label>
                <Row>
                  <Col md={4}>
                    <formelement.Selectdate />
                  </Col>
                  <Col md={4}>
                    <formelement.Dateofbirth />
                  </Col>
                  <Col md={4}>
                    <formelement.Selectyear />
                  </Col>
                </Row>
              </FormGroup>
            </Card.Body>
            <Card.Footer className="text-end">
              <Link to="#" className="btn btn-success mt-1 me-2">
                Save
              </Link>
              <Link to="#" className="btn btn-danger mt-1 me-2">
                Cancel
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Projects</Card.Title>
              <div className="card-options">
                <button
                  id="add__new__list"
                  type="button"
                  className="btn btn-md btn-primary "
                >
                  <i className="fa fa-plus"></i> Add a new Project
                </button>
              </div>
            </Card.Header>
            <div className="table-responsive editprofiletable">
              <editprofile.CustomEditComponent />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
