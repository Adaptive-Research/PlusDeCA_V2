import React, {useState} from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {Card, Col, FormGroup, FormSelect, Row,} from "react-bootstrap";

import axios from "axios";
import {useNavigate} from "react-router";
import {getEnterprisesByUser} from "../../../data/customlibs/utils";


export default function UpdateActivity() {

    const activityDetails = JSON.parse(localStorage.getItem("activityDetails"));

    let idCompany;
    const [enterprise, setEnterprise] = useState(activityDetails[7]);
    const [activity, setActivity] = useState(activityDetails[6]);
    const [activityMsg, setActivityMsg] = useState("");
    const [name, setName] = useState(activityDetails[1]);
    const [nameMsg, setNameMsg] = useState("");
    const [description, setDescription] = useState(activityDetails[2]);
    const [descriptionMsg, setDescriptionMsg] = useState("");
    const [webSite, setWebSite] = useState(activityDetails[3]);
    const [webSiteMsg, setWebSiteMsg] = useState("");
    const [email, setEmail] = useState(activityDetails[4]);
    const [emailMsg, setEmailMsg] = useState("");
    const [phone, setPhone] = useState(activityDetails[5]);
    const [phoneMsg, setPhoneMsg] = useState("");
    const [responseMsg, setResponseMsg] = useState("Editer activité");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");


    getEnterprisesByUser();

    const getEnterpriseName = () => {
        const storedEnterprise = JSON.parse(localStorage.getItem('userEnterprises'));
        // return each element id and name via html option tag
        return storedEnterprise.map((elem) => {
            return <option key={elem.id} value={elem.idEntreprise} selected={activityDetails[0]}>
                {elem.NomEntreprise}
            </option>
        })
    }


    const requestActivityUpdate = async () => {
        const url = "http://78.249.128.56:8001/API/Modifier-Activite";
        const token = localStorage.getItem("token");
        console.log(
            `
            token: ${token},
            submit: 1,
            idEntreprise: ${enterprise},
            id: ${activityDetails[0]},
                        
                       `
        )
        const response = await axios.post(url, {
            id: activityDetails[0],
            token: token,
            Submit: 1,
            idEntreprise: enterprise,
            TypeActivite: activity,
            Nom: name,
            Description: description,
            SiteWeb: webSite,
            Email: email,
            Telephone: phone,
            debug: 1
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        if (response.data.includes("ERROR:")) {
            console.log(`Error: ${response.data}`);
        } else {
            setResponseMsg("Activité modifiée");
            localStorage.removeItem('activityDetails');
        }

    }


    const changeInput = (e, type) => {
        if (type === "name") {
            setName(e.target.value);
        }
        if (type === "description") {
            setDescription(e.target.value);
        }
        if (type === "webSite") {
            setWebSite(e.target.value);
        }
        if (type === "email") {
            setEmail(e.target.value);
        }
        if (type === "phone") {
            setPhone(e.target.value);
        }
    }


    const inputsValidation = () => {
        let nameCheck;

        if (name.length === 0) {
            nameCheck = false;
            setNameMsg("Le nom est requis")
        } else {
            nameCheck = true;
            setNameMsg("")
        }


        if (nameCheck) {
            requestActivityUpdate()
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } finally {
            console.log("attempted to update activity")
            console.log(JSON.parse(localStorage.getItem('activityDetails')));
        }
    }

    const returnBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Mon activité</h1>
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
                                        <label htmlFor="activite">Entreprise</label>
                                        <FormSelect typeof="select" onChange={(e) => setEnterprise(e.target.value)}>
                                            {getEnterpriseName()}
                                        </FormSelect>

                                    </FormGroup>
                                </Col>
                                <Col lg={6} md={12}>

                                    <FormGroup>
                                        <label htmlFor="activite">Type activité</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={activity}
                                            placeholder={activityMsg ? activityMsg : "Type d'activité"}
                                            onChange={(e) => setActivity(e.target.value)}
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
                                        <label htmlFor="description">Description</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={description}
                                            placeholder={descriptionMsg === "" ? "Nom" : descriptionMsg}
                                            onChange={(e) => changeInput(e, "description")}
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

                                <Col lg={6} md={12}>
                                    <FormGroup>
                                        <label htmlFor="phone">Téléphone</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            value={phone}
                                            placeholder={phoneMsg === "" ? "Téléphone" : phoneMsg}
                                            onChange={(e) => changeInput(e, "phone")}
                                        />
                                    </FormGroup>
                                </Col>

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
