import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Col,
  Dropdown,
  Row,
  Card,
  Nav,
  FormGroup,
  ListGroup,
} from "react-bootstrap";
export default function BlogDetails() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div>
            <h1 className="page-title">Blog Details</h1>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item" href="#">
                Pages
              </Breadcrumb.Item>
              <li className="breadcrumb-item active breadcrumds" aria-current="page">
                Blog Details
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
        {/* PAGE-HEADER END */}
        {/* ROW-1 OPEN */}
        <Row>
          <Col xl={8}>
            <Card>
              <img
                className="card-img-top br-7 br-bl-0 br-br-0"
                src={require("../../../../assets/images/media/blog11.jpg")}
                alt="Card cap"
              />
              <Card.Body>
                <div className="d-md-flex">
                  <Link to="#" className="d-flex me-4 mb-2">
                    <i className="fe fe-calendar fs-16 me-1 p-3 bg-secondary-transparent text-secondary bradius" />
                    <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">
                      Sep-25-2021
                    </div>
                  </Link>
                  <Link
                    to={`${process.env.PUBLIC_URL}/pages/profile`}
                    className="d-flex mb-2"
                  >
                    <i className="fe fe-user fs-16 me-1 p-3 bg-primary-transparent text-primary bradius" />
                    <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">
                      Harry Fisher
                    </div>
                  </Link>
                  <div className="ms-auto">
                    <Link to="#" className="d-flex mb-2">
                      <i className="fe fe-message-square fs-16 me-1 p-3 bg-success-transparent text-success bradius" />
                      <div className="mt-0 mt-3 ms-1 text-muted font-weight-semibold">
                        13 Comments
                      </div>
                    </Link>
                  </div>
                </div>
              </Card.Body>
              <Card.Body>
                <h3>
                  <Link to="#"> Voluptatem quia voluptas</Link>
                </h3>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, quis Neque porro quisquam est,
                  nostrud exercitation ullamco laboris commodo consequat.
                  There’s an old maxim that states, “No fun for the writer, no
                  fun for the reader.”No matter what industry you’re working in,
                  as a blogger, you should live and die by this statement.
                </p>
                <p>
                  I must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Comments</Card.Title>
              </Card.Header>
              <Card.Body className="pb-0">
                <div className="media mb-5 overflow-visible d-block d-sm-flex">
                  <div className="me-3 mb-2">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={require("../../../../assets/images/users/5.jpg")}
                      />
                    </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-5">
                      <nav className="nav float-end">
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            className="nav-link text-muted fs-16 p-0 ps-4"
                            to="#"
                            variant=""
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-end"
                            style={{}}
                          >
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-edit me-1" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-corner-up-left me-1" /> Reply
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-flag me-1" /> Report Abuse
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-trash-2 me-1" /> Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </nav>
                      <h5 className="mt-0">Florinda Carasco</h5>
                      <span>
                        <i className="fe fe-thumb-up text-danger" />
                      </span>
                      <p className="font-13 text-muted">
                        Lorem ipsum dolor sit amet, quis Neque porro quisquam
                        est, nostrud exercitation ullamco laboris commodo
                        consequat. There’s an old maxim that states, “No fun for
                        the writer, no fun for the reader.”No matter what
                        industry you’re working in, as a blogger, you should
                        live and die by this statement.
                      </p>
                      <Link className="like" to="#">
                        <span className="badge btn-danger py-2 px-3 me-1">
                          <i className="fe fe-heart me-1" />
                          &nbsp; Like
                        </span>
                      </Link>
                      <span className="reply me-1" id={1}>
                        <Link to="#">
                          <span className="badge btn-primary py-2 px-3">
                            <i className="fe fe-corner-up-left me-1" />
                            &nbsp; Reply
                          </span>
                        </Link>
                      </span>
                    </div>
                    <div className="media mb-5 overflow-visible">
                      <div className="me-3">
                        <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                          <img
                            className="media-object rounded-circle thumb-sm"
                            alt="64x64"
                            src={require("../../../../assets/images/users/2.jpg")}
                          />
                        </Link>
                      </div>
                      <div className="media-body border p-4 overflow-visible br-5">
                        <Nav className="float-end">
                          <Dropdown className="dropdown">
                            <Dropdown.Toggle
                              className="nav-link text-muted fs-16 p-0 ps-4"
                              to="#"
                              variant=""
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                              className="dropdown-menu dropdown-menu-end"
                              style={{}}
                            >
                              <Dropdown.Item className="dropdown-item" to="#">
                                <i className="fe fe-edit me-1" /> Edit
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="#">
                                <i className="fe fe-corner-up-left me-1" />
                                Reply
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="#">
                                <i className="fe fe-flag me-1" /> Report Abuse
                              </Dropdown.Item>
                              <Dropdown.Item className="dropdown-item" to="#">
                                <i className="fe fe-trash-2 me-1" /> Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </Nav>
                        <h5 className="mt-0">Mozelle Belt</h5>
                        <span>
                          <i className="fe fe-thumb-up text-danger" />
                        </span>
                        <p className="font-13 text-muted">
                          Nostrud exercitation ullamco laboris commodo
                          consequat. There’s an old maxim that states, “No fun
                          for the writer, no fun for the reader.”No matter what
                          industry you’re working in, as a blogger, you should
                          live and die by this statement.
                        </p>
                        <Link className="like" to="#">
                          <span className="badge btn-danger py-2 px-3 me-1">
                            <i className="fe fe-heart me-2" />
                            &nbsp; Like
                          </span>
                        </Link>
                        <span className="reply" id={2}>
                          <Link to="#">
                            <span className="badge btn-primary py-2 px-3">
                              <i className="fe fe-corner-up-left me-2" />
                              &nbsp; Reply
                            </span>
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media mb-5 overflow-visible">
                  <div className="me-3">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={require("../../../../assets/images/users/15.jpg")}
                      />
                    </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-5">
                      <Nav className="float-end">
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            className="nav-link text-muted fs-16 p-0 ps-4"
                            to="#"
                            variant=""
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-end"
                            style={{}}
                          >
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-edit me-1" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-corner-up-left me-1" /> Reply
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-flag me-1" /> Report Abuse
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-trash-2 me-1" /> Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Nav>
                      <h5 className="mt-0">Alina Bernier</h5>
                      <p className="font-13 text-muted">
                        Very nice ! On the other hand, we denounce with
                        righteous indignation and dislike men who are so
                        beguiled and demoralized by the
                      </p>
                      <Link className="like" to="#">
                        <span className="badge btn-danger py-2 px-3 me-1">
                          <i className="fe fe-heart me-1" />
                          &nbsp; Like
                        </span>
                      </Link>
                      <span className="reply" id={3}>
                        <Link to="#">
                          <span className="badge btn-primary py-2 px-3">
                            <i className="fe fe-corner-up-left me-1" />
                            &nbsp; Reply
                          </span>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="media mb-5 overflow-visible d-block d-sm-flex">
                  <div className="me-3 mb-1">
                    <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                      <img
                        className="media-object rounded-circle thumb-sm"
                        alt="64x64"
                        src={require("../../../../assets/images/users/5.jpg")}
                      />
                    </Link>
                  </div>
                  <div className="media-body overflow-visible">
                    <div className="border mb-5 p-4 br-5">
                      <Nav className="float-end">
                        <Dropdown className="dropdown">
                          <Dropdown.Toggle
                            className="nav-link text-muted fs-16 p-0 ps-4"
                            to="#"
                            variant=""
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu
                            className="dropdown-menu dropdown-menu-end"
                            style={{}}
                          >
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-edit me-1" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-corner-up-left me-1" /> Reply
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-flag me-1" /> Report Abuse
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" to="#">
                              <i className="fe fe-trash-2 me-1" /> Delete
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Nav>
                      <h5 className="mt-0">Florinda Carasco</h5>
                      <span>
                        <i className="fe fe-thumb-up text-danger" />
                      </span>
                      <p className="font-13 text-muted">
                        Lorem ipsum dolor sit amet, quis Neque porro quisquam
                        est, nostrud exercitation ullamco laboris commodo
                        consequat. There’s an old maxim that states, “No fun for
                        the writer, no fun for the reader.”No matter what
                        industry you’re working in, as a blogger, you should
                        live and die by this statement.
                      </p>
                      <Link className="like" to="#">
                        <span className="badge btn-danger py-2 px-3 me-1">
                          <i className="fe fe-heart me-1" />
                          &nbsp; Like
                        </span>
                      </Link>
                      <span className="reply" id={4}>
                        <Link to="#">
                          <span className="badge btn-primary py-2 px-3">
                            <i className="fe fe-corner-up-left me-1" />
                            &nbsp; Reply
                          </span>
                        </Link>
                      </span>
                    </div>
                    <div className="media mb-5 overflow-visible d-block d-sm-flex">
                      <div className="me-3 mb-1">
                        <Link to={`${process.env.PUBLIC_URL}/pages/profile`}>
                          <img
                            className="media-object rounded-circle thumb-sm"
                            alt="64x64"
                            src={require("../../../../assets/images/users/2.jpg")}
                          />
                        </Link>
                      </div>
                      <div className="media-body overflow-visible">
                        <div className="border p-4 mb-5 br-5">
                          <Nav className="float-end">
                            <Dropdown className="dropdown">
                              <Dropdown.Toggle
                                className="nav-link text-muted fs-16 p-0 ps-4"
                                variant=""
                                to="#"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="fe fe-more-vertical" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                className="dropdown-menu dropdown-menu-end"
                                style={{}}
                              >
                                <Dropdown.Item className="dropdown-item" to="#">
                                  <i className="fe fe-edit me-1" /> Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  <i className="fe fe-corner-up-left me-1" />
                                  Reply
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  <i className="fe fe-flag me-1" /> Report Abuse
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  <i className="fe fe-trash-2 me-1" /> Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Nav>
                          <h5 className="mt-0">Mozelle Belt</h5>
                          <span>
                            <i className="fe fe-thumb-up text-danger" />
                          </span>
                          <p className="font-13 text-muted">
                            Nostrud exercitation ullamco laboris commodo
                            consequat. There’s an old maxim that states, “No fun
                            for the writer, no fun for the reader.”No matter
                            what industry you’re working in, as a blogger, you
                            should live and die by this statement.
                          </p>
                          <Link className="like" to="#">
                            <span className="badge btn-danger py-2 px-3 me-1">
                              <i className="fe fe-heart me-1" />
                              &nbsp; Like
                            </span>
                          </Link>
                          <span className="reply" id={5}>
                            <Link to="#">
                              <span className="badge btn-primary py-2 px-3">
                                <i className="fe fe-corner-up-left me-1" />
                                &nbsp; Reply
                              </span>
                            </Link>
                          </span>
                        </div>
                        <div className="media overflow-visible">
                          <div className="me-3">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/profile`}
                            >
                              <img
                                className="media-object rounded-circle thumb-sm"
                                alt="64x64"
                                src={require("../../../../assets/images/users/9.jpg")}
                              />
                            </Link>
                          </div>
                          <div className="media-body border p-4 overflow-visible br-5">
                            <Nav className="float-end">
                              <Dropdown className="dropdown">
                                <Dropdown.Toggle
                                  className="nav-link text-muted fs-16 p-0 ps-4"
                                  variant=""
                                  to="#"
                                  role="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="fe fe-more-vertical" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                  className="dropdown-menu dropdown-menu-end"
                                  style={{}}
                                >
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    <i className="fe fe-edit me-1" /> Edit
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    <i className="fe fe-corner-up-left me-1" />
                                    Reply
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    <i className="fe fe-flag me-1" /> Report
                                    Abuse
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    <i className="fe fe-trash-2 me-1" /> Delete
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </Nav>
                            <h5 className="mt-0">Alina Bernier</h5>
                            <span>
                              <i className="fe fe-thumb-up text-danger" />
                            </span>
                            <p className="font-13 text-muted">
                              Nostrud exercitation ullamco laboris commodo
                              consequat. There’s an old maxim that states, “No
                              fun for the writer, no fun for the reader.”No
                              matter what industry you’re working in, as a
                              blogger, you should live and die by this
                              statement.
                            </p>
                            <Link className="like" to="#">
                              <span className="badge btn-danger py-2 px-3 me-1">
                                <i className="fe fe-heart me-1" />
                                &nbsp; Like
                              </span>
                            </Link>
                            <span className="reply" id={6}>
                              <Link to="#">
                                <span className="badge btn-primary py-2 px-3">
                                  <i className="fe fe-corner-up-left me-1" />
                                  &nbsp; Reply
                                </span>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Add a Comments</Card.Title>
              </Card.Header>
              <Card.Body>
                <form className="form-horizontal  m-t-20" action="index.html">
                  <FormGroup>
                    <Col xs={12}>
                      <input
                        className="form-control mb-3"
                        type="text"
                        required
                        placeholder="Username*"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col xs={12}>
                      <input
                        className="form-control mb-3"
                        type="email"
                        required
                        placeholder="Email*"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col xs={12}>
                      <textarea
                        className="form-control mb-3"
                        rows={5}
                        defaultValue={"Your Comment*"}
                      />
                    </Col>
                  </FormGroup>
                  <div className="">
                    <Link
                      to="#"
                      className="btn btn-primary btn-rounded  waves-effect waves-light"
                    >
                      Submit
                    </Link>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <Card.Body>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-end-0"
                    placeholder="Search ..."
                  />
                  <button className="btn input-group-text bg-transparent border-start-0 text-muted">
                    <i className="fe fe-search" aria-hidden="true" />
                  </button>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Categories</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item className="list-group-item border list-icon">
                    <Link to="#" className="text-dark mx-3">
                      Business
                    </Link>
                    <span className="product-label">11</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item border list-icon">
                    <Link to="#" className="text-dark mx-3">
                      Gadgets
                    </Link>
                    <span className="product-label">46</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item border list-icon">
                    <Link to="#" className="text-dark mx-3">
                      Fashion
                    </Link>
                    <span className="product-label">25</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item border list-icon">
                    <Link to="#" className="text-dark mx-3">
                      Political
                    </Link>
                    <span className="product-label">73</span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Professional Blog Writers</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="d-flex overflow-visible">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={require("../../../../assets/images/users/1.jpg")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                        className="fw-semibold text-dark"
                      >
                        Simon Sais
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={require("../../../../assets/images/users/3.jpg")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                        className="fw-semibold text-dark"
                      >
                        Cherry Blossom
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={require("../../../../assets/images/users/5.jpg")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                        className="fw-semibold text-dark"
                      >
                        Ivan Notheridiya
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5">
                    <img
                      className="avatar bradius avatar-xl me-3"
                      src={require("../../../../assets/images/users/15.jpg")}
                      alt="avatar-img"
                    />
                    <div className="media-body valign-middle">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/profile`}
                        className="fw-semibold text-dark"
                      >
                        Manny Jah
                      </Link>
                      <p className="text-muted mb-0">
                        There are many variations of passages of Lorem Ipsum
                        available ...
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Recent Posts</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="d-flex overflow-visible blogimg">
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                      className="card-aside-column br-5 cover-image me-3"
                    >
                      <img
                        className=" br-5 mb-3 "
                        src={require("../../../../assets/images/media/19.jpg")}
                        style={{
                          background:
                            'url("../assets/images/media/19.jpg") center center',
                        }}
                        alt=""
                      />
                    </Link>
                    <div className="ps-1 flex-column">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                        >
                          Generator on the Internet..
                        </Link>
                      </h4>
                      <div className="text-muted">
                        <p>
                          Excepteur sint occaecat cupidatat non proident,
                          accusantium sunt in culpa qui officia deserunt mollit
                          anim id est laborum....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                      className="card-aside-column br-5 cover-image me-3"
                    >
                      <img
                        className=" br-5 mb-3"
                        src={require("../../../../assets/images/media/22.jpg")}
                        style={{
                          background:
                            'url("../assets/images/media/19.jpg") center center',
                        }}
                        alt=""
                      />
                    </Link>
                    <div className="ps-1 flex-column">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                        >
                          Voluptatem quia voluptas...
                        </Link>
                      </h4>
                      <div className="text-muted">
                        <p className="font-13 text-muted">
                          Excepteur sint occaecat cupidatat non proident,
                          accusantium sunt in culpa qui officia deserunt mollit
                          anim id est laborum....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                      className="card-aside-column br-5 cover-image me-3"
                    >
                      <img
                        className=" br-5 mb-3"
                        src={require("../../../../assets/images/media/12.jpg")}
                        style={{
                          background:
                            'url("../assets/images/media/19.jpg") center center',
                        }}
                        alt=""
                      />
                    </Link>
                    <div className="ps-1 flex-column">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                        >
                          Generator on the Internet..
                        </Link>
                      </h4>
                      <div className="text-muted">
                        <p>
                          Excepteur sint occaecat cupidatat non proident,
                          accusantium sunt in culpa qui officia deserunt mollit
                          anim id est laborum....
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex overflow-visible mt-5 blogimg">
                    <Link
                      to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                      className="card-aside-column br-5 cover-image me-3"
                    >
                      <img
                        className=" br-5 mb-3"
                        src={require("../../../../assets/images/media/25.jpg")}
                        style={{
                          background:
                            'url("../assets/images/media/19.jpg") center center',
                        }}
                        alt=""
                      />
                    </Link>
                    <div className="ps-1 flex-column">
                      <h4>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                        >
                          Voluptatem quia voluptas...
                        </Link>
                      </h4>
                      <div className="text-muted">
                        <p>
                          Excepteur sint occaecat cupidatat non proident,
                          accusantium sunt in culpa qui officia deserunt mollit
                          anim id est laborum....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                <Card.Title>Tags</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <Link to="#" className="tag">
                    Development
                  </Link>
                  <Link to="#" className="tag">
                    Design
                  </Link>
                  <Link to="#" className="tag">
                    Technology
                  </Link>
                  <Link to="#" className="tag">
                    Popular
                  </Link>
                  <Link to="#" className="tag">
                    Codiegniter
                  </Link>
                  <Link to="#" className="tag">
                    JavaScript
                  </Link>
                  <Link to="#" className="tag">
                    Bootstrap
                  </Link>
                  <Link to="#" className="tag">
                    PHP
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
