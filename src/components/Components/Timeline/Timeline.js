import React from "react";
import { Link } from "react-router-dom";
import {Breadcrumb, Card,Row,Col} from "react-bootstrap"
export default function Timeline() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Timeline</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Timeline
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
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
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 custom-card-header">
              <h6 className="main-content-label mb-0">Vertical Timeline</h6>
            </Card.Header>
            <Card.Body>
              <div className="vtimeline">
                <div className="timeline-wrapper timeline-wrapper-primary">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Art Ramadani posted a status update
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Tolerably earnestly middleton extremely distrusts she
                        boy now not. Add and offered prepare how cordial two
                        promise. Greatly who affixed suppose but enquire compact
                        prepare all put. Added forth chief trees but rooms think
                        may.
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>19</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 19 Oct
                        2020
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted timeline-wrapper-secondary">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">Job Meeting</h6>
                    </div>
                    <div className="timeline-body">
                      <p>You have a meeting at Laborator Office Today.</p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>25</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 10th
                        Oct 2020
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-wrapper-info">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Arlind Nushi checked in at New York
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Alpha 5 has arrived just over a month after Alpha 4 with
                        some major feature improvements and a boat load of bug
                        fixes.
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>19</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 5th
                        Oct 2020
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted timeline-wrapper-danger">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Eroll Maxhuni uploaded 4 new photos to album Summer Trip
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Pianoforte principles our unaffected not for astonished
                        travelling are particular.
                      </p>
                      <img
                        src={
                          require("../../../assets/images/media/1.jpg")
                        }
                        className="mb-3"
                        alt="img"
                      />
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>19</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 27th
                        Sep 2017
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-wrapper-success">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Support Team sent you an email
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Etsy doostang zoodles disqus groupon greplin oooj voxy
                        zoodles, weebly ning heekya handango imeem plugg dopplr
                        jibjab, movity jajah plickers sifteo edmodo ifttt
                        zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu
                        weebly balihoo....
                      </p>
                      <Link
                        to="#"
                        className="btn ripple btn-primary text-white mb-3"
                      >
                        Read more
                      </Link>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>25</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 25th
                        Sep 2017
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-inverted timeline-wrapper-warning">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">Mr. Doe shared a video</h6>
                    </div>
                    <div className="timeline-body">
                      <div className="embed-responsive embed-responsive-16by9 mb-3">
                        <iframe
                          title="Mr. Doe shared a video"
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/XZmGGAbHqa0?rel=0&amp;controls=0&amp;showinfo=0"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart  text-muted me-1"></i>
                      <span>32</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 19th
                        Sep 2017
                      </span>
                    </div>
                  </div>
                </div>
                <div className="timeline-wrapper timeline-wrapper-dark">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h6 className="timeline-title">
                        Sarah Young accepted your friend request
                      </h6>
                    </div>
                    <div className="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet cupiditate, delectus deserunt doloribus earum
                        eveniet explicabo fuga iste magni maxime
                      </p>
                    </div>
                    <div className="timeline-footer d-flex align-items-center flex-wrap">
                      <i className="fe fe-heart text-muted me-1"></i>
                      <span>26</span>&nbsp;
                      <span className="ms-auto">
                        <i className="fe fe-calendar text-muted me-1"></i> 15th
                        Sep 2017
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
