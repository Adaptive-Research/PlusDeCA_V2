import React from "react";
import TreeView from "deni-react-treeview";
import {Breadcrumb,Row,Col,Card} from "react-bootstrap"
import {
  treeviews,
  treeview1,
  treeview2,
  treeview3,
  treeviewXRP,
  treeview4,
  treeview6,
  treeview5,
} from "../../../data/Component/treeviews/treeviews";
import { Link } from "react-router-dom";
export default function Treeview() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Treeview</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Treeview
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
          <Card className=" mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">Basic Treeview</div>
              <p className="mg-b-20 card-sub-title tx-12 text-muted">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <Row>
                <Col lg={4}>
                  <ul className="tree" id="treeview1">
                    <li className="branch">
                      <TreeView
                        className="branch"
                        style={{ height: "auto" }}
                        showIcon={false}
                        items={treeviews}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview"
                        style={{ height: "auto" }}
                        showIcon={false}
                        className="branch"
                        items={treeviewXRP}
                      />
                    </li>
                  </ul>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={4}>
                  <ul id="treeview2" className="tree">
                    <li className="branch">
                      <TreeView
                        id="treeview"
                        style={{ height: "auto" }}
                        showIcon={false}
                        className="branch"
                        items={treeviews}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview"
                        style={{ height: "auto" }}
                        showIcon={false}
                        className="branch"
                        items={treeviewXRP}
                      />
                    </li>
                  </ul>
                </Col>
                <Col lg={4} className="mt-4 mt-lg-0">
                  <ul id="treeview3" className="tree">
                    <li className="branch">
                      <TreeView
                        id="treeview"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeviews}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeviewXRP}
                      />
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <div className="main-content-label mg-b-5">Tree View Styles</div>
              <p className="mg-b-20 card-sub-title tx-12 text-muted">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <Row>
                <Col lg={6} xl={4}>
                  <ul id="tree1" className="tree">
                    <li className="branch">
                      <TreeView
                        id="treeview1"
                        style={{ height: "auto" }}
                        showIcon={false}
                        className="branch"
                        items={treeview1}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview2"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeview1}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview3"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeview1}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview4"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeview4}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview5"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeview5}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview6"
                        showIcon={false}
                        className="branch"
                        style={{ height: "auto" }}
                        items={treeview6}
                      />
                    </li>
                  </ul>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={6} xl={4}>
                  <ul id="tree2" className="tree">
                    <li className="branch">
                      <TreeView
                        id="treeview1"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview1}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview2"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview2}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview3"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview3}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview4"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview4}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview5"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview5}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview6"
                        style={{ height: "auto" }}
                        showIcon={true}
                        className="branch"
                        items={treeview6}
                      />
                    </li>
                  </ul>
                </Col>
                <Col className=" mt-4 mt-lg-0" lg={6} xl={4}>
                  <ul id="tree3" className="tree">
                    <li className="branch">
                      <TreeView
                        id="treeview1"
                        style={{ height: "auto" }}
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview1}
                        theme={"purple"}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview2"
                        style={{ height: "auto" }}
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview2}
                        theme={"purple"}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview3"
                        style={{ height: "auto" }}
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview3}
                        theme={"purple"}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview4"
                        style={{ height: "auto" }}
                        showCheckbox={true}
                        showIcon={false}
                        className="branch"
                        items={treeview4}
                        theme={"purple"}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview5"
                        style={{ height: "auto" }}
                        showCheckbox={true}
                        showIcon={false}
                        className="branch"
                        items={treeview5}
                        theme={"purple"}
                      />
                    </li>
                    <li className="branch">
                      <TreeView
                        id="treeview6"
                        showIcon={false}
                        showCheckbox={true}
                        className="branch"
                        items={treeview6}
                        style={{ height: "auto" }}
                        theme={"purple"}
                      />
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
