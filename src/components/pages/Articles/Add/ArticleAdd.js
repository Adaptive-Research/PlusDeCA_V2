import React, {useState} from "react";
import * as formeditor from "../../../../data/Form/formeditor/formeditor";
import * as fromadvanced from "../../../../data/Form/formadvanced/formadvanced";
import * as blogpost from "../../../../data/Pages/blogpost/blogpost";
import {Link} from "react-router-dom";
import {Card, Col, FormGroup, Row} from "react-bootstrap";

export default function ArticleAdd() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [categoryMsg, setCategoryMsg] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");


    const optionsCategorie = [
        {
            value: "technology",
            label: "Technology",
        },
        {
            value: "travel",
            label: "Travel",
        },
        {
            value: "food",
            label: "Food",
        },
        {
            value: "fashion",
            label: "Fashion",
        },
    ];

    // Function that changes inputs values on change
    const changeInputs = (e, name) => {
        if (name === "title") {
            setTitle(e.target.value)
        } else if (name == "category") {
            setCategory(e.target.value)
        } else if (name == "description") {
            setDescription(e.target.value)
        } else if (name == "photo") {
            setPhoto(e.target.value)
        }
    }


    // Function that update value of select box elements on change
    function updateSelectBox(e) {
        setCategory(e)
    }


    // Function that sends axios requesst to create a new article
    const requestArticleCreate = () => {
        console.log(`
        title: ${title}
        category: ${category}
        description: ${description}
        photo: ${photo}
        `)
    }


    // Function that validates the form
    const inputsValidation = () => {
        let titleCheck, categoryCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (category.length > 0) {
            categoryCheck = true;
            setCategoryMsg("");
        } else {
            categoryCheck = false;
            setCategoryMsg("La categorie est obligatoire");
        }

        if (description.length > 0) {
            descriptionCheck = true;
            setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            setDescriptionMsg("La description est obligatoire");
        }

        if (titleCheck && categoryCheck && descriptionCheck) {
            console.log("All good");
            requestArticleCreate();
        }
    }


    // Function that handle the submit event on the form
    const handleSubmit = () => {
        try {
            requestArticleCreate()
        } catch (e) {
            console.log(e);
        } finally {
            console.log("Attempted to create article")
        }
    }


    return (
        <div>
            <div>
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Ajout Article</h1>
                    </div>
                    <div className="ms-auto pageheader-btn">
                        <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`}
                              className="btn btn-success btn-icon text-white">
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
                        <form action="">

                            <Card>
                                <Card.Header>
                                    <Card.Title>Ajouter Nouvel Article</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="mb-4">
                                        <label className="col-md-3 form-label">Titre :</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={titleMsg === "" ? "Titre ..." : titleMsg}
                                                value={title}
                                                onChange={(e) => changeInputs(e, 'title')}
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-4">
                                        <label className="col-md-3 form-label">Categorie :</label>
                                        <div className="">
                                            <blogpost.Categorys Optioncategorys={optionsCategorie}
                                                                change={(e) => {
                                                                    updateSelectBox(e)
                                                                }}/>
                                        </div>
                                    </Row>
                                    {/* Row */}
                                    <Row>
                                        <label className="col-md-3 form-label mb-4">
                                            Description:
                                        </label>
                                        <div className="mb-4">
                                            <formeditor.FormEditorstyle1 placeholder={descriptionMsg}
                                                                         onChange={(e) => changeInputs(e, "description")}/>
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
                                    <button onClick={() => handleSubmit()} className="btn btn-primary">
                                        Sauvegarder
                                    </button>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/ArticleList`}
                                          className="btn btn-default float-end">
                                        Annuler
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
