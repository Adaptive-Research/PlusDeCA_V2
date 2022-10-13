import React from "react";
import { Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FileManagerList() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">File Manager List</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              File Manager List
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
      <Row className="row-sm">
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/pdf.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">32 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/07.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image1.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">76 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/excel.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">34 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/02.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">66 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/ppt1.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">demo.ppt</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">67 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/video.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">video.mp4</h5>
                </div>
                <div className="ms-auto my-auto mt-3">
                  <span className="text-muted mb-0">320 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/04.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image2.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">66 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/word.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">word.doc</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">320 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/01.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">mountain.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">320 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/pdf.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">file.pdf</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">32 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/06.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="d-flex">
                  <h5 className="mb-0 fw-semibold text-break">image3.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">76 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/excel.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">excel.xls</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">34 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/ppt1.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">profile.ppt</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">67 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
            >
              <img
                src={require("../../../../assets/images/media/files/05.jpg")}
                alt="img"
                className="w-100 file-manager-list"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">image4.jpg</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">66 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={2} xxl={3} lg={6} md={6} sm={6}>
          <Card className="overflow-hidden">
            <Link
              to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails`}
              className="mx-auto my-3"
            >
              <img
                src={require("../../../../assets/images/media/files/zip1.png")}
                alt="img"
              />
            </Link>
            <Card.Footer>
              <div className="d-flex">
                <div className="">
                  <h5 className="mb-0 fw-semibold text-break">exe.zip</h5>
                </div>
                <div className="ms-auto my-auto">
                  <span className="text-muted mb-0">320 KB</span>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
