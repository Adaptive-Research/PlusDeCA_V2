import React, {useState,useRef,useEffect} from "react";
import {Button, Col, FormGroup, Row, Modal } from "react-bootstrap";
import {checkEmail} from "../../../data/customlibs/utils";
import {AddManagedUser,UpdatePasswordUser,UpdateRoleUser} from "../../../data/customlibs/api";
import {encrypt} from "../../../data/customlibs/hasher";
import {PrintLog} from  "../../../data/customlibs/utils";












export default function ModalEditUser(props) {
    PrintLog("ModalEditUser") ;
    PrintLog(props) ;

    const storedToken = localStorage.getItem("token");



    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;


    // informations a afficher
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");

    const idRole = useRef("1");
    const [isReadOnly,setReadOnly] =  useState(false) ;



    useEffect(() => {

        // on met a jour la select box
        let s = document.getElementById("idRole") ;
        if (s !== null)
        {
            for (var option of s.options) {
                if (idRole.current == option.value)
                option.selected = true ;
            }
        }

       

      });




    if (reloadInfos === true)
    {
        if (props.Ligne !== undefined && props.Ligne !== null) {
            setEmail(props.Ligne.Email) ;
            if (props.Ligne.idRole !== undefined)
                if (props.Ligne.idRole !== null)
                    if (props.Ligne.idRole !== "") 
                        idRole.current = props.Ligne.idRole ;
        }
        else{
            setEmail("") ;
            idRole.current = "1";
        }

         // on met a readonly l'input box de l'adresse mail
        if (props.Mode === "Add")
        {
         if (isReadOnly === true)
             setReadOnly(false) ;
        }
        else {
            if (isReadOnly === false)
                setReadOnly(true) ;
        }
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;

        if (props.show === true)
            setReloadInfos(true) ;

    }        


    PrintLog("idRole:" + idRole.current) ;
    
   



    



    const inputsValidation = () => {
        PrintLog("inputsValidation") ;
        PrintLog(email,password) ;
        let emailCheck, passwordCheck;

        if (props.Mode === "Add"){

            if (email === "") {
                setEmailMsg("Email is required");
                emailCheck = false;
                setEmail("") ;
            } else if (!checkEmail(email)) {
                setEmailMsg("Email is not valid");
                emailCheck = false;
                setEmail("") ;
            } else {
                setEmailMsg("");
                emailCheck = true;
            }

            if (password === "") {
                setPasswordMsg("Password is required");
                passwordCheck = false;
                setPassword("") ;
            } else if (password.length < 4) {
                setPasswordMsg("Password must be at least 8 characters");
                passwordCheck = false;
                setPassword("") ;
            } else {
                setPasswordMsg("");
                passwordCheck = true;
            }


            if (emailCheck && passwordCheck) {
                PrintLog("after emailCheck && passwordCheck ") ;
                
                let values = AddManagedUser(storedToken, email, encrypt(password),props.idEntreprise,idRole.current);
                let res = values[0] ;
                let data = values[1] ;
                if (res === false)
                    PrintLog(data) ;
                else {

                    if (props.ForceRender !== null)
                        props.ForceRender() ;

                    if (props.SendCloseMessage !== null)
                        props.SendCloseMessage() ;
                }
            }
        }
        else {
            if (password !== "") {
                if (password.length >= 4) {
                    setPasswordMsg("");
                    UpdatePasswordUser(storedToken, email, encrypt(password));
                } else {
                    setPasswordMsg("Password must be at least 8 characters");
                    passwordCheck = false;
                    setPassword("") ;
                }
            }
            UpdateRoleUser(storedToken, email,props.idEntreprise,idRole.current);

            if (props.ForceRender !== null)
                props.ForceRender() ;

            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
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
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="email">{props.emailField}</label>
                                <input
                                    id="email_ManagedUser" 
                                    className="form-control"
                                    type="email"
                                    readOnly={isReadOnly}
                                    defaultValue={email}
                                    placeholder={emailMsg === "" ? props.emailField : emailMsg}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="name">{props.accessRightsField}</label>

                                <select id="idRole"  className="form-control" onChange={(e) =>  idRole.current = e.target.value}>
                                            <option value="1">Standard</option>
                                            <option value="2">Admin</option>
                                            <option value="3">Full Admin</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label htmlFor="website">{props.passwordField}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder={emailMsg === "" ? props.passwordField : passwordMsg}
                                    onChange={(e) => setPassword(e.target.value)}
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
