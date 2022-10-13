import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Blog</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <li className="breadcrumb-item active breadcrumds" aria-current="page">
              Blog
            </li>
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

      <Row className="row-cards ">
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7"
              src={require("../../../../assets/images/media/19.jpg")}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title </Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`} className="float-end">
                Read more <i className="fa fa-angle-double-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7"
              src={require("../../../../assets/images/media/12.jpg")}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`} className="float-end text-info">
                Read more <i className="fa fa-angle-double-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7"
              src={require("../../../../assets/images/media/17.jpg")}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`} className="float-end text-success">
                Read more <i className="fa fa-angle-double-right"></i>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7 "
              src={require("../../../../assets/images/media/20.jpg")}
              alt="Card cap"
            />

            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogPost`} className="btn btn-primary btn-md">
                Read more
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7 "
              src={require("../../../../assets/images/media/23.jpg")}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogPost`} className="btn btn-warning btn-md">
                Read more
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <img
              className="card-img-top br-tr-7 br-tl-7 "
              src={require("../../../../assets/images/media/22.jpg")}
              alt="Card cap"
            />
            <Card.Header>
              <Card.Title as="h5">Blog title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to={`${process.env.PUBLIC_URL}/pages/Blog/blogPost`} className="btn btn-info btn-md">
                Read more
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Link to="#">
              <img
                className="card-img-top br-tr-7 br-tl-7"
                src={require("../../../../assets/images/media/23.jpg")}
                alt="And this isn&#39;t my nose. This is a false one."
              />
            </Link>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas.</Link>
              </h4>
              <div className="text-muted">
                To take a trivial example, which of us ever undertakes laborious
                physical exerciser , except to obtain some advantage from it...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={require("../../../../assets/images/media/22.jpg")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Megan Peters
                  </Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-2">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Link to="#">
              <img
                className="card-img-top br-tr-7 br-tl-7"
                src={require("../../../../assets/images/media/14.jpg")}
                alt="Well, I didn&#39;t vote for you."
              />
            </Link>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas.</Link>
              </h4>
              <div className="text-muted">
                Who chooses to enjoy a pleasure that has no annoying
                consequences, or one who avoids a pain that produces.
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={require("../../../../assets/images/media/15.jpg")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Anna Ogden
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas</Link>
              </h4>
              <div className="text-muted">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={require("../../../../assets/images/media/14.jpg")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Carol Paige
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Link to="#">
              <img
                className="card-img-top br-br-0 br-bl-0"
                src={require("../../../../assets/images/media/15.jpg")}
                alt="How do you know she is a witch?"
              />
            </Link>
          </Card>
        </Col>
        <Col sm={6} xl={3}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <h4>
                <Link to="#">voluptatem quia voluptas..</Link>
              </h4>
              <div className="text-muted">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut ..
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar brround avatar-md me-3 cover-image"
                  src={require("../../../../assets/images/media/12.jpg")}
                  alt=""
                />
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Fiona Hodges
                  </Link>
                  <small className="d-block text-muted">5 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-2">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <Link to="#">
              <img
                className="card-img-top br-br-0 br-bl-0"
                src={require("../../../../assets/images/media/16.jpg")}
                alt="Shut up!"
              />
            </Link>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card-aside">
            <img
              to="#"
              className="card-aside-column br-bl-0 br-tl-0 cover-image"
              alt=""
              src={require("../../../../assets/images/media/19.jpg")}
            />
            <Card.Body className="flex-column">
              <h4>
                <Link to="#">Generator on the Internet..</Link>
              </h4>
              <div className="text-muted">
                Excepteur sint occaecat cupidatat non proident, accusantium sunt
                in culpa qui officia deserunt mollit anim id est laborum....
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar  brround avatar-md me-3 cover-image"
                  alt=""
                  src={require("../../../../assets/images/users/18.jpg")}
                />
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Anna Ogden
                  </Link>
                  <small className="d-block text-muted">1 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card-aside overflow-hidden">
            <Card.Body className="flex-column">
              <h4>
                <Link to="#">Nihil molestiae consequatur.</Link>
              </h4>
              <div className="text-muted">
                Many desktop publishing packages and web page editors now use
                default model text, and a search for will uncover...
              </div>
              <div className="d-flex align-items-center pt-5 mt-auto">
                <img
                  className="avatar  brround avatar-md me-3 cover-image"
                  alt=""
                  src={require("../../../../assets/images/media/12.jpg")}
                ></img>
                <div>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                    className="text-default"
                  >
                    Irene Scott
                  </Link>
                  <small className="d-block text-muted">2 days ago</small>
                </div>
                <div className="ms-auto text-muted">
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fe fe-heart me-1"></i>
                  </Link>
                  <Link to="#" className="icon d-none d-md-inline-block ms-3">
                    <i className="fa fa-thumbs-o-up"></i>
                  </Link>
                </div>
              </div>
            </Card.Body>
            <img
              to="#"
              className="card-aside-column br-br-0 br-tr-0 cover-image"
              alt=""
              src={require("../../../../assets/images/media/16.jpg")}
            ></img>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
