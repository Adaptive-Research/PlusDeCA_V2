import React from "react";
import { Pagination, Breadcrumb, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Paginations() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Pagination</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Pagination
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
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Basic pagination</h3>
            </Card.Header>
            <Card.Body>
              <div className="pagination-wrapper">
                <Pagination>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Basic pagination</h3>
            </Card.Header>
            <Card.Body>
              <Pagination>
                <Pagination.Prev disabled>Prev </Pagination.Prev>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next>Next </Pagination.Next>
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Model Pagination</h3>
            </Card.Header>
            <div className="card-body ">
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item active>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Model Pagination2</h3>
            </Card.Header>
            <Card.Body>
              <nav aria-label="Page navigation">
                <Pagination>
                  <Pagination.Prev />
                  <Pagination.First />
                  <Pagination.Item active>{4}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Model Pagination2</h3>
            </Card.Header>
            <Card.Body>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                </Pagination>
              </nav>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Pagination left alignment</h3>
            </Card.Header>
            <Card.Body>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item active>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                </Pagination>
              </nav>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Pagination center alignment</h3>
            </Card.Header>
            <Card.Body>
              <nav aria-label="Page navigation example">
                <Pagination className="pagination justify-content-center">
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item active>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                </Pagination>
              </nav>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Pagination Right Alignment</h3>
            </Card.Header>
            <div className="card-body ">
              <nav aria-label="Page navigation example">
                <Pagination className="pagination justify-content-end">
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item active>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                </Pagination>
              </nav>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
