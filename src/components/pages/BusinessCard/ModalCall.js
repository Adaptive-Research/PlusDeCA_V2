import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import { FormGroup, Row, Col, Button, Modal, Card} from "react-bootstrap";
import '../../../assets/css/ModalImportBusinessCard.css';
import '../../../assets/css/GlobalInputbackground.css';
import {SaveClassementBusinessCard} from "../../../data/customlibs/api";






export default function ModalCall(props) {
    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const ListeCalls = useRef([]) ;
    const reloadInfos = useRef(true) ;

    const storedToken = localStorage.getItem('token');


    function ForceRender() {
        if (props.ForceRenderBusinessCard !== null)
            props.ForceRenderBusinessCard() ;

    
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;

    }

    

    const handleChange = () => {
        console.log("handleChange") ;
        let v = document.getElementById('ListeCalls').value ;

/*
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
*/        
    }

    



    function renderOptions() {
        console.log("ModalCall renderOptions");
        console.log(ListeCalls.current);

        ListeCalls.current = [] ;
        let userEvents = JSON.parse(localStorage.getItem("userEvents")) ;
        if (userEvents !== null)
        {
            console.log(userEvents) ;
            for (let i = 0 ; i < userEvents.length ; i++) {
                let Event = userEvents[i] ;
                if (Event.Event_Type === "5")
                    ListeCalls.current.push(Event) ;
            }

            console.log(ListeCalls) ;
            return ListeCalls.current.map((Ligne) => {
                return <option value={Ligne.id}> {Ligne.Event_Title}</option> ;
            })
        }
    }



    console.log("ModaCall") ;
    //console.log("ModalCall props") ;
    //console.log(props) ;






    if (reloadInfos.current === true)
    {
        console.log("ModalCall reloadInfos") ;
        reloadInfos.current = false ;
    }



    if (props.show !== lastIsModalOpen)
    {
        setLastIsModalOpen(props.show) ;

        if (props.show === true)
            reloadInfos.current = true ;
    }

    
    return (
        <>

            <Modal size="xl" className="Dan-modal"  show={props.show}>

                <Modal.Body>
                        <div className="ListBoxContent">
                            <select className="Dan-select-multiple" id="ListeCalls" size="10" onChange={handleChange}>
                                {renderOptions()}
                            </select>
                        </div>
                </Modal.Body>

            </Modal>
        </>
    
    
    );
    
   
}
