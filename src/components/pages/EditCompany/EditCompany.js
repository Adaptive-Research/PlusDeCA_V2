import React, {useState} from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {Card, Col, FormGroup, Row,} from "react-bootstrap";

import axios from "axios";
import {useNavigate} from "react-router";


export default function EditCompany() {


    const [siret, setSiret] = useState("");
    const [siretMsg, setSiretMsg] = useState("");
    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [webSite, setWebSite] = useState("");
    const [webSiteMsg, setWebSiteMsg] = useState("");
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [responseMsg, setResponseMsg] = useState("Ajouter entreprise");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    console.log(token);


    const requestCompanyRegister = async () => {
        const url = process.env.REACT_APP_API_CREATE_ENTERPRISE_URL;

        const response = await axios.post(url, {
            token: token,
            Submit: 1,
            Nom: name,
            SiteWeb: webSite,
            Siret: siret,
            Email: email,
            Telephone: phone
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        if (response.data.includes("ERROR:")) {
            console.log(`Error: ${response.data}`);
        } else {
            console.log("enterprise added");
            setResponseMsg("Entreprise ajoutée");
        }

    }


    const changeInput = (e, type) => {
        if (type === "siret") {
            setSiret(e.target.value);
        } else if (type === "name") {
            setName(e.target.value);
        } else if (type === "webSite") {
            setWebSite(e.target.value);
        } else if (type === "email") {
            setEmail(e.target.value);
        }
    }


    const inputsValidation = () => {
        let nameCheck, siretCheck;

        if (name.length === 0) {
            nameCheck = false;
            setNameMsg("Le nom est requis")
        } else {
            nameCheck = true;
            setNameMsg("")
        }


        if (siret.length === 0) {
            siretCheck = false;
            setSiretMsg("Le siret est requis")
        } else {
            siretCheck = true;
            setSiretMsg("");
        }


        if (nameCheck && siretCheck) {
            requestCompanyRegister()
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } finally {
            console.log("attempted to create company")
        }
    }

    const returnBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Mon entreprise</h1>
                </div>
            </div>

            <Row>

                <Col lg={12} xl={8} md={12} sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h3">{responseMsg}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col lg={6} md={12}>
                                    <FormGroup>
                                        <label htmlFor="siret">Siret</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={siret}
                                            placeholder={siretMsg === "" ? "Siret" : siretMsg}
                                            onChange={(e) => changeInput(e, "siret")}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6} md={12}>
                                    <FormGroup>
                                        <label htmlFor="name">Nom</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={name}
                                            placeholder={nameMsg === "" ? "Nom" : nameMsg}
                                            onChange={(e) => changeInput(e, "name")}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6} md={12}>
                                    <FormGroup>
                                        <label htmlFor="website">Site Web</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={webSite}
                                            placeholder={webSiteMsg === "" ? "Site Web" : webSiteMsg}
                                            onChange={(e) => changeInput(e, "webSite")}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg={6} md={12}>
                                    <FormGroup>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="form-control"
                                            type="email"
                                            value={email}
                                            placeholder={emailMsg === "" ? "Email" : emailMsg}
                                            onChange={(e) => changeInput(e, "email")}
                                        />
                                    </FormGroup>
                                </Col>

                                <FormGroup className="mt-2">
                                    <label htmlFor="contact">Contact</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={phone}
                                        placeholder={phoneMsg === "" ? "Contact" : phoneMsg}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </FormGroup>

                            </Row>

                        </Card.Body>

                        <Card.Footer className="text-end">
                            <button className="btn btn-success mt-1 me-2" onClick={handleSubmit}>
                                Enregistrer
                            </button>

                            <button className="btn btn-danger" onClick={returnBack}>
                                Annuler
                            </button>
                        </Card.Footer>
                    </Card>
                </Col>


            </Row>

        </div>
    );
}
