import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  OverlayTrigger,
  Tooltip,
  Row,
  Card,
  Breadcrumb,
} from "react-bootstrap";
export default function SimplelineIcons() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Simpleline Icons</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Icons
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Simpleline Icons
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
        <Col>
          <Card>
            <Card.Header>
              <h3 className="card-title">Simpleline Icons</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={12} sm={12}>
                  <p>
                    Simply beautiful open source icons. For more info
                    <Link
                      to="https://simplelineicons.github.io/"
                      target="_blank"
                    >
                      click here
                    </Link>
                    .
                  </p>
                  <p>
                    <code>&lt;i className="icon icon-user"&gt;&lt;/i&gt;</code>
                  </p>
                </Col>
                <Col lg={12} sm={12}>
                  <div className="icons-list-wrap">
                    <ul className="icons-list">
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-user</Tooltip>}
                        >
                          <i className="icon icon-user" title="icon-user"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-people</Tooltip>}
                        >
                          <i
                            className="icon icon-people"
                            title="icon-people"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-user-female</Tooltip>}
                        >
                          <i
                            className="icon icon-user-female"
                            title="icon-user-female"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-user-follow</Tooltip>}
                        >
                          <i
                            className="icon icon-user-follow"
                            title="icon-user-follow"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-user-following</Tooltip>}
                        >
                          <i
                            className="icon icon-user-following"
                            title="icon-user-following"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-user-unfollow</Tooltip>}
                        >
                          <i
                            className="icon icon-user-unfollow"
                            title="icon-user-unfollow"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-login</Tooltip>}
                        >
                          <i className="icon icon-login" title="icon-login"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-logout</Tooltip>}
                        >
                          <i
                            className="icon icon-logout"
                            title="icon-logout"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-emotsmile</Tooltip>}
                        >
                          <i
                            className="icon icon-emotsmile"
                            title="icon-emotsmile"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-phone</Tooltip>}
                        >
                          <i className="icon icon-phone" title="icon-phone"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-call-end</Tooltip>}
                        >
                          <i
                            className="icon icon-call-end"
                            title="icon-call-end"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-call-in</Tooltip>}
                        >
                          <i
                            className="icon icon-call-in"
                            title="icon-call-in"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-call-out</Tooltip>}
                        >
                          <i
                            className="icon icon-call-out"
                            title="icon-call-out"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-map</Tooltip>}
                        >
                          <i className="icon icon-map" title="icon-map"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-location-pin</Tooltip>}
                        >
                          <i
                            className="icon icon-location-pin"
                            title="icon-location-pin"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-direction</Tooltip>}
                        >
                          <i
                            className="icon icon-direction"
                            title="icon-direction"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-directions</Tooltip>}
                        >
                          <i
                            className="icon icon-directions"
                            title="icon-directions"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-compass</Tooltip>}
                        >
                          <i
                            className="icon icon-compass"
                            title="icon-compass"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-layers</Tooltip>}
                        >
                          <i
                            className="icon icon-layers"
                            title="icon-layers"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-menu</Tooltip>}
                        >
                          <i className="icon icon-menu" title="icon-menu"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-list</Tooltip>}
                        >
                          <i className="icon icon-list" title="icon-list"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-options-vertical</Tooltip>}
                        >
                          <i
                            className="icon icon-options-vertical"
                            title="icon-options-vertical"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-options</Tooltip>}
                        >
                          <i
                            className="icon icon-options"
                            title="icon-options"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-down</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-down"
                            title="icon-arrow-down"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-left</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-left"
                            title="icon-arrow-left"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-right</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-right"
                            title="icon-arrow-right"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-up</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-up"
                            title="icon-arrow-up"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-up-circle</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-up-circle"
                            title="icon-arrow-up-circle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-left-circle</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-left-circle"
                            title="icon-arrow-left-circle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-right-circle</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-right-circle"
                            title="icon-arrow-right-circle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-arrow-down-circle</Tooltip>}
                        >
                          <i
                            className="icon icon-arrow-down-circle"
                            title="icon-arrow-down-circle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-check</Tooltip>}
                        >
                          <i className="icon icon-check" title="icon-check"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-clock</Tooltip>}
                        >
                          <i className="icon icon-clock" title="icon-clock"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-plus</Tooltip>}
                        >
                          <i className="icon icon-plus" title="icon-plus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-minus</Tooltip>}
                        >
                          <i className="icon icon-minus" title="icon-minus"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-close</Tooltip>}
                        >
                          <i className="icon icon-close" title="icon-close"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-event</Tooltip>}
                        >
                          <i className="icon icon-event" title="icon-event"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-exclamation</Tooltip>}
                        >
                          <i
                            className="icon icon-exclamation"
                            title="icon-exclamation"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-organization</Tooltip>}
                        >
                          <i
                            className="icon icon-organization"
                            title="icon-organization"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-trophy</Tooltip>}
                        >
                          <i
                            className="icon icon-trophy"
                            title="icon-trophy"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-screen-smartphone</Tooltip>}
                        >
                          <i
                            className="icon icon-screen-smartphone"
                            title="icon-screen-smartphone"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-screen-desktop</Tooltip>}
                        >
                          <i
                            className="icon icon-screen-desktop"
                            title="icon-screen-desktop"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-plane</Tooltip>}
                        >
                          <i className="icon icon-plane" title="icon-plane"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-notebook</Tooltip>}
                        >
                          <i
                            className="icon icon-notebook"
                            title="icon-notebook"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-mustache</Tooltip>}
                        >
                          <i
                            className="icon icon-mustache"
                            title="icon-mustache"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-mouse</Tooltip>}
                        >
                          <i className="icon icon-mouse" title="icon-mouse"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-magnet</Tooltip>}
                        >
                          <i
                            className="icon icon-magnet"
                            title="icon-magnet"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-energy</Tooltip>}
                        >
                          <i
                            className="icon icon-energy"
                            title="icon-energy"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-disc</Tooltip>}
                        >
                          <i className="icon icon-disc" title="icon-disc"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-cursor</Tooltip>}
                        >
                          <i
                            className="icon icon-cursor"
                            title="icon-cursor"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-cursor-move</Tooltip>}
                        >
                          <i
                            className="icon icon-cursor-move"
                            title="icon-cursor-move"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-crop</Tooltip>}
                        >
                          <i className="icon icon-crop" title="icon-crop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-chemistry</Tooltip>}
                        >
                          <i
                            className="icon icon-chemistry"
                            title="icon-chemistry"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-speedometer</Tooltip>}
                        >
                          <i
                            className="icon icon-speedometer"
                            title="icon-speedometer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-shield</Tooltip>}
                        >
                          <i
                            className="icon icon-shield"
                            title="icon-shield"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-screen-tablet</Tooltip>}
                        >
                          <i
                            className="icon icon-screen-tablet"
                            title="icon-screen-tablet"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-magic-wand</Tooltip>}
                        >
                          <i
                            className="icon icon-magic-wand"
                            title="icon-magic-wand"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-hourglass</Tooltip>}
                        >
                          <i
                            className="icon icon-hourglass"
                            title="icon-hourglass"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-graduation</Tooltip>}
                        >
                          <i
                            className="icon icon-graduation"
                            title="icon-graduation"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-ghost</Tooltip>}
                        >
                          <i className="icon icon-ghost" title="icon-ghost"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-game-controller</Tooltip>}
                        >
                          <i
                            className="icon icon-game-controller"
                            title="icon-game-controller"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-fire</Tooltip>}
                        >
                          <i className="icon icon-fire" title="icon-fire"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-eyeglass</Tooltip>}
                        >
                          <i
                            className="icon icon-eyeglass"
                            title="icon-eyeglass"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-envelope-open</Tooltip>}
                        >
                          <i
                            className="icon icon-envelope-open"
                            title="icon-envelope-open"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-envelope-letter</Tooltip>}
                        >
                          <i
                            className="icon icon-envelope-letter"
                            title="icon-envelope-letter"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-bell</Tooltip>}
                        >
                          <i className="icon icon-bell" title="icon-bell"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-badge</Tooltip>}
                        >
                          <i className="icon icon-badge" title="icon-badge"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-anchor</Tooltip>}
                        >
                          <i
                            className="icon icon-anchor"
                            title="icon-anchor"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-wallet</Tooltip>}
                        >
                          <i
                            className="icon icon-wallet"
                            title="icon-wallet"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-vector</Tooltip>}
                        >
                          <i
                            className="icon icon-vector"
                            title="icon-vector"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-speech</Tooltip>}
                        >
                          <i
                            className="icon icon-speech"
                            title="icon-speech"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-puzzle</Tooltip>}
                        >
                          <i
                            className="icon icon-puzzle"
                            title="icon-puzzle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-printer</Tooltip>}
                        >
                          <i
                            className="icon icon-printer"
                            title="icon-printer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-present</Tooltip>}
                        >
                          <i
                            className="icon icon-present"
                            title="icon-present"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-playlist</Tooltip>}
                        >
                          <i
                            className="icon icon-playlist"
                            title="icon-playlist"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-pin</Tooltip>}
                        >
                          <i className="icon icon-pin" title="icon-pin"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-picture</Tooltip>}
                        >
                          <i
                            className="icon icon-picture"
                            title="icon-picture"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-handbag</Tooltip>}
                        >
                          <i
                            className="icon icon-handbag"
                            title="icon-handbag"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-globe-alt</Tooltip>}
                        >
                          <i
                            className="icon icon-globe-alt"
                            title="icon-globe-alt"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-globe</Tooltip>}
                        >
                          <i className="icon icon-globe" title="icon-globe"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-folder-alt</Tooltip>}
                        >
                          <i
                            className="icon icon-folder-alt"
                            title="icon-folder-alt"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-folder</Tooltip>}
                        >
                          <i
                            className="icon icon-folder"
                            title="icon-folder"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-film</Tooltip>}
                        >
                          <i className="icon icon-film" title="icon-film"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-feed</Tooltip>}
                        >
                          <i className="icon icon-feed" title="icon-feed"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-drop</Tooltip>}
                        >
                          <i className="icon icon-drop" title="icon-drop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-drawer</Tooltip>}
                        >
                          <i
                            className="icon icon-drawer"
                            title="icon-drawer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-docs</Tooltip>}
                        >
                          <i className="icon icon-docs" title="icon-docs"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-doc</Tooltip>}
                        >
                          <i className="icon icon-doc" title="icon-doc"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-diamond</Tooltip>}
                        >
                          <i
                            className="icon icon-diamond"
                            title="icon-diamond"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-cup</Tooltip>}
                        >
                          <i className="icon icon-cup" title="icon-cup"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-calculator</Tooltip>}
                        >
                          <i
                            className="icon icon-calculator"
                            title="icon-calculator"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-bubbles</Tooltip>}
                        >
                          <i
                            className="icon icon-bubbles"
                            title="icon-bubbles"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-briefcase</Tooltip>}
                        >
                          <i
                            className="icon icon-briefcase"
                            title="icon-briefcase"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-book-open</Tooltip>}
                        >
                          <i
                            className="icon icon-book-open"
                            title="icon-book-open"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-basket-loaded</Tooltip>}
                        >
                          <i
                            className="icon icon-basket-loaded"
                            title="icon-basket-loaded"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-basket</Tooltip>}
                        >
                          <i
                            className="icon icon-basket"
                            title="icon-basket"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-bag</Tooltip>}
                        >
                          <i className="icon icon-bag" title="icon-bag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-action-undo</Tooltip>}
                        >
                          <i
                            className="icon icon-action-undo"
                            title="icon-action-undo"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-action-redo</Tooltip>}
                        >
                          <i
                            className="icon icon-action-redo"
                            title="icon-action-redo"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-wrench</Tooltip>}
                        >
                          <i
                            className="icon icon-wrench"
                            title="icon-wrench"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-umbrella</Tooltip>}
                        >
                          <i
                            className="icon icon-umbrella"
                            title="icon-umbrella"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-trash</Tooltip>}
                        >
                          <i className="icon icon-trash" title="icon-trash"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-tag</Tooltip>}
                        >
                          <i className="icon icon-tag" title="icon-tag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-support</Tooltip>}
                        >
                          <i
                            className="icon icon-support"
                            title="icon-support"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-frame</Tooltip>}
                        >
                          <i className="icon icon-frame" title="icon-frame"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-size-fullscreen</Tooltip>}
                        >
                          <i
                            className="icon icon icon-size-fullscreen"
                            title="icon-size-fullscreen"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-size-actual</Tooltip>}
                        >
                          <i
                            className="icon icon-size-actual"
                            title="icon-size-actual"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-shuffle</Tooltip>}
                        >
                          <i
                            className="icon icon-shuffle"
                            title="icon-shuffle"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-share-alt</Tooltip>}
                        >
                          <i
                            className="icon icon-share-alt"
                            title="icon-share-alt"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-share</Tooltip>}
                        >
                          <i className="icon icon-share" title="icon-share"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-rocket</Tooltip>}
                        >
                          <i
                            className="icon icon-rocket"
                            title="icon-rocket"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-question</Tooltip>}
                        >
                          <i
                            className="icon icon-question"
                            title="icon-question"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-pie-chart</Tooltip>}
                        >
                          <i
                            className="icon icon-pie-chart"
                            title="icon-pie-chart"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-pencil</Tooltip>}
                        >
                          <i
                            className="icon icon-pencil"
                            title="icon-pencil"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-note</Tooltip>}
                        >
                          <i className="icon icon-note" title="icon-note"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-loop</Tooltip>}
                        >
                          <i className="icon icon-loop" title="icon-loop"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-home</Tooltip>}
                        >
                          <i className="icon icon-home" title="icon-home"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-grid</Tooltip>}
                        >
                          <i className="icon icon-grid" title="icon-grid"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-graph</Tooltip>}
                        >
                          <i className="icon icon-graph" title="icon-graph"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-microphone</Tooltip>}
                        >
                          <i
                            className="icon icon-microphone"
                            title="icon-microphone"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-music-tone-alt</Tooltip>}
                        >
                          <i
                            className="icon icon-music-tone-alt"
                            title="icon-music-tone-alt"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-music-tone</Tooltip>}
                        >
                          <i
                            className="icon icon-music-tone"
                            title="icon-music-tone"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-earphones-alt</Tooltip>}
                        >
                          <i
                            className="icon icon-earphones-alt"
                            title="icon-earphones-alt"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-earphones</Tooltip>}
                        >
                          <i
                            className="icon icon-earphones"
                            title="icon-earphones"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-equalizer</Tooltip>}
                        >
                          <i
                            className="icon icon-equalizer"
                            title="icon-equalizer"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-like</Tooltip>}
                        >
                          <i className="icon icon-like" title="icon-like"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-dislike</Tooltip>}
                        >
                          <i
                            className="icon icon-dislike"
                            title="icon-dislike"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-start</Tooltip>}
                        >
                          <i
                            className="icon icon-control-start"
                            title="icon-control-start"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-rewind</Tooltip>}
                        >
                          <i
                            className="icon icon-control-rewind"
                            title="icon-control-rewind"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-play</Tooltip>}
                        >
                          <i
                            className="icon icon-control-play"
                            title="icon-control-play"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-pause</Tooltip>}
                        >
                          <i
                            className="icon icon-control-pause"
                            title="icon-control-pause"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-forward</Tooltip>}
                        >
                          <i
                            className="icon icon-control-forward"
                            title="icon-control-forward"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-control-end</Tooltip>}
                        >
                          <i
                            className="icon icon-control-end"
                            title="icon-control-end"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-volume-1</Tooltip>}
                        >
                          <i
                            className="icon icon-volume-1"
                            title="icon-volume-1"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-volume-2</Tooltip>}
                        >
                          <i
                            className="icon icon-volume-2"
                            title="icon-volume-2"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-volume-off</Tooltip>}
                        >
                          <i
                            className="icon icon-volume-off"
                            title="icon-volume-off"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-calendar</Tooltip>}
                        >
                          <i
                            className="icon icon-calendar"
                            title="icon-calendar"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-bulb</Tooltip>}
                        >
                          <i className="icon icon-bulb" title="icon-bulb"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-chart</Tooltip>}
                        >
                          <i className="icon icon-chart" title="icon-chart"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-ban</Tooltip>}
                        >
                          <i className="icon icon-ban" title="icon-ban"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-bubble</Tooltip>}
                        >
                          <i
                            className="icon icon-bubble"
                            title="icon-bubble"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-camrecorder</Tooltip>}
                        >
                          <i
                            className="icon icon-camrecorder"
                            title="icon-camrecorder"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-camera</Tooltip>}
                        >
                          <i
                            className="icon icon-camera"
                            title="icon-camera"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-cloud-download</Tooltip>}
                        >
                          <i
                            className="icon icon-cloud-download"
                            title="icon-cloud-download"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-cloud-upload</Tooltip>}
                        >
                          <i
                            className="icon icon-cloud-upload"
                            title="icon-cloud-upload"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-envelope</Tooltip>}
                        >
                          <i
                            className="icon icon-envelope"
                            title="icon-envelope"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-eye</Tooltip>}
                        >
                          <i className="icon icon-eye" title="icon-eye"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-flag</Tooltip>}
                        >
                          <i className="icon icon-flag" title="icon-flag"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-heart</Tooltip>}
                        >
                          <i className="icon icon-heart" title="icon-heart"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-info</Tooltip>}
                        >
                          <i className="icon icon-info" title="icon-info"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-key</Tooltip>}
                        >
                          <i className="icon icon-key" title="icon-key"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-link</Tooltip>}
                        >
                          <i className="icon icon-link" title="icon-link"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-lock</Tooltip>}
                        >
                          <i className="icon icon-lock" title="icon-lock"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-lock-open</Tooltip>}
                        >
                          <i
                            className="icon icon-lock-open"
                            title="icon-lock-open"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-magnifier</Tooltip>}
                        >
                          <i
                            className="icon icon-magnifier"
                            title="icon-magnifier"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-magnifier-add</Tooltip>}
                        >
                          <i
                            className="icon icon-magnifier-add"
                            title="icon-magnifier-add"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-magnifier-remove</Tooltip>}
                        >
                          <i
                            className="icon icon-magnifier-remove"
                            title="icon-magnifier-remove"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-paper-clip</Tooltip>}
                        >
                          <i
                            className="icon icon-paper-clip"
                            title="icon-paper-clip"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-paper-plane</Tooltip>}
                        >
                          <i
                            className="icon icon-paper-plane"
                            title="icon-paper-plane"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-power</Tooltip>}
                        >
                          <i className="icon icon-power" title="icon-power"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-refresh</Tooltip>}
                        >
                          <i
                            className="icon icon-refresh"
                            title="icon-refresh"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-reload</Tooltip>}
                        >
                          <i
                            className="icon icon-reload"
                            title="icon-reload"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-settings</Tooltip>}
                        >
                          <i
                            className="icon icon-settings"
                            title="icon-settings"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-star</Tooltip>}
                        >
                          <i className="icon icon-star" title="icon-star"></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-symbol-female</Tooltip>}
                        >
                          <i
                            className="icon icon-symbol-female"
                            title="icon-symbol-female"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-symbol-male</Tooltip>}
                        >
                          <i
                            className="icon icon-symbol-male"
                            title="icon-symbol-male"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-target</Tooltip>}
                        >
                          <i
                            className="icon icon-target"
                            title="icon-target"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-credit-card</Tooltip>}
                        >
                          <i
                            className="icon icon-credit-card"
                            title="icon-credit-card"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-paypal</Tooltip>}
                        >
                          <i
                            className="icon icon-paypal"
                            title="icon-paypal"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-tumblr</Tooltip>}
                        >
                          <i
                            className="icon icon-social-tumblr"
                            title="icon-social-tumblr"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-twitter</Tooltip>}
                        >
                          <i
                            className="icon icon-social-twitter"
                            title="icon-social-twitter"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-facebook</Tooltip>}
                        >
                          <i
                            className="icon icon-social-facebook"
                            title="icon-social-facebook"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-instagram</Tooltip>}
                        >
                          <i
                            className="icon icon-social-instagram"
                            title="icon-social-instagram"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-linkedin</Tooltip>}
                        >
                          <i
                            className="icon icon-social-linkedin"
                            title="icon-social-linkedin"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-pinterest</Tooltip>}
                        >
                          <i
                            className="icon icon-social-pinterest"
                            title="icon-social-pinterest"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-github</Tooltip>}
                        >
                          <i
                            className="icon icon-social-github"
                            title="icon-social-github"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-google</Tooltip>}
                        >
                          <i
                            className="icon icon-social-google"
                            title="icon-social-google"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-reddit</Tooltip>}
                        >
                          <i
                            className="icon icon-social-reddit"
                            title="icon-social-reddit"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-skype</Tooltip>}
                        >
                          <i
                            className="icon icon-social-skype"
                            title="icon-social-skype"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-dribbble</Tooltip>}
                        >
                          <i
                            className="icon icon-social-dribbble"
                            title="icon-social-dribbble"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-behance</Tooltip>}
                        >
                          <i
                            className="icon icon-social-behance"
                            title="icon-social-behance"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-foursqare</Tooltip>}
                        >
                          <i
                            className="icon icon-social-foursqare"
                            title="icon-social-foursqare"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-soundcloud</Tooltip>}
                        >
                          <i
                            className="icon icon-social-soundcloud"
                            title="icon-social-soundcloud"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-spotify</Tooltip>}
                        >
                          <i
                            className="icon icon-social-spotify"
                            title="icon-social-spotify"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-stumbleupon</Tooltip>}
                        >
                          <i
                            className="icon icon-social-stumbleupon"
                            title="icon-social-stumbleupon"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-youtube</Tooltip>}
                        >
                          <i
                            className="icon icon-social-youtube"
                            title="icon-social-youtube"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-dropbox</Tooltip>}
                        >
                          <i
                            className="icon icon-social-dropbox"
                            title="icon-social-dropbox"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-vkontakte</Tooltip>}
                        >
                          <i
                            className="icon icon-social-vkontakte"
                            title="icon-social-vkontakte"
                          ></i>
                        </OverlayTrigger>
                      </li>
                      <li className="icons-list-item">
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>icon-social-steam</Tooltip>}
                        >
                          <i
                            className="icon icon-social-steam"
                            title="icon-social-steam"
                          ></i>
                        </OverlayTrigger>
                      </li>
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
