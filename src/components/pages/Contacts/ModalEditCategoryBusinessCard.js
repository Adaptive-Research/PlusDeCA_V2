import React, {useState,useRef} from "react";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import { SaveBusinessCardCategory, UpdateBusinessCardCategory } from "../../../data/customlibs/api";
import { Up, Down } from "../../../data/customlibs/utils";

import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';




export default function ModalEditCategoryBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditCategoryBusinessCard") ;
    console.log("ModalEditCategoryBusinessCard props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    const [compteur,setCompteur] = useState(0) ;

    const Categorie= useRef("") ;
    const ListeCategories = useRef([]) ;


    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;


    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEditCategories ;
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

        /*
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
        */

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


    function renderOptions() {
        return ListeCategories.current.map((Ligne) => {
            return <option value={Ligne}> {Ligne}</option> ;
        })
    }


    const handleAdd = (e) => {
        if (Categorie.current !== "")
            ListeCategories.current.push(Categorie.current) ;
        Categorie.current = "" ;
        console.log(ListeCategories.current) ;
        document.getElementById('Categorie').value = "";
        setCompteur(compteur+1) ;
      };


    const handleUp = (e) => {

        console.log("handleUp") ;
        let res, select,arr ;
        select = document.getElementById('ListeCategories') ;
        console.log(select.selectedOptions) ;
        if  (select.selectedOptions !== undefined){
            const temp = Array.from(select.selectedOptions) ;
            
            arr = Up(ListeCategories.current,temp[0].value) ;
            ListeCategories.current = arr[0] ;
            res = arr[1] ;

            if (res === true)
                select.selectedIndex = select.selectedIndex-1 ;

            setCompteur(compteur+1) ;
        }
      };
      
    const handleDown = (e) => {
        console.log("handleDown") ;
        let res, select,arr ;
        select = document.getElementById('ListeCategories') ;
        console.log(select.selectedOptions) ;
        if  (select.selectedOptions !== undefined){
            const temp = Array.from(select.selectedOptions) ;
            arr = Down(ListeCategories.current,temp[0].value) ;
            ListeCategories.current = arr[0] ;
            res = arr[1] ;

            if (res === true)
                select.selectedIndex = select.selectedIndex+1 ;
            setCompteur(compteur+1) ;
        }
    };

    return (
        <div className="ModalEditBusinessCard">

            <Modal size="xl" className="Dan-modal" compteur={compteur} show={isModalOpen} >

                <Modal.Body >
                
                <Row>
                    <label className="col-md-3 form-label mb-4">
                        Categories:
                    </label>

                    <div className="mb-4">

                        <input className="Dan-input-text" type="text" id="Categorie" onChange={(e) => {
                            Categorie.current = e.target.value ;
                        }} />

                        <Button variant="primary" onClick={handleAdd}>
                            Ajouter
                        </Button>
                    </div>

                    <div className="mb-4">
                        <Row>
                            <Col>
                                <select className="Dan-select-multiple" id="ListeCategories" size="10"  multiple>
                                    {renderOptions()}
                                </select>
                            </Col>

                            <Col>
                                <div>
                                    <Button variant="primary" onClick={handleUp}>
                                        Up
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="primary" onClick={handleDown}>
                                        Down
                                    </Button>
                                </div>
                            </Col>
                        </Row>


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
