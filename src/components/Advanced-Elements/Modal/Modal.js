import React from "react";
import * as modal from "../../../data/Advancedelements/modal/modal";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Card, Col } from "react-bootstrap";
export default function Modals() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Modal</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Modal
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
          <Card className="card" id="modal">
            <Card.Header className=" border-bottom-0">
              <Card.Title>Basic Modal</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div role="document" className="modal-dialog">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        
                          <h6 className="modal-title">Message Preview</h6>
                        
                        <button aria-label="Close" className="btn-close">
                          <span aria-hidden="true">x</span>
                        </button>
                      </div>
                      <div className="modal-body text-center p-4">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary">
                          Save changes
                        </button>
                        <button className="btn btn-light">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
                <modal.MessagePreview />
              </div>
            </Card.Body>
          </Card>

          <div className="card" id="modal3">
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>Success Alert Messages</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="modal d-block pos-static">
                  <div role="document" className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4">
                        <button aria-label="Close" className="btn-close">
                          <span aria-hidden="true">x</span>
                        </button>
                        <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
                        <h4 className="text-success mb-4">Congratulations!</h4>
                        <p className="mb-4 mx-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                        <button className="btn btn-success pd-x-25">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
                <modal.SuccessAlertMessages />
              </div>
            </Card.Body>
          </div>

          <div className="card" id="modal4">
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>Warning Alert Messages</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="p-4 bg-light border border-bottom-0 mg-t-20">
                <div className="modal d-block pos-static">
                  <div role="document" className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4">
                        <button aria-label="Close" className="btn-close">
                          <span aria-hidden="true">x</span>
                        </button>
                        <i className="fe fe-x-circle fs-65 text-danger lh-1 mb-4 d-inline-block"></i>
                        <h4 className="text-danger mb-20">
                          Error: Cannot process your entry!
                        </h4>
                        <p className="mb-4 mx-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                        <button
                          aria-label="Close"
                          className="btn btn-danger pd-x-25"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4 bg-light border">
                <modal.WarningAlertMessages />
              </div>
            </Card.Body>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="card">
                <Card.Header className="card-header border-bottom-0">
                  <Card.Title>Modal Sizes & Types</Card.Title>
                </Card.Header>
                <div className="card-body text-center">
                  <p>
                    Add <code className="highlighter-rouge">.modal-sm </code> or
                    <code className="highlighter-rouge">.modal-lg </code> or
                    <code className="highlighter-rouge">.modal-xl </code> to
                    modal-dialog to increase and decrease the modal box sizes.
                  </p>
                  <modal.SmallModal />
                  <modal.LargeModal />
                  <modal.ExtralargeModal />
                  <modal.ScrollingModal />
                  <modal.FullscreenModal />
                </div>
              </div>
            </div>
          </div>

          <div className="card" id="modal5">
            <Card.Header className="card-header border-bottom-0">
              <Card.Title>Modal Animation Effects</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="row ">
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.Scale />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.RightSlide />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.BottomSlide />
                </div>

                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.FormModal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.ScrollBody />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.DraggableModal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.StaticbackdropModal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.CustomModal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.Gridmodal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.VerticallyCenteredModal />
                </div>
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <modal.CenterModal />
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </div>
  );
}
