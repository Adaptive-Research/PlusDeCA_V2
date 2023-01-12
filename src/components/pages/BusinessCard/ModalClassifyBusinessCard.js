import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import '../../../assets/css/GlobalInputbackground.css';
import {SaveClassementBusinessCard} from "../../../data/customlibs/api";
import {PrintLog} from  "../../../data/customlibs/utils";






export default function ModalClassifyBusinessCard(props) {
    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const ListeCategories = useRef([]) ;
    const reloadInfos = useRef(true) ;

    const storedToken = localStorage.getItem('token');


    function ForceRender() {
        if (props.ForceRenderBusinessCard !== null)
            props.ForceRenderBusinessCard() ;

    
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;

    }

    

    const handleChange = () => {
        PrintLog("handleChange") ;
        let v = document.getElementById('ListeCategories2').value ;
        if (v === "Cartes de visite")
            SaveClassementBusinessCard(storedToken,props.IdBusinessCard, 0,ForceRender );
        else {
            let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
            if (arr !== null)
            {
                for (let i = 0 ; i < arr.length ; i++) {
                    PrintLog("categorie: " + arr[i].Categorie) ;
                    if (arr[i].Categorie === v) {
                        PrintLog("arr[]"+ i) ;
                        PrintLog(arr[i]) ;
                        if (arr[i].idAncestor === "0")
                            arr[i].idAncestor = arr[i].id ;
                        SaveClassementBusinessCard(storedToken,props.IdBusinessCard, arr[i].idAncestor,ForceRender );
                    }
                }
            }
        }
    }

    



    function renderOptions() {
        //PrintLog("renderOptions");
        //PrintLog(ListeCategories.current);
        return ListeCategories.current.map((Ligne) => {
            return <option value={Ligne}> {Ligne}</option> ;
        })
    }



    PrintLog("ModaClassifyBusinessCard") ;
    PrintLog("ModalClassifyBusinessCard props") ;
    PrintLog(props) ;






    if (reloadInfos.current === true)
    {
        reloadInfos.current =false ;

        ListeCategories.current = ["Cartes de visite"] ;
        let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
        if (arr !== null)
        {
           
            for (let i = 0 ; i < arr.length ; i++) 
                ListeCategories.current.push(arr[i].Categorie) ;
        }
    }


    if (props.show !== lastIsModalOpen)
    {
        var modal = document.getElementById('modal');
        var shade = document.getElementById('shade');

        setLastIsModalOpen(props.show) ;
    
        if (props.show ===true) {
            let s = document.getElementById('ListeCategories2') ;
            s.value = "" ;
            modal.style.display = shade.style.display = 'block';
        }
        else
            modal.style.display = shade.style.display = 'none';

        if (props.show === true)
            reloadInfos.current = true ;
    }

    return (
        <>
            <div id="shade"></div>
            <div id="modal">
                <div className="mb-4 ListBox">
                    <div className="ListBoxContent">
                        <select className="Dan-select-multiple" id="ListeCategories2" size="10" onChange={handleChange}>
                            {renderOptions()}
                        </select>
                    </div>
                </div>
            </div>
        </>  
    
    
    );
    
   
}
