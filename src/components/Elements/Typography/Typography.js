import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
export default function Typography() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Typography</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Typography
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
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Heading Text</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Examples using standard <code>h1</code> to <code>h6</code>
                  html tags
                </p>
                <div className="example">
                  <h1>h1. Heading</h1>
                  <h2>h2. Heading</h2>
                  <h3>h3. Heading</h3>
                  <h4>h4. Heading</h4>
                  <h5>h5. Heading</h5>
                  <h6>h6. Heading</h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Heading with color Text</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Examples using standard <code>h1</code> to <code>h6</code>
                  html tags
                </p>
                <div className="example">
                  <h1 className="text-primary">h1. Heading</h1>
                  <h2 className="text-secondary">h2. Heading</h2>
                  <h3 className="text-success">h3. Heading</h3>
                  <h4 className="text-danger">h4. Heading</h4>
                  <h5 className="text-info">h5. Heading</h5>
                  <h6 className="text-warning">h6. Heading</h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Heading-Inverse</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Examples using <code>heading-inverse</code> css
                </p>
                <div className="example">
                  <h1 className="heading-inverse">h1. Heading</h1>
                  <h2 className="heading-inverse">h2. Heading</h2>
                  <h3 className="heading-inverse">h3. Heading</h3>
                  <h4 className="heading-inverse">h4. Heading</h4>
                  <h5 className="heading-inverse">h5. Heading</h5>
                  <h6 className="heading-inverse">h6. Heading</h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Heading primary to danger</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Examples using <code>heading-primary</code> to
                  <code>heading-danger</code> css
                </p>
                <div className="example">
                  <h1 className="heading-primary">h1. Heading</h1>
                  <h2 className="heading-secondary">h2. Heading</h2>
                  <h3 className="heading-success">h3. Heading</h3>
                  <h4 className="heading-info">h4. Heading</h4>
                  <h5 className="heading-warning">h5. Heading</h5>
                  <h6 className="heading-danger">h6. Heading</h6>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="row ">
        <div className="col-lg-12 col-md-12">
          <Card>
            <Card.Header>
              <h3 className="card-title">Line Height</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Utilities for controlling the leading (line height) of an
                  element.
                </p>
                <div className="example">
                  <p className="leading-none">
                    Lorem ipsum dolor sit amet.
                    <br />
                    Dolor sit amet.
                  </p>
                  <p className="leading-tight">
                    Lorem ipsum dolor sit amet.
                    <br />
                    Dolor sit amet.
                  </p>
                  <p className="leading-normal">
                    Lorem ipsum dolor sit amet.
                    <br />
                    Dolor sit amet.
                  </p>
                  <p className="leading-loose m-0">
                    Lorem ipsum dolor sit amet.
                    <br />
                    Dolor sit amet.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-12 col-md-12">
          <Card>
            <Card.Header>
              <h3 className="card-title">Text alignment</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Easily realign text to components with text alignment
                  classNamees.
                </p>
                <div className="example">
                  <p className="text-start">
                    Left aligned text on all viewport sizes.
                  </p>
                  <p className="text-center">
                    Center aligned text on all viewport sizes.
                  </p>
                  <p className="text-end">
                    Right aligned text on all viewport sizes.
                  </p>
                  <p className="text-justify m-0">
                    Both aligned text on all viewport sizes. Ambitioni dedisse
                    scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                    fermentum. Donec sed odio operae, eu vulputate felis
                    rhoncus.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Row>
        <div className="col-lg- col-md-12">
          <Card>
            <Card.Header>
              <h3 className="card-title">Paragraph Text</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                  <p className="lead">
                    Most designers set their type arbitrarily, either by pulling
                    values out of the sky or by adhering to a baseline grid. The
                    former case isn’t worth discussing here, but the latter
                    requires a closer look.
                  </p>
                  <p>
                    You can use the mark tag to <mark>highlight</mark> text.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Letter spacing</h3>
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <p>
                  Utilities for controlling the tracking (letter spacing) of an
                  element.
                </p>
                <div className="example">
                  <p className="tracking-tight">
                    Lorem ipsum dolor sit amet. Tight letter spacing.
                  </p>
                  <p className="tracking-normal">
                    Lorem ipsum dolor sit amet. Normal letter spacing.
                  </p>
                  <p className="tracking-wide m-0">
                    Lorem ipsum dolor sit amet. Wide letter spacing.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
