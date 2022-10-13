import React from "react";
import * as Invoicelist from "../../../data/Pages/invoicelist/Invoicelist";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
export default function Invoice() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Invoice</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Invoice
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
        <Col md={12}>
          <Card>
            <Card.Body>
              <div className="clearfix">
                <div className="float-start">
                  <h3 className="card-title mb-0">#INV-526</h3>
                </div>
                <div className="float-end">
                  <h3 className="card-title">Date: 12-09-2019</h3>
                </div>
              </div>
              <hr />
              <Row>
                <Col lg={6}>
                  <p className="h3">Invoice Form:</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    yourdomain@example.com
                  </address>
                </Col>
                <Col className="text-end"lg={6}>
                  <p className="h3">Invoice To:</p>
                  <address>
                    Street Address
                    <br />
                    State, City
                    <br />
                    Region, Postal Code
                    <br />
                    ypurdomain@example.com
                  </address>
                </Col>
              </Row>
              <div className="table-responsive push">
                <Invoicelist.Tableinvoice />
              </div>
            </Card.Body>
            <Invoicelist.Printpage />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
