import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {UploadBusinessCards} from "../../../data/customlibs/api2";
import '../../../assets/css/GlobalInputbackground.css';
import {PrintLog} from  "../../../data/customlibs/utils";






export default function ModalImportBusinessCard(props) {
    //const [businessCardsFile, setBusinessCardsFile] = useState("");
    const ListeCategories = useRef([]) ;
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const storedToken = localStorage.getItem('token');


    if (props.show !== true)
        return "" ;
    else {
   
        PrintLog("ModalImportBusinessCard") ;
        PrintLog("ModalImportBusinessCard props") ;
        PrintLog(props) ;

        if (reloadInfos === true)
        {
            ListeCategories.current = ["Cartes de visite"] ;
            let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
            if (arr !== null)
            {
               
                for (let i = 0 ; i < arr.length ; i++) 
                    ListeCategories.current.push(arr[i].Categorie) ;
            }
            setReloadInfos(false) ;
        }

        function renderOptions() {
            //PrintLog("renderOptions");
            //PrintLog(ListeCategories.current);
            return ListeCategories.current.map((Ligne) => {
                return <option value={Ligne}> {Ligne}</option> ;
            })
        }
    


        const handleClose = () => {
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }

        
        function RenderUpload(NomFichierUploade){
            PrintLog("NomFichierUploade") ;
            PrintLog(NomFichierUploade) ;

            //setBusinessCardsFile(NomFichierUploade) ;
            props.ForceRenderBusinessCard() ;
        }


        const submitForm = (files, allFiles) => {
            PrintLog("submitForm") ;
            PrintLog(files);
        
            let Fichier = files[0].file ;
            let Categorie = document.getElementById('ListeCategories3').value ;

            UploadBusinessCards(storedToken,Categorie, Fichier,RenderUpload) ;
        };

        return (
            <div className="ModalEditBusinessCard">

                <Modal size="xl" className="Dan-modal"  show={props.show} >

                    <Modal.Body >

                        <FormGroup className="mb-0 file">
                            <label className="col-md-3 form-label mb-4">
                                {props.ImportBusinessCard}
                            </label>

                            <select className="Dan-select-multiple"  id="ListeCategories3">
                                {renderOptions()}
                            </select>

                            <formadvanced.OuterDropzone
                                id="demo"
                                type="file"
                                name="files"
                                accept=".csv"
                                maxFiles={1}
                                multiple={false}
                                inputContent={props.AddFileLabel}
                                submitButtonContent="Envoyer le Fichier"
                                onSubmit={submitForm}
                            />
                        </FormGroup>    
                    </Modal.Body>

                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                           {props.CloseButton}
                        </Button>
                    </Modal.Footer>

                </Modal>

            </div>
        );
    }
}
