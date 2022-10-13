import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb,Row,Col, Card,Button } from "react-bootstrap";
import * as carddata from "../../../data/Component/carddata/carddata";

export default function CardDesign() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Cards</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Cards
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
        <Col xl={4} md={12}>
          <Card>
            <Card.Body>
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="card-link">
                Card link
              </Link>
              <Link to="#" className="card-link">
                Another link
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Card-Header</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <Card>
            <Card.Body>
              <p className="">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </Card.Body>
            <Card.Footer>
              <Card.Title>Card-footer</Card.Title>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-primary">
            <Card.Body>
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-secondary">
            <Card.Body>
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-success">
            <Card.Body>
              <h4 className="card-title">Success card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4} >
          <Card className=" text-white bg-danger">
            <Card.Body>
              <h4 className="card-title">Danger card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-info">
            <Card.Body>
              <h4 className="card-title">Info card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" text-white bg-warning">
            <Card.Body>
              <h4 className="card-title">Warning card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <carddata.Basiccard />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Basiccardheadercolor />
        </Col>
        <Col md={12} xl={4}>
          <carddata.BasiccardFootercolor />
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Panel with custom buttons</h3>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">
                  Action 1
                </Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">
                  Action 2
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with search form</h3>
              <div className="card-options">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Search something..."
                      name="s"
                    />
                    <span className="input-group-btn ms-0">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search text-white"></span>
                      </Button>
                    </span>
                  </div>
                </form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <carddata.Cardalertsuccessful />
        </Col>
        <Col md={12} xl={6}>
          <carddata.Cardalertdanger />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Fullscreenbutton />
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with switch</h3>
              <div className="card-options">
                <label className="custom-switch m-0">
                  <input
                    type="checkbox"
                    value="1"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </div>
            </Card.Header>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <carddata.Cardcollapsed />
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={4}>
          <carddata.Employeecard1 />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Employeecard2 />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Employeecard3 />
        </Col>
      </Row>
      <Row >
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-start">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-center">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card>
            <Card.Body className=" text-end">
              <blockquote className="quote">
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <small className="text-muted">
                  so awesome this title
                  <cite title="Source Title">-magna aliqua</cite>
                </small>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} md={12}>
          <carddata.CardWithList />
        </Col>
        <Col xl={4} md={12}>
          <carddata.Samplecard />
        </Col>
        <Col xl={4} md={12}>
          <div className="card d-flex m-b-20">
            <Card.Header>
              <h3 className="card-title">Card with Toolbar</h3>
              <div className="card-options">
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-refresh"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-bookmark-outline"></i>
                </Link>
                <Link className="text-gray" to="#">
                  <i className="mdi mdi-dots-vertical"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Put toy mouse in food bowl run out of litter box at full speed
                drool but pee in Put toy mouse Put toy mouse the shoe purr when
                being pet but chew foot.
              </p>
              <p className="mb-0">
                Duis aute irure dolor in reprehenderit in voluptate velit
                Scratch the postman wake up lick paw wake up owner meow meow
                lick plastic bags Scratch the postman wake up lick paw wake
                having their mate disturbing sleeping humans.
              </p>
            </Card.Body>
          </div>
        </Col>
      </Row>
      <Row >
        <Col md={12} xl={4}>
          <Card className=" card-blog-overlay1">
            <Card.Body className="card-body  text-white">
              <h3 className="card-title text-white">card-with image</h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer className="card-footer  text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <Card className=" card-blog-overlay2">
            <Card.Body className="card-body  text-white">
              <h3 className="card-title text-white">card-with image</h3>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer className="card-footer text-white z-index2 border-transparent">
              This is Basic card footer
            </Card.Footer>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <carddata.Backgroundimg />
        </Col>
        <Col xl={6} mld={6} >
          <Card className=" card-aside">
            <Card.Body className="card-body d-flex flex-column">
              <h4>
                <Link to="#">Play Music</Link>
              </h4>
              <div className="text-muted">
                Some quick example text to build on the card title and make up
                the bulk of the card's
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto text-center ">
                <div className="text-primary ">
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-backward"></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-play "></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-forward"></i>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={6}>
          <Card className=" card-aside bg-primary">
            <Card.Body className="card-body d-flex flex-column">
              <h4>
                <Link to="#" className="text-white">
                  Play Music
                </Link>
              </h4>
              <div className="text-muted text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto text-center ">
                <div className="text-muted">
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-backward text-white"></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-play text-white "></i>
                  </span>
                  <span className="icon d-md-inline-block ms-3">
                    <i className="fa fa-step-forward text-white"></i>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <carddata.Primarycardtitle />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Secondarycardtitle />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Successcardtitle />
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Panel with custom buttons</h3>
              <div className="card-options">
                <Link to="#" className="btn btn-primary btn-sm">
                  Action 1
                </Link>
                <Link to="#" className="btn btn-secondary btn-sm ms-2">
                  Action 2
                </Link>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with search form</h3>
              <div className="card-options">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Search something..."
                      name="s"
                    />
                    <span className="input-group-btn">
                      <Button className="btn btn-sm btn-primary" type="submit">
                        <span className="fe fe-search"></span>
                      </Button>
                    </span>
                  </div>
                </form>
              </div>
            </Card.Header>
            <Card.Body>
              No one rejects, dislikes, or avoids pleasure itself, because it is
              pleasure, but because those who do not know how to pursue pleasure
              rationally encounter consequences that are extremely painful
              actual teachings of the great explorer
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={4}>
          <carddata.Cardwithloader1 />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Cardwithloader2 />
        </Col>
        <Col md={12} xl={4}>
          <carddata.Cardwithloader3 />
        </Col>
      </Row>

      <Row>
        <Col md={12} xl={6}>
          <carddata.Fullscreenbutton />
        </Col>
        <Col md={12} xl={6} >
          <Card>
            <Card.Header>
              <h3 className="card-title">Card with switch</h3>
              <div className="card-options">
                <label className="custom-switch m-0">
                  <input
                    type="checkbox"
                    value="1"
                    className="custom-switch-input"
                    defaultChecked
                  />
                  <span className="custom-switch-indicator"></span>
                </label>
              </div>
            </Card.Header>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} md={12}>
          <carddata.Cardcollapsed />
        </Col>
        <Col md={12} xl={6}>
          <carddata.Builtcard />
        </Col>
        <Col md={12} xl={6}>
          <carddata.Cardblue />
        </Col>
        <Col xl={6} md={12}>
          <carddata.Cardstatusonleftside />
        </Col>
      </Row>
    </div>
  );
}
