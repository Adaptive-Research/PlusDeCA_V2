import React from "react";
import user1 from "../../../assets/images/users/1.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import user16 from "../../../assets/images/users/16.jpg";
import user18 from "../../../assets/images/users/18.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user7 from "../../../assets/images/users/7.jpg";
import user17 from "../../../assets/images/users/17.jpg";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
export default function Tags() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tags</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Tags
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
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default tag</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag">First tag</span>
                    <span className="tag">Second tag</span>
                    <span className="tag">Third tag</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Link tag</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <Link to="#" className="tag">
                      First tag
                    </Link>
                    <Link to="#" className="tag">
                      Second tag
                    </Link>
                    <Link to="#" className="tag">
                      Third tag
                    </Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded tag</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag tag-rounded">First tag</span>
                    <span className="tag tag-rounded">Second tag</span>
                    <span className="tag tag-rounded">Third tag</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color tag</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag tag-blue">Blue tag</span>
                    <span className="tag tag-azure">Azure tag</span>
                    <span className="tag tag-indigo">Indigo tag</span>
                    <span className="tag tag-purple">Purple tag</span>
                    <span className="tag tag-pink">Pink tag</span>
                    <span className="tag tag-red">Red tag</span>
                    <span className="tag tag-orange">Orange tag</span>
                    <span className="tag tag-yellow">Yellow tag</span>
                    <span className="tag tag-lime">Lime tag</span>
                    <span className="tag tag-green">Green tag</span>
                    <span className="tag tag-teal">Teal tag</span>
                    <span className="tag tag-cyan">Cyan tag</span>
                    <span className="tag tag-gray">Gray tag</span>
                    <span className="tag tag-gray-dark">Dark gray tag</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Avatar tag</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user11}
                      />
                      Victoria
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user4}
                      />
                      Nathan
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user1}
                      />
                      Alice
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user18}
                      />
                      Rose
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user16}
                      />
                      Peter
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user4}
                      />
                      Wayne
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user7}
                      />
                      Michelle
                    </span>
                    <span className="tag">
                      <img
                        alt=""
                        className="tag-avatar avatar cover-image"
                        src={user17}
                      />
                      Debra
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">List of tags</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  You can create a list of tags with the
                  <code className="highlighter-rouge">.tags</code> container.
                </p>
                <div className="example">
                  <div className="tags">
                    <span className="tag">First tag</span>
                    <span className="tag">Second tag</span>
                    <span className="tag">Third tag</span>
                  </div>
                </div>
                <p className="mt-4">
                  If the list is very long, it will automatically wrap on
                  multiple lines, while keeping all tags evenly spaced.
                </p>
                <div className="example">
                  <div className="tags">
                    <span className="tag">One</span>
                    <span className="tag">Two</span>
                    <span className="tag">Three</span>
                    <span className="tag">Four</span>
                    <span className="tag">Five</span>
                    <span className="tag">Six</span>
                    <span className="tag">Seven</span>
                    <span className="tag">Eight</span>
                    <span className="tag">Nine</span>
                    <span className="tag">Ten</span>
                    <span className="tag">Eleven</span>
                    <span className="tag">Twelve</span>
                    <span className="tag">Thirteen</span>
                    <span className="tag">Fourteen</span>
                    <span className="tag">Fifteen</span>
                    <span className="tag">Sixteen</span>
                    <span className="tag">Seventeen</span>
                    <span className="tag">Eighteen</span>
                    <span className="tag">Nineteen</span>
                    <span className="tag">Twenty</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tag remove</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <span className="tag">
                      One
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Two
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Three
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Four
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tag addons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="tags">
                    <div className="tag">
                      npm
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </div>
                    <div className="tag tag-danger">
                      npm
                      <span className="tag-addon">
                        <i className="fe fe-activity"></i>
                      </span>
                    </div>
                    <div className="tag">
                      bundle
                      <span className="tag-addon tag-success">passing</span>
                    </div>
                    <span className="tag tag-dark">
                      CSS gzip size
                      <span className="tag-addon tag-warning">20.9 kB</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
