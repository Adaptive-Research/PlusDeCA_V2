import React from "react";
import { Row, Breadcrumb, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FileAttachments() {
  return (
    <div className="main-container container-fluid">
      <div className="page-header">
        <div>
          <h1 className="page-title">File Attachments</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              File Attachments
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-2">
            <span>
              <i className="fe fe-plus"></i>
            </span>{" "}
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>
            </span>{" "}
            Export
          </Link>
        </div>
      </div>

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Rounded File Attachment</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <span className="tag file-rounded-attachments tag-outline mt-0">
                  <span>
                    <i className="mdi mdi-file-image text-primary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Image_attachment.jpg </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PPT_attachment.ppt </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-pdf text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PDF_attachment.pdf </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-word text-info fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto"> Word_attachment.doc </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-video text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Video_attachment.mp4 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-excel text-success fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Excel_attachment.xls </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-headphones text-secondary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Audio_attachment.mp3 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-zip-box text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Zipfile_attachment.zip </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Radius File Attachment</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <span className="tag file-radius-attachments tag-outline mt-0">
                  <span>
                    <i className="mdi mdi-file-image text-primary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Image_attachment.jpg </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PPT_attachment.ppt </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-pdf text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PDF_attachment.pdf </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-word text-info fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto"> Word_attachment.doc </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-video text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Video_attachment.mp4 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-file-excel text-success fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Excel_attachment.xls </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-headphones text-secondary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Audio_attachment.mp3 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-outline">
                  <span>
                    <i className="mdi mdi-zip-box text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Zipfile_attachment.zip </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Rounded With Transparent Background</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <span className="tag file-rounded-attachments tag-primary-transparent mt-0">
                  <span>
                    <i className="mdi mdi-file-image fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Image_attachment.jpg </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-warning-transparent">
                  <span>
                    <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PPT_attachment.ppt </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-danger-transparent">
                  <span>
                    <i className="mdi mdi-file-pdf text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PDF_attachment.pdf </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-info-transparent">
                  <span>
                    <i className="mdi mdi-file-word text-info fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto"> Word_attachment.doc </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-danger-transparent">
                  <span>
                    <i className="mdi mdi-file-video text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Video_attachment.mp4 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-success-transparent">
                  <span>
                    <i className="mdi mdi-file-excel text-success fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Excel_attachment.xls </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-secondary-transparent">
                  <span>
                    <i className="mdi mdi-headphones text-secondary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Audio_attachment.mp3 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-rounded-attachments tag-warning-transparent">
                  <span>
                    <i className="mdi mdi-zip-box text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Zipfile_attachment.zip </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={6}>
          <Card className="custom-card">
            <Card.Header className="pb-3">
              <Card.Title>Radius With Transparent Background</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="tags">
                <span className="tag file-radius-attachments tag-primary-transparent mt-0">
                  <span>
                    <i className="mdi mdi-file-image fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Image_attachment.jpg </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-warning-transparent">
                  <span>
                    <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PPT_attachment.ppt </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-danger-transparent">
                  <span>
                    <i className="mdi mdi-file-pdf text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">PDF_attachment.pdf </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-info-transparent">
                  <span>
                    <i className="mdi mdi-file-word text-info fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto"> Word_attachment.doc </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-danger-transparent">
                  <span>
                    <i className="mdi mdi-file-video text-danger fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Video_attachment.mp4 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-success-transparent">
                  <span>
                    <i className="mdi mdi-file-excel text-success fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Excel_attachment.xls </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-secondary-transparent">
                  <span>
                    <i className="mdi mdi-headphones text-secondary fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Audio_attachment.mp3 </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>

                <span className="tag file-radius-attachments tag-warning-transparent">
                  <span>
                    <i className="mdi mdi-zip-box text-warning fs-18 p-0 me-1"></i>
                  </span>
                  <span className="my-auto">Zipfile_attachment.zip </span>
                  <i className="fe fe-x my-auto ms-3"></i>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Row className="row-sm">
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Rounded With Background Color</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <span className="tag file-rounded-attachments tag-primary mt-0">
                    <span>
                      <i className="mdi mdi-file-image fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Image_attachment.jpg </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-warning">
                    <span>
                      <i className="mdi mdi-file-powerpoint fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PPT_attachment.ppt </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-danger">
                    <span>
                      <i className="mdi mdi-file-pdf fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PDF_attachment.pdf </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-info">
                    <span>
                      <i className="mdi mdi-file-word fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto"> Word_attachment.doc </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-danger">
                    <span>
                      <i className="mdi mdi-file-video fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Video_attachment.mp4 </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-success">
                    <span>
                      <i className="mdi mdi-file-excel fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Excel_attachment.xls </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-secondary">
                    <span>
                      <i className="mdi mdi-headphones fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Audio_attachment.mp3 </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-warning">
                    <span>
                      <i className="mdi mdi-zip-box fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Zipfile_attachment.zip </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <div className="card-title">Radius With Background Color</div>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <span className="tag file-radius-attachments tag-primary mt-0">
                    <span>
                      <i className="mdi mdi-file-image fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Image_attachment.jpg </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-warning">
                    <span>
                      <i className="mdi mdi-file-powerpoint fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PPT_attachment.ppt </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-danger">
                    <span>
                      <i className="mdi mdi-file-pdf fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PDF_attachment.pdf </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-info">
                    <span>
                      <i className="mdi mdi-file-word fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto"> Word_attachment.doc </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-danger">
                    <span>
                      <i className="mdi mdi-file-video fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Video_attachment.mp4 </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-success">
                    <span>
                      <i className="mdi mdi-file-excel fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Excel_attachment.xls </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-secondary">
                    <span>
                      <i className="mdi mdi-headphones fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Audio_attachment.mp3 </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-warning">
                    <span>
                      <i className="mdi mdi-zip-box fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Zipfile_attachment.zip </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="row-sm">
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Rounded File Attachment Sizes</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <span className="tag file-rounded-attachments-sm tag-outline mt-0">
                    <span>
                      <i className="mdi mdi-file-image text-primary fs-15 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Image_attachment.jpg </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-rounded-attachments tag-outline">
                    <span>
                      <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PPT_attachment.ppt </span>
                    <i className="fe fe-x my-auto ms-3 fs-18"></i>
                  </span>

                  <span className="tag file-rounded-attachments-lg tag-outline">
                    <span>
                      <i className="mdi mdi-file-pdf text-danger p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PDF_attachment.pdf </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card className="custom-card">
              <Card.Header className="pb-3">
                <Card.Title>Radius File Attachment Sizes</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="tags">
                  <span className="tag file-radius-attachments-sm tag-outline mt-0">
                    <span>
                      <i className="mdi mdi-file-image text-primary fs-15 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">Image_attachment.jpg </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>

                  <span className="tag file-radius-attachments tag-outline">
                    <span>
                      <i className="mdi mdi-file-powerpoint text-warning fs-18 p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PPT_attachment.ppt </span>
                    <i className="fe fe-x my-auto ms-3 fs-18"></i>
                  </span>

                  <span className="tag file-radius-attachments-lg tag-outline">
                    <span>
                      <i className="mdi mdi-file-pdf text-danger p-0 me-1"></i>
                    </span>
                    <span className="my-auto">PDF_attachment.pdf </span>
                    <i className="fe fe-x my-auto ms-3"></i>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="row-sm">
          <Col lg={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Image File_Attachment</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="">
                    <Row>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/4.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image01.jpg</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/3.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image02.jpg</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/9.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image03.jpg</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/6.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image04</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/1.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image05.jpg</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} lg={3} md={4} sm={4}>
                        <div className="file-image p-2">
                          <div className="product-image">
                            <Link
                              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            >
                              <img
                                src={require("../../../../assets/images/pngs/10.png")}
                                alt=""
                                className="w-100"
                              />
                            </Link>
                            <ul className="icons">
                              <li>
                                <Link to="#" className="bg-danger">
                                  <i className="fe fe-trash"></i>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="bg-secondary">
                                  <i className="fe fe-download"></i>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                                  className="bg-primary"
                                >
                                  <i className="fe fe-eye"></i>
                                </Link>
                              </li>
                            </ul>
                            <Link to="">
                              <span className="file-name">Image06.jpg</span>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
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
                <Card.Title as="h3">
                  Image File_Attachment Small Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="file-image-1">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/pngs/file-image.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image01.jpg</span>
                    </div>
                  </div>
                  <div className="file-image-1">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/doc.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Word.doc</span>
                    </div>
                  </div>
                  <div className="file-image-1">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file2.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Excel.xls</span>
                    </div>
                  </div>
                  <div className="file-image-1">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Document.pdf</span>
                    </div>
                  </div>
                  <div className="file-image-1">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/imgformat.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image02.jpg</span>
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
                <Card.Title as="h3">
                  Image File_Attachment Medium Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="file-image-1 file-image-md">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/pngs/file-image.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image01.jpg</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-md">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/doc.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Word.doc</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-md">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file2.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Excel.xls</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-md">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Document.pdf</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-md">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/imgformat.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image02.jpg</span>
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
                <Card.Title as="h3">
                  Image File_Attachment Large Size
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="">
                  <div className="file-image-1 file-image-lg">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/pngs/file-image.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image01.jpg</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-lg">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/doc.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Word.doc</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-lg">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file2.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Excel.xls</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-lg">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/file.png")}
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Document.pdf</span>
                    </div>
                  </div>
                  <div className="file-image-1 file-image-lg">
                    <div className="product-image">
                      <Link
                        to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                      >
                        <img
                          src={require("../../../../assets/images/media/files/imgformat.png")}
                          className="br-5"
                          alt=""
                        />
                      </Link>
                      <ul className="icons">
                        <li>
                          <Link to="#" className="bg-danger">
                            <i className="fe fe-trash"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="bg-secondary">
                            <i className="fe fe-download"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
                            className="bg-primary"
                          >
                            <i className="fe fe-eye"></i>
                          </Link>
                        </li>
                      </ul>
                      <span className="file-name-1">Image02.jpg</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
