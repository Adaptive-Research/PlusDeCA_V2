import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";
export default function AvatarSquares() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Avatar-Square</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Avatar-Square
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
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple avatar</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/1.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/2.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/1.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/2.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/3.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatars list</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list avatar-list-stacked">
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/8.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/11.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/9.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/8.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/11.jpg")}
                      alt=""
                    />
                    <span className="avatar bg-primary">+8</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatar status</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/5.jpg")}
                      alt=""
                    />
                    <span className="avatar cover-image">
                      <img
                        src={require("../../../assets/images/users/15.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-secondary"></span>
                    </span>
                    <span className="avatar cover-image">
                      <img
                        src={require("../../../assets/images/users/9.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-red"></span>
                    </span>
                    <span className="avatar cover-image">
                      <img
                        src={require("../../../assets/images/users/6.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-green"></span>
                    </span>
                    <span className="avatar cover-image">
                      <img
                        src={require("../../../assets/images/users/7.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-yellow"></span>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatar size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <img
                      className="avatar avatar-sm cover-image"
                      src={require("../../../assets/images/users/4.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar cover-image"
                      src={require("../../../assets/images/users/3.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-md cover-image"
                      src={require("../../../assets/images/users/5.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-lg cover-image"
                      src={require("../../../assets/images/users/6.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-xl cover-image"
                      src={require("../../../assets/images/users/4.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-xxl cover-image"
                      src={require("../../../assets/images/users/7.jpg")}
                      alt=""
                    />
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
