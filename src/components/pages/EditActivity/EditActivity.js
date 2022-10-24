import React, {useState} from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {Card, Col, FormGroup, FormSelect, Row,} from "react-bootstrap";

import axios from "axios";
import {useNavigate} from "react-router";
import {getEnterprisesByUser} from "../../../data/customlibs/utils";


export default function EditActivity() {


    let idCompany;
    const [enterprise, setEnterprise] = useState("");
    const [activity, setActivity] = useState("");
    const [activityMsg, setActivityMsg] = useState("");
    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");
    const [webSite, setWebSite] = useState("");
    const [webSiteMsg, setWebSiteMsg] = useState("");
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [responseMsg, setResponseMsg] = useState("Editer activité");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");


    getEnterprisesByUser();

    console.log(JSON.parse(localStorage.getItem("userEnterprises")));

    const getEnterpriseName = () => {
        const storedEnterprise = JSON.parse(localStorage.getItem('userEnterprises'));
        // return each element id and name via html option tag
        return storedEnterprise.map((elem) => {
            return <option key={elem.id} value={elem.idEntreprise}>
                {elem.NomEntreprise}
            </option>
        })
    }


    const requestActivityRegister = async () => {
        const url = process.env.REACT_APP_API_CREATE_ACTIVITY_URL;
        const token = localStorage.getItem("token");
        console.log(
            `
            token: ${token},
            submit: 1,
            idEntreprise: ${enterprise},
                        
                       `
        )
        const response = await axios.post(url, {
            token: token,
            Submit: 1,
            idEntreprise: enterprise,
            TypeActivite: activity,
            Nom: name,
            Description: description,
            SiteWeb: webSite,
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
            console.log("activity added");
            setResponseMsg("Activité ajoutée");
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
            requestActivityRegister()
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } finally {
            console.log("attempted to create activity")
        }
    }

    const returnBack = () => {
        navigate(-1);
    }


    return (
        <div  className="EditActivity">

            <Card>
                <Card.Header>
                    <Card.Title as="h3">{responseMsg}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="name">Nom</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={name}
                                    placeholder={nameMsg === "" ? "Nom" : nameMsg}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="add-space">
                        <Col lg={7} md={12}>
                            <FormGroup>
                                <label htmlFor="website">Site Web</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={webSite}
                                    placeholder={webSiteMsg === "" ? "Site Web" : webSiteMsg}
                                    onChange={(e) => setWebSite(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                        <Col lg={5} md={12}>
                            <FormGroup>
                                <label htmlFor="phone">Téléphone</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={phone}
                                    placeholder={phoneMsg === "" ? "Téléphone" : phoneMsg}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </FormGroup>

                        </Col>
                    </Row>

                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    placeholder={emailMsg === "" ? "Email" : emailMsg}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>

                        </Col>

                    </Row>

                    <Row className="add-space">

                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="description">Description</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={description}
                                    placeholder={descriptionMsg === "" ? "Description" : descriptionMsg}
                                    onChange={(e) => setDescription(e.target.value)}
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

        </div>
    );
}
