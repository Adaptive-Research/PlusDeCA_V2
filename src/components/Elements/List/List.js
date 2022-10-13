import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb,Row ,Col,Card} from "react-bootstrap"
export default function List() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              List
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
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style-1">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style2</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style2">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style3</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style3">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style4</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style4">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style5</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style5">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder List Style6</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ul className="list-style6">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Order list</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol className="order-list">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Order With unorder</h3>
            </Card.Header>
            <Card.Body className="ps-5 pe-5">
              <ol className="order-list">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul className="list-style4 ps-5">
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic List Group</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Active List item</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item active">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Order list</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="listorder">Cras justo odio</li>
                  <li className="listorder">Dapibus ac facilisis in</li>
                  <li className="listorder">Morbi leo risus</li>
                  <li className="listorder">Porta ac consectetur ac</li>
                  <li className="listorder">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder list</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="listunorder">Cras justo odio</li>
                  <li className="listunorder">Dapibus ac facilisis in</li>
                  <li className="listunorder">Morbi leo risus</li>
                  <li className="listunorder">Porta ac consectetur ac</li>
                  <li className="listunorder">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Order list</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="listorder1">Cras justo odio</li>
                  <li className="listorder1">Dapibus ac facilisis in</li>
                  <li className="listorder1">Morbi leo risus</li>
                  <li className="listorder1">Porta ac consectetur ac</li>
                  <li className="listorder1">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Unorder list</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="listunorder1">Cras justo odio</li>
                  <li className="listunorder1">Dapibus ac facilisis in</li>
                  <li className="listunorder1">Morbi leo risus</li>
                  <li className="listunorder1">Porta ac consectetur ac</li>
                  <li className="listunorder1">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Disabled List item</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item disabled">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">
                Contextual classNamees with List Group
              </h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item list-group-item-success">
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item list-group-item-info">
                    Cras sit amet nibh libero
                  </li>
                  <li className="list-group-item list-group-item-warning">
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item list-group-item-danger">
                    Vestibulum at eros
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List Group with icons</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fa fa-check" aria-hidden="true"></i> Cras
                    justo odio
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check" aria-hidden="true"></i> Dapibus
                    ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check" aria-hidden="true"></i> Morbi leo
                    risus
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check" aria-hidden="true"></i> Porta ac
                    consectetur ac
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Vestibulum at eros
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List Group with colored icons</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item">
                    <i
                      className="fa fa-cog text-primary me-1"
                      aria-hidden="true"
                    ></i>
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-cog text-danger me-1" aria-hidden="true"></i>
                    Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i
                      className="fa fa-cog text-success me-1"
                      aria-hidden="true"
                    ></i>
                    Cras sit amet nibh libero
                  </li>
                  <li className="list-group-item">
                    <i
                      className="fa fa-cog text-warning me-1"
                      aria-hidden="true"
                    ></i>
                    Porta ac consectetur ac
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-cog text-info me-1" aria-hidden="true"></i>
                    Vestibulum at eros
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List Group With defalut badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item">
                    Cras justo odio
                    <span className="badgetext badge bg-default rounded-pill">
                      20
                    </span>
                  </li>
                  <li className="list-group-item">
                    Dapibus ac facilisis in
                    <span className=" badgetext badge bg-default rounded-pill">
                      15
                    </span>
                  </li>
                  <li className="list-group-item">
                    Morbi leo risus
                    <span className=" badgetext badge bg-default rounded-pill">
                      10
                    </span>
                  </li>
                  <li className="list-group-item">
                    Porta ac consectetur ac
                    <span className=" badgetext badge bg-default rounded-pill">
                      8
                    </span>
                  </li>
                  <li className="list-group-item">
                    Vestibulum at eros
                    <span className=" badgetext badge bg-default rounded-pill">
                      1
                    </span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List Group With color badges</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ul className="list-group">
                  <li className="list-group-item justify-content-between">
                    Cras justo odio
                    <span className="badgetext badge bg-primary rounded-pill">
                      20
                    </span>
                  </li>
                  <li className="list-group-item justify-content-between">
                    Dapibus ac facilisis in
                    <span className="badgetext badge bg-danger rounded-pill">
                      15
                    </span>
                  </li>
                  <li className="list-group-item justify-content-between">
                    Morbi leo risus
                    <span className="badgetext badge bg-success rounded-pill">
                      10
                    </span>
                  </li>
                  <li className="list-group-item justify-content-between">
                    Porta ac consectetur ac
                    <span className="badgetext badge bg-warning rounded-pill">
                      8
                    </span>
                  </li>
                  <li className="list-group-item justify-content-between">
                    Vestibulum at eros
                    <span className="badgetext badge bg-info rounded-pill">
                      1
                    </span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List Group With Custom content</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="list-group">
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">
                List Group With Disabled Custom content
              </h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="list-group">
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start disabled"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">List group item heading</h5>
                      <small className="text-muted">3 days ago</small>
                    </div>
                    <p className="mb-1">
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </p>
                    <small className="text-muted">
                      Donec id elit non mi porta.
                    </small>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
