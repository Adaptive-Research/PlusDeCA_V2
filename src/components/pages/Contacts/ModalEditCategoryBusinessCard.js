import React, {useState,useRef} from "react";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
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
    const [idCategoryBusinessCard, setIdCategoryBusinessCard]=useState("");

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEditCategories ;
        setIdCategoryBusinessCard(props.idCategoryBusinessCard) ;
        setContent(props.Html) ;
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

        let Categories = result.split('\n');
        console.log("Categories") ;
        console.log(Categories) ;


        if (result.length > 0) {
            if (modeEdit.current === "Add"){
                Categories.map(Categorie =>{
                    if(Categorie !== ''){
                        SaveBusinessCardCategory(storedToken, Categorie ,props.SendCloseMessage, props.ForceRenderCategoriesBusinessCards);
                    }
                })
            }
            
               
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
                        <textarea className="Dan-Textarea" rows="10" cols="50"  onChange={(e) => {
                                console.log("onChange: ") ;
                                console.log(e.target.value) ;

                                setResult(e.target.value) ;
                            }}>
                        </textarea>

                        <input type="text"  onChange={(e) => {
                                console.log("onChange: ") ;
                                console.log(e.target.value) ;

                                setResult(e.target.value) ;
                            }} />

                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul> 


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
