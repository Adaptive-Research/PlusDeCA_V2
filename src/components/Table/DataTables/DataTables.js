import React from "react";
import * as datatable from "../../../data/Table/datatable/datatable";
import { Link } from "react-router-dom";
import { Row, Card, Col, Breadcrumb } from "react-bootstrap";
export default function DataTables() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Data Table</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
             Tables
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Data Table
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
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Datatable</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.Basicdatatable />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Datatable</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <datatable.DataTables />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Datatable ExportCSV</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive export-table">
                <datatable.ExportCSV />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Sticky Header</h3>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive deleted-table">
                <datatable.fixedheader />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
