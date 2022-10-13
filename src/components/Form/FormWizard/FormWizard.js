import React from "react";
import * as formwizard from "../../../data/Form/formwizard/formwizard";
import { Link } from "react-router-dom";
import { Breadcrumb, Card, Row, Col} from "react-bootstrap";
export default function FormWizard() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Form-Wizard</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Form-Wizard
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
        <Col className="col-12">
          <Card>
            <Card.Header className=" border-bottom-0">
              <h3 className="card-title">Form Wizard</h3>
            </Card.Header>
            <Card.Body className="cbody">
              <div id="smartwizard-3 ">
                <formwizard.Formwizard />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <h3 className="card-title">Accordion-Wizard-Form</h3>
            </Card.Header>
            <Card.Body className="">
              <formwizard.AccordionWizardForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <Card.Title>Basic Content Wizard</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <formwizard.BasicContentWizard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className=" border-bottom-0">
              <Card.Title>Basic Wizard With Validation</Card.Title>
            </Card.Header>
            <Card.Body className="">
              <formwizard.WizardForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="valid">
            <Card.Header className="border-bottom-0">
              <Card.Title>Vertical Orientation Wizard</Card.Title>
            </Card.Header>
            <Card.Body className="valids ">
              <formwizard.VerticalOrientationWizard />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
