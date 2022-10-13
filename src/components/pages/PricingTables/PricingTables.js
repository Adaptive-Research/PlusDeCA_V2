import React from "react";
import * as pricingtabledata from "../../../data/Pages/pricingtabledata/pricingtabledata";
import { Link } from "react-router-dom";
import { Breadcrumb, Row } from "react-bootstrap";
export default function PricingTables() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Pricing</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item"href="#">
            Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Pricing
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
        <pricingtabledata.STARTERPACK />
      </Row>
      <Row>
        <pricingtabledata.STARTERPACK1 />
      </Row>
      <h4 className="card-title mt-4">Pricing cards 4 colums</h4>
      <Row>
        <pricingtabledata.Pricingcards4colums />
      </Row>
      <h4 className="card-title mt-4">Pricing cards 4 colums</h4>
      <Row>
        <pricingtabledata.SVGpaths />
      </Row>
      <h4 className="card-title mt-4">Column pricing table</h4>
      <Row>
        <pricingtabledata.COLUMNPRICE />
      </Row>
    </div>
  );
}
