import React from "react";
import { Nav, TabContainer, Tabs, Tab, Breadcrumb, Row,Card,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function TABS() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tabs</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Advanced Elements
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Tabs
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
        <Col xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tabs style</h3>
            </Card.Header>
            <Card.Body className="p-6">
              <div className="panel panel-primary">
                <div className="tab-menu-heading border">
                  <div className="tabs-menu ">
                    <Tabs
                      className=" nav panel-tabs"
                      variant="pills"
                      defaultActiveKey="tab5"
                    >
                      <Tab eventKey="tab5" className="me-1 " title="Tab 1">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr,
                        </p>
                      </Tab>
                      &nbsp;
                      <Tab eventKey="tab6" className="  me-1" title="Tab 2">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et
                        </p>
                      </Tab>
                      &nbsp;
                      <Tab eventKey="tab7" className="me-1" title="Tab 3">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                        </p>
                      </Tab>
                      &nbsp;
                      <Tab eventKey="tab8" title="Tab 4">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et
                        </p>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tabs Style</h3>
            </Card.Header>
            <Card.Body className="p-6">
              <div className="panel panel-primary">
                <div className=" tab-menu-heading border">
                  <div className="tabs-menu1 tabstyle2">
                    <Tabs
                      variant="pills"
                      defaultActiveKey="tab6"
                      className="panel-tabs"
                    >
                      <Tab eventKey="tab5" className=" me-1" title="Tab 1">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor
                        </p>
                      </Tab>
                      <Tab eventKey="tab6" className="  me-1" title="Tab 2">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et
                        </p>
                      </Tab>
                      <Tab eventKey="tab7" className="me-1" title="Tab 3">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          invidunt ut labore et dolore magna aliquyam erat, sed
                          diam voluptua. At vero eos et Lorem ipsum dolor sit
                          amet, consetetur sadipscing elitr, sed diam nonumy
                          eirmod tempor invidunt ut labore et dolore magna
                          aliquyam erat, sed diam voluptua. At vero eos et
                        </p>
                      </Tab>
                      <Tab eventKey="tab8" title="Tab 4">
                        <hr />
                        <p>
                          page editors now use Lorem Ipsum as their default
                          model text, and a search for 'lorem ipsum' will
                          uncover many web sites still in their infancy. Various
                          versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and
                          the like
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et
                        </p>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Tabs on right side</h3>
            </Card.Header>
            <Card.Body className="p-6">
              <TabContainer
                type="button"
                id="left-tabs-example"
                defaultActiveKey="Tab 1"
                variant="pills"
              >
                <div className="tab_wrapper second_tab row">
                  <Tab.Content className="content_wrapper col-sm-9">
                    <Tab.Pane eventKey="Tab 1" className="tab_content">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose It is
                        a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its
                        layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like) .(injected humour and the like).
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tab 2" className="tab_content">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" It is a long established
                        fact that a reader will be distracted by the readable
                        content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident,
                        sometimes on purpose (injected humour and the like)
                        .(The Extremes of Good and Evil) by Cicero, written in
                        45 BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance. The first line of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
                        a line in section 1.10.32.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tab 3" className="tab_content">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years,It is a long established fact that a reader will
                        be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, Various versions have evolved over the years,
                        sometimes by accident, sometimes on purpose (injected
                        humour and the like) .(The Extremes of Good and Evil) by
                        Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                        amet..", comes from a line in section 1.10.32.sometimes
                        by accident, sometimes on purpose (injected humour and
                        the like) . sometimes by accident, sometimes on purpose
                        (injected humour and the like) .
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tab 4" className="tab_content">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years,It is a long established fact that a reader will
                        be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like) . sometimes by accident,
                        sometimes on purpose (injected humour and the like) .
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tab 5" className="tab_content">
                      <p>
                        It is a long established fact that a It is a long
                        established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look
                        like readable English. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum as their
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like) . reader will be distracted by the readable
                        content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to using
                        'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and
                        web page editors now use Lorem Ipsum as their default
                        model text, and a search for 'lorem ipsum' will uncover
                        many web sites still in their infancy. Various versions
                        have evolved over the years, Many desktop publishing
                        packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for 'lorem ipsum'
                        will uncover many web sites still in their infancy.
                        Various versions have evolved over the years, .sometimes
                        by accident, sometimes on purpose (injected humour and
                        the like) .
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tab 6" className="tab_content">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by It is a long established fact that a reader
                        will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search
                        for 'lorem ipsum' will uncover many web sites still in
                        their infancy. Various versions have evolved over the
                        years, sometimes by accident, sometimes on purpose
                        (injected humour and the like) .Cicero, written in 45
                        BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance. The first line of
                        Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
                        a line in section 1.10.32.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>

                  <Nav
                    defaultActiveKey="Tab 5"
                    className="flex-column tab_list col-sm-3 righttab"
                  >
                    <Nav.Item className="">
                      <Nav.Link eventKey="Tab 1">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tab 2">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tab 3">Tab 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tab 4">Tab 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tab 5">Tab 5</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Tab 6">Tab 6</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </TabContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
