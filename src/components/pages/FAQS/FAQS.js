import React from "react";
import { Accordion, Breadcrumb, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function FAQS() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Faq</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Faq
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
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title as="h3">Faqs</Card.Title>
            </Card.Header>
            <Card.Body className="faqaccordion">
              <div
                aria-multiselectable="true"
                className="accordion"
                id="accordion"
                role="tablist"
              >
                <Accordion className="acc-card mb-4 " flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      How To Insert All The Plugins?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="acc-card mb-4" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      How Can I contact?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="acc-card mb-4" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      Can I use this Plugins in Another Template?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="acc-card mb-4" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      It is Easy to Customizable?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="acc-card mb-4" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      How can I download This template?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion className="acc-card mb-4" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="acc-header">
                      How Can I Add another page in Template?
                    </Accordion.Header>
                    <Accordion.Body className="border">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className="border-bottom-0">
              <Card.Title as="h3">Ask Question</Card.Title>
            </Card.Header>
            <Card.Body>
              <h5>
                If Your Query Not Clarifified Post Your Question, My Customer
                Support will help You
              </h5>
              <div className="pt-4">
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control me-3"
                    id="name1"
                    placeholder="Your Name"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control me-3"
                    id="email"
                    placeholder="Email Address"
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <textarea
                    className="form-control"
                    name="example-textarea-input"
                    rows="6"
                    placeholder="Post Your Quesry"
                  ></textarea>
                </Form.Group>
                <Link to="#" className="btn btn-primary">
                  Send Question
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
