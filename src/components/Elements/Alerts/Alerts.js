import React from "react";
import * as alerts from "../../../data/Alerts/alerts";
import { Link } from "react-router-dom";
import { Row, Col, Card, Breadcrumb } from "react-bootstrap";
export default function Alerts() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Alerts</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Alerts
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
          <Card>
            <Card.Header>
              <h3 className="card-title">Default alerts</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <alerts.Primaryalert />

                  <alerts.Secondaryalert />

                  <alerts.Successalert />

                  <alerts.Warningalert />

                  <alerts.Infoalert />

                  <alerts.Dangeralert />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Links in alerts</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <alerts.Linkalertsuccess />

                  <alerts.Linkalertinfo />

                  <alerts.Linkalertwarning />

                  <alerts.Linkalertdanger />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alert with icon</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.alert-icon</code>
                  className.
                </p>
                <div className="example">
                  <alerts.Iconalertaddsuccess />

                  <alerts.Iconalertaddinfo />

                  <alerts.Iconalertaddwarning />

                  <alerts.Iconalertadddanger />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alert with avatar</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <alerts.Imgalertprimary />

                  <alerts.Imgalertsuccess />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="col-xl-12">
          <Card>
            <Card.Header>
              <h3 className="card-title">Alerts With Icons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <alerts.Iconalertdefault />

                  <alerts.Iconalertprimary />

                  <alerts.Iconalertsuccess />

                  <alerts.Iconalertinfo />

                  <alerts.Iconalertwarning />

                  <alerts.Iconalertdanger />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h3 className=" card-title mb-0">Alerts With Icons Dismissing</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <alerts.Iconalertdismissibledefault />

                  <alerts.Iconalertdismissibleprimary />

                  <alerts.Iconalertdismissiblesuccess />

                  <alerts.Iconalertdismissibleinfo />

                  <alerts.Iconalertdismissiblewarning />

                  <alerts.Iconalertdismissibledanger />
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alerts Popovers</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Row>
                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showsuccess />
                    </Col>
                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showinfo />
                    </Col>
                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showwarning />
                    </Col>

                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showdanger />
                    </Col>
                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showsecondary />
                    </Col>
                    <Col xl={2} lg={4} md={6} className=" mt-2 mb-2">
                      <alerts.Showprimary />
                    </Col>
                  </Row>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Alerts style</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap mb-4">
                <div className="example">
                  <alerts.SuccessMessage />
                </div>
              </div>
              <div className="text-wrap mb-4">
                <div className="example">
                  <alerts.InfoMessage />
                </div>
              </div>
              <div className="text-wrap mb-4">
                <div className="example">
                  <alerts.WarningMessage />
                </div>
              </div>
              <div className="text-wrap">
                <div className="example">
                  <alerts.DangerMessage />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
