import React from "react";
import * as formvalidation from "../../../data/Form/formvalidations/formvalidations";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Row, Col, Form } from "react-bootstrap";
export default function FormValidation() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Form-Validations</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Form-Validations
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
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Custom Validation</h3>
            </Card.Header>
            <Card.Body>
              <formvalidation.CustomValidation />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Validation</h3>
            </Card.Header>
            <Card.Body>
              <formvalidation.DefaultValidation />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Server Side Validation</h3>
            </Card.Header>
            <Card.Body>
              <formvalidation.ServerSideValidation />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Supportted Elements</h3>
            </Card.Header>
            <Card.Body>
              <Form className="was-validated">
                <div className="mb-3">
                  <Form.Label htmlFor="validationTextarea">Textarea</Form.Label>
                  <textarea
                    className="form-control is-invalid"
                    id="validationTextarea"
                    placeholder="Required example textarea"
                    required
                  ></textarea>
                  <div className="invalid-feedback">
                    Please enter a message in the textarea.
                  </div>
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlValidation1"
                    required
                  />
                  <Form.Label
                    className="custom-control-label"
                    htmlFor="customControlValidation1"
                  >
                    Agree to terms and conditions
                  </Form.Label>
                </div>
                <div className="d-flex">
                  <div className="custom-control custom-radio me-4">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation2"
                      name="radio-stacked"
                      required
                    />
                    <Form.Label
                      className="custom-control-label"
                      htmlFor="customControlValidation2"
                    >
                      True
                    </Form.Label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="customControlValidation3"
                      name="radio-stacked"
                      required
                    />
                    <Form.Label
                      className="custom-control-label"
                      htmlFor="customControlValidation3"
                    >
                      False
                    </Form.Label>
                  </div>
                </div>
                <div className="mb-3">
                  <formvalidation.Singleselect1 />
                  <div className="invalid-feedback">
                    Example invalid custom select feedback
                  </div>
                </div>
                <div className="form-file mb-3">
                  <input
                    type="file"
                    className="form-file-input"
                    id="validatedCustomFile"
                    required
                  />
                  <Form.Label
                    className="form-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    Choose file...
                  </Form.Label>
                  <div className="invalid-feedback mt-4">
                    Example invalid custom file feedback
                  </div>
                </div>
                <div className="mb-3 mt-2">
                  <div className="input-group is-invalid formvalid">
                    <span
                      className="input-group-text"
                      id="validatedInputGroupPrepend"
                    >
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control is-invalid "
                      aria-describedby="validatedInputGroupPrepend"
                      required
                    />
                  </div>

                  <div className="invalid-feedback">
                    Example invalid input group feedback
                  </div>
                </div>
                <div className="">
                  <div className="input-group is-invalid">
                    <Form.Label
                      className="input-group-text mt-0"
                      htmlFor="validatedInputGroupSelect"
                    >
                      Options
                    </Form.Label>
                    <select
                      className="form-select form-control"
                      id="validatedInputGroupSelect"
                      required
                    >
                      <option defaultValue="">Choose...</option>
                      <option defaultValue="1">One</option>
                      <option defaultValue="2">Two</option>
                      <option defaultValue="3">Three</option>
                    </select>
                  </div>
                  <div className="invalid-feedback">
                    Example invalid input group feedback
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tooltips</h3>
            </Card.Header>
            <Card.Body>
              <formvalidation.Tooltips />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
