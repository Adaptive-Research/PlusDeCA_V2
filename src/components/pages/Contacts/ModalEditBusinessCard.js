import React, {useState,useRef} from "react";
import { Row, Col, Button, Modal, Card} from "react-bootstrap";
import {SaveBusinessCard,UpdateBusinessCard} from "../../../data/customlibs/api";
import '../../../assets/css/GlobalInputbackground.css';







export default function ModalEditBusinessCard(props) {
    const storedToken = localStorage.getItem('token');



    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    //Les variables pour la sauvegarde des Cartes de Visites
    const [lieuRencontre,setLieuRencontre] = useState("");
    const [entreprise,setEntreprise] = useState("");
    const [telephoneEntreprise,setTelephoneEntreprise] = useState("");
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





   

    if (props.show !== true)
        return "" ;
    else {
    




        console.log("ModalEditBusinessCard") ;
        //console.log("props") ;
        //console.log(props) ;


        if (reloadInfos === true)
        {
            modeEdit.current = props.ModeEdit ;
            sexe.current = props.Sexe ;
            setLieuRencontre(props.LieuRencontre);
            setEntreprise(props.Entreprise);
            setTelephoneEntreprise(props.TelephoneEntreprise);
            setSiteWeb(props.SiteWeb);
            setPrenom(props.Prenom);
            setNom(props.Nom);
            setFonction(props.Fonction);
            setTelephone(props.Telephone);
            setEmail(props.Email);
            setIdBusinessCard(props.IdBusinessCard);
            setReloadInfos(false) ;
        }



        function renderActivities() {
            console.log("renderActivities") ;   
            
            const myActivities = JSON.parse(localStorage.getItem("userActivities"));
    
            if (myActivities !== null ) {
                if (myActivities.length > 0) {
                    let options =  myActivities.map( (Ligne) => 
                    {
                        if (Ligne.idActivite !== null)
                            return <option value={Ligne.idActivite}> {Ligne.Activite_Nom}</option> ;
                    })
    
                    return options ;
                }
    
            }
            
            return "" ;
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

            let  entrepriseCheck, prenomCheck, nomCheck ;
            if (entreprise.length > 0) {
                entrepriseCheck = true;
                setEntrepriseMsg("");
            } else {
                entrepriseCheck = false;
                setEntrepriseMsg("L'Entreprise est obligatoire");
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

            if(entrepriseCheck && prenomCheck &&  nomCheck ){
                if (modeEdit.current === "Add")
                    //alert("Vous souhaitez ajouter une Carte");
                    SaveBusinessCard(storedToken, lieuRencontre, entreprise, telephoneEntreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
                else
                    UpdateBusinessCard(storedToken,idBusinessCard, lieuRencontre, entreprise, telephoneEntreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
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

                <Modal size="xl" className="Dan-modal"  show={props.show}>

                    <Modal.Body>

                    <Row >
                        <Col md={6}>
                            <Card>
                            <Card.Header><strong>Infos Entreprise</strong></Card.Header>
                            <Card.Body>    
                            <Row className="mb-4">
                                    <label className="form-label">Lieu Rencontre:</label>
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
                                    <label className="form-label">Entreprise :</label>
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
                                    <label className="form-label">Téléphone Entreprise :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setTelephoneEntreprise(e.target.value)}
                                            value={telephoneEntreprise}
                                            placeholder={telephoneMsg === "" ? "Téléphone ..." : telephoneMsg}
                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className=" form-label">Site Web :</label>
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
                            </Card.Body>
                            </Card>

                            
                            <label className="form-label">Activité:</label>
                            <div className="">
                                <select id="Activite"  className="form-control" onChange={(e) =>  sexe.current = e.target.value}>
                                    {renderActivities()} 
                                </select>
                            </div>   
                            
                               


                        </Col>

                        <Col md={6}>
                        <Card>
                            <Card.Header><strong>Infos Contact</strong></Card.Header>
                            <Card.Body>    
                            <Row>
                                    <label className="form-label">Genre :</label>
                                    <div className="">
                                        <select id="Sexes"  className="form-control" onChange={(e) =>  sexe.current = e.target.value}>
                                            <option value="homme">Homme</option>
                                            <option value="femme">Femme</option>
                                        
                                        </select>
                                    </div>


                            </Row>

                            <Row>
                                    <label className="form-label"> Prénom:</label>
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
                                    <label className="form-label"> Nom:</label>
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
                                    <label className="form-label"> Fonction:</label>
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
                            <Row>
                                    <label className="form-label">Téléphone Contact :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setTelephone(e.target.value)}
                                            value={telephone}
                                            placeholder={telephoneMsg === "" ? "Téléphone ..." : telephoneMsg}
                                        />
                                    </div>
                            </Row>
                            <Row className="mb-4">
                                    <label className="form-label"> Email:</label>
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
                            </Card.Body>
                            </Card>
                        
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
}
