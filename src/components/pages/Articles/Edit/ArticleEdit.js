import React from "react";
import * as formeditor from "../../../../data/Form/formeditor/formeditor";
import * as fromadvanced from "../../../../data/Form/formadvanced/formadvanced";
import * as blogpost from "../../../../data/Pages/blogpost/blogpost";
import { Link } from "react-router-dom";
import { Row, Breadcrumb, Col, Card } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
export default function ArticleEdit() {
    return (
        <div>
            <div>
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Editer Article</h1>
                        <Breadcrumb className="breadcrumb">
                            <Breadcrumb.Item className="breadcrumb-item" href="#">
                                Pages
                            </Breadcrumb.Item>
                            <Breadcrumb.Item
                                className="breadcrumb-item active breadcrumds"
                                aria-current="page"
                            >
                                Editer Article
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="ms-auto pageheader-btn">
                        <Link to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`} className="btn btn-success btn-icon text-white">
              <span>
                <i className="fe fe-log-in"></i>&nbsp;
              </span>
                            Retour
                        </Link>
                    </div>
                </div>
                {/* PAGE-HEADER END */}
                {/* ROW-1 OPEN */}
                <Row>
                    <Col xl={8} className="mx-auto">
                        <Card>
                            <Card.Header>
                                <Card.Title>Editer Article</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-4">
                                    <label className="col-md-3 form-label">Titre :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Typing....."
                                        />
                                    </div>
                                </Row>
                                <Row className="mb-4">
                                    <label className="col-md-3 form-label">Categorie :</label>
                                    <div className="">
                                        <blogpost.Categorys />
                                    </div>
                                </Row>
                                {/* Row */}
                                <Row>
                                    <label className="col-md-3 form-label mb-4">
                                        Description :
                                    </label>
                                    <div className="mb-4">
                                        <formeditor.FormEditorstyle1 />
                                    </div>
                                </Row>
                                {/*End Row*/}
                                <FormGroup className="mb-0 file">
                                    <label className="col-md-3 form-label mb-4">
                                       Photo :
                                    </label>
                                    <fromadvanced.OuterDropzone
                                        id="demo"
                                        type="file"
                                        name="files"
                                        accept=".jpg, .png, image/jpeg, image/png"
                                        multiple
                                    />
                                </FormGroup>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`} className="btn btn-primary">
                                    Valider
                                </Link>
                                <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`} className="btn btn-default float-end">
                                    Annuler
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
