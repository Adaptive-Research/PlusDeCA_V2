import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Mediaobject() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Mediaobject</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Mediaobject
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
        <Col>
          <Card className="Relatedpost nested-media">
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Default Mediaobject</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="media media-lg mt-0">
                  <img
                    className="avatar avatar-xl brround me-3 mb-4"
                    src={require("../../../assets/images/media/media3.jpg")}
                    alt="Generic placeholder "
                  />
                  <div className="media-body">
                    <h4 className="mt-0">Media heading</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="Relatedpost nested-media overflow-hidden">
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Nesting Mediaobject</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" overflow-hidden">
              <div className="example">
                <div className="media media-lg mt-0">
                  <img
                    className="avatar avatar-xl brround me-3 mb-4"
                    src={require("../../../assets/images/media/media5.jpg")}
                    alt="Generic placeholder "
                  />
                  <div className="media-body overflow-hidden">
                    <h4 className="mt-0">Media heading</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="media media-lg mt-3">
                      <img
                        className="avatar avatar-xl brround me-3 mb-4"
                        src={require("../../../assets/images/media/media2.jpg")}
                        alt="Generic placeholder "
                      />
                      <div className="media-body overflow-hidden">
                        <h4 className="mt-0">Media heading</h4>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="Relatedpost nested-media">
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">List Mediaobject</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-unstyled">
                  <li className="media media-lg mt-0 border-bottom-0">
                    <img
                      className="avatar avatar-xl brround me-3 mb-4"
                      src={require("../../../assets/images/media/media4.jpg")}
                      alt="Generic placeholder "
                    />
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 01</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </li>
                  <li className="media media-lg my-4 border-bottom-0">
                    <img
                      className="avatar avatar-xl brround me-3 mb-4"
                      src={require("../../../assets/images/media/media5.jpg")}
                      alt="Generic placeholder "
                    />
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 02</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </li>
                  <li className="media media-lg border-bottom-0">
                    <img
                      className="avatar avatar-xl brround me-3 mb-4"
                      src={require("../../../assets/images/media/media3.jpg")}
                      alt="Generic placeholder "
                    />
                    <div className="media-body">
                      <h4 className="mt-0 mb-1">Media heading 03</h4>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="Relatedpost nested-media">
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Alignments Mediaobject</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="media media-lg mt-0">
                  <img
                    className="align-self-start avatar avatar-xl brround me-3 mb-4"
                    src={require("../../../assets/images/media/media3.jpg")}
                    alt="Generic placeholder "
                  />
                  <div className="media-body">
                    <h4 className="mt-0">Top-aligned media</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
                <div className="media media-lg">
                  <img
                    className="align-self-center avatar avatar-xl brround me-3 mb-4"
                    src={require("../../../assets/images/media/media5.jpg")}
                    alt="Generic placeholder "
                  />
                  <div className="media-body">
                    <h4 className="mt-0">Center-aligned media</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
                <div className="media media-lg">
                  <img
                    className="align-self-end avatar avatar-xl brround me-3 mb-4"
                    src={require("../../../assets/images/media/media4.jpg")}
                    alt="Generic placeholder "
                  />
                  <div className="media-body">
                    <h4 className="mt-0">Bottom-aligned media</h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </p>
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="Relatedpost nested-media ">
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Order Mediaobject</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="media media-lg mt-0">
                  <div className="media-body mt-0">
                    <h4 className="mt-0 mb-4">Media object</h4>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <img
                    className="ms-2 mt-3 mb-3 avatar avatar-xl brround"
                    src={require("../../../assets/images/media/media4.jpg")}
                    alt="Generic placeholder "
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
