import React from "react";
import { Link } from "react-router-dom";
import { Pagination, Breadcrumb,Row,Col,Card } from "react-bootstrap";
import * as userdata from "../../../data/Advancedelements/userdata/userdata";
export default function UserList() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">User List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              User List
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

      <Row className="row-cards">
        <Col lg={12} xl={12}>
          <div className="input-group mb-5">
            <input type="text" className="form-control" placeholder="" />
            <div className="input-group-text btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <Card>
            <Card.Header className="border-bottom-0 p-5">
              <h2 className="card-title">1 - 30 of 546 users</h2>
              <div className="page-options pageoption d-flex float-end">
                <userdata.Category />
              </div>
            </Card.Header>
            <div className="e-table px-5 pb-5">
              <div className="table-responsive table-lg">
                <userdata.Tableuserdata />
              </div>
            </div>
          </Card>
          <div className="mb-5">
            <Pagination className="pagination mb-5 float-end">
              <Pagination.Prev className="page-item page-prev " disabled>
                Prev
              </Pagination.Prev>
              <Pagination.Item className="page-item " active>
                {1}
              </Pagination.Item>
              <Pagination.Item className="page-item">{2}</Pagination.Item>
              <Pagination.Item className="page-item">{3}</Pagination.Item>
              <Pagination.Item className="page-item">{4}</Pagination.Item>
              <Pagination.Next className="page-item page-next">
                Next
              </Pagination.Next>
            </Pagination>
          </div>
        </Col>
      </Row>
    </div>
  );
}
