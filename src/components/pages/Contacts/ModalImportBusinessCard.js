import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {Upload} from "../../../data/customlibs/api2";






export default function ModalImportBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalImportBusinessCard") ;
    console.log("ModalImportBusinessCard props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;
    const [businessCardsFile, setBusinessCardsFile] = useState("");

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEdit ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }





    

    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }
    const handleSave = () => {
            props.ForceRenderBusinessCard() ;
    }

    function RenderUpload(NomFichierUploade){
        console.log("NomFichierUploade") ;
        console.log(NomFichierUploade) ;

        setBusinessCardsFile(NomFichierUploade) ;
    }


    const submitForm = (files, allFiles) => {
        console.log("submitForm") ;
        console.log(files);
       
        let Fichier = files[0].file ;

        Upload(process.env.REACT_APP_API_UPLOAD_BUSINESSCARDS_URL, storedToken, Fichier,RenderUpload) ;
    };

    return (
        <div className="ModalEditBusinessCard">

            <Modal size="xl" className="Dan-modal"  show={isModalOpen} >

                <Modal.Body >
                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            Fichier BusinessCards: 
                        </label>
                        {businessCardsFile}
                    </Row>

                    <FormGroup className="mb-0 file">
                        <label className="col-md-3 form-label mb-4">
                            Importer Cartes de Visite
                        </label>

                        <formadvanced.OuterDropzone
                            id="demo"
                            type="file"
                            name="files"
                            accept=".csv"
                            maxFiles={1}
                            multiple={false}
                            inputContent="Ajouter une Carte"
                            submitButtonContent="Envoyer la Carte"
                            onSubmit={submitForm}
                        />
                    </FormGroup>    
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>

                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
