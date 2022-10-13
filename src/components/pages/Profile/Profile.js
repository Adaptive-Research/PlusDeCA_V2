import React from "react";
import * as profiledata from "../../../data/Pages/profiledata/profiledata";
import user8 from "../../../assets/images/users/8.jpg";
import user15 from "../../../assets/images/users/15.jpg";
import user18 from "../../../assets/images/users/18.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import user20 from "../../../assets/images/users/20.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user9 from "../../../assets/images/users/9.jpg";
import user6 from "../../../assets/images/users/6.jpg";
import user3 from "../../../assets/images/users/3.jpg";
import { Tabs, Tab, Breadcrumb, Card,Row,Col,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Profile</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Profile
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

      <Row id="user-profile">
        <Col lg={12}>
          <Card className=" bg-transparent shadow-none border-0">
            <Card.Body className=" bg-white">
              <div className="wideget-user">
                <Row>
                  <Col lg={12} md={12} xl={6}>
                    <div className="wideget-user-desc d-sm-flex">
                      <div className="wideget-user-img">
                        <img className="" src={user8} alt="img" />
                      </div>
                      <div className="user-wrap">
                        <h4>Elizabeth Dyer</h4>
                        <h6 className="text-muted mb-3">
                          Member Since: November 2017
                        </h6>
                        <Link to="#" className="btn btn-primary mt-1 mb-1 ">
                          <i className="fa fa-rss"></i> Follow
                        </Link>
                        <Link
                          to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                          className="btn btn-secondary mt-1 mb-1 ms-1"
                        >
                          <i className="fa fa-envelope"></i> E-mail
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12} md={12} xl={6}>
                    <div className="text-xl-right mt-4 mt-xl-0">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                        className="btn btn-white me-1"
                      >
                        Message
                      </Link>
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                        className="btn btn-primary me-1"
                      >
                        Edit Profile
                      </Link>
                    </div>
                    <div className="mt-5">
                      <div className="main-profile-contact-list float-md-end d-md-flex">
                        <div className="me-5">
                          <div className="media">
                            <div className="media-icon bg-primary  me-3 mt-1">
                              <i className="fe fe-file-plus fs-20 text-white"></i>
                            </div>
                            <div className="media-body">
                              <span className="text-muted">Posts</span>
                              <div className="fw-semibold fs-25">328</div>
                            </div>
                          </div>
                        </div>
                        <div className="me-5 mt-5 mt-md-0">
                          <div className="media">
                            <div className="media-icon bg-success me-3 mt-1">
                              <i className="fe fe-users  fs-20 text-white"></i>
                            </div>
                            <div className="media-body">
                              <span className="text-muted">Followers</span>
                              <div className="fw-semibold fs-25">937k</div>
                            </div>
                          </div>
                        </div>
                        <div className="me-0 mt-5 mt-md-0">
                          <div className="media">
                            <div className="media-icon bg-orange me-3 mt-1">
                              <i className="fe fe-wifi fs-20 text-white"></i>
                            </div>
                            <div className="media-body">
                              <span className="text-muted">Following</span>
                              <div className="fw-semibold fs-25">2,876</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
            <div className="border-top ">
              <div className="wideget-user-tab">
                <div className="tab-menu-heading">
                  <div className="tabs-menu1 profiletabs">
                    <Tabs
                      variant="Tabs"
                      defaultActiveKey="Profile"
                      id=" tab-51"
                      className="tab-content tabesbody "
                    >
                      <Tab eventKey="Profile" title="Profile">
                        <div className="tab-pane profiletab show">
                          <div id="profile-log-switch">
                            <Card>
                              <Card.Body className="bg-white">
                                <div className="media-heading">
                                  <h5>
                                    <strong>Personal Information</strong>
                                  </h5>
                                </div>
                                <div className="table-responsive p-1">
                                  <Table className="table row table-borderless">
                                    <tbody className="col-lg-12 col-xl-6 p-0">
                                      <tr>
                                        <td>
                                          <strong>Full Name :</strong> Elizabeth
                                          Dyer
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Location :</strong> USA
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Languages :</strong> English,
                                          German, Spanish.
                                        </td>
                                      </tr>
                                    </tbody>
                                    <tbody className="col-lg-12 col-xl-6 p-0">
                                      <tr>
                                        <td>
                                          <strong>Website :</strong> abcdz.com
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Email :</strong>
                                          georgemestayer@abcdz.com
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <strong>Phone :</strong> +125 254 3562
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </div>
                                <Row className="row profie-img">
                                  <Col md={12}>
                                    <div className="media-heading">
                                      <h5>
                                        <strong>Biography</strong>
                                      </h5>
                                    </div>
                                    <p>
                                      Nam libero tempore, cum soluta nobis est
                                      eligendi optio cumque nihil impedit quo
                                      minus id quod maxime placeat facere
                                      possimus, omnis voluptas assumenda est,
                                      omnis dolor repellendus
                                    </p>
                                    <p className="mb-0">
                                      because it is pleasure, but because those
                                      who do not know how to pursue pleasure
                                      rationally encounter but because those who
                                      do not know how to pursue consequences
                                      that are extremely painful. Nor again is
                                      there anyone who loves or pursues or
                                      desires to obtain pain of itself, because
                                      it is pain, but because occasionally
                                      circumstances occur in which toil and pain
                                      can procure him some great pleasure.
                                    </p>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Friends" title="Friends">
                        <div className="tab-pane " id="tab-61">
                          <span className="widget-users row profiletab  mb-5">
                            <li className="col-lg-4  col-md-6 col-sm-12 col-12  ">
                              <Card className=" border p-0">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                >
                                  <Card.Body className=" text-center">
                                    <img
                                      className="avatar avatar-xxl brround cover-image"
                                      src={user15}
                                      alt=""
                                    />
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      James Thomas
                                    </h4>
                                    <span className="text-muted">
                                      Web designer
                                    </span>
                                  </Card.Body>
                                </Link>
                                <Card.Footer className=" text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google faico"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </li>
                            <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <Card className="border p-0">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                >
                                  <Card.Body className="text-center">
                                    <img
                                      className="avatar avatar-xxl brround cover-image"
                                      src={user9}
                                      alt=""
                                    />
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      George Clooney
                                    </h4>
                                    <span className="text-muted">
                                      Web designer
                                    </span>
                                  </Card.Body>
                                </Link>
                                <Card.Footer className="text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </li>
                            <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <Card className="border p-0">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                >
                                  <Card.Body className="text-center">
                                    <img
                                      className="avatar avatar-xxl brround cover-image"
                                      src={user20}
                                      alt=""
                                    />
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      Robert Downey Jr.
                                    </h4>
                                    <span className="text-muted">
                                      Web designer
                                    </span>
                                  </Card.Body>
                                </Link>
                                <Card.Footer className="text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </Card>
                            </li>
                            <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card border p-0 mb-lg-0">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                >
                                  <Card.Body className="text-center">
                                    <img
                                      className="avatar avatar-xxl brround cover-image"
                                      src={user12}
                                      alt=""
                                    />
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      Emma Watson
                                    </h4>
                                    <span className="text-muted">
                                      Web designer
                                    </span>
                                  </Card.Body>
                                </Link>
                                <Card.Footer className="text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </div>
                            </li>
                            <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card border p-0 mb-lg-0">
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                >
                                  <Card.Body className="text-center">
                                    <img
                                      className="avatar avatar-xxl brround cover-image"
                                      src={user4}
                                      alt=""
                                    />
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      Mila Kunis
                                    </h4>
                                    <span className="text-muted">
                                      Web designer
                                    </span>
                                  </Card.Body>
                                </Link>
                                <Card.Footer className="text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </div>
                            </li>
                            <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card border p-0 ">
                                <Card.Body className="text-center">
                                  <img
                                    className="avatar avatar-xxl brround cover-image"
                                    src={user6}
                                    alt=""
                                  />
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/pages/profile/`}
                                  >
                                    <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                      Ryan Gossling
                                    </h4>
                                  </Link>
                                  <span className="text-muted">
                                    Web designer
                                  </span>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                  <div className="row user-social-detail">
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-google"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile me-4 rounded text-center"
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="social-profile  rounded text-center"
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </Link>
                                  </div>
                                </Card.Footer>
                              </div>
                            </li>
                          </span>
                        </div>
                      </Tab>
                      <Tab eventKey="Gallery" title="Gallery">
                        <div className="tab-pane profiletab" id="tab-71">
                          <profiledata.GalleryImagesprofile />
                        </div>
                      </Tab>
                      <Tab eventKey="Followers" title="Followers">
                        <div className="tab-pane" id="tab-81">
                          <Row className="profiletab">
                            <Col lg={6} md={12}>
                              <Card className="border p-0 over-flow-hidden">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <img
                                    className="avatar brround avatar-md me-3"
                                    src={user18}
                                    alt="avatar-img"
                                  />
                                  <div className="media-body valign-middle">
                                    <Link
                                      to=""
                                      className=" fw-semibold text-dark"
                                    >
                                      John Paige
                                    </Link>
                                    <p className="text-muted mb-0">
                                      johan@gmail.com
                                    </p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-2">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={6} md={12}>
                              <Card className="border p-0 over-flow-hidden">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <span className="avatar cover-image avatar-md brround bg-pink me-3">
                                    LQ
                                  </span>
                                  <div className="media-body valign-middle mt-0">
                                    <Link
                                      to=""
                                      className="fw-semibold text-dark"
                                    >
                                      Lillian Quinn
                                    </Link>
                                    <p className="text-muted mb-0">
                                      lilliangore
                                    </p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={6} md={12}>
                              <Card className=" border p-0 over-flow-hidden mb-lg-0">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <span className="avatar cover-image avatar-md brround me-3 bg-primary">
                                    IH
                                  </span>
                                  <div className="media-body valign-middle mt-0">
                                    <Link
                                      to=""
                                      className="fw-semibold text-dark"
                                    >
                                      Irene Harris
                                    </Link>
                                    <p className="text-muted mb-0">
                                      ireneharris@gmail.com
                                    </p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={6} md={12}>
                              <Card className="border p-0 over-flow-hidden">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <img
                                    className="avatar brround avatar-md me-3"
                                    src={user3}
                                    alt="avatar-img"
                                  />
                                  <div className="media-body valign-middle mt-0">
                                    <Link
                                      to=""
                                      className="text-dark fw-semibold"
                                    >
                                      Saureen Bgist
                                    </Link>
                                    <p className="text-muted mb-0">harryuqt</p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={6} md={12}>
                              <Card className="border p-0 over-flow-hidden">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <img
                                    className="avatar brround avatar-md me-3"
                                    src={user2}
                                    alt="avatar-img"
                                  />
                                  <div className="media-body valign-middle mt-0">
                                    <Link
                                      to=""
                                      className="text-dark fw-semibold"
                                    >
                                      Maureen Biologist
                                    </Link>
                                    <p className="text-muted mb-0">harryuqt</p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col lg={6} md={12}>
                              <Card className="border p-0 over-flow-hidden">
                                <Card.Body className="media media-xs overflow-visible ">
                                  <span className="avatar cover-image avatar-md brround me-3 bg-info">
                                    PF
                                  </span>
                                  <div className="media-body valign-middle mt-0">
                                    <Link
                                      to=""
                                      className="fw-semibold text-dark"
                                    >
                                      Paddy O'Furniture.
                                    </Link>
                                    <p className="text-muted mb-0">
                                      ireneharris@gmail.com
                                    </p>
                                  </div>
                                  <div className="media-body valign-middle text-end overflow-visible mt-1">
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </Card.Body>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
