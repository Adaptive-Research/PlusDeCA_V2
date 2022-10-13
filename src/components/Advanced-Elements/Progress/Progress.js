import React from "react";
import { ProgressBar, Breadcrumb, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Progress() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Progress</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Progress
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
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Basic Progress</h3>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-primary w-10" />
                </div>
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-primary w-20"></ProgressBar>
                </div>
                <div className="progress progress-md mb-3 ">
                  <ProgressBar className="progress-bar bg-primary w-40"></ProgressBar>
                </div>
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-primary  w-60"></ProgressBar>
                </div>
                <div className="progress progress-md">
                  <ProgressBar className="progress-bar bg-primary  w-80"></ProgressBar>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Contextual Progress</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-pink w-10"></ProgressBar>
                </div>
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-success w-20"></ProgressBar>
                </div>
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-yellow w-40"></ProgressBar>
                </div>
                <div className="progress progress-md mb-3">
                  <ProgressBar className="progress-bar bg-primary w-60"></ProgressBar>
                </div>
                <div className="progress progress-md">
                  <ProgressBar className="progress-bar bg-secondary w-80"></ProgressBar>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Basic Progress with label</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="default"
                    now={10}
                    label={`${10}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="secondary"
                    now={20}
                    label={`${20}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="syccess"
                    now={40}
                    label={`${40}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="warning"
                    now={60}
                    label={`${60}%`}
                  />
                </div>
                <div className=" progress-md">
                  <ProgressBar
                    className="progress-bar "
                    variant="info"
                    now={80}
                    label={`${80}%`}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Contextual Progress with label</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="pink"
                    now={10}
                    label={`${10}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="success"
                    now={20}
                    label={`${20}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="yellow"
                    now={40}
                    label={`${40}%`}
                  />
                </div>
                <div className=" progress-md mb-3">
                  <ProgressBar
                    className="progress-bar "
                    variant="primary"
                    now={60}
                    label={`${60}%`}
                  />
                </div>
                <div className=" progress-md ">
                  <ProgressBar
                    className="progress-bar "
                    variant="secondary"
                    now={80}
                    label={`${80}%`}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Progress Sizes</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ProgressBar className="progress progress-xs mb-3">
                  <ProgressBar striped variant="primary" now={30} />
                </ProgressBar>

                <ProgressBar className="progress progress-sm mb-3">
                  <ProgressBar striped variant="primary" now={60} />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar striped variant="primary" now={70} />
                </ProgressBar>

                <ProgressBar className="progress progress-lg">
                  <ProgressBar striped variant="primary" now={80} />
                </ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Mixed color Progress with Sizes</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ProgressBar className="progress progress-xs mb-3">
                  <ProgressBar striped variant="secondary" now={5} key={1} />
                  <ProgressBar variant="warning" now={5} key={2} />
                  <ProgressBar striped variant="info" now={5} key={3} />
                </ProgressBar>

                <ProgressBar className="progress progress-sm mb-3">
                  <ProgressBar striped variant="pink" now={10} key={1} />
                  <ProgressBar variant="yellow" now={15} key={2} />
                  <ProgressBar striped variant="teal" now={15} key={3} />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar striped variant="pink" now={15} key={1} />
                  <ProgressBar variant="primary" now={20} key={2} />
                  <ProgressBar striped variant="cyan" now={30} key={3} />
                </ProgressBar>

                <ProgressBar className=" progress-lg">
                  <ProgressBar striped variant="success" now={30} key={1} />
                  <ProgressBar variant="pink" now={20} key={2} />
                  <ProgressBar striped variant="secondary" now={40} key={3} />
                </ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Striped Progress</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar animated variant="primary-1" now={10} />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar animated variant="secondary-1" now={20} />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar
                    variant="success-1"
                    animated
                    now={50}
                    label={`${50}%`}
                  />
                </ProgressBar>

                <ProgressBar className="progress progress-md">
                  <ProgressBar
                    animated
                    now={60}
                    variant="info-1"
                    label={`${60}%`}
                  />
                </ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3>Animated Progress</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="example">
                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar
                    className="progress-bar progress-bar-indeterminate "
                    variant="primary-1"
                  />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar
                    className="progress-bar progress-bar-indeterminate "
                    variant="secondary-1"
                  />
                </ProgressBar>

                <ProgressBar className="progress progress-md mb-3">
                  <ProgressBar
                    className="progress-bar progress-bar-indeterminate "
                    variant="success-1"
                  />
                </ProgressBar>

                <ProgressBar className="progress progress-md">
                  <ProgressBar
                    className="progress-bar progress-bar-indeterminate "
                    variant="info-1"
                  />
                </ProgressBar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
