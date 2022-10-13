import React from "react";
import { Carousel, Breadcrumb, Row,Card,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Carousels() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Carousel</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Carousel
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
        <Col md={12} lg={4}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-default" className="carousel slide Carousels">
                <Carousel
                  className="carousel-inner"
                  nextIcon={false}
                  prevIcon={false}
                  indicators={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/19.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/20.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/21.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/22.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/23.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with indicators</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div
                id="carousel-indicators"
                className="carousel slide Carousels"
              >
                <Carousel
                  className="carousel-inner "
                  nextIcon={false}
                  prevIcon={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/24.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/25.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/1.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/2.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/3.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with controls</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-controls" className="carousel slide">
                <Carousel className="carousel-inner" indicators={false}>
                  <Carousel.Item className="carousel-item " active="true">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/4.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/5.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/6.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/7.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/8.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with captions</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-captions" className="carousel slide">
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/9.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>Secure other greater pleasures</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/10.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>Secure other greater pleasures</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/11.jpg")}
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/12.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>Secure other greater pleasures</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/13.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>Secure other greater pleasures</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with top controls</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <Carousel
                id="carousel-indicators1"
                className="carousel slide carousel-inner1 Carousels"
                nextIcon={false}
                prevIcon={false}
              >
                <Carousel.Item className="carousel-item ">
                  <img
                    className="d-block w-100"
                    alt=""
                    src={require("../../../assets/images/media/14.jpg")}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt=""
                    src={require("../../../assets/images/media/15.jpg")}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt=""
                    src={require("../../../assets/images/media/16.jpg")}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt=""
                    src={require("../../../assets/images/media/17.jpg")}
                  />
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                  <img
                    className="d-block w-100"
                    alt=""
                    src={require("../../../assets/images/media/18.jpg")}
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with top-right controls</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div
                id="carousel-indicators2"
                className="carousel slide Carousels"
              >
                <Carousel
                  className="carousel-inner"
                  nextIcon={false}
                  prevIcon={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/19.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/20.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/21.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/22.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/23.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Carousel with top-left controls</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div
                id="carousel-indicators3"
                className="carousel slide Carousels"
              >
                <Carousel
                  className="carousel-inner"
                  nextIcon={false}
                  prevIcon={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/24.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/25.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/1.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/2.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/3.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">
                  Carousel with bottom-right controls
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div
                id="carousel-indicators4"
                className="carousel slide Carousels"
              >
                <Carousel
                  className="carousel-inner"
                  nextIcon={false}
                  prevIcon={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/4.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/5.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/6.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/7.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/8.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4} className="col-md-12 col-lg-4">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">
                  Carousel with bottom-left controls
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-indicators5" className="carousel slide">
                <Carousel
                  className="carousel-inner"
                  nextIcon={false}
                  prevIcon={false}
                >
                  <Carousel.Item className="carousel-item ">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/4.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/10.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/11.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/12.jpg")}
                    />
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/13.jpg")}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">
                  Carousel with Background color captions
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-captions2" className="carousel slide">
                <Carousel className="carousel-inner" indicators={false}>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/red.jpg")}
                    />
                    <Carousel.Caption className="carousel-caption">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/blue.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/green.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-12 col-lg-6">
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">
                  Carousel with GradientBackground caption
                </h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className=" h-100">
              <div id="carousel-captions1" className="carousel slide">
                <Carousel className="carousel-inner " indicators={false}>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/gradient1.jpg")}
                    />
                    <Carousel.Caption className="carousel-caption">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/gradient2.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-item">
                    <img
                      className="d-block w-100"
                      alt=""
                      src={require("../../../assets/images/media/gradient3.jpg")}
                    />
                    <div className="carousel-item-background d-none d-md-block"></div>
                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                      <h3>Slide label</h3>
                      <p>
                        The wise man therefore always holds in these matters to
                        this principle of selection he rejects pleasures.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </div>
  );
}
