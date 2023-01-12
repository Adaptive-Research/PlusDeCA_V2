import React, {useState,useRef} from "react";
import { Row, Col, Button, Modal, Card} from "react-bootstrap";
import {SaveBusinessCard,UpdateBusinessCard} from "../../../data/customlibs/api";
import '../../../assets/css/GlobalInputbackground.css';
import {PrintLog} from  "../../../data/customlibs/utils";







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
    const idEntreprise = useRef("");
    const idActivite = useRef("");


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
    

        PrintLog("ModalEditBusinessCard") ;
        PrintLog("props") ;
        PrintLog(props) ;


        if (reloadInfos === true)
        {
            PrintLog("reloadinfos === true") ;
            modeEdit.current = props.ModeEdit ;
            sexe.current = props.Sexe ;

          
            if (props.idEntreprise === "0"){
                const myCompanies = JSON.parse(localStorage.getItem("userCompanies"));
                if (myCompanies !== null)
                    idEntreprise.current = myCompanies[0].idEntreprise ;
            }
            else
                idEntreprise.current = props.idEntreprise ;

            if (props.idActivite === "0"){                
                const myActivities = JSON.parse(localStorage.getItem("userActivities"));
                if (myActivities !== null)
                    idActivite.current = props.idActivite ;
            }

            PrintLog("idEntreprise:" + idEntreprise.current) ;
            PrintLog("idActivite:" + idActivite.current) ;


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



        function renderCompanies() {
            PrintLog("renderCompanies") ;   
            
            const myCompanies = JSON.parse(localStorage.getItem("userCompanies"));
            PrintLog("myCompanies") ;
            PrintLog(myCompanies) ;
    
            if (myCompanies !== null ) {
                if (myCompanies.length > 0) {
                    


                    let options =  myCompanies.map( (Ligne) => 
                    {
                        if (Ligne.idEntreprise !== null) {
                            if (Ligne.idEntreprise !== idEntreprise.current)
                                return <option value={Ligne.idEntreprise}> {Ligne.NomEntreprise}</option> ;
                            else 
                                return <option value={Ligne.idEntreprise} selected> {Ligne.NomEntreprise}</option> ;
                        }
                    })

                    PrintLog("options") ;
                    PrintLog(options) ;
                    return options ;
                }
    
            }
            
            return "" ;
        }


        function renderActivities() {
            PrintLog("renderActivities") ;   
            
            const myActivities = JSON.parse(localStorage.getItem("userActivities"));

            
    
            if (myActivities !== null ) {
                if (myActivities.length > 0) {
                    


                    let options =  myActivities.map( (Ligne) => 
                    {
                        if (Ligne.idActivite !== null)
                            return <option value={Ligne.idActivite}> {Ligne.Activite_Nom}</option> ;
                    })

                    const reactElement = React.createElement('option', {value:"0"}, '') ;
                    options.unshift(reactElement) ;

                    PrintLog("options") ;
                    PrintLog(options) ;
                    return options ;
                }
    
            }
            
            return "" ;
        }
    

        function renderSexe() {
            PrintLog("renderSexe") ;   
            const ListeSexes = [{"id":"1","sexe":"Homme"},{"id":"2","sexe":"Femme"}] ;
            //PrintLog(ListeSexes) ;
            //PrintLog(sexe.current) ;
            let options =  ListeSexes.map( (Ligne) => 
                    {
                        if (Ligne.sexe !== null) {
                            if (Ligne.id !== sexe.current)
                                return <option value={Ligne.id}> {Ligne.sexe}</option> ;
                            else 
                                return <option value={Ligne.id} selected> {Ligne.sexe}</option> ;
                        }
                    })

                    PrintLog("options") ;
                    PrintLog(options) ;
                    return options ;


        }

        


        // Function that validates the form
        const inputsValidation = () => {
            PrintLog("inputsValidation") ;  

            PrintLog("LieuRencontre: " + lieuRencontre) ;
            PrintLog("SiteWeb: " + siteWeb) ;
            PrintLog("idEntreprise: " + idEntreprise.current) ;
            PrintLog("Entreprise: " + entreprise) ;
            PrintLog("Sexe: " + sexe.current) ;
            PrintLog("Prenom: " + prenom) ;
            PrintLog("Nom: " + nom) ;
            PrintLog("Fonction: " + fonction) ;
            PrintLog("Telephone: " + telephone) ;
            PrintLog("Email: " + email) ;

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
                    SaveBusinessCard(storedToken, idEntreprise.current, lieuRencontre, entreprise, telephoneEntreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
                else
                    UpdateBusinessCard(storedToken,idBusinessCard, idEntreprise.current, lieuRencontre, entreprise, telephoneEntreprise, siteWeb,sexe.current,prenom,nom,fonction,telephone,email, props.ForceRenderBusinessCard);
                    //alert("Vous souhaitez modifier une Carte");
                //alert("Tout est ok");
                if (props.SendCloseMessage !== null)
                    props.SendCloseMessage() ;
                setReloadInfos(true) ;
            }
            
        }


        const handleCancel = () => {
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
            setReloadInfos(true) ;
        }



        // Function that handle the submit event on the form
        const handleSave = (e) => {
            e.preventDefault();
            try {
                inputsValidation();
            } catch (e) {
                PrintLog(e);
            } 
        }


        return (
            <div className="ModalEditBusinessCard">

                <Modal size="xl" className="Dan-modal"  show={props.show}>

                    <Modal.Body>

                    <Row >
                        <Col md={6}>
                            <Card>
                            <Card.Header><strong>{props.CompanyInfo}</strong></Card.Header>
                            <Card.Body>    
                            <Row className="mb-4">
                                    <label className="form-label">{props.MeetingPlace} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setLieuRencontre(e.target.value)}
                                            value={lieuRencontre}
                                            placeholder={lieuRencontreMsg === "" ?  props.MeetingPlace + '...': lieuRencontreMsg}
                                        />
                                    </div>
                            </Row>
                        
                            <Row>
                                    <label className="form-label">{props.CompanyField} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setEntreprise(e.target.value)}
                                            value={entreprise}
                                            placeholder={entrepriseMsg === "" ? props.CompanyField +"..." : entrepriseMsg}
                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className="form-label">{props.BusinessPhone} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setTelephoneEntreprise(e.target.value)}
                                            value={telephoneEntreprise}
                                            placeholder={telephoneMsg === "" ? props.BusinessPhone + "..." : telephoneMsg}
                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className=" form-label">{props.WebsiteField}</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setSiteWeb(e.target.value)}
                                            value={siteWeb}
                                            placeholder={siteWebMsg === "" ? props.WebsiteField + "..." : siteWebMsg}
                                        />
                                    </div>
                            </Row>
                            </Card.Body>
                            </Card>

                            <label className="form-label">{props.CompanyField}:</label>
                            <div className="">
                                <select id="idEntreprise"  className="form-control" onChange={(e) =>  idEntreprise.current = e.target.value}>
                                    {renderCompanies()} 
                                </select>
                            </div>   
                            
                            <label className="form-label">{props.ActivityField}:</label>
                            <div className="">
                                <select id="idActivite"  className="form-control" onChange={(e) =>  idActivite.current = e.target.value}>
                                    {renderActivities()} 
                                </select>
                            </div>   
                            
                               


                        </Col>

                        <Col md={6}>
                        <Card>
                            <Card.Header><strong>{props.ContactInfo}</strong></Card.Header>
                            <Card.Body>    
                            <Row>
                                    <label className="form-label">{props.GenderField} :</label>
                                    <div className="">
                                        <select id="Sexe"  className="form-control" onChange={(e) =>  sexe.current = e.target.value}>
                                            {renderSexe()} 
                                        </select>
                                    </div>


                            </Row>

                            <Row>
                                    <label className="form-label"> {props.FirstnameField} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setPrenom(e.target.value)}
                                            value={prenom}
                                            placeholder={prenomMsg === "" ? props.FirstnameField+"..." : prenomMsg}

                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className="form-label"> {props.NameField}:</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setNom(e.target.value)}
                                            value={nom}
                                            placeholder={nomMsg === "" ? props.NameField+"..." : nomMsg}
                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className="form-label"> {props.FunctionField} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setFonction(e.target.value)}
                                            value={fonction}
                                            placeholder={fonctionMsg === "" ? props.FunctionField+"..." : fonctionMsg}
                                        />
                                    </div>
                            </Row>
                            <Row>
                                    <label className="form-label">{props.TelephoneContactField} :</label>
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setTelephone(e.target.value)}
                                            value={telephone}
                                            placeholder={telephoneMsg === "" ? props.TelephoneContactField + "..." : telephoneMsg}
                                        />
                                    </div>
                            </Row>
                            <Row className="mb-4">
                                    <label className="form-label">{props.EmailField} :</label>
                                    <div className="">
                                        <input
                                            type="email"
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            placeholder={emailMsg === "" ? props.EmailField+"..." : emailMsg}
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
                            {props.CancelButton}
                        </Button>

                        <Button variant="primary" onClick={handleSave}>
                            {props.SaveButton}
                        </Button>

                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}
