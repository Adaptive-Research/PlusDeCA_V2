import React from "react";
import * as formeditor from "../../../../data/Form/formeditor/formeditor";
import * as fromadvanced from "../../../../data/Form/formadvanced/formadvanced";
import * as blogpost from "../../../../data/Pages/blogpost/blogpost";
import { Link } from "react-router-dom";
import { Row, Breadcrumb, Col, Card } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
export default function ArticleEdit() {
    return (
        <div>
            <div>
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Blog Post</h1>
                        <Breadcrumb className="breadcrumb">
                            <Breadcrumb.Item className="breadcrumb-item" href="#">
                                Pages
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                className="breadcrumb-item active breadcrumds"
                                aria-current="page"
                            >
                                Blog Post
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
                {/* PAGE-HEADER END */}
                {/* ROW-1 OPEN */}
                <Row>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Add New Post</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-4">
                                    <label className="col-md-3 form-label">Post Title :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Typing....."
                                        />
                                    </div>
                                </Row>
                                <Row className="mb-4">
                                    <label className="col-md-3 form-label">Categories :</label>
                                    <div className="">
                                        <blogpost.Categorys />
                                    </div>
                                </Row>
                                {/* Row */}
                                <Row>
                                    <label className="col-md-3 form-label mb-4">
                                        Post Description :
                                    </label>
                                    <div className="mb-4">
                                        <formeditor.FormEditorstyle1 />
                                    </div>
                                </Row>
                                {/*End Row*/}
                                <FormGroup className="mb-0 file">
                                    <label className="col-md-3 form-label mb-4">
                                        File Upload :
                                    </label>
                                    <fromadvanced.OuterDropzone
                                        id="demo"
                                        type="file"
                                        name="files"
                                        accept=".jpg, .png, image/jpeg, image/png"
                                        multiple
                                    />
                                </FormGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Link to="#" className="btn btn-primary">
                                    Post
                                </Link>
                                <Link to="#" className="btn btn-default float-end">
                                    Discard
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Recent Posts</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <div className="d-flex overflow-visible blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image  me-3"
                                        >
                                            <img
                                                className=" br-5 "
                                                src={require("../../../../assets/images/media/19.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center top',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-0 flex-column">
                      <span className="badge bg-danger me-1 mb-1 mt-2">
                        Lifestyle
                      </span>
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                                >
                                                    Generator on the Internet..
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                Excepteur sint occaecat cupidatat non proident,
                                                accusantium sunt in culpa qui officia deserunt mollit
                                                anim id est laborum....
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image  me-3"
                                        >
                                            <img
                                                className=" br-5 "
                                                src={require("../../../../assets/images/media/22.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center top',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-0 flex-column">
                      <span className="badge bg-primary me-1 mb-1 mt-2">
                        Business
                      </span>
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                                >
                                                    Voluptatem quia voluptas...
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                Excepteur sint occaecat cupidatat non proident,
                                                accusantium sunt in culpa qui officia deserunt mollit
                                                anim id est laborum....
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image me-3"
                                        >
                                            <img
                                                className=" br-5 "
                                                src={require("../../../../assets/images/media/12.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center top',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-0 flex-column">
                      <span className="badge bg-secondary me-1 mb-1 mt-2 ">
                        Travel
                      </span>
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                                >
                                                    Generator on the Internet..
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                Excepteur sint occaecat cupidatat non proident,
                                                accusantium sunt in culpa qui officia deserunt mollit
                                                anim id est laborum....
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex overflow-visible mt-5 blogimg">
                                        <Link
                                            to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                            className="card-aside-column br-5 cover-image  me-3"
                                        >
                                            <img
                                                className=" br-5 "
                                                src={require("../../../../assets/images/media/25.jpg")}
                                                style={{
                                                    background:
                                                        'url("../assets/images/media/19.jpg") center top',
                                                }}
                                                alt=""
                                            />
                                        </Link>
                                        <div className="ps-0 flex-column">
                      <span className="badge bg-success me-1 mb-1 mt-2">
                        Meeting
                      </span>
                                            <h4>
                                                <Link
                                                    to={`${process.env.PUBLIC_URL}/pages/Blog/blogDetails`}
                                                >
                                                    Voluptatem quia voluptas...
                                                </Link>
                                            </h4>
                                            <div className="text-muted">
                                                Excepteur sint occaecat cupidatat non proident,
                                                accusantium sunt in culpa qui officia deserunt mollit
                                                anim id est laborum....
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                            src={require("../../../../assets/images/users/12.jpg")}
                                            alt="avatar-img"
                                        />
                                        <div className="media-body valign-middle">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/pages/profile`}
                                                className="fw-semibold text-dark"
                                            >
                                                John Paige
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
                                            src={require("../../../../assets/images/users/2.jpg")}
                                            alt="avatar-img"
                                        />
                                        <div className="media-body valign-middle">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/pages/profile`}
                                                className="fw-semibold text-dark"
                                            >
                                                Peter Hill
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
                                            src={require("../../../../assets/images/users/9.jpg")}
                                            alt="avatar-img"
                                        />
                                        <div className="media-body valign-middle">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/pages/profile`}
                                                className="fw-semibold text-dark"
                                            >
                                                Irene Harris
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
                                            src={require("../../../../assets/images/users/4.jpg")}
                                            alt="avatar-img"
                                        />
                                        <div className="media-body valign-middle">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/pages/profile`}
                                                className="fw-semibold text-dark"
                                            >
                                                Harry Fisher
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
                    </Col>
                </Row>
            </div>
        </div>
    );
}
