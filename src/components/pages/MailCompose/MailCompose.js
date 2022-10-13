import React from "react";
import {
  OverlayTrigger,
  Tooltip,
  Breadcrumb,
  Row,
  Col,
  Card,
  Button,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MailCompose() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Email Compose</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Email Compose
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
        <Col lg={4} xl={3} md={12} sm={12}>
          <Card>
            <div className="list-group list-group-transparent mb-0 mail-inbox pb-3">
              <div className="mt-4 mb-4 mx-4 text-center">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                  className="btn btn-primary btn-lg d-grid"
                >
                  Inbox
                </Link>
              </div>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center active mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-line"></i>
                </span>
                Inbox <span className="ms-auto badge bg-success">14</span>
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-open-line"></i>
                </span>
                Drafts
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-star-line"></i>
                </span>
                Starred <span className="ms-auto badge bg-danger">03</span>
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-mail-send-line"></i>
                </span>
                Sent Mail
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-price-tag-3-line"></i>
                </span>
                Tags
              </Link>
              <Link
                to="#"
                className="list-group-item d-flex align-items-center mx-4"
              >
                <span className="icons">
                  <i className="ri-delete-bin-line"></i>
                </span>
                Trash
              </Link>
            </div>
            <div className="card-body border-top">
              <div className="list-group list-group-transparent mb-0 mail-inbox mx-4">
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-primary me-2"></span>
                  Friends
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-secondary me-2"></span>
                  Family
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-success me-2"></span>
                  Social
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-info me-2"></span> Office
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-warning me-2"></span> Work
                </Link>
                <Link
                  to="#"
                  className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
                >
                  <span className="w-3 h-3 brround bg-danger me-2"></span>
                  Settings
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col lg={8} xl={9} md={12} sm={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <h3 className="card-title">Compose new message</h3>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <div className="row align-items-center">
                    <label className="col-sm-3 col-xl-2 form-label">To</label>
                    <Col sm={9} xl={10}>
                      <input type="text" className="form-control mb-3" />
                    </Col>
                  </div>
                </Form.Group>
                <Form.Group>
                  <Row className="row align-items-center">
                    <label className="col-sm-3 col-xl-2 form-label">
                      Subject
                    </label>
                    <Col sm={9} xl={10}>
                      <input type="text" className="form-control mb-3" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row>
                    <label className="col-sm-3 col-xl-2 form-label">
                      Message
                    </label>
                    <Col sm={9} xl={10}>
                      <textarea
                        rows="9"
                        className="form-control mb-3"
                      ></textarea>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className=" d-sm-flex">
              <div className="">
                <OverlayTrigger
                  className=""
                  placement="top"
                  overlay={<Tooltip>Attach.</Tooltip>}
                >
                  <i className="ri-attachment-2 btn btn-icon btn-white btn-svg fs-15 me-1"></i>
                </OverlayTrigger>
                <OverlayTrigger
                  className=""
                  placement="top"
                  overlay={<Tooltip id="tooltip-top">Link.</Tooltip>}
                >
                  <span className="ri-link btn btn-icon btn-white btn-svg fs-15 me-1"></span>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Photos.</Tooltip>}
                >
                  <span className="ri-image-line btn btn-icon btn-white btn-svg fs-15 me-1"></span>
                </OverlayTrigger>
                <OverlayTrigger
                  className=""
                  placement="top"
                  overlay={<Tooltip>Delete.</Tooltip>}
                >
                  <span className="ri-delete-bin-line btn btn-icon btn-white btn-svg fs-15"></span>
                </OverlayTrigger>
              </div>
              <div className="btn-list ms-auto">
                <Button className="btn btn-danger btn-space mt-1" variant="">
                  Cancel
                </Button>
                <Button className="btn btn-primary btn-space mt-1" variant="">
                  Send message
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
