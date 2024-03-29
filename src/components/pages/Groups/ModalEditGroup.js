import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveGroup,UpdateGroup} from "../../../data/customlibs/api_angelo";
import {UploadFile} from "../../../data/customlibs/api2";
import '../../../assets/css/GlobalInputbackground.css';
import '../../../assets/css/GroupModale.css';
import {PrintLog} from  "../../../data/customlibs/utils";

export default function ModalEditGroup(props) {

    const storedToken = localStorage.getItem('token');

    PrintLog("ModalEditGroup") ;
    //PrintLog("props") ;
    PrintLog(props) ;

    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idGroup, setIdGroup] = useState("");
    const [nom, setNom] = useState("");
    const [sdescription, setDescription] = useState(""); 
    const [tags, setTag] = useState("");

    const [group_image, setPhoto] = useState("");
    const [nomMsg, setNomMsg] = useState("");
    const [tagMsg, setTagMsg] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");

    if (reloadInfos === true) {
        modeEdit.current = props.ModeEdit ;
        setIdGroup(props.idGroup) ;
        setNom(props.Nom) ;
        setTag(props.Tags) ;
        setDescription(props.Description) ;
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
        PrintLog("inputsValidation") ;
        
        PrintLog("nom: " + nom) ;
        PrintLog("sdescription: " + sdescription) ;
        
        let nomCheck, descriptionCheck, tagCheck;
        if (nom.length > 0) {
            nomCheck = true;
            setNomMsg("");
        } else {
            nomCheck = false;
            setNomMsg("Le nom est obligatoire");
        }

        if (sdescription.length > 0) {
            descriptionCheck = true;
        } else {
            descriptionCheck = false;
            setDescriptionMsg("La description est obligatoire");
        }

        if (tags.length > 0) {
            tagCheck = true;
        } else {
            tagCheck = false;
            setTagMsg("Le tag est obligatoire");
        }

        if (nomCheck && descriptionCheck && tagCheck) {
            if (modeEdit.current === "Add")
                SaveGroup(storedToken,nom,tags,sdescription,group_image, props.ForceRenderGroup);
            else
                UpdateGroup(storedToken,idGroup,nom,tags,sdescription,group_image, props.ForceRenderGroup);
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
            PrintLog(e);
        } 
    }


    function RenderUpload(NomFichierUploade){
        PrintLog("NomFichierUploade") ;
        PrintLog(NomFichierUploade) ;

        setPhoto(NomFichierUploade) ;
    }

    const submitForm = (files) => {
        PrintLog("submitForm") ;
        PrintLog(files);
       
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
                        {group_image}
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
