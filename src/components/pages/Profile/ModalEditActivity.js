import React, {useState} from "react";
import {Button, Col, FormGroup, Row, Modal } from "react-bootstrap";

import axios from "axios";








export default function ModalEditActivity(props) {
 
    const storedToken = localStorage.getItem("token");

    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;


    const [idEntreprise, SetIdEntreprise] = useState("") ;
    const [idActivite, SetIdActivite] = useState("") ;
    const [name, setName] = useState("");
    const [nameMsg, setNameMsg] = useState("");
    const [webSite, setWebSite] = useState("");
    const [webSiteMsg, setWebSiteMsg] = useState("");
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneMsg, setPhoneMsg] = useState("");
    const [description, setDescription] = useState("");




    //console.log("ModalEditActivity") ;
    /*
    console.log("props.idEntreprise") ;
    console.log(props.idEntreprise) ;
    console.log("props.idActivite") ;
    console.log(props.idActivite) ;
    */


    if (reloadInfos === true)
    {
        SetIdEntreprise(props.idEntreprise) ;
        SetIdActivite(props.idActivite) ;
        setName(props.Nom) ;
        setWebSite(props.SiteWeb) ;
        setEmail(props.Email) ;
        setPhone(props.Telephone) ;
        setDescription(props.Description)
        setReloadInfos(false) ;
    }




    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }


    






    const SaveActivity = async () => {
        //console.log("SaveActivity") ;

        if (props.Mode === "Add")
        {

            const url = process.env.REACT_APP_API_CREATE_ACTIVITY_URL;

            const response = await axios.post(url, {
                token: storedToken,
                Submit: 1,
                debug:1,
                idEntreprise: idEntreprise,
                Nom: name,
                SiteWeb: webSite,
                Email: email,
                Telephone: phone,
                Description: description
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })


            if (response.data.includes("ERROR:")) {
                console.log(`Error: ${response.data}`);
            } else {
                console.log("Activity added");
               
            }
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }
        else {
            const url = process.env.REACT_APP_API_EDIT_ACTIVITY_URL ;
            const response = await axios.post(url, {
                token: storedToken,
                Submit: 1,
                debug:1,
                idEntreprise: idEntreprise,
                idActivite: idActivite ,
                Nom: name,
                SiteWeb: webSite,
                Email: email,
                Telephone: phone,
                Description: description
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })


            if (response.data.includes("ERROR:")) {
                console.log(`Error: ${response.data}`);
            } else {
                console.log("Activity modified");
            }
            
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }
    }




    const inputsValidation = () => {
        let nameCheck ;

        if (name.length === 0) {
            nameCheck = false;
            setNameMsg("Le nom est requis")
        } else {
            nameCheck = true;
            setNameMsg("")
        }


        
        if (nameCheck) {
            SaveActivity() ;
            if (props.ForceRender !== null)
                props.ForceRender() ;
            
        }
    
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

                <Modal.Title>  {props.Titre} </Modal.Title>

                </Modal.Header>

                <Modal.Body>

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



                    <Row className="add-space">

                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">Description</label>
                                <textarea
                                    className="form-control"
                                    rows="6"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
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