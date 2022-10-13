import React from "react";
import {
  Breadcrumb,
  Col,
  Row,
  Card,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as filemanager from "../../../../data/Pages/filemanager/filemanager";
export default function FileManager() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">File Manager</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              File Manager
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
        <Col md={5} lg={5} xl={3}>
          <Card>
            <Card.Body className="text-center">
              {/* <button
                className="btn btn-primary btn-block"
              >
                <i className="fe fe-plus me-1" /> Create New File
              </button> */}
              <filemanager.Creatnewfile />
            </Card.Body>
            <Card.Body className="pt-4">
              <ListGroup className="list-group-transparent mb-0 file-manager">
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-image fs-18 me-2 text-success p-2" />
                      Images
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">20 MB</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-video fs-18 me-2 text-secondary p-2" />
                      Videos
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">32.5 MB</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-file-text fs-18 me-2 text-primary p-2" />
                      Docs
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">14.2 MB</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-music fs-18 me-2 text-warning p-2" />
                      Music
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">13 MB</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-download fs-18 me-2 text-info p-2" />
                      Downloads
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">19.3 MB</span>
                  </div>
                </div>
                <div className="d-flex">
                  <div>
                    <Link
                      to="#"
                      className="list-group-item  d-flex align-items-center px-0"
                    >
                      <i className="fe fe-grid fs-18 me-2 text-danger p-2" />
                      More
                    </Link>
                  </div>
                  <div className="text-end ms-auto mt-3">
                    <span className="fs-11  text-dark">23 MB</span>
                  </div>
                </div>
              </ListGroup>
            </Card.Body>
            <Card.Body>
              <ListGroup className="list-group-transparent mb-0">
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-primary me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Remote Control
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-secondary me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Google Drive
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-danger me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  FTP Files
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-warning me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Transfer files
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-success me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Deep Clean
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-info me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Favourities
                </Link>
                <Link
                  to="#"
                  className="list-group-item  d-flex align-items-center px-0 py-2"
                >
                  <span className="text-pink me-2 fs-12">
                    <i className="fe fe-circle" />
                  </span>
                  Settings
                </Link>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7} lg={7} xl={9}>
          <Row className="row-sm">
            <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">
              All Folders
            </div>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#a09bdf"
                          d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z"
                        />
                        <path
                          fill="#6259ca"
                          d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div className="d-flex">
                        <div>
                          <h5 className="text-primary">Videos</h5>
                          <p className="text-muted fs-13 mb-0">35 Files</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className=" bg-primary"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs progress-bar"
                      variant="primary"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">23 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fa7c91"
                          d="M20,9l-7-7H7C5.34315,2,4,3.34315,4,5v14c0,1.65685,1.34315,3,3,3h10c1.65685,0,3-1.34315,3-3V9z"
                        />
                        <path
                          fill="#f82649"
                          d="M20 9h-5c-1.10457 0-2-.89543-2-2V2L20 9zM12 19.00031c-.26527.0003-.51971-.10515-.707-.293l-2.71878-2.71872c-1.14152-1.14087-1.14204-2.99111-.00117-4.13263C9.478 10.9505 10.86695 10.73946 12 11.33527c1.42871-.75109 3.1958-.20177 3.94689 1.22695.59553 1.13281.38476 2.52133-.52013 3.42637L12.707 18.70734C12.5197 18.89518 12.26526 19.00062 12 19.00031z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-danger">Docs</h5>
                        <p className="text-muted fs-13 mb-0">25 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs"
                      variant="danger"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">19 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#09ad95"
                          d="M19.11523,2.21191a.99358.99358,0,0,0-.85791-.18164l-8,2A.99972.99972,0,0,0,9.5,5V9.97754c-.00049.01465-.00049.0293,0,.043v5.33056A3.45946,3.45946,0,0,0,8,15a3.5,3.5,0,1,0,3.5,3.5V10.78125l7.24268-1.81152A.99972.99972,0,0,0,19.5,8V3A1.00045,1.00045,0,0,0,19.11523,2.21191Z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-teal">Music</h5>
                        <p className="text-muted fs-13 mb-0">25 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs "
                      variant="success"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">19 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#3223f1"
                          d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z"
                        />
                        <path
                          fill="#847bf6"
                          d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-blue">APK</h5>
                        <p className="text-muted fs-13 mb-0">25 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-blue"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs "
                      variant="blue"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">19 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fad383"
                          d="M19,21.5H5a3.00328,3.00328,0,0,1-3-3V5.5a3.00328,3.00328,0,0,1,3-3H9.55859A2.99629,2.99629,0,0,1,12.4043,4.55078L12.7207,5.5H19a3.00328,3.00328,0,0,1,3,3v10A3.00328,3.00328,0,0,1,19,21.5Z"
                        />
                        <path
                          fill="#f7b731"
                          d="M12,17.5a.99943.99943,0,0,1-1-1v-5a1,1,0,0,1,2,0v5A.99943.99943,0,0,1,12,17.5Z"
                        />
                        <path
                          fill="#f7b731"
                          d="M12,17.5a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,0,1,10.707,13.793L12,15.08594l1.293-1.293A.99989.99989,0,0,1,14.707,15.207l-2,2A.99676.99676,0,0,1,12,17.5Z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-warning">Downloads</h5>
                        <p className="text-muted fs-13 mb-0">25 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs "
                      variant="warning"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">19 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fb6b25"
                          d="M21,22H15a6.99657,6.99657,0,1,1,5.60742-2.80762L21.707,20.293A.99991.99991,0,0,1,21,22Z"
                        />
                        <path
                          fill="#fca67c"
                          d="M8,15a6.98728,6.98728,0,0,1,9.86908-6.378A7.99474,7.99474,0,1,0,3.6792,14.90625L2.293,16.293A.99991.99991,0,0,0,3,18H8.68512A6.945,6.945,0,0,1,8,15Z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-secondary">Chat</h5>
                        <p className="text-muted fs-13 mb-0">25 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-secondary"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs "
                      variant="secondary"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">15 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fdb9d5"
                          d="M11.89,13.61l-2.48-2.49c-1.1016-1.04499-2.8284-1.04499-3.93,0L2,14.6V19c0.00487,1.65483,1.34517,2.99513,3,3h12c0.13773,0.00207,0.27526-0.01134,0.41-0.04c0.7152-0.08939,1.37132-0.44242,1.84-0.99L11.89,13.61z M19,7h-4c-0.55197,0.00031-0.99969-0.44689-1-0.99886C14,6.00076,14,6.00038,14,6V4c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00031,0.55197-0.44689,0.99969-0.99886,1C19.00076,7,19.00038,7,19,7z M16,5h2V4c0-0.55228-0.44772-1-1-1s-1,0.44772-1,1V5z"
                        />
                        <path
                          fill="#fd97c0"
                          d="M18,4.18616C17.68585,4.07373,17.3526,4.00104,17,4h-1v1h2V4.18616z"
                        />
                        <path
                          fill="#fd97c0"
                          d="M19.00116,7C19.00073,7,19.00037,7,19,7h-4c-0.55194,0.00031-0.99969-0.4469-1-0.99884C14,6.00073,14,6.00037,14,6V4H5C3.34515,4.00482,2.00482,5.34515,2,7v7.59998L5.47998,11.12c1.10162-1.04498,2.82843-1.04498,3.92999,0l2.48004,2.48999L19.25,20.96997C19.7334,20.42767,20.00037,19.7265,20,19V7c-0.00061-0.21924-0.02777-0.4317-0.07294-0.63751C19.78168,6.73438,19.42456,6.99976,19.00116,7z"
                        />
                        <path
                          fill="#fc5296"
                          d="M19,13h-4c-1.65611-0.00181-2.99819-1.34389-3-3V8c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C21.99819,11.65611,20.65611,12.99819,19,13z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-pink">Images</h5>
                        <p className="text-muted fs-13 mb-0">21 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-pink"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs "
                      variant="pink"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">19 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} md={6} sm={6}>
              <Card className="pos-relative">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileManagerList/FileManagerList/`}
                  className="open-file"
                />
                <Card.Body className="px-4 pt-4 pb-2">
                  <div className="d-flex">
                    <span className="file-manager-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={8}
                          height={8}
                          x={3}
                          y={13}
                          fill="#8fccf7"
                          rx={1}
                        />
                        <rect
                          width={8}
                          height={8}
                          x={3}
                          y={3}
                          fill="#8fccf7"
                          rx={1}
                        />
                        <rect
                          width={8}
                          height={8}
                          x={13}
                          y={3}
                          fill="#8fccf7"
                          rx={1}
                        />
                        <path
                          fill="#45aaf2"
                          d="M20,16H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2Z"
                        />
                      </svg>
                    </span>
                    <div className="ms-auto mt-1 file-dropdown">
                      <div>
                        <h5 className="text-info">More</h5>
                        <p className="text-muted fs-13 mb-0">22 Files</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                  <div>
                    {/* <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-info"
                        style={{ width: "30%" }}
                      />
                    </div> */}
                    <ProgressBar
                      className="progress-xs"
                      variant="info"
                      now={30}
                    />
                    <div className="ms-auto mt-4">
                      <h6 className="">67 MB</h6>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">Files</div>
          <Row className="row-sm">
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
                >
                  <img
                    src={require("../../../../assets/images/media/files/07.jpg")}
                    alt="img"
                    className="w-100 "
                  />
                </Link>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="">
                      <h5 className="mb-0 fw-semibold text-break">
                        image1.jpg
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">76 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
                >
                  <img
                    src={require("../../../../assets/images/media/files/02.jpg")}
                    alt="img"
                    className="w-100 "
                  />
                </Link>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="">
                      <h5 className="mb-0 fw-semibold text-break">
                        image2.jpg
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">66 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
                >
                  <img
                    src={require("../../../../assets/images/media/files/04.jpg")}
                    alt="img"
                    className="w-100 "
                  />
                </Link>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="">
                      <h5 className="mb-0 fw-semibold text-break">
                        image2.jpg
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">66 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
                >
                  <img
                    src={require("../../../../assets/images/media/files/06.jpg")}
                    alt="img"
                    className="w-100 "
                  />
                </Link>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="d-flex">
                      <h5 className="mb-0 fw-semibold text-break">
                        image3.jpg
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">76 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
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
                      <h5 className="mb-0 fw-semibold text-break">
                        profile.ppt
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">67 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col xl={3} xxl={3} lg={6} md={6} sm={6}>
              <Card className="overflow-hidden">
                <Link
                  to={`${process.env.PUBLIC_URL}/pages/FileManager/FileDetails/FileDetails/`}
                >
                  <img
                    src={require("../../../../assets/images/media/files/05.jpg")}
                    alt="img"
                    className="w-100 "
                  />
                </Link>
                <Card.Footer>
                  <div className="d-flex">
                    <div className="">
                      <h5 className="mb-0 fw-semibold text-break">
                        image4.jpg
                      </h5>
                    </div>
                    <div className="ms-auto my-auto">
                      <span className="text-muted mb-0">66 KB</span>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
