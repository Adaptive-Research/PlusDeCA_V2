import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal,Image,Col} from "react-bootstrap";
import {SaveGroup,UpdateGroup,PublishGroup} from "../../../data/customlibs/api";
import {UploadFile} from "../../../data/customlibs/api2";
import '../../../assets/css/GlobalInputbackground.css';
import '../../../assets/css/GroupModale.css';
import { useFormState } from "react-hook-form";


export default function ModalEditGroup(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditGroup") ;
    //console.log("props") ;
    console.log(props) ;

    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [nom, setNom] = useState("");
    const [sdescription, setDescription] = useState(""); 
    const [tags, setTag] = useState("");

    const [photo, setPhoto] = useState("");
    const [nomMsg, setNomMsg] = useState("");
    const [tagMsg, setTagMsg] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");
    const [Msg, setMsg] = useState("");

    if (reloadInfos === true) {
        modeEdit.current = props.ModeEdit ;
        setNom(props.nom) ;
        setTag(props.tags) ;
        setDescription(props.sdescription) ;
        setPhoto(props.Photo) ;
        setReloadInfos(false) ;
    }

    if (props.show !== lastIsModalOpen) {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }

    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;
        
        console.log("nom: " + nom) ;
        console.log("sdescription: " + sdescription) ;
        
        let nomCheck, descriptionCheck, tagCheck;
        if (nom.length > 0) {
            nomCheck = true;
            setNomMsg("");
        } else {
            nomCheck = false;
            setDescriptionMsg("Le nom est obligatoire");
        }

        if (sdescription.length > 0) {
            descriptionCheck = true;
        } else {
            descriptionCheck = false;
            setDescription("La description est obligatoire");
        }

        if (tags.length > 0) {
            tagCheck = true;
        } else {
            tagCheck = false;
            setDescription("Le tag est obligatoire");
        }

        if (nomCheck && descriptionCheck) {
            if (modeEdit.current === "Add")
                SaveGroup(storedToken,nom,sdescription,tags,photo, props.ForceRenderGroup);
            else
                UpdateGroup(storedToken, nom,sdescription,tags,photo, props.ForceRenderGroup);
        }
    }

    function handleCancel() {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }

    // Function that handle the submit event on the form
    function handleSave(e){
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } 
    }

    function handlePublish(e) {
        e.preventDefault();

        if (modeEdit.current !== "Add") {
            PublishGroup(storedToken, props.ForceRenderGroup);
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }
    }

    function RenderUpload(NomFichierUploade){
        console.log("NomFichierUploade") ;
        console.log(NomFichierUploade) ;

        setPhoto(NomFichierUploade) ;
    }

    const submitForm = (files) => {
        console.log("submitForm") ;
        console.log(files);
       
        let Fichier = files[0].file ;

        UploadFile(process.env.REACT_APP_API_UPLOAD_IMAGE_GROUP_URL, storedToken, Fichier,RenderUpload) ;
      };

    return (
        <div className="ModalEditGroup">

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.FieldNom} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={nomMsg === "" ? " ..." : nomMsg}
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.FieldTag} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={tagMsg === "" ? " ..." : tagMsg}
                                value={tags}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.FieldDescription} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={descriptionMsg === "" ? "..." : descriptionMsg}
                                value={sdescription}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                    </Row>

                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            {props.FieldPicture}:
                        </label>
                        {photo}
                    </Row>

                    <FormGroup className="mb-0 file">
                        <label className="col-md-3 form-label mb-4">
                            {props.FieldSendPhoto}:
                        </label>

                        <formadvanced.OuterDropzone
                            id="demo"
                            type="file"
                            name="files"
                            accept=".jpg, .png, image/jpeg, image/png"
                            maxFiles={1}
                            multiple={false}
                            inputContent={props.AddPicture}
                            submitButtonContent="Envoyer l'image"
                            onSubmit={submitForm}
                        />
                    </FormGroup>    

                </Modal.Body>

                <div style={{width:'100%'}}>
                
                    <div style={{float:'left',padding:'10px'}}>
                        <Button variant="primary"  style={{margin:'10px'}} onClick={handlePublish}>
                            Ajouter
                        </Button>
                    </div>

                    <div style={{float:'right',padding:'10px'}}>
                        <Button variant="secondary"  style={{margin:'10px'}} onClick={handleCancel}>
                            {props.CancelButton}
                        </Button>

                        <Button variant="primary" onClick={handleSave}>
                            {props.SaveButton}
                        </Button>

                    </div>
                </div>

            </Modal>

        </div>
    );
}