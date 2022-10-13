import React from "react";
import { Button, Card, Dropdown, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Buttons</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Buttons
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
        <Col lg={12} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Button</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Use any of the available button classNamees to quickly create
                  a styled button.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-default" variant="default">
                      Default
                    </Button>
                    <Button className="btn btn-primary" variant="primary">
                      Primary
                    </Button>
                    <Button className="btn btn-secondary" variant="secondary">
                      Secondary
                    </Button>
                    <Button className="btn btn-success" variant="success">
                      Success
                    </Button>
                    <Button className="btn btn-info" variant="info">
                      Info
                    </Button>
                    <Button className="btn btn-warning" variant="warning">
                      Warning
                    </Button>
                    <Button className="btn btn-danger" variant="danger">
                      Danger
                    </Button>
                    <Button className="btn btn-link" variant="link">
                      Link
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">light buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Make buttons the light to any
                  <code className="highlighter-rouge">.btn</code> element.
                  <code className="highlighter-rouge">&lt;a&gt;</code>s don’t
                  support the light attribute, so you must add the
                  <code className="highlighter-rouge">.light</code> className to
                  make it visually appear light.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button
                      className="btn btn-default-light"
                      variant="default-light"
                    >
                      Default
                    </Button>
                    <Button
                      className="btn btn-primary-light"
                      variant="primary-light"
                    >
                      Primary
                    </Button>
                    <Button
                      className="btn btn-secondary-light"
                      variant="secondary-light"
                    >
                      Secondary
                    </Button>
                    <Button
                      className="btn btn-success-light "
                      variant="success-light"
                    >
                      Success
                    </Button>
                    <Button className="btn btn-info-light" variant="info-light">
                      Info
                    </Button>
                    <Button
                      className="btn btn-warning-light "
                      variant="warning-light"
                    >
                      Warning
                    </Button>
                    <Button
                      className="btn btn-danger-light"
                      variant="danger-light"
                    >
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Disabled buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Make buttons the disabled to any
                  <code className="highlighter-rouge">.btn</code> element.
                  <code className="highlighter-rouge">&lt;a&gt;</code>s don’t
                  support the disabled attribute, so you must add the
                  <code className="highlighter-rouge">.disabled</code> className
                  to make it visually appear disabled.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-default" variant=" disabled">
                      Default
                    </Button>
                    <Button className="btn btn-primary" variant=" disabled">
                      Primary
                    </Button>
                    <Button className="btn btn-secondary" variant=" disabled">
                      Secondary
                    </Button>
                    <Button className="btn btn-success" variant=" disabled">
                      Success
                    </Button>
                    <Button className="btn btn-info" variant=" disabled">
                      Info
                    </Button>
                    <Button className="btn btn-warning" variant=" disabled">
                      Warning
                    </Button>
                    <Button className="btn btn-danger" variant=" disabled">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Color variations</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>The classNameic button, in different colors.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-blue" variant="">
                      Blue
                    </Button>
                    <Button className="btn btn-azure" variant="">
                      Azure
                    </Button>
                    <Button className="btn btn-indigo" variant="">
                      Indigo
                    </Button>
                    <Button className="btn btn-purple" variant="">
                      Purple
                    </Button>
                    <Button className="btn btn-pink" variant="">
                      Pink
                    </Button>
                    <Button className="btn btn-red" variant="">
                      Red
                    </Button>
                    <Button className="btn btn-orange" variant="">
                      Orange
                    </Button>
                    <Button className="btn btn-yellow" variant="">
                      Yellow
                    </Button>
                    <Button className="btn btn-lime" variant="">
                      Lime
                    </Button>
                    <Button className="btn btn-green" variant="">
                      Green
                    </Button>
                    <Button className="btn btn-teal" variant="">
                      Teal
                    </Button>
                    <Button className="btn btn-cyan" variant="">
                      Cyan
                    </Button>
                    <Button className="btn btn-gray" variant="">
                      Gray
                    </Button>
                    <Button className="btn btn-gray-dark" variant="">
                      Dark gray
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Border buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  The default modifier classNamees with the
                  <code className="highlighter-rouge">.btn-outline-*</code>
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-outline-default" variant="">
                      Default
                    </Button>
                    <Button className="btn btn-outline-primary" variant="">
                      Primary
                    </Button>
                    <Button className="btn btn-outline-secondary" variant="">
                      Secondary
                    </Button>
                    <Button className="btn btn-outline-success" variant="">
                      Success
                    </Button>
                    <Button className="btn btn-outline-info" variant="">
                      Info
                    </Button>
                    <Button className="btn btn-outline-warning" variant="">
                      Warning
                    </Button>
                    <Button className="btn btn-outline-danger" variant="">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Radius buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-radius</code> to
                  button to remove border-radius.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-radius" variant="default">
                      Default
                    </Button>
                    <Button className="btn btn-radius" variant="primary">
                      Primary
                    </Button>
                    <Button className="btn btn-radius" variant="secondary">
                      Secondary
                    </Button>
                    <Button className="btn btn-radius" variant="success">
                      Success
                    </Button>
                    <Button className="btn btn-radius" variant="info">
                      Info
                    </Button>
                    <Button className="btn btn-radius" variant="warning">
                      Warning
                    </Button>
                    <Button className="btn btn-radius" variant="danger">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Radius light buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-radius</code> to
                  button to remove border-radius.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-radius" variant="default-light">
                      Default
                    </Button>
                    <Button className="btn btn-radius" variant="primary-light">
                      Primary
                    </Button>
                    <Button
                      className="btn btn-radius"
                      variant="secondary-light"
                    >
                      Secondary
                    </Button>
                    <Button className="btn btn-radius" variant="success-light">
                      Success
                    </Button>
                    <Button className="btn btn-radius" variant="info-light">
                      Info
                    </Button>
                    <Button className="btn btn-radius" variant="warning-light">
                      Warning
                    </Button>
                    <Button className="btn btn-radius" variant="danger-light">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-pill</code>
                  className to any button more rounded.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-pill" variant="default">
                      Default
                    </Button>
                    <Button className="btn btn-pill" variant="primary">
                      Primary
                    </Button>
                    <Button className="btn btn-pill" variant="secondary">
                      Secondary
                    </Button>
                    <Button className="btn btn-pill" variant="success">
                      Success
                    </Button>
                    <Button className="btn btn-pill" variant="info">
                      Info
                    </Button>
                    <Button className="btn btn-pill" variant="warning">
                      Warning
                    </Button>
                    <Button className="btn btn-pill" variant="danger">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Rounded buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-pill</code>
                  className to any button more rounded.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button className="btn btn-pill" variant="default-light">
                      Default
                    </Button>
                    <Button className="btn btn-pill" variant="primary-light">
                      Primary
                    </Button>
                    <Button className="btn btn-pill" variant="secondary-light">
                      Secondary
                    </Button>
                    <Button className="btn btn-pill" variant="success-light">
                      Success
                    </Button>
                    <Button className="btn btn-pill" variant="info-light">
                      Info
                    </Button>
                    <Button className="btn btn-pill" variant="warning-light">
                      Warning
                    </Button>
                    <Button className="btn btn-pill" variant="danger-light">
                      Danger
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Button with icon</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Basic buttons are traditional buttons with borders color
                  opitons.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button
                      type="button"
                      className="btn btn-dark"
                      variant="dark"
                    >
                      <i className="fe fe-upload me-2"></i>Upload
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-warning"
                      variant="warning"
                    >
                      <i className="fe fe-heart me-2"></i>I like
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-success"
                      variant="success"
                    >
                      <i className="fe fe-check me-2"></i>I agree
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-primary"
                      variant="primary"
                    >
                      <i className="fe fe-plus me-2"></i>More
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-danger"
                      variant="danger"
                    >
                      <i className="fe fe-link me-2"></i>Link
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-info"
                      variant="info"
                    >
                      <i className="fe fe-message-circle me-2"></i>Comment
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Button with loading animation</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Basic buttons are traditional buttons with borders color
                  opitons.
                </p>
                <div className="example">
                  <div className="btn-list btn-animation">
                    <Button
                      type="button"
                      className="btn btn-warning btn-loaders  ms-2"
                      variant="warning"
                    >
                      <span className="loading">loading</span>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-success btn-loaders  ms-2"
                      variant="success"
                    >
                      <span className="loading">loading</span>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-primary btn-loaders  ms-2"
                      variant="primary"
                    >
                      <span className="loading">loading</span>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-danger btn-loaders  ms-2"
                      variant="danger"
                    >
                      <span className="loading">loading</span>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-info btn-loaders  ms-2"
                      variant="info"
                    >
                      <span className="loading">loading</span>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-dark btn-loaders  ms-2"
                      variant="dark"
                    >
                      <span className="loading">loading</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <div className="col-md-12 ">
          <Card>
            <Card.Header>
              <h3 className="card-title">Button size</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-lg</code> or
                  <code className="highlighter-rouge">.btn-sm</code> or
                  <code className="highlighter-rouge">.d-grid</code> for
                  additional sizes.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Row>
                      <div className="col-md-4 mb-2">
                        <Button
                          type="button"
                          className="btn btn-warning btn-sm mb-1"
                          variant="warning"
                        >
                          Small button
                        </Button>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Button
                          type="button"
                          className="btn btn-info mb-1"
                          variant="info"
                        >
                          Medium button
                        </Button>
                      </div>
                      <div className="col-md-4 mb-2">
                        <Button
                          type="button"
                          className="btn btn-success btn-lg mb-1"
                          variant="success"
                        >
                          Large button
                        </Button>
                      </div>
                    </Row>
                    <Button
                      type="button"
                      className="btn btn-primary d-grid"
                      variant="primary"
                    >
                      Block level button
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Social buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="btn-list">
                    <Button
                      type="button"
                      className="btn btn-facebook"
                      variant=""
                    >
                      <i className="fa fa-facebook me-2"></i>Facebook
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-twitter"
                      variant=""
                    >
                      <i className="fa fa-twitter me-2"></i>Twitter
                    </Button>
                    <Button type="button" className="btn btn-google" variant="">
                      <i className="fa fa-google me-2"></i>Google
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-youtube"
                      variant=""
                    >
                      <i className="fa fa-youtube me-2"></i>Youtube
                    </Button>
                    <Button type="button" className="btn btn-vimeo" variant="">
                      <i className="fa fa-vimeo me-2"></i>Vimeo
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-dribbble"
                      variant=""
                    >
                      <i className="fa fa-dribbble me-2"></i>Dribble
                    </Button>
                    <Button type="button" className="btn btn-github" variant="">
                      <i className="fa fa-github me-2"></i>Github
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-instagram"
                      variant=""
                    >
                      <i className="fa fa-instagram me-2"></i>Instagram
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-pinterest"
                      variant=""
                    >
                      <i className="fa fa-pinterest me-2"></i>Pinterest
                    </Button>
                    <Button type="button" className="btn btn-vk" variant="">
                      <i className="fa fa-vk me-2"></i>VKontakte
                    </Button>
                    <Button type="button" className="btn btn-rss" variant="">
                      <i className="fa fa-rss me-2"></i>RSS
                    </Button>
                    <Button type="button" className="btn btn-flickr" variant="">
                      <i className="fa fa-flickr me-2"></i>Flickr
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Social buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>You can use only icons.</p>
                <div className="example">
                  <div className="btn-list">
                    <Button
                      type="button"
                      className="btn btn-icon btn-facebook"
                      variant=""
                    >
                      <i className="fa fa-facebook"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-twitter"
                      variant=""
                    >
                      <i className="fa fa-twitter"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-google"
                      variant=""
                    >
                      <i className="fa fa-google"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-youtube"
                      variant=""
                    >
                      <i className="fa fa-youtube"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-vimeo"
                      variant=""
                    >
                      <i className="fa fa-vimeo"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-dribbble"
                      variant=""
                    >
                      <i className="fa fa-dribbble"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-github"
                      variant=""
                    >
                      <i className="fa fa-github"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-instagram"
                      variant=""
                    >
                      <i className="fa fa-instagram"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon btn-pinterest"
                      variant=""
                    >
                      <i className="fa fa-pinterest"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Icon buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Icon only button. Add
                  <code className="highlighter-rouge">.btn-icon</code> className
                  to remove unnecessary button.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button
                      type="button"
                      className="btn btn-icon  btn-primary"
                      variant=""
                    >
                      <i className="fe fe-activity"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-github"
                      variant=""
                    >
                      <i className="fe fe-github"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-success"
                      variant=""
                    >
                      <i className="fe fe-bell"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-warning"
                      variant=""
                    >
                      <i className="fe fe-star"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-danger"
                      variant=""
                    >
                      <i className="fe fe-trash"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-purple"
                      variant=""
                    >
                      <i className="fe fe-mail"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-icon  btn-secondary"
                      variant=""
                    >
                      <i className="fe fe-git-merge"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Loading button</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Add <code className="highlighter-rouge">.btn-loading</code> to
                  use a loading state on a button. The width of the button
                  depends on the length of the text inside Since the loading
                  spinner is implemented using the element.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button
                      type="button"
                      className="btn btn-success btn-loading btn-icon"
                      variant=""
                    >
                      <i className="fe fe-check"></i>
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-warning btn-loading btn-sm"
                      variant=""
                    >
                      Button text
                    </Button>
                    <br />
                    <Button
                      type="button"
                      className="btn btn-danger btn-loading btn-lg"
                      variant=""
                    >
                      Button text
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-info btn-loading d-grid"
                      variant=""
                    >
                      Button text
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Button dropdown</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Wrap the dropdowns toggle using different colors and icons
                  implemented in different dropdowns styles (your button or
                  link) and the dropdown menu within
                  <code className="highlighter-rouge">.dropdown</code>, or
                  another element that declares
                  <code className="highlighter-rouge">position: relative;</code>
                  . Dropdowns can be triggered from
                  <code className="highlighter-rouge">&lt;a&gt;</code> or
                  <code className="highlighter-rouge">&lt;button&gt;</code>
                  elements to better fit your potential needs.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Dropdown className="dropdown btn-group">
                      <Dropdown.Toggle
                        variant=""
                        type="button"
                        className="btn btn-secondary dropdown-toggle"
                      >
                        <i className="fe fe-calendar"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropdown btn-group">
                      <Dropdown.Toggle
                        variant=""
                        type="button"
                        className="btn btn-info dropdown-toggle"
                      >
                        <i className="fe fe-calendar me-2"></i>Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="dropdown btn-group">
                      <Dropdown.Toggle
                        variant=""
                        type="button"
                        className="btn btn-danger dropdown-toggle"
                      >
                        Show calendar
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item">
                          Dropdown link
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
              <h3 className="card-title">List of buttons</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  You can now create a list of buttons with the
                  <code className="highlighter-rouge">.btn-list</code>
                  container.
                </p>
                <div className="example">
                  <div className="btn-list">
                    <Button variant="" className="btn btn-primary">
                      Save changes
                    </Button>
                    <Button variant="" className="btn btn-secondary">
                      Save and continue
                    </Button>
                    <Button variant="" className="btn btn-danger">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-wrap mt-6">
                <p>
                  Use the
                  <code className="highlighter-rouge">.text-center</code>
                  modifiers to alter the alignment.
                </p>
                <div className="example">
                  <div className="btn-list text-center">
                    <Button variant="" className="btn btn-primary">
                      Save changes
                    </Button>
                    <Button variant="" className="btn btn-secondary">
                      Save and continue
                    </Button>
                    <Button variant="" className="btn btn-danger">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-wrap mt-6">
                <p>
                  Use the <code className="highlighter-rouge">.text-end</code>
                  modifiers to alter the alignment.
                </p>
                <div className="example">
                  <div className="btn-list text-end">
                    <Button variant="" className="btn btn-primary">
                      Save changes
                    </Button>
                    <Button variant="" className="btn btn-secondary">
                      Save and continue
                    </Button>
                    <Button variant="" className="btn btn-danger">
                      Cancel
                    </Button>
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
