import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveBusinessCard,UpdateBusinessCard} from "../../../data/customlibs/api";






export default function ModalEditBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditBusinessCard") ;
    //console.log("props") ;
    //console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    //Les variables pour la sauvegarde des Cartes de Visites

    const [lieuRencontre,setLieuRencontre] = useState("");
    const [entreprise,setEntreprise] = useState("");
    const [siteWeb,setSiteWeb] = useState("");
    const sexe = useRef("");
    const [prenom,setPrenom] = useState("");
    const [nom,setNom] = useState("");
    const [fonction,setFonction] = useState("");
    const [telephone,setTelephone] = useState("");
    const [email,setEmail] = useState("");
    const [idBusinessCard,setIdBusinessCard] = useState("");

//Pour les messages d'erreurs 
const [lieuRencontreMsg,setLieuRencontreMsg] = useState("");
const [entrepriseMsg,setEntrepriseMsg] = useState("");
const [siteWebMsg,setSiteWebMsg] = useState("");
const [prenomMsg,setPrenomMsg] = useState("");
const [nomMsg,setNomMsg] = useState("");
const [fonctionMsg,setFonctionMsg] = useState("");
const [telephoneMsg,setTelephoneMsg] = useState("");
const [emailMsg,setEmailMsg] = useState("");

    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEdit ;
        sexe.current = props.Sexe ;
        setLieuRencontre(props.LieuRencontre);
        setEntreprise(props.Entreprise);
        setSiteWeb(props.SiteWeb);
        setPrenom(props.Prenom);
        setNom(props.Nom);
        setFonction(props.Fonction);
        setTelephone(props.Telephone);
        setEmail(props.Email);
        setIdBusinessCard(props.IdBusinessCard);
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }





    


    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;  

        console.log("LieuRencontre: " + lieuRencontre) ;
        console.log("SiteWeb: " + siteWeb) ;
        console.log("Entreprise: " + entreprise) ;
        console.log("Sexe: " + sexe.current) ;
        console.log("Prenom: " + prenom) ;
        console.log("Nom: " + nom) ;
        console.log("Fonction: " + fonction) ;
        console.log("Telephone: " + telephone) ;
        console.log("Email: " + email) ;

        let  lieuRencontreCheck, siteWebCheck, entrepriseCheck, prenomCheck, nomCheck, fonctionCheck, telephoneCheck, emailCheck;
        if (lieuRencontre.length > 0) {
            lieuRencontreCheck = true;
            setLieuRencontreMsg("");
        } else {
            lieuRencontreCheck = false;
            setLieuRencontreMsg("Le Lieu de Rencontre est obligatoire");
        }
        if (entreprise.length > 0) {
            entrepriseCheck = true;
            setEntrepriseMsg("");
        } else {
            entrepriseCheck = false;
            setEntrepriseMsg("L'Entreprise est obligatoire");
        }
        if (siteWeb.length > 0) {
            siteWebCheck = true;
            setSiteWebMsg("");
        } else {
            siteWebCheck = false;
            setSiteWebMsg("Le Site Web est obligatoire");
        }
        if (prenom.length > 0) {
            prenomCheck = true;
            setPrenomMsg("");
        } else {
            prenomCheck = false;
            setPrenomMsg("Le Prenom est obligatoire");
        }
        if (nom.length > 0) {
            nomCheck = true;
            setNomMsg("");
        } else {
            nomCheck = false;
            setNomMsg("Le Nom est obligatoire");
        }
        if (fonction.length > 0) {
            fonctionCheck = true;
            setFonctionMsg("");
        } else {
            fonctionCheck = false;
            setFonctionMsg("La Fonction est obligatoire");
        }
        if (telephone.length > 0) {
            telephoneCheck = true;
            setTelephoneMsg("");
        } else {
            telephoneCheck = false;
            setTelephoneMsg("Le Telephone est obligatoire");
        }
        if (email.length > 0) {
            emailCheck = true;
            setEmailMsg("");
        } else {
            emailCheck = false;
            setEmailMsg("L'email est obligatoire");
        }
        if(lieuRencontreCheck &&  siteWebCheck &&  entrepriseCheck && prenomCheck &&  nomCheck &&  fonctionCheck &&  telephoneCheck &&  emailCheck){
            if (modeEdit.current === "Add")
                //alert("Vous souhaitez ajouter une Carte");
                SaveBusinessCard(storedToken, lieuRencontre, entreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
            else
                UpdateBusinessCard(storedToken,idBusinessCard, lieuRencontre, entreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
                //alert("Vous souhaitez modifier une Carte");
            //alert("Tout est ok");
        }
    }


    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    // Function that handle the submit event on the form
    const handleSave = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } 
    }


    return (
        <div className="ModalEditBusinessCard">

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
            
                <Row className="mb-4">
                        <label className="col-md-3 form-label">Lieu Rencontre:</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setLieuRencontre(e.target.value)}
                                value={lieuRencontre}
                                placeholder={lieuRencontreMsg === "" ? "Lieu de Rencontre ..." : lieuRencontreMsg}
                            />
                        </div>
                </Row>
            
                <Row>
                        <label className="col-md-3 form-label">Entreprise :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setEntreprise(e.target.value)}
                                value={entreprise}
                                placeholder={entrepriseMsg === "" ? "Entreprise ..." : entrepriseMsg}
                            />
                        </div>
                </Row>
                <Row>
                        <label className="col-md-3 form-label">Tel Contact :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setTelephone(e.target.value)}
                                value={telephone}
                                placeholder={telephoneMsg === "" ? "Telephone ..." : telephoneMsg}
                            />
                        </div>
                </Row>
                <Row>
                        <label className="col-md-3 form-label">Site Web :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setSiteWeb(e.target.value)}
                                value={siteWeb}
                                placeholder={siteWebMsg === "" ? "Site Web ..." : siteWebMsg}
                            />
                        </div>
                </Row>
                <Row>
                        <label className="col-md-3 form-label">Sexe :</label>
                        <div className="">
                            <select id="Sexes"  className="form-control" onChange={(e) =>  sexe.current = e.target.value}>
                                <option value="2">Masculin</option>
                                <option value="1">Feminin</option>
                               
                            </select>
                        </div>


                </Row>

                <Row>
                        <label className="col-md-3 form-label"> Prénoms:</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setPrenom(e.target.value)}
                                value={prenom}
                                placeholder={prenomMsg === "" ? "Prenom ..." : prenomMsg}

                            />
                        </div>
                </Row>
                <Row>
                        <label className="col-md-3 form-label"> Nom:</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setNom(e.target.value)}
                                value={nom}
                                placeholder={nomMsg === "" ? "Nom ..." : nomMsg}
                            />
                        </div>
                </Row>
                <Row>
                        <label className="col-md-3 form-label"> Fonction:</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setFonction(e.target.value)}
                                value={fonction}
                                placeholder={fonctionMsg === "" ? "Fonction ..." : fonctionMsg}
                            />
                        </div>
                </Row>
             {
                /**   <Row>
                        <label className="col-md-3 form-label"> Tel Contact:</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                </Row> */
             }
                <Row className="mb-4">
                        <label className="col-md-3 form-label"> Email:</label>
                        <div className="">
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder={emailMsg === "" ? "Email ..." : emailMsg}
                            />
                        </div>
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
