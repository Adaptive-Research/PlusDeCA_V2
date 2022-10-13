import React from "react";
import * as sweetalerts from "../../../data/Component/sweetalerts/sweetalerts";
import { Link } from "react-router-dom";
import {Breadcrumb, Card, Row,Col,Button} from"react-bootstrap"
export default function SweetAlerts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Sweet Alert</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Sweet Alert
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
        <Col sm={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Sample Sweet Alerts</h3>
            </Card.Header>
            <Card.Body>
              <Button
                className="btn btn-success mt-2 me-2"
                variant=""
                onClick={sweetalerts.Primaryalert}
              >
                success alert
              </Button>
              <Button
                className="btn btn-warning mt-2 me-2"
                variant=""
                onClick={sweetalerts.Warningalert}
              >
                Warning alert
              </Button>
              <Button
                className="btn btn-danger mt-2 me-2"
                variant=""
                onClick={sweetalerts.Dangeralert}
              >
                Danger alert
              </Button>
              <Button
                className="btn btn-info mt-2 me-2"
                variant=""
                onClick={sweetalerts.Infoalert}
              >
                Info alert
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Forms Sweet-alert</h3>
            </Card.Header>
            <Card.Body>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title text"
                  id="title"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your message"
                  id="message"
                />
              </div>
              <Button
                className="btn btn-primary mt-2 me-2"
                variant=""
                onClick={sweetalerts.Primaryalertbutton}
              >
                Simple alert
              </Button>
              <Button
                className="btn btn-secondary mt-2 me-2"
                variant=""
                onClick={sweetalerts.Secondaryalertbutton}
              >
                Alert with title
              </Button>
              <Button
                className="btn btn-info mt-2 me-2"
                variant=""
                onClick={sweetalerts.Infoalertbutton}
              >
                Alert with image
              </Button>
              <Button
                className="btn btn-warning mt-2 me-2"
                variant=""
                onClick={sweetalerts.Warningalertbutton}
              >
                With timer
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
