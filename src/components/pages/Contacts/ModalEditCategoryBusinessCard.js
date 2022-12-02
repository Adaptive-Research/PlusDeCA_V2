import React, {useState,useRef} from "react";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalEditCategoryBusinessCard.css';
import { SaveBusinessCardCategory, UpdateBusinessCardCategory } from "../../../data/customlibs/api";
import { Up, Down } from "../../../data/customlibs/utils";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import 'react-listbox/dist/react-listbox.css';
import { map } from "leaflet";




export default function ModalEditCategoryBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditCategoryBusinessCard") ;
    console.log("ModalEditCategoryBusinessCard props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;
    const [addingMode,setAddingMode] = useState(true) ;

    const [compteur,setCompteur] = useState(0) ;

    const Categorie= useRef("") ;
    const ListeCategories = useRef([]) ;
    let ListeSavedCategories = useRef(JSON.parse(localStorage.getItem("BusinessCardsCategories")));


    console.log('Longueur :' + ListeSavedCategories.current.length);

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
        console.log("Les Categories ajoutés");
        console.log(ListeCategories);
        if ((ListeCategories.current).length > 0) {
            if (modeEdit.current === "Add"){
                    (ListeCategories.current).map(Categorie =>{
                        let Index = ListeSavedCategories.current.length + 1;
                        if(Categorie !== ''){
                            SaveBusinessCardCategory(storedToken, Categorie,Index,props.SendCloseMessage, props.ForceRenderCategoriesBusinessCards);
                        }
                    })
            }  
        } 
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
        if(addingMode){
            console.log("Categorie simples");
            console.log(ListeCategories.current);
            return ListeCategories.current.map((Ligne) => {
                return <option value={Ligne}> {Ligne}</option> ;
            })
        }
        else if(!addingMode){
           if(ListeSavedCategories.current !== null ){
            console.log("Catégories sauvegardés");
            console.log(ListeSavedCategories.current);
            return ListeSavedCategories.current.map((SavedCategorie)=>{
                return <option value={SavedCategorie.Categorie}> {SavedCategorie.Categorie}</option>
            })
           }
        }
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
            let temp = Array.from(select.selectedOptions) ;
            
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
            let temp = Array.from(select.selectedOptions) ;
            arr = Down(ListeCategories.current,temp[0].value) ;
            ListeCategories.current = arr[0] ;
            res = arr[1] ;

            if (res === true)
                select.selectedIndex = select.selectedIndex+1 ;
            setCompteur(compteur+1) ;
        }
    };
    /**
     * 
     *    const handleUpEdit = (e) => {

        console.log("handleUpEdit") ;
        let res, select,arr ;
        select = document.getElementById('ListeCategoriesEdit') ;
        console.log(select.selectedOptions) ;
        if  (select.selectedOptions !== undefined){
            const temp = Array.from(select.selectedOptions) ;
            
            arr = Up(ListeSavedCategories.current,temp[0].value) ;
            ListeSavedCategories.current = arr[0] ;
            res = arr[1] ;

            if (res === true)
                select.selectedIndex = select.selectedIndex-1 ;

            setCompteur(compteur+1) ;
        }
      };
    const handleDownEdit = (e) => {
        console.log("handleDownEdit") ;
        let res, select,arr ;
        select = document.getElementById('ListeCategoriesEdit') ;
        console.log(select.selectedOptions) ;
        if  (select.selectedOptions !== undefined){
            const temp = Array.from(select.selectedOptions) ;
            arr = Down(ListeSavedCategories.current,temp[0].value) ;
            ListeSavedCategories.current = arr[0] ;
            res = arr[1] ;

            if (res === true)
                select.selectedIndex = select.selectedIndex+1 ;
            setCompteur(compteur+1) ;
        }
    };

     */
    const handleEdit = (e) => {
        setAddingMode(prev => !prev);
        //console.log("Mode Edit: "+modeEdit.current);
        //alert("Vous souhaitez passez en mode EDition")
    }
    return (
        <div className="ModalEditBusinessCard">

            <Modal size="xl" className="Dan-modal" compteur={compteur} show={isModalOpen} >
            
                <Modal.Body >
                <Row style={{justifyContent:'flex-end'}}>
                        <Button variant="primary" onClick={handleEdit} style={{width:'40px',height:'40px'}}>
                            <i className="fa fa-edit"></i>
                        </Button>
                </Row>
                <Row className="ListBoxContainer">
                    <label className="col-md-3 form-label mb-4">
                        Categories:
                    </label>

                    <div className="mb-4 AddingForm" >

                        <input className="Dan-input-text" type="text" id="Categorie" onChange={(e) => {
                            Categorie.current = e.target.value ;
                        }} />

                        <Button variant="primary" onClick={handleAdd}>
                            Ajouter
                        </Button>
                    </div>

                    <div className="mb-4 ListBox">
                        <div className="ListBoxContent">
                            <select className="Dan-select-multiple" id="ListeCategories" size="10"  multiple>
                                {renderOptions()}
                            </select>
                        </div>
                        <div className="ListBoxBtns">
                                <div style={{marginBottom: '20px'}}>
                                    <Button variant="primary" onClick={handleUp}>
                                        <GoArrowSmallUp />
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="primary" onClick={handleDown}>
                                       <GoArrowSmallDown />
                                    </Button>
                                </div>
                        </div>
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
