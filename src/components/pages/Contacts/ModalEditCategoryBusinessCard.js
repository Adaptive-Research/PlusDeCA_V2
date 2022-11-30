import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {Upload} from "../../../data/customlibs/api2";
import { SaveBusinessCardCategory, UpdateBusinessCardCategory } from "../../../data/customlibs/api";






export default function ModalEditCategoryBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditCategoryBusinessCard") ;
    console.log("ModalEditCategoryBusinessCard props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;


    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [html, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const texte = useRef("");   // ceci est le texte contenu dans l'objet Result 
    const [idCategoryBusinessCard, setIdCategoryBusinessCard]=useState("");

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEditCategories ;
        setIdCategoryBusinessCard(props.idCategoryBusinessCard) ;
        setContent(props.Html) ;
        setHtml(props.Html) ;
        texte.current = props.Text ;
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

        console.log("result") ;
        console.log(result) ;
        console.log("html") ;
        console.log(html) ;
        console.log("texte") ;
        console.log(texte.current) ;

        let Categories = html.split('\n');

        if (result !== "")
        {
            if (result.blocks !== undefined)
                texte.current = String(result.blocks[0].text) ;
        }

        console.log("texte2") ;
        console.log(texte.current) ;


        let descriptionCheck;
        if (texte.current.length > 0) {
            descriptionCheck = true;
            //setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            //setDescriptionMsg("La description est obligatoire");
        }

        if (descriptionCheck) {
            if (modeEdit.current === "Add"){
                 //
                console.log("Les Categories entrées");
                Categories.map(Categorie =>{
                    if(Categorie !== ''){
                        SaveBusinessCardCategory(storedToken, Categorie ,props.SendCloseMessage, props.ForceRenderCategoriesBusinessCards);
                    }
                })
            }
            else
                UpdateBusinessCardCategory(storedToken,idCategoryBusinessCard, html ,props.SendCloseMessage, props.ForceRenderArticle);
        }

    }


    const handleSave = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } 
    }    

    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }


    return (
        <div className="ModalEditBusinessCard">

            <Modal size="xl" className="Dan-modal"  show={isModalOpen} >

                <Modal.Body >
                
                <Row>
                        <label className="col-md-3 form-label mb-4">
                            Categories:
                        </label>
                        <div className="mb-4">

                            <formeditor.EditorConvertToHTML Content={content}
                                onEditorChange={(v) => {
                                    setHtml(v) ;
                                    console.log("onEditorChange") ;
                                    console.log("Html") ;
                                    console.log(html) ;
                                }}
                                
                                onChange={(v) => {
                                    setResult(v) ;
                                    console.log("onChange") ;
                                    console.log("result") ;
                                    console.log(result) ;
                                }}
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
