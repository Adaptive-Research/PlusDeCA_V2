import React from "react";
import { Link } from "react-router-dom";
import * as FileManagerDetailsdata from "../../../../data/Pages/FileManagerDetails/FileManagerDetailsdata";
import * as filedetails from "../../../../data/Pages/filedetails/filedetails";
import { Col, Row, Table, Button, Breadcrumb,Card } from "react-bootstrap";
export default function FileDetails() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">File Manager Details</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              File Manager Details
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
        <Col xl={8} lg={12} md={12}>
          <Card className="custom-card overflow-hidden">
            <Card.Body className="p-3">
              <Link to="#">
                <img
                  src={require("../../../../assets/images/media/files/img3.jpg")}
                  alt="img"
                  className="br-5 w-100"
                />
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0">Related Files</Card.Header>
            <Card.Body className="pt-0 h-100">
              <FileManagerDetailsdata.SimpleSlider />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <h5 className="mb-3">File details</h5>
              <div className="">
                <Row>
                  <Col xl={12}>
                    <div className="table-responsive">
                      <Table className="mb-1 table-bordered border text-nowrap">
                        <tbody>
                          <tr>
                            <th>File Name</th>
                            <td>image.jpg</td>
                          </tr>
                          <tr>
                            <th>Uploaded</th>
                            <td>10-10-2021</td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td>25 MB</td>
                          </tr>
                          <tr>
                            <th>Dimensions</th>
                            <td>1000 x 350</td>
                          </tr>
                          <tr>
                            <th>Resolution Unit</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th>File Type</th>
                            <td>jpg</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div className="mt-5 text-center">
                      <Button
                        type="button"
                        className="btn btn-icon  btn-info-light me-2 bradius"
                        variant=""
                      >
                        <i className="fe fe-edit" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-danger-light me-2 bradius"
                      >
                        <i className="fe fe-trash" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-success-light me-2 bradius"
                      >
                        <i className="fe fe-download fs-14" />
                      </Button>
                      <Button
                        type="button"
                        variant=""
                        className="btn btn-icon  btn-warning-light bradius"
                      >
                        <i className="fe fe-share-2 fs-14" />
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="pb-0">
              <h5 className="mb-3">Recent Files</h5>
              <filedetails.GalleryImageswidgets />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
