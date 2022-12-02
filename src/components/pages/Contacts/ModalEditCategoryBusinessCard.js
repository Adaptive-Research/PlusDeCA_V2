import React, {useState,useRef} from "react";
import {  Row, Button, Modal} from "react-bootstrap";
import '../../../assets/css/ModalEditCategoryBusinessCard.css';
import { DeleteAllBusinessCardCategories, SaveBusinessCardCategory, UpdateBusinessCardCategory } from "../../../data/customlibs/api";
import { UpInArray, DownInArray, DeleteFromArray } from "../../../data/customlibs/utils";



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

    const CompteurSave = useRef(0) ;
   
      


    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;



    if (reloadInfos === true)
    {
        let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
        if (arr !== null)
        {
            ListeCategories.current = [] ;
            for (let i = 0 ; i < arr.length ; i++) 
                ListeCategories.current.push(arr[i].Categorie) ;
        }
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }




    function RenderAfterSave() {
        if (CompteurSave.current >=  ListeCategories.current.length)
        {
            if (props.ForceRenderCategoriesBusinessCards !== null)
                props.ForceRenderCategoriesBusinessCards() ;
        }
    }

    function RenderAfterDelete() {
        if  (ListeCategories.current.length === 0)
        {
            if (props.ForceRenderCategoriesBusinessCards !== null)
                props.ForceRenderCategoriesBusinessCards() ;
        }
        else {

            if (ListeCategories.current.length > 0) {
                CompteurSave.current = 1 ;
                ListeCategories.current.map(Categorie =>{
                    if(Categorie !== '')
                        SaveBusinessCardCategory(storedToken, Categorie,CompteurSave.current,null,RenderAfterSave);
                    CompteurSave.current = CompteurSave.current+1 ;
                })
            } 
        }
      
    }


    // Function that validates the form
    async function inputsValidation() {
        //console.log("inputsValidation") ;
        //console.log("ListeCategories");
        //console.log(ListeCategories.current);
        DeleteAllBusinessCardCategories(storedToken,RenderAfterDelete) ;
    }


    const handleSave = (e) => {
        e.preventDefault();
        inputsValidation();
        
       
    }    

    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }


    function renderOptions() {
        console.log("renderOptions");
        console.log(ListeCategories.current);
        return ListeCategories.current.map((Ligne) => {
            return <option value={Ligne}> {Ligne}</option> ;
        })
    }


    const handleAdd = (e) => {
        console.log("handleAdd") ;
        if (Categorie.current !== "")
            ListeCategories.current.push(Categorie.current) ;
        Categorie.current = "" ;
        console.log(ListeCategories.current) ;
        document.getElementById('Categorie').value = "";
        setCompteur(compteur+1) ;
      };

      const handleDelete = (e) => {
        console.log("handleDelete") ;
        let select = document.getElementById('ListeCategories') ;
        if  (select.selectedOptions !== undefined){
            let temp = Array.from(select.selectedOptions) ;
            ListeCategories.current = DeleteFromArray(ListeCategories.current,temp[0].value) ;

            setCompteur(compteur+1) ;
        }        
      };      


    const handleUp = (e) => {
        console.log("handleUp") ;
        let res, select,arr ;
        select = document.getElementById('ListeCategories') ;
        console.log(select.selectedOptions) ;
        if  (select.selectedOptions !== undefined){
            let temp = Array.from(select.selectedOptions) ;
            
            arr = UpInArray(ListeCategories.current,temp[0].value) ;
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
            arr = DownInArray(ListeCategories.current,temp[0].value) ;
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
                            <select className="Dan-select-multiple" id="ListeCategories" size="10">
                                {renderOptions()}
                            </select>
                        </div>
                        <div className="ListBoxBtns">
                                <div style={{marginBottom: '20px'}}>
                                    <button className='m-2 btn btn-danger' onClick={handleDelete}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div style={{marginBottom: '20px'}}>
                                    <Button variant="primary" onClick={handleUp}>
                                        <i className="fe fe-chevron-up"></i>
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="primary" onClick={handleDown}>
                                        <i className="fe fe-chevron-down"></i>
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
