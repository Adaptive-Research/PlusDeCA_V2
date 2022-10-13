import React from "react";

import {Breadcrumb,Row,Col,Card} from "react-bootstrap"
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
export default function ContentScrollBar() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Content Scroll Bar</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
              Components
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item active breadcrumds"
              aria-current="page"
            >
              Content Scroll Bar
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
              <div className="card-title">Default-scroll</div>
            </Card.Header>
            <Card.Body className="scroll">
              <div className="content vscroll h-300">
                <Scrollbars>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum
                  </p>
                  <p>
                    you need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc
                  </p>
                  <p>
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur,
                  </p>
                  <p>
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur
                  </p>
                  <p>
                    explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum
                  </p>
                  <p>
                    you need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc
                  </p>
                  <p>
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur,
                  </p>
                  <p>
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur
                  </p>
                  <p>
                    explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure
                  </p>
                </Scrollbars>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <div className="card-title">Minimal-scroll</div>
            </Card.Header>
            <Card.Body className=" scroll">
              <div className="content-1 vscroll h-300">
                <Scrollbars>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum
                  </p>
                  <p>
                    you need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc
                  </p>
                  <p>
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur,
                  </p>
                  <p>
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur
                  </p>
                  <p>
                    explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure
                  </p>
                  <p>
                    you need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the Lorem Ipsum generators on the
                    Internet tend to repeat predefined chunks as necessary,
                    making this the first true generator on the Internet. It
                    uses a dictionary of over 200 Latin words, combined with a
                    handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free from repetition, injected humour, or
                    non-characteristic words etc
                  </p>
                  <p>
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur,
                  </p>
                  <p>
                    adipisci velit, sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur
                  </p>
                  <p>
                    explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure
                  </p>
                </Scrollbars>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
