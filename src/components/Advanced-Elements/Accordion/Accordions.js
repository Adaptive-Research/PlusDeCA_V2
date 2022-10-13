import React from "react";
import { Accordion, Breadcrumb, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Accordions() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Accordion</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Accordion
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
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Default Accordion</h3>
            </Card.Header>
            <Card.Body className="defaultaccordion">
              <Accordion defaultActiveKey="Item #1">
                <Accordion.Item eventKey="Item #1" className="mb-1">
                  <Accordion.Header className="style1">
                    Collapsible Group Item #1
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item #2" className="mb-1">
                  <Accordion.Header className="style1">
                    Collapsible Group Item #2
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Item #3" className="mb-1">
                  <Accordion.Header className="style1">
                    Collapsible Group Item #3
                  </Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Bootstrap Accordion</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="defaultaccordion">
              <Accordion defaultActiveKey="Accordion Item #2">
                <Accordion.Item eventKey="Accordion Item #1" className="mb-1">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Accordion Item #2" className="mb-1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="Accordion Item #3" className="mb-1">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Closed Accordion</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="defaultaccordion">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" className="mb-1">
                  <Accordion.Header className="panel-heading1 style3">
                    Section 1
                  </Accordion.Header>
                  <Accordion.Body className="border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-1">
                  <Accordion.Header className="panel-heading1 style3">
                    Section 2
                  </Accordion.Header>
                  <Accordion.Body className="border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-1">
                  <Accordion.Header className="panel-heading1 style3">
                    Section 3
                  </Accordion.Header>
                  <Accordion.Body className="border">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Accordion Style 3</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="defaultaccordion">
              <ul className="demo-accordion accordionjs m-0">
                <li>
                  <Accordion>
                    <Accordion.Item eventKey="Section 1" className="mb-1">
                      <Accordion.Header className="panel-heading1 style3">
                        Section 1
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li>
                  <Accordion>
                    <Accordion.Item eventKey="Section 2" className="mb-1">
                      <Accordion.Header className="panel-heading1 style3">
                        Section 2
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li>
                  <Accordion>
                    <Accordion.Item eventKey="Section 3" className="mb-1">
                      <Accordion.Header className="panel-heading1 style3">
                        Section 3
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li>
                  <Accordion defaultActiveKey="Section 4" className="mb-1">
                    <Accordion.Item eventKey="Section 4">
                      <Accordion.Header className="panel-heading1 style3">
                        Section 4
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>
                <h3 className="card-title">Accordion style</h3>
              </Card.Title>
            </Card.Header>
            <Card.Body className="defaultaccordion">
              <div className="panel-group1" id="accordion1">
                <div className="panel panel-default mb-4">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header className="panel-heading1 style2">
                        <h4 className="panel-title1">Section 1</h4>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="panel panel-default">
                  <Accordion>
                    <Accordion.Item>
                      <Accordion.Header className="panel-heading1 style2">
                        Section 2
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. It uses a
                          dictionary of over 200 Latin words
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled.Nor again is there anyone who loves or
                          pursues or desires to obtain pain of itself, because
                          it is pain, but because occasionally circumstances
                          occur in which toil and pain can procure him some
                          great pleasure. To take a trivial example, which of us
                          ever undertakes laborious physical exercise
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}