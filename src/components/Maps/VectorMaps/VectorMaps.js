import React, {useState}from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
import * as vectormapsdata from "../../../data/Maps/Vector/vectormapsdata"
export default function VectorMaps() {
   const [content, setContent] = useState("");
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Maps</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Maps
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

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h3 className="card-title">World Map</h3>
            </Card.Header>
            <Card.Body>
              <div className="worldh ">
              <vectormapsdata.WorldMap setTooltipContent={setContent} />
              {content}
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Asia Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap2" className="stateh ">
                <vectormapsdata.MapAsiamap/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Annotation Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap3" className="stateh ">
              <vectormapsdata.MapAnnotation/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Line Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap4" className="stateh ">
              <vectormapsdata.Mapline/>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Basicmarkers Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap5" className="stateh ">
                <vectormapsdata.Basicmarkers/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="card m-b-20">
            <Card.Header>
              <h3 className="card-title">Custommarkers Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap6" className="stateh ">
              <vectormapsdata.Custommarkers/>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h3 className="card-title">Graticule Map</h3>
            </Card.Header>
            <Card.Body>
              <div id="vmap7" className="stateh ">
                <vectormapsdata.Shapeworldmap/>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
