import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveFormation,UpdateFormation} from "../../../data/customlibs/api";






export default function ModalShowFormation(props) {

    const storedToken = localStorage.getItem('token');
    const Formations_groupes = JSON.parse(localStorage.getItem('Formations_groupes')); 

    console.log("ModalEditFormation") ;
    //console.log("props") ;
    //console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const category = useRef("");


    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [html, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const texte = useRef("");   // ceci est le texte contenu dans l'objet Result 

    const [photo, setPhoto] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [categoryMsg, setCategoryMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");
    const [Msg, setMsg] = useState("");




    


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }




    function GetNombrePersonnes(sindex) {
        console.log("GetNombrePersonnes:" + sindex) ;
        for (let i = 0 ; i <  Formations_groupes.length ; i++) 
            if ( sindex === Formations_groupes[i].idGroupe  )
                return Formations_groupes[i].groupe ;

    }

    




    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }




    return (
        <div>

            <Modal size="xl" show={isModalOpen}>
                <Modal.Header>
                     <Row className="mb-4">
                        <h4><strong>{props.Title}</strong></h4>
                    </Row>

                </Modal.Header>

                <Modal.Body>
                    
                    <div>
                        <strong>Durée de la formation: </strong> {props.Duree}
                    </div>

                    <div>
                        <strong>Nombre de personnes maximum: </strong> {GetNombrePersonnes(props.Groupe)}
                    </div>

                    <div>
                        <strong>Tarif de la formation: </strong> {props.Tarif} euros HT par personne
                    </div>

                    <Row>
                        <div className="mb-4">
                            <formeditor.HTMLViewer Content={props.Html} 
                        />
                        </div>

                    </Row>

                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        Close
                    </Button>


                </Modal.Footer>

            </Modal>

        </div>
    );
}
