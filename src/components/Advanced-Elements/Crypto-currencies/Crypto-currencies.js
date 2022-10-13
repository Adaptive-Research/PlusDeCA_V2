import React from "react";
import { Breadcrumb, Card, Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as cryptodata from "../../../data/Advancedelements/cryptodata/cryptodata";
export default function CryptoCurrencies() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Crypto-currencies</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Crypto-currencies
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
            <div className="table-responsive">
              <cryptodata.Cryptodata />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
