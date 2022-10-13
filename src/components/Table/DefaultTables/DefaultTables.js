import React from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
import * as defaulttabledata from "../../../data/Table/defaulttabledata/defaulttabledata";
export default function DefaultTables() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Table</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Tables
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Table
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

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Simple Table</h3>
                <p className="text-muted card-sub-title">
                  Using the most basic table markup
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Basictable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Striped Rows</h3>
                <p className="text-muted card-sub-title">
                  Add zebra-striping to any table row.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Addzebrastriping />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Bordered Table</h3>
                <p className="text-muted card-sub-title">
                  Add borders on all sides of the table and cells.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Addbordersonallsides />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h3 className="card-title mb-1">Hoverable Rows Table</h3>
                <p className="text-muted card-sub-title">
                  To enable a hover state on table rows.
                </p>
              </div>
              <div className="table-responsive">
                <defaulttabledata.Toenableahoverstate />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
