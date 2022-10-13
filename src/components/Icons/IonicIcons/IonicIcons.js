import React from "react";
import { Link } from "react-router-dom";
import {
  OverlayTrigger,
  Row,
  Tooltip,
  Breadcrumb,
  Col,
  Card,
} from "react-bootstrap";
export default function IonicIcons() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Ionic Icons</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Icons
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Ionic Icons
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

      <Row className=" row-cards">
        <Col>
          <Card>
            <Card.Header>
              <div className="card-title">Ionic Icons</div>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={12} lg={12}>
                  <p>
                    Simply beautiful open source icons. For more info
                    <Link to="https://ionicons.com/" target="_blank">
                      click here
                    </Link>
                    .
                  </p>
                  <p>
                    <code>&lt;i class="ion ICON_NAME"&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
                <Col sm={12} lg={12}>
                  <div className="icons-list-wrap">
                    <ul className="icons-list">
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ionic</Tooltip>}
                        >
                          <i className="ion-ionic" title="ion-ionic"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-up-a</Tooltip>}
                        >
                          <i className="ion-arrow-up-a" title="ion-arrow-up-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-right-a</Tooltip>}
                        >
                          <i
                            className="ion-arrow-right-a"
                            title="ion-arrow-right-a"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-down-a</Tooltip>}
                        >
                          <i
                            className="ion-arrow-down-a"
                            title="ion-arrow-down-a"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-left-a</Tooltip>}
                        >
                          <i
                            className="ion-arrow-left-a"
                            title="ion-arrow-left-a"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-up-b</Tooltip>}
                        >
                          <i className="ion-arrow-up-b" title="ion-arrow-up-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-right-b</Tooltip>}
                        >
                          <i
                            className="ion-arrow-right-b"
                            title="ion-arrow-right-b"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-down-b</Tooltip>}
                        >
                          <i
                            className="ion-arrow-down-b"
                            title="ion-arrow-down-b"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-left-b</Tooltip>}
                        >
                          <i
                            className="ion-arrow-left-b"
                            title="ion-arrow-left-b"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-up-c</Tooltip>}
                        >
                          <i className="ion-arrow-up-c" title="ion-arrow-up-c"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-right-c</Tooltip>}
                        >
                          <i
                            className="ion-arrow-right-c"
                            title="ion-arrow-right-c"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-down-c</Tooltip>}
                        >
                          <i
                            className="ion-arrow-down-c"
                            title="ion-arrow-down-c"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-left-c</Tooltip>}
                        >
                          <i
                            className="ion-arrow-left-c"
                            title="ion-arrow-left-c"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-return-right</Tooltip>}
                        >
                          <i
                            className="ion-arrow-return-right"
                            title="ion-arrow-return-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-return-left</Tooltip>}
                        >
                          <i
                            className="ion-arrow-return-left"
                            title="ion-arrow-return-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-swap</Tooltip>}
                        >
                          <i className="ion-arrow-swap" title="ion-arrow-swap"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-shrink</Tooltip>}
                        >
                          <i
                            className="ion-arrow-shrink"
                            title="ion-arrow-shrink"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-expand</Tooltip>}
                        >
                          <i
                            className="ion-arrow-expand"
                            title="ion-arrow-expand"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-move</Tooltip>}
                        >
                          <i className="ion-arrow-move" title="ion-arrow-move"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-resize</Tooltip>}
                        >
                          <i
                            className="ion-arrow-resize"
                            title="ion-arrow-resize"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chevron-up</Tooltip>}
                        >
                          <i className="ion-chevron-up" title="ion-chevron-up"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chevron-right</Tooltip>}
                        >
                          <i
                            className="ion-chevron-right"
                            title="ion-chevron-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chevron-down</Tooltip>}
                        >
                          <i
                            className="ion-chevron-down"
                            title="ion-chevron-down"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chevron-left</Tooltip>}
                        >
                          <i
                            className="ion-chevron-left"
                            title="ion-chevron-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-navicon-round</Tooltip>}
                        >
                          <i
                            className="ion-navicon-round"
                            title="ion-navicon-round"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-navicon</Tooltip>}
                        >
                          <i className="ion-navicon" title="ion-navicon"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-drag</Tooltip>}
                        >
                          <i className="ion-drag" title="ion-drag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-log-in</Tooltip>}
                        >
                          <i className="ion-log-in" title="ion-log-in"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-log-out</Tooltip>}
                        >
                          <i className="ion-log-out" title="ion-log-out"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-checkmark-round</Tooltip>}
                        >
                          <i
                            className="ion-checkmark-round"
                            title="ion-checkmark-round"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-checkmark</Tooltip>}
                        >
                          <i className="ion-checkmark" title="ion-checkmark"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-checkmark-circled</Tooltip>}
                        >
                          <i
                            className="ion-checkmark-circled"
                            title="ion-checkmark-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-close-round</Tooltip>}
                        >
                          <i
                            className="ion-close-round"
                            title="ion-close-round"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-close</Tooltip>}
                        >
                          <i className="ion-close" title="ion-close"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-close-circled</Tooltip>}
                        >
                          <i
                            className="ion-close-circled"
                            title="ion-close-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-plus-round</Tooltip>}
                        >
                          <i className="ion-plus-round" title="ion-plus-round"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-plus</Tooltip>}
                        >
                          <i className="ion-plus" title="ion-plus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-plus-circled</Tooltip>}
                        >
                          <i
                            className="ion-plus-circled"
                            title="ion-plus-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-minus-round</Tooltip>}
                        >
                          <i
                            className="ion-minus-round"
                            title="ion-minus-round"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-minus</Tooltip>}
                        >
                          <i className="ion-minus" title="ion-minus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-minus-circled</Tooltip>}
                        >
                          <i
                            className="ion-minus-circled"
                            title="ion-minus-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-information</Tooltip>}
                        >
                          <i
                            className="ion-information"
                            title="ion-information"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-information-circled</Tooltip>}
                        >
                          <i
                            className="ion-information-circled"
                            title="ion-information-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-help</Tooltip>}
                        >
                          <i className="ion-help" title="ion-help"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-help-circled</Tooltip>}
                        >
                          <i
                            className="ion-help-circled"
                            title="ion-help-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-help-buoy</Tooltip>}
                        >
                          <i className="ion-help-buoy" title="ion-help-buoy"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-asterisk</Tooltip>}
                        >
                          <i className="ion-asterisk" title="ion-asterisk"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-alert</Tooltip>}
                        >
                          <i className="ion-alert" title="ion-alert"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-alert-circled</Tooltip>}
                        >
                          <i
                            className="ion-alert-circled"
                            title="ion-alert-circled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-refresh</Tooltip>}
                        >
                          <i className="ion-refresh" title="ion-refresh"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-loop</Tooltip>}
                        >
                          <i className="ion-loop" title="ion-loop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-shuffle</Tooltip>}
                        >
                          <i className="ion-shuffle" title="ion-shuffle"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-home</Tooltip>}
                        >
                          <i className="ion-home" title="ion-home"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-search</Tooltip>}
                        >
                          <i className="ion-search" title="ion-search"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-flag</Tooltip>}
                        >
                          <i className="ion-flag" title="ion-flag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-star</Tooltip>}
                        >
                          <i className="ion-star" title="ion-star"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-heart</Tooltip>}
                        >
                          <i className="ion-heart" title="ion-heart"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-heart-broken</Tooltip>}
                        >
                          <i
                            className="ion-heart-broken"
                            title="ion-heart-broken"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-gear-a</Tooltip>}
                        >
                          <i className="ion-gear-a" title="ion-gear-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-gear-b</Tooltip>}
                        >
                          <i className="ion-gear-b" title="ion-gear-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-toggle-filled</Tooltip>}
                        >
                          <i
                            className="ion-toggle-filled"
                            title="ion-toggle-filled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-toggle</Tooltip>}
                        >
                          <i className="ion-toggle" title="ion-toggle"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-settings</Tooltip>}
                        >
                          <i className="ion-settings" title="ion-settings"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-wrench</Tooltip>}
                        >
                          <i className="ion-wrench" title="ion-wrench"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-folder</Tooltip>}
                        >
                          <i className="ion-folder" title="ion-folder"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-hammer</Tooltip>}
                        >
                          <i className="ion-hammer" title="ion-hammer"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-edit</Tooltip>}
                        >
                          <i className="ion-edit" title="ion-edit"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-trash-a</Tooltip>}
                        >
                          <i className="ion-trash-a" title="ion-trash-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-trash-b</Tooltip>}
                        >
                          <i className="ion-trash-b" title="ion-trash-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-document</Tooltip>}
                        >
                          <i className="ion-document" title="ion-document"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-document-text</Tooltip>}
                        >
                          <i
                            className="ion-document-text"
                            title="ion-document-text"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-clipboard</Tooltip>}
                        >
                          <i className="ion-clipboard" title="ion-clipboard"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-scissors</Tooltip>}
                        >
                          <i className="ion-scissors" title="ion-scissors"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-funnel</Tooltip>}
                        >
                          <i className="ion-funnel" title="ion-funnel"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-bookmark</Tooltip>}
                        >
                          <i className="ion-bookmark" title="ion-bookmark"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-email</Tooltip>}
                        >
                          <i className="ion-email" title="ion-email"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-folder</Tooltip>}
                        >
                          <i className="ion-folder" title="ion-folder"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-filing</Tooltip>}
                        >
                          <i className="ion-filing" title="ion-filing"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-archive</Tooltip>}
                        >
                          <i className="ion-archive" title="ion-archive"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-reply</Tooltip>}
                        >
                          <i className="ion-reply" title="ion-reply"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-reply-all</Tooltip>}
                        >
                          <i className="ion-reply-all" title="ion-reply-all"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-forward</Tooltip>}
                        >
                          <i className="ion-forward" title="ion-forward"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-share</Tooltip>}
                        >
                          <i className="ion-share" title="ion-share"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-paper-airplane</Tooltip>}
                        >
                          <i
                            className="ion-paper-airplane"
                            title="ion-paper-airplane"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-link</Tooltip>}
                        >
                          <i className="ion-link" title="ion-link"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-paperclip</Tooltip>}
                        >
                          <i className="ion-paperclip" title="ion-paperclip"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-compose</Tooltip>}
                        >
                          <i className="ion-compose" title="ion-compose"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-briefcase</Tooltip>}
                        >
                          <i className="ion-briefcase" title="ion-briefcase"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-medkit</Tooltip>}
                        >
                          <i className="ion-medkit" title="ion-medkit"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-at</Tooltip>}
                        >
                          <i className="ion-at" title="ion-at"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pound</Tooltip>}
                        >
                          <i className="ion-pound" title="ion-pound"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-quote</Tooltip>}
                        >
                          <i className="ion-quote" title="ion-quote"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-cloud</Tooltip>}
                        >
                          <i className="ion-cloud" title="ion-cloud"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-upload</Tooltip>}
                        >
                          <i className="ion-upload" title="ion-upload"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-more</Tooltip>}
                        >
                          <i className="ion-more" title="ion-more"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-grid</Tooltip>}
                        >
                          <i className="ion-grid" title="ion-grid"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-calendar</Tooltip>}
                        >
                          <i className="ion-calendar" title="ion-calendar"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-clock</Tooltip>}
                        >
                          <i className="ion-clock" title="ion-clock"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-compass</Tooltip>}
                        >
                          <i className="ion-compass" title="ion-compass"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pinpoint</Tooltip>}
                        >
                          <i className="ion-pinpoint" title="ion-pinpoint"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pin</Tooltip>}
                        >
                          <i className="ion-pin" title="ion-pin"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-navigate</Tooltip>}
                        >
                          <i className="ion-navigate" title="ion-navigate"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-location</Tooltip>}
                        >
                          <i className="ion-location" title="ion-location"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-map</Tooltip>}
                        >
                          <i className="ion-map" title="ion-map"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-model-s</Tooltip>}
                        >
                          <i className="ion-model-s" title="ion-model-s"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-locked</Tooltip>}
                        >
                          <i className="ion-locked" title="ion-locked"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-unlocked</Tooltip>}
                        >
                          <i className="ion-unlocked" title="ion-unlocked"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-key</Tooltip>}
                        >
                          <i className="ion-key" title="ion-key"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-graph-up-right</Tooltip>}
                        >
                          <i
                            className="ion-arrow-graph-up-right"
                            title="ion-arrow-graph-up-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-arrow-graph-down-right</Tooltip>
                          }
                        >
                          <i
                            className="ion-arrow-graph-down-right"
                            title="ion-arrow-graph-down-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-arrow-graph-down-left</Tooltip>}
                        >
                          <i
                            className="ion-arrow-graph-down-left"
                            title="ion-arrow-graph-down-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-stats-bars</Tooltip>}
                        >
                          <i className="ion-stats-bars" title="ion-stats-bars"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-connection-bars</Tooltip>}
                        >
                          <i
                            className="ion-connection-bars"
                            title="ion-connection-bars"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pie-graph</Tooltip>}
                        >
                          <i className="ion-pie-graph" title="ion-pie-graph"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatbubble</Tooltip>}
                        >
                          <i className="ion-chatbubble" title="ion-chatbubble"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatbubble-working</Tooltip>}
                        >
                          <i
                            className="ion-chatbubble-working"
                            title="ion-chatbubble-working"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatbubbles</Tooltip>}
                        >
                          <i
                            className="ion-chatbubbles"
                            title="ion-chatbubbles"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatbox</Tooltip>}
                        >
                          <i className="ion-chatbox" title="ion-chatbox"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatbox-working</Tooltip>}
                        >
                          <i
                            className="ion-chatbox-working"
                            title="ion-chatbox-working"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-chatboxes</Tooltip>}
                        >
                          <i className="ion-chatboxes" title="ion-chatboxes"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-person</Tooltip>}
                        >
                          <i className="ion-person" title="ion-person"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-person-add</Tooltip>}
                        >
                          <i className="ion-person-add" title="ion-person-add"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-person-stalker</Tooltip>}
                        >
                          <i
                            className="ion-person-stalker"
                            title="ion-person-stalker"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-woman</Tooltip>}
                        >
                          <i className="ion-woman" title="ion-woman"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-man</Tooltip>}
                        >
                          <i className="ion-man" title="ion-man"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-female</Tooltip>}
                        >
                          <i className="ion-female" title="ion-female"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-male</Tooltip>}
                        >
                          <i className="ion-male" title="ion-male"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-fork</Tooltip>}
                        >
                          <i className="ion-fork" title="ion-fork"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-knife</Tooltip>}
                        >
                          <i className="ion-knife" title="ion-knife"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-spoon</Tooltip>}
                        >
                          <i className="ion-spoon" title="ion-spoon"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-beer</Tooltip>}
                        >
                          <i className="ion-beer" title="ion-beer"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-wineglass</Tooltip>}
                        >
                          <i className="ion-wineglass" title="ion-wineglass"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-coffee</Tooltip>}
                        >
                          <i className="ion-coffee" title="ion-coffee"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-icecream</Tooltip>}
                        >
                          <i className="ion-icecream" title="ion-icecream"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pizza</Tooltip>}
                        >
                          <i className="ion-pizza" title="ion-pizza"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-power</Tooltip>}
                        >
                          <i className="ion-power" title="ion-power"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-mouse</Tooltip>}
                        >
                          <i className="ion-mouse" title="ion-mouse"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-battery-full</Tooltip>}
                        >
                          <i
                            className="ion-battery-full"
                            title="ion-battery-full"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-battery-half</Tooltip>}
                        >
                          <i
                            className="ion-battery-half"
                            title="ion-battery-half"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-battery-low</Tooltip>}
                        >
                          <i
                            className="ion-battery-low"
                            title="ion-battery-low"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-battery-empty</Tooltip>}
                        >
                          <i
                            className="ion-battery-empty"
                            title="ion-battery-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-battery-charging</Tooltip>}
                        >
                          <i
                            className="ion-battery-charging"
                            title="ion-battery-charging"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-bluetooth</Tooltip>}
                        >
                          <i className="ion-bluetooth" title="ion-bluetooth"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-calculator</Tooltip>}
                        >
                          <i className="ion-calculator" title="ion-calculator"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-camera</Tooltip>}
                        >
                          <i className="ion-camera" title="ion-camera"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-eye</Tooltip>}
                        >
                          <i className="ion-eye" title="ion-eye"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-eye-disabled</Tooltip>}
                        >
                          <i
                            className="ion-eye-disabled"
                            title="ion-eye-disabled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-flash</Tooltip>}
                        >
                          <i className="ion-flash" title="ion-flash"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-flash-off</Tooltip>}
                        >
                          <i className="ion-flash-off" title="ion-flash-off"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-qr-scanner</Tooltip>}
                        >
                          <i className="ion-qr-scanner" title="ion-qr-scanner"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-image</Tooltip>}
                        >
                          <i className="ion-image" title="ion-image"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-images</Tooltip>}
                        >
                          <i className="ion-images" title="ion-images"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-contrast</Tooltip>}
                        >
                          <i className="ion-contrast" title="ion-contrast"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-wand</Tooltip>}
                        >
                          <i className="ion-wand" title="ion-wand"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-aperture</Tooltip>}
                        >
                          <i className="ion-aperture" title="ion-aperture"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-monitor</Tooltip>}
                        >
                          <i className="ion-monitor" title="ion-monitor"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-laptop</Tooltip>}
                        >
                          <i className="ion-laptop" title="ion-laptop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ipad</Tooltip>}
                        >
                          <i className="ion-ipad" title="ion-ipad"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-iphone</Tooltip>}
                        >
                          <i className="ion-iphone" title="ion-iphone"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ipod</Tooltip>}
                        >
                          <i className="ion-ipod" title="ion-ipod"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-printer</Tooltip>}
                        >
                          <i className="ion-printer" title="ion-printer"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-usb</Tooltip>}
                        >
                          <i className="ion-usb" title="ion-usb"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-outlet</Tooltip>}
                        >
                          <i className="ion-outlet" title="ion-outlet"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-bug</Tooltip>}
                        >
                          <i className="ion-bug" title="ion-bug"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-code</Tooltip>}
                        >
                          <i className="ion-code" title="ion-code"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-code-working</Tooltip>}
                        >
                          <i
                            className="ion-code-working"
                            title="ion-code-working"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-code-download</Tooltip>}
                        >
                          <i
                            className="ion-code-download"
                            title="ion-code-download"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-fork-repo</Tooltip>}
                        >
                          <i className="ion-fork-repo" title="ion-fork-repo"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-network</Tooltip>}
                        >
                          <i className="ion-network" title="ion-network"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pull-request</Tooltip>}
                        >
                          <i
                            className="ion-pull-request"
                            title="ion-pull-request"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-merge</Tooltip>}
                        >
                          <i className="ion-merge" title="ion-merge"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-game-controller-a</Tooltip>}
                        >
                          <i
                            className="ion-game-controller-a"
                            title="ion-game-controller-a"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-game-controller-b</Tooltip>}
                        >
                          <i
                            className="ion-game-controller-b"
                            title="ion-game-controller-b"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-xbox</Tooltip>}
                        >
                          <i className="ion-xbox" title="ion-xbox"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-playstation</Tooltip>}
                        >
                          <i
                            className="ion-playstation"
                            title="ion-playstation"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-steam</Tooltip>}
                        >
                          <i className="ion-steam" title="ion-steam"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-closed-captioning</Tooltip>}
                        >
                          <i
                            className="ion-closed-captioning"
                            title="ion-closed-captioning"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-videocamera</Tooltip>}
                        >
                          <i
                            className="ion-videocamera"
                            title="ion-videocamera"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-film-marker</Tooltip>}
                        >
                          <i
                            className="ion-film-marker"
                            title="ion-film-marker"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-disc</Tooltip>}
                        >
                          <i className="ion-disc" title="ion-disc"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-headphone</Tooltip>}
                        >
                          <i className="ion-headphone" title="ion-headphone"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-music-note</Tooltip>}
                        >
                          <i className="ion-music-note" title="ion-music-note"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-radio-waves</Tooltip>}
                        >
                          <i
                            className="ion-radio-waves"
                            title="ion-radio-waves"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-speakerphone</Tooltip>}
                        >
                          <i
                            className="ion-speakerphone"
                            title="ion-speakerphone"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-mic-a</Tooltip>}
                        >
                          <i className="ion-mic-a" title="ion-mic-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-mic-b</Tooltip>}
                        >
                          <i className="ion-mic-b" title="ion-mic-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-mic-c</Tooltip>}
                        >
                          <i className="ion-mic-c" title="ion-mic-c"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-volume-high</Tooltip>}
                        >
                          <i
                            className="ion-volume-high"
                            title="ion-volume-high"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-volume-medium</Tooltip>}
                        >
                          <i
                            className="ion-volume-medium"
                            title="ion-volume-medium"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-volume-low</Tooltip>}
                        >
                          <i className="ion-volume-low" title="ion-volume-low"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-volume-mute</Tooltip>}
                        >
                          <i
                            className="ion-volume-mute"
                            title="ion-volume-mute"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-levels</Tooltip>}
                        >
                          <i className="ion-levels" title="ion-levels"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-play</Tooltip>}
                        >
                          <i className="ion-play" title="ion-play"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pause</Tooltip>}
                        >
                          <i className="ion-pause" title="ion-pause"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-stop</Tooltip>}
                        >
                          <i className="ion-stop" title="ion-stop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-record</Tooltip>}
                        >
                          <i className="ion-record" title="ion-record"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-skip-forward</Tooltip>}
                        >
                          <i
                            className="ion-skip-forward"
                            title="ion-skip-forward"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-skip-backward</Tooltip>}
                        >
                          <i
                            className="ion-skip-backward"
                            title="ion-skip-backward"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-eject</Tooltip>}
                        >
                          <i className="ion-eject" title="ion-eject"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-bag</Tooltip>}
                        >
                          <i className="ion-bag" title="ion-bag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-card</Tooltip>}
                        >
                          <i className="ion-card" title="ion-card"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-cash</Tooltip>}
                        >
                          <i className="ion-cash" title="ion-cash"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pricetag</Tooltip>}
                        >
                          <i className="ion-pricetag" title="ion-pricetag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-pricetags</Tooltip>}
                        >
                          <i className="ion-pricetags" title="ion-pricetags"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-thumbsup</Tooltip>}
                        >
                          <i className="ion-thumbsup" title="ion-thumbsup"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-thumbsdown</Tooltip>}
                        >
                          <i className="ion-thumbsdown" title="ion-thumbsdown"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-happy</Tooltip>}
                        >
                          <i className="ion-happy" title="ion-happy"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-sad</Tooltip>}
                        >
                          <i className="ion-sad" title="ion-sad"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-trophy</Tooltip>}
                        >
                          <i className="ion-trophy" title="ion-trophy"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-podium</Tooltip>}
                        >
                          <i className="ion-podium" title="ion-podium"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ribbon-a</Tooltip>}
                        >
                          <i className="ion-ribbon-a" title="ion-ribbon-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ribbon-b</Tooltip>}
                        >
                          <i className="ion-ribbon-b" title="ion-ribbon-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-university</Tooltip>}
                        >
                          <i className="ion-university" title="ion-university"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-magnet</Tooltip>}
                        >
                          <i className="ion-magnet" title="ion-magnet"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-beaker</Tooltip>}
                        >
                          <i className="ion-beaker" title="ion-beaker"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-flask</Tooltip>}
                        >
                          <i className="ion-flask" title="ion-flask"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-egg</Tooltip>}
                        >
                          <i className="ion-egg" title="ion-egg"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-earth</Tooltip>}
                        >
                          <i className="ion-earth" title="ion-earth"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-planet</Tooltip>}
                        >
                          <i className="ion-planet" title="ion-planet"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-lightbulb</Tooltip>}
                        >
                          <i className="ion-lightbulb" title="ion-lightbulb"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-cube</Tooltip>}
                        >
                          <i className="ion-cube" title="ion-cube"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-leaf</Tooltip>}
                        >
                          <i className="ion-leaf" title="ion-leaf"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-waterdrop</Tooltip>}
                        >
                          <i className="ion-waterdrop" title="ion-waterdrop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-flame</Tooltip>}
                        >
                          <i className="ion-flame" title="ion-flame"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-fireball</Tooltip>}
                        >
                          <i className="ion-fireball" title="ion-fireball"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-bonfire</Tooltip>}
                        >
                          <i className="ion-bonfire" title="ion-bonfire"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-umbrella</Tooltip>}
                        >
                          <i className="ion-umbrella" title="ion-umbrella"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-nuclear</Tooltip>}
                        >
                          <i className="ion-nuclear" title="ion-nuclear"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-no-smoking</Tooltip>}
                        >
                          <i className="ion-no-smoking" title="ion-no-smoking"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-thermometer</Tooltip>}
                        >
                          <i
                            className="ion-thermometer"
                            title="ion-thermometer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-speedometer</Tooltip>}
                        >
                          <i
                            className="ion-speedometer"
                            title="ion-speedometer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-plane</Tooltip>}
                        >
                          <i className="ion-plane" title="ion-plane"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-jet</Tooltip>}
                        >
                          <i className="ion-jet" title="ion-jet"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-load-a</Tooltip>}
                        >
                          <i className="ion-load-a" title="ion-load-a"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-load-b</Tooltip>}
                        >
                          <i className="ion-load-b" title="ion-load-b"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-load-c</Tooltip>}
                        >
                          <i className="ion-load-c" title="ion-load-c"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-load-d</Tooltip>}
                        >
                          <i className="ion-load-d" title="ion-load-d"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-ionic-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-ionic-outline"
                            title="ion-ios7-ionic-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-back</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-back"
                            title="ion-ios7-arrow-back"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-forward</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-forward"
                            title="ion-ios7-arrow-forward"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-up</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-up"
                            title="ion-ios7-arrow-up"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-right</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-right"
                            title="ion-ios7-arrow-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-down</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-down"
                            title="ion-ios7-arrow-down"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-left</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-left"
                            title="ion-ios7-arrow-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-thin-up</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-thin-up"
                            title="ion-ios7-arrow-thin-up"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-thin-right</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-thin-right"
                            title="ion-ios7-arrow-thin-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-thin-down</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-thin-down"
                            title="ion-ios7-arrow-thin-down"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-arrow-thin-left</Tooltip>}
                        >
                          <i
                            className="ion-ios7-arrow-thin-left"
                            title="ion-ios7-arrow-thin-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-circle-filled</Tooltip>}
                        >
                          <i
                            className="ion-ios7-circle-filled"
                            title="ion-ios7-circle-filled"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-circle-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-circle-outline"
                            title="ion-ios7-circle-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-checkmark-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-checkmark-empty"
                            title="ion-ios7-checkmark-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-checkmark-outline</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-checkmark-outline"
                            title="ion-ios7-checkmark-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-checkmark</Tooltip>}
                        >
                          <i
                            className="ion-ios7-checkmark"
                            title="ion-ios7-checkmark"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-plus-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-plus-empty"
                            title="ion-ios7-plus-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-plus-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-plus-outline"
                            title="ion-ios7-plus-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-plus</Tooltip>}
                        >
                          <i className="ion-ios7-plus" title="ion-ios7-plus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-close-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-close-empty"
                            title="ion-ios7-close-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-close-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-close-outline"
                            title="ion-ios7-close-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-close</Tooltip>}
                        >
                          <i className="ion-ios7-close" title="ion-ios7-close"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-minus-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-minus-empty"
                            title="ion-ios7-minus-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-minus-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-minus-outline"
                            title="ion-ios7-minus-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-minus</Tooltip>}
                        >
                          <i className="ion-ios7-minus" title="ion-ios7-minus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-information-empty</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-information-empty"
                            title="ion-ios7-information-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-information-outline</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-information-outline"
                            title="ion-ios7-information-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-information</Tooltip>}
                        >
                          <i
                            className="ion-ios7-information"
                            title="ion-ios7-information"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-help-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-help-empty"
                            title="ion-ios7-help-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-help-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-help-outline"
                            title="ion-ios7-help-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-help</Tooltip>}
                        >
                          <i className="ion-ios7-help" title="ion-ios7-help"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-search</Tooltip>}
                        >
                          <i
                            className="ion-ios7-search"
                            title="ion-ios7-search"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-search-strong</Tooltip>}
                        >
                          <i
                            className="ion-ios7-search-strong"
                            title="ion-ios7-search-strong"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-star</Tooltip>}
                        >
                          <i className="ion-ios7-star" title="ion-ios7-star"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-star-half</Tooltip>}
                        >
                          <i
                            className="ion-ios7-star-half"
                            title="ion-ios7-star-half"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-star-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-star-outline"
                            title="ion-ios7-star-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-heart</Tooltip>}
                        >
                          <i className="ion-ios7-heart" title="ion-ios7-heart"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-heart-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-heart-outline"
                            title="ion-ios7-heart-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-more</Tooltip>}
                        >
                          <i className="ion-ios7-more" title="ion-ios7-more"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-more-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-more-outline"
                            title="ion-ios7-more-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-home</Tooltip>}
                        >
                          <i className="ion-ios7-home" title="ion-ios7-home"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-home-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-home-outline"
                            title="ion-ios7-home-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-cloud</Tooltip>}
                        >
                          <i className="ion-ios7-cloud" title="ion-ios7-cloud"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-cloud-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-cloud-outline"
                            title="ion-ios7-cloud-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-cloud-upload</Tooltip>}
                        >
                          <i
                            className="ion-ios7-cloud-upload"
                            title="ion-ios7-cloud-upload"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-cloud-upload-outline</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-cloud-upload-outline"
                            title="ion-ios7-cloud-upload-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-cloud-download</Tooltip>}
                        >
                          <i
                            className="ion-ios7-cloud-download"
                            title="ion-ios7-cloud-download"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-cloud-download-outline</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-cloud-download-outline"
                            title="ion-ios7-cloud-download-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-upload</Tooltip>}
                        >
                          <i
                            className="ion-ios7-upload"
                            title="ion-ios7-upload"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-upload-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-upload-outline"
                            title="ion-ios7-upload-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-download</Tooltip>}
                        >
                          <i
                            className="ion-ios7-download"
                            title="ion-ios7-download"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-refresh</Tooltip>}
                        >
                          <i
                            className="ion-ios7-refresh"
                            title="ion-ios7-refresh"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-refresh-outline</Tooltip>}
                        >
                          <i
                            className="ion-ios7-refresh-outline"
                            title="ion-ios7-refresh-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-refresh-empty</Tooltip>}
                        >
                          <i
                            className="ion-ios7-refresh-empty"
                            title="ion-ios7-refresh-empty"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-reload</Tooltip>}
                        >
                          <i
                            className="ion-ios7-reload"
                            title="ion-ios7-reload"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-loop-strong</Tooltip>}
                        >
                          <i
                            className="ion-ios7-loop-strong"
                            title="ion-ios7-loop-strong"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-loop</Tooltip>}
                        >
                          <i className="ion-ios7-loop" title="ion-ios7-loop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>ion-ios7-bookmarks</Tooltip>}
                        >
                          <i
                            className="ion-ios7-bookmarks"
                            title="ion-ios7-bookmarks"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip>ion-ios7-bookmarks-outline</Tooltip>
                          }
                        >
                          <i
                            className="ion-ios7-bookmarks-outline"
                            title="ion-ios7-bookmarks-outline"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
