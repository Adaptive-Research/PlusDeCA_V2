import React, {useState} from "react";
import {Button, Col, FormGroup, Row, Modal } from "react-bootstrap";
import {SaveActivity,UpdateActivity} from "../../../data/customlibs/api";










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




    console.log("ModalEditActivity") ;
    //console.log("props") ;
    //console.log(props) ;
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


    

    
    function ForceRender() {
        if (props.SendCloseMessage !== undefined)
          props.SendCloseMessage() ;
        if (props.ForceRenderActivity !== undefined)
          props.ForceRenderActivity() ;
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
            let des = description.replace("'","''") ;
            if (props.Mode === "Add") 
                SaveActivity(storedToken,idEntreprise, name,webSite,email,phone,des,ForceRender) ;
            else 
                UpdateActivity(storedToken,idEntreprise,idActivite, name,webSite,email,phone,des,ForceRender) ;
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
                                <label htmlFor="name">{props.nameLabel}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={name}
                                    placeholder={nameMsg === "" ? props.nameLabel : nameMsg}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row className="add-space">
                        <Col lg={7} md={12}>
                            <FormGroup>
                                <label htmlFor="website">{props.websiteLabel}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={webSite}
                                    placeholder={webSiteMsg === "" ? props.websiteLabel : webSiteMsg}
                                    onChange={(e) => setWebSite(e.target.value)}
                                />
                            </FormGroup>
                        </Col>

                        <Col lg={5} md={12}>
                            <FormGroup>
                                <label htmlFor="contact">{props.phoneLabel}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={phone}
                                    placeholder={phoneMsg === "" ? props.phoneLabel : phoneMsg}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="add-space">

                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">{props.emailLabel}</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    value={email}
                                    placeholder={emailMsg === "" ? props.emailLabel : emailMsg}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                        </Col>


                    </Row>



                    <Row className="add-space">

                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">{props.descriptionLabel}</label>
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
                        {props.cancelBtn}
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        {props.saveBtn}
                    </Button>

                </Modal.Footer>

            </Modal>


        </div>
    );
}
