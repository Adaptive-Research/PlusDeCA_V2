import React from "react";
import { Card, Row, Col,Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function AvatarRadius() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Avatar-Radius</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Avatar-Radius
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
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simple avatar</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/4.jpg")}
                      alt=""
                    />

                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/5.jpg")}
                      alt=""
                    />

                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/3.jpg")}
                      alt=""
                    />

                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/2.jpg")}
                      alt=""
                    />

                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/1.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatar size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <img
                      className="avatar avatar-sm bradius cover-image"
                      src={require("../../../assets/images/users/4.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/3.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-md bradius cover-image"
                      src={require("../../../assets/images/users/5.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-lg bradius cover-image"
                      src={require("../../../assets/images/users/6.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-xl bradius cover-image"
                      src={require("../../../assets/images/users/4.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar avatar-xxl bradius cover-image"
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

      <Row>
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatar status</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="avatar-list">
                    <span className="avatar bradius cover-image ">
                      <img
                        className="avatar bradius cover-image"
                        src={require("../../../assets/images/users/8.jpg")}
                        alt=""
                      />
                    </span>
                    <span className="avatar bradius cover-image ">
                      <img
                        className="avatar bradius cover-image"
                        src={require("../../../assets/images/users/5.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-secondary"></span>
                    </span>
                    <span className="avatar bradius cover-image ">
                      <img
                        className="avatar bradius cover-image"
                        src={require("../../../assets/images/users/9.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-red"></span>
                    </span>
                    <span className="avatar bradius cover-image ">
                      <img
                        className="avatar bradius cover-image"
                        src={require("../../../assets/images/users/6.jpg")}
                        alt=""
                      />
                      <span className="avatar-status bg-green"></span>
                    </span>
                    <span className="avatar bradius cover-image ">
                      <img
                        className="avatar bradius cover-image"
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
        <Col md={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatars list</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap ">
                <div className="example">
                  <div className="avatar-list avatar-list-stacked">
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/8.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/10.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/9.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/8.jpg")}
                      alt=""
                    />
                    <img
                      className="avatar bradius cover-image"
                      src={require("../../../assets/images/users/11.jpg")}
                      alt=""
                    />
                    <span className="avatar bradius bg-primary">+8</span>
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
