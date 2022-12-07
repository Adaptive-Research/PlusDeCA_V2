import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {UploadBusinessCards} from "../../../data/customlibs/api2";






export default function ModalImportBusinessCard(props) {
    //const [businessCardsFile, setBusinessCardsFile] = useState("");
    const ListeCategories = useRef([]) ;
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const storedToken = localStorage.getItem('token');


    if (props.show !== true)
        return "" ;
    else {
   
        console.log("ModalImportBusinessCard") ;
        console.log("ModalImportBusinessCard props") ;
        console.log(props) ;

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
            //console.log("renderOptions");
            //console.log(ListeCategories.current);
            return ListeCategories.current.map((Ligne) => {
                return <option value={Ligne}> {Ligne}</option> ;
            })
        }
    


        const handleClose = () => {
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }

        
        function RenderUpload(NomFichierUploade){
            console.log("NomFichierUploade") ;
            console.log(NomFichierUploade) ;

            //setBusinessCardsFile(NomFichierUploade) ;
            props.ForceRenderBusinessCard() ;
        }


        const submitForm = (files, allFiles) => {
            console.log("submitForm") ;
            console.log(files);
        
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
                                Importer Cartes de Visite
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
