import React, {useState} from "react";
import {Button, Col, FormGroup, Row, Modal } from "react-bootstrap";

import axios from "axios";
import {useNavigate} from "react-router";








export default function ModalEditCompany(props) {

    const storedToken = localStorage.getItem("token");


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;




    const [idEntreprise, SetIdEntreprise] = useState("") ;
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


    //console.log("ModalEditCompany") ;

    /*
    console.log("props") ;
    console.log(props.show) ;
    console.log("lastIsModalOpen") ;
    console.log(lastIsModalOpen) ;
    */



    if (reloadInfos === true)
    {
        SetIdEntreprise(props.idEntreprise) ;
        setName(props.Nom) ;
        setSiret(props.Siret) ;
        setWebSite(props.SiteWeb) ;
        setEmail(props.Email) ;
        setPhone(props.Telephone) ;
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }


    
   




    const SaveCompany = async () => {
        //console.log("SaveCompany") ;
        //console.log("idEntreprise") ;
        //console.log(idEntreprise) ;
    
        
        if (props.Mode === "Add")
        {
            const url = process.env.REACT_APP_API_CREATE_ENTERPRISE_URL;
            const response = await axios.post(url, {
                token: storedToken,
                Submit: 1,
                debug:1,
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
            console.log(response.data) ;
            
            if (response.data.includes("ERROR:")) {
                console.log(`Error: ${response.data}`);
            } else {
                console.log("company added");
                if (props.SendCloseMessage !== null)
                {
                    props.SendCloseMessage() ;
                    if (props.ForceRender !== null)
                        props.ForceRender() ;
                }
            }
        }
        else{
            const url = process.env.REACT_APP_API_EDIT_ENTERPRISE_URL;
            const response = await axios.post(url, {
                token: storedToken,
                Submit: 1,
                debug: 1,
                idEntreprise: idEntreprise ,
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
                console.log("company modified");
                if (props.SendCloseMessage !== null)
                {
                    props.SendCloseMessage() ;
                    if (props.ForceRender !== null)
                        props.ForceRender() ;
                }
            }


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

        
        if (nameCheck && siretCheck) 
            SaveCompany() ;
        
    }






    const handleSave = (e) => {

        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } finally {
        }
    }

    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }


    return (
        <div>

            <Modal size="lg" show={isModalOpen}>

                <Modal.Header closeButton>

                <Modal.Title> {props.Titre}</Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Row className="add-space">
                        <Col lg={4} md={12}>
                            <FormGroup>
                                <label htmlFor="siret">Siret</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={siret}
                                    placeholder={siretMsg === "" ? "Siret" : siretMsg}
                                    onChange={(e) => setSiret(e.target.value) }
                                />
                            </FormGroup>
                        </Col>

                        <Col lg={8} md={12}>
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
                                <label htmlFor="contact">Téléphone</label>
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



                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>

                </Modal.Footer>

            </Modal>


        </div>
    );
}
