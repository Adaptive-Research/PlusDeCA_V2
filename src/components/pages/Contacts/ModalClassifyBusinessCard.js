import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import {SaveClassementBusinessCard} from "../../../data/customlibs/api";






export default function ModalClassifyBusinessCard(props) {
    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const ListeCategories = useRef([]) ;
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const storedToken = localStorage.getItem('token');


    function ForceRender() {
        if (props.ForceRenderBusinessCard !== null)
            props.ForceRenderBusinessCard() ;

    
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;

    }

    

    const handleChange = () => {
        console.log("handleChange") ;
        let v = document.getElementById('ListeCategories2').value ;
        if (v === "Cartes de visite")
            SaveClassementBusinessCard(storedToken,props.IdBusinessCard, 0,ForceRender );
        else {
            let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
            if (arr !== null)
            {
                for (let i = 0 ; i < arr.length ; i++) {
                    console.log("categorie: " + arr[i].Categorie) ;
                    if (arr[i].Categorie === v)
                        SaveClassementBusinessCard(storedToken,props.IdBusinessCard, arr[i].idAncestor,ForceRender );
                }
            }
        }


        

    
    }

    



    function renderOptions() {
        //console.log("renderOptions");
        //console.log(ListeCategories.current);
        return ListeCategories.current.map((Ligne) => {
            return <option value={Ligne}> {Ligne}</option> ;
        })
    }



    console.log("ModaClassifyBusinessCard") ;
    console.log("ModalClassifyBusinessCard props") ;
    console.log(props) ;






    if (reloadInfos === true)
    {
        let arr = JSON.parse(localStorage.getItem("BusinessCardsCategories")) ;
        if (arr !== null)
        {
            ListeCategories.current = ["Cartes de visite"] ;
            for (let i = 0 ; i < arr.length ; i++) 
                ListeCategories.current.push(arr[i].Categorie) ;
        }
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        var modal = document.getElementById('modal');
        var shade = document.getElementById('shade');

        setLastIsModalOpen(props.show) ;
    
        if (props.show ===true)
            modal.style.display = shade.style.display = 'block';
        else
            modal.style.display = shade.style.display = 'none';

        if (props.show === true)
            setReloadInfos(true) ;
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
