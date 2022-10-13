import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card,Row,Col,} from "react-bootstrap";
export default function Terms() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Terms</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Pages
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Terms
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

      <Row className="row ">
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>
                <b>Welcome to Zanex</b>
              </h4>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>
                <b>Using Our Services</b>
              </h4>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>
                <b>Privacy policy</b>
              </h4>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>
                <b>Copyright </b>
              </h4>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h4>
                <b>Terms and Conditions</b>
              </h4>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter consequences
              </p>
              <ul>
                <li>
                  <i className="fa fa-angle-double-right"></i> ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i> quas molestias
                  excepturi sint occaecati cupiditate non provident
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i> Nam libero
                  tempore, cum soluta nobis est eligendi optio cumque
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i> Temporibus autem
                  quibusdam et aut officiis debitis aut rerum necessitatibus
                  saepe eveniet ut et voluptates
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i> repudiandae sint
                  et molestiae non recusandae itaque earum rerum hic tenetur a
                  sapiente delectus
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i> ut aut reiciendis
                  voluptatibus maiores alias consequatur aut perferendis
                  doloribus asperiores repellat
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card>
            <div className="card-body text-start">
              <div className="terms">
                <p>Was this information is Helpful?</p>
                <Link to="" className="btn btn-primary text-white me-2">
                  Yes
                </Link>
                <Link to="" className="btn btn-secondary text-white me-2">
                  No
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
