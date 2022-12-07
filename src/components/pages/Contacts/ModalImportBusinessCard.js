import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {Upload} from "../../../data/customlibs/api2";






export default function ModalImportBusinessCard(props) {
    const [businessCardsFile, setBusinessCardsFile] = useState("");

    const storedToken = localStorage.getItem('token');


    if (props.show !== true)
        return "" ;
    else {
   
        console.log("ModalImportBusinessCard") ;
        console.log("ModalImportBusinessCard props") ;
        console.log(props) ;

        

        const handleClose = () => {
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }

        
        function RenderUpload(NomFichierUploade){
            console.log("NomFichierUploade") ;
            console.log(NomFichierUploade) ;

            setBusinessCardsFile(NomFichierUploade) ;
            props.ForceRenderBusinessCard() ;
        }


        const submitForm = (files, allFiles) => {
            console.log("submitForm") ;
            console.log(files);
        
            let Fichier = files[0].file ;

            Upload(process.env.REACT_APP_API_UPLOAD_BUSINESSCARDS_URL, storedToken, Fichier,RenderUpload) ;
        };

        return (
            <div className="ModalEditBusinessCard">

                <Modal size="xl" className="Dan-modal"  show={props.show} >

                    <Modal.Body >

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
                                inputContent="Ajouter un Fichier"
                                submitButtonContent="Envoyer le Fichier"
                                onSubmit={submitForm}
                            />
                        </FormGroup>    
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}
