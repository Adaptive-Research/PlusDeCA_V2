import React from "react";
import * as loderdata from "../../../data/Component/loderdata/loderdata";
import { Link } from "react-router-dom";
import {Breadcrumb,Row,Col} from "react-bootstrap"
export default function Loaders() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Loaders</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Loaders
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
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader2 />
        </Col>
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader3 />
        </Col>
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader1 />
        </Col>
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader4 />
        </Col>
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader5 />
        </Col>
        <Col md={12} lg={6} xl={4}>
          <loderdata.Cardwithloader6 />
        </Col>
      </Row>

      <div className="row">
        <div className="col-md-6">
          <loderdata.Loadersbigsizes />
        </div>
        <div className="col-md-6">
          <loderdata.Loadersbigsizes1 />
        </div>
      </div>
    </div>
  );
}
