import React, {useState, useRef} from "react";
import {Button, Col, FormGroup, Row, Modal } from "react-bootstrap";
import {SaveCompany, UpdateCompany,UpdateFondateurUser, UpdateFonctionUser} from "../../../data/customlibs/api";












export default function ModalEditCompany(props) {
    PrintLog("ModalEditCompany") ;
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


    const Founder = useRef("1") ;
    const [job, setJob] = useState("") ;



    //PrintLog("ModalEditCompany") ;

    /*
    PrintLog("props") ;
    PrintLog(props.show) ;
    PrintLog("lastIsModalOpen") ;
    PrintLog(lastIsModalOpen) ;
    */



    if (reloadInfos === true)
    {
        SetIdEntreprise(props.idEntreprise) ;
        setName(props.Nom) ;
        setSiret(props.Siret) ;
        setWebSite(props.SiteWeb) ;
        setEmail(props.Email) ;
        setPhone(props.Telephone) ;
        setJob(props.Fonction) ;
        Founder.current = props.Fondateur ;

        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }


    
    function renderFounder() {
        PrintLog("renderFounder") ;   
        const ListeReponses = [{"id":"1","reponse":""} , {"id":"2","reponse":"Fondateur"},{"id":"3","reponse":"Co Fondateur"}  ] ;
        let options =  ListeReponses.map( (Ligne) => 
                {
                    if (Ligne.sexe !== null) {
                        if (Ligne.id !== Founder.current)
                            return <option value={Ligne.id}> {Ligne.reponse}</option> ;
                        else 
                            return <option value={Ligne.id} selected> {Ligne.reponse}</option> ;
                    }
                })

                PrintLog("options") ;
                PrintLog(options) ;
                return options ;
    }



    function ForceRender(idE) {
        let idE2 = idEntreprise ;
        if (idE !== undefined)
            idE2 = idE

        //PrintLog("ModalEditCompany ForceRender") ;
        //PrintLog("idEntreprise: " + idE2) ;
        //PrintLog("Job: " + job) ;
        //PrintLog("Founder: " + Founder.current) ;
        
        
        UpdateFondateurUser(storedToken,null,idE2,Founder.current) ;
        UpdateFonctionUser(storedToken,null,idE2,job) ;
        if (props.SendCloseMessage !== undefined)
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;

        if (props.ForceRender !== undefined)
            props.ForceRender() ;

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
        {
            if (props.Mode === "Add")
                SaveCompany(storedToken,name,webSite,siret,email,phone,ForceRender) ;
            else
                UpdateCompany(storedToken,idEntreprise, name,webSite,siret,email,phone, ForceRender) ;
        }
    }






    const handleSave = (e) => {

        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            PrintLog(e);
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
                                <label htmlFor="email">{props.founderLabel}</label>
                                <div className="">
                                        <select id="Fondateur"  className="form-control" onChange={(e) =>  Founder.current = e.target.value}>
                                            {renderFounder()} 
                                        </select>
                                    </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">{props.jobLabel}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={job}
                                    placeholder={props.jobLabel}
                                    onChange={(e) => setJob(e.target.value)}
                                />
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
