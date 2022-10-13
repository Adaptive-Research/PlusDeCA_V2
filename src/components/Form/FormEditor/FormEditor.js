import React from "react";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { Breadcrumb, Card, Row, Col, Modal,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FormEditor() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Form Editor</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Forms
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Form Editor
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
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <h3 className="card-title">Form Editor style1</h3>
            </Card.Header>
            <Card.Body>
              <formeditor.FormEditorstyle1 />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>Form Editor</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="ql-wrapper ql-wrapper-demo bg-light">
                <formeditor.Wrappers />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>Form Editor in Modal</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="text-center p-4 bg-light border">
                <formeditor.LargeModaleditor />
              </div>
              <Modal >
                <Modal.Dialog className=" modal-lg" role="document">
                  <div className="modal-content">
                    <Modal.Header className=" pd-20">
                      <h6 className="modal-title">Create New Document</h6>
                      <Button
                        aria-label="Close"
                        className="btn-close"
                      
                      >
                        <span aria-hidden="true">X</span>
                      </Button>
                    </Modal.Header>
                    <Modal.Body className=" pd-0">
                      <div className="ql-wrapper ql-wrapper-modal ht-250">
                        <div className="flex-1" id="quillEditorModal">
                          <p>
                            <strong>Quill</strong> is a free, open source
                            <Link to="https://github.com/quilljs/quill/">
                              WYSIWYG editor
                            </Link>
                            built for the modern web. With its
                            <Link to="https://quilljs.com/docs/modules/">
                              modular architecture
                            </Link>
                            and expressive API, it is completely customizable to
                            fit any need.
                          </p>
                          <br />
                          <p>
                            The icons use here as a replacement to default svg
                            icons are from
                            <Link to="https://icons8.com/line-awesome">
                              Line Awesome Icons
                            </Link>
                            .
                          </p>
                        </div>
                      </div>
                    </Modal.Body>
                  </div>
                </Modal.Dialog>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>From Inline-Edit Editor</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="wd-xl-100p ht-350">
                <div
                  className="ql-scrolling-demo bg-light p-4 border"
                  id="scrolling-container"
                >
                  <div id="quillInline">
                    <formeditor.FromInlineEditEditor />
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
