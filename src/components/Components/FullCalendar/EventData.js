import React, { useState } from "react";
import { Link } from "react-router-dom";
import  { FindTranslation, getIDFromToken  } from "../../../functions_Dan.js" ;
import axios from "axios";
import {
  FormGroup,
  Modal, 
  Button,
} from "react-bootstrap";
import { DayTimeColsView } from "@fullcalendar/timegrid";


export function EventData(props) {


  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  //console.log(storedToken) ;
  //console.log(idUser) ;

  const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
  const [isModalOpen,setIsModalOpen] = useState(false) ;


  // les titres des champs
  const sTitre = "Title" ;
  const sComment = "Comment" ;
  const sLocation = "Location" ;
  const sAllDay = "All Day" ;


  // pour les titres
  const [titre, setTitre] = useState(sTitre) ;
  const [comment, setComment] = useState(sComment) ;
  const [allDay, setAllDay] = useState(sAllDay) ;
  const [slocation, setLocation] = useState(sLocation) ;




  
  // pour le reload des traductions
  const [reloadTraductions, setReloadTraductions] = useState(true) ;


  // pour le reload des infos
  const [reloadInfos, setReloadInfos] = useState(true) ;




  // pour le contenu des champs
  const [eventTitre, setEventTitre] = useState("") ;
  const [eventLieu, setEventLieu] = useState("") ;
  const [eventData, setEventData] = useState("") ;


  if (reloadInfos === true) {


    setEventTitre(props.Title) ;
    setEventLieu(props.Location) ;
    setEventData(props.Data) ;

    setReloadInfos(false) ;
  }





  async function TranslateAll(url, Page,VL) 
  {
    const response = axios.post(url, {
        Submit: 1,
        Page: Page,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then( function(response) {
   

    let t = FindTranslation(response.data,Page,VL, sTitre) ;
    if (t !== "Not Found")
      setTitre(t) ;
    t = FindTranslation(response.data,Page,VL, sComment) ;
      if (t !== "Not Found")
        setComment(t) ;
    t = FindTranslation(response.data,Page,VL, sLocation) ;
    if (t !== "Not Found")
      setLocation(t) ;

    t = FindTranslation(response.data,Page,VL, sAllDay) ;
    if (t !== "Not Found")
      setAllDay(t) ;
        

    setReloadTraductions(false) ;               
    })
  }



  const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;
  const Page = "FullCalendar" ;
  const VL = "FR" ;

  if (reloadTraductions === true)
    TranslateAll(url,Page,VL) ;




  if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }



  const [allDayChange, SetAllDayChange] = useState(false) ;
  
  function AllDayChange()
  {
    SetAllDayChange(!allDayChange) ;
    if (allDayChange === false)
      document.getElementById("StartEnd").classList.add("not-visible") ;
    else
      document.getElementById("StartEnd").classList.remove("not-visible") ;
  }






  function inputsValidation() {
    
  }


  function handleSave(e) {

      e.preventDefault();
      try {
          inputsValidation();
      } catch (e) {
          console.log(e);
      } finally {
      }
  }


  function handleCancel() {
      if (props.SendCloseMessage !== null)
          props.SendCloseMessage() ;
  }



  return (
    <div>
      <Modal size="lg" show={isModalOpen}>

        <Modal.Header closeButton>

          <button><i className={`Dan_icon fe fe-trash-2`}></i></button>

        </Modal.Header>

        <Modal.Body>
              <FormGroup>
                <label>Type</label>
                <select name="Event_Type"  className="form-control">
                  <option value="1">Réunion d'entrepreneurs</option>
                  <option value="2">Salon</option>
                  <option value="3">Rendez-vous client</option>
                  <option value="4">Webinaire</option>
                  <option value="5">Autre</option>
                </select>



                <div className="add-vspace">
                  <label>{titre}</label>
                  <input
                    className="form-control"
                    type="text"
                    value={eventTitre}
                    onChange={(e) =>  setEventTitre(e.target.value) }
                  />
                </div> 


                <div className="add-vspace">
                  <input type="checkbox" id="AllDay" value="AllDay" onChange={AllDayChange} />
                  <label htmlFor="AllDay" className="add-hspace-15"> {allDay}</label>
                </div>

                <div id="StartEnd" className="add-vspace-10">
                  <label>Jeudi 27 octobre</label>  
                  <select id="startHour" className="form-control-Dan add-hspace-15">
                    <option value="0h">0h</option>
                    <option value="1h">1h</option>
                    <option value="2h">2h</option>
                    <option value="3h">3h</option>
                    <option value="4h">4h</option>
                    <option value="5h">5h</option>
                    <option value="6h">6h</option>
                    <option value="7h">7h</option>
                    <option value="8h">8h</option>
                    <option value="9h">9h</option>
                    <option value="10h">10h</option>
                    <option value="11h">11h</option>
                    <option value="12h">12h</option>
                    <option value="13h">13h</option>
                    <option value="14h">14h</option>
                    <option value="15h">15h</option>
                    <option value="16h">16h</option>
                    <option value="17h">17h</option>
                    <option value="18h">18h</option>
                    <option value="19h">19h</option>
                    <option value="20h">20h</option>
                    <option value="21h">21h</option>
                    <option value="22h">22h</option>
                    <option value="23h">23h</option>
                  </select>

                  <select id="startMinute" className="form-control-Dan">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>

                  <label className="add-hspace-15"> - </label>

                  <select id="endHour" className="form-control-Dan add-hspace-15">
                    <option value="0h">0h</option>
                    <option value="1h">1h</option>
                    <option value="2h">2h</option>
                    <option value="3h">3h</option>
                    <option value="4h">4h</option>
                    <option value="5h">5h</option>
                    <option value="6h">6h</option>
                    <option value="7h">7h</option>
                    <option value="8h">8h</option>
                    <option value="9h">9h</option>
                    <option value="10h">10h</option>
                    <option value="11h">11h</option>
                    <option value="12h">12h</option>
                    <option value="13h">13h</option>
                    <option value="14h">14h</option>
                    <option value="15h">15h</option>
                    <option value="16h">16h</option>
                    <option value="17h">17h</option>
                    <option value="18h">18h</option>
                    <option value="19h">19h</option>
                    <option value="20h">20h</option>
                    <option value="21h">21h</option>
                    <option value="22h">22h</option>
                    <option value="23h">23h</option>
                  </select>

                  <select id="endMinute" className="form-control-Dan">
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>


                </div>

                <div className="add-vspace">
                  <label>{slocation}</label>
                  <input
                    className="form-control"
                    type="text"
                    value={eventLieu}
                    onChange={(e) =>  setEventLieu(e.target.value) }
                  />
                </div> 



                <div className="add-vspace">
                  <label>{comment}</label>
                  <textarea
                      className="form-control"
                      rows="6"
                      value={eventData}
                      onChange={(e) =>  setEventData(e.target.value) }
                    ></textarea>       
                </div>             
              </FormGroup>
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

