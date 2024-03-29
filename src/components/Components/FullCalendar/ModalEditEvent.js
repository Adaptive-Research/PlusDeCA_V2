import React, { useEffect, useState, useRef } from "react";
import  { FindTranslation, getIDFromToken, FindTranslation_SelectBox, FindValueForSelectBox } from "../../../data/customlibs/utils" ;
import {DeleteEvent,SaveEvent,UpdateEvent,getEventsForUser} from "../../../data/customlibs/api";
import {FormGroup,Modal, Button} from "react-bootstrap";
//import { DayTimeColsView } from "@fullcalendar/timegrid";
import {PrintLog} from  "../../../data/customlibs/utils";






export function ModalEditEvent(props) {
  PrintLog("ModalEditEvent") ;


  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;
  const Translations_SelectBox = JSON.parse(localStorage.getItem('Translations_SelectBox')) ;
  //PrintLog(storedToken) ;
  //PrintLog(idUser) ;

  const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
  const [isModalOpen,setIsModalOpen] = useState(false) ;


  // pour le reload des infos
  const reloadInfos = useRef(true) ;
  const [compteur, setCompteur] = useState(0) ;



  // pour la gestion de la date de reunion et les heures de reunion
  let dateStart = new Date(props.Start) ;
  let dateEnd = new Date(props.End) ;






  // pour l'affichage du AllDay
  const isAllDay = useRef(false) ;

  function AllDayChange()
  {
    PrintLog("AllDayChange") ;
    isAllDay.current = !isAllDay.current ;
    if (isAllDay.current === true)
    {
      let d = document.getElementById("StartEnd") ;
      if ( d !== null)
        d.classList.add("not-visible") ;
    }
    else {
      let d = document.getElementById("StartEnd") ;
      if ( d !== null)
        d.classList.remove("not-visible") ;
    }
  }




  


  // pour le contenu des champs qui doivent etre des useState pour les champs text
  const eventType  = useRef("1") ;
  const eventDay = useRef("") ;
  const [eventTitle,setEventTitle] = useState("") ;
  const [msgTitre,setMsgTitre] = useState("");
  const [eventLocation,setEventLocation] = useState("") ;
  const [eventData,setEventData] = useState("") ;

  const eventStartHour = useRef(0) ;
  const eventStartMinute = useRef(0) ;
  const eventEndHour = useRef(0) ;
  const eventEndMinute = useRef(0) ;
  


  function printDate(temp) {
    var dateStr = padStr(temp.getDate()) + "/" + padStr(1 + temp.getMonth()) + "/" + padStr(temp.getFullYear()) ;
    return dateStr ;
  }

  function padStr(i) {
      return (i < 10) ? "0" + i : "" + i;
  }



  
  function SetHourAndMinute(){
    PrintLog("SetHourAndMinute") ;

      // pour mettre a jour la checkbox AllDay et faire ou ne pas faire afficher la plage horaire
      if (props.AllDay === true) {
        let i = document.getElementById("AllDay") ;
        if (i !== null)
          i.checked = true;
  
        let d = document.getElementById("StartEnd") ;
        if (d !== null)
          d.classList.add("not-visible") ;
        isAllDay.current = true ;
      }
  
      // pour selectionner la bonne option dans le select TypeReunion
      let s = document.getElementById("TypeReunion") ;
      if (s !== null)
      {
        for (var option of s.options) 
        {
          if (props.TypeReunion === option.value)
            option.selected = true ;
        }
      }
  
      // pour selectionner la bonne option dans le select startHour et startMinute
      let h = dateStart.getHours() ;
      //PrintLog("h") ;
      //PrintLog(h) ;
      s = document.getElementById("startHour") ;
      if (s !== null)
      {
        for (var option of s.options) 
        {
          //PrintLog(option.value) ;
          if (h == option.value)
          {
            option.selected = true ;
            eventStartHour.current = option.value ;
          }
        }
      }
  
      let m = dateStart.getMinutes() ;
      s = document.getElementById("startMinute") ;
      if (s !== null)
      {
        
        var option_1 = "" ;
        for (var option of s.options) 
        {
          if (m == option.value)
          {
            option.selected = true ;
            eventStartMinute.current = option.value ;
          }
          else {
            if (m > option_1.value &&  m < option.value)
            {
              option_1.selected = true ;
              eventStartMinute.current = option_1.value ;
            }
          }
          option_1 = option ;
        }
      }
  
  
      // pour selectionner la bonne option dans le select endHour et endMinute
      h = dateEnd.getHours() ;
      //PrintLog("h") ;
      //PrintLog(h) ;
      s = document.getElementById("endHour") ;
      if (s !== null)
      {
        for (var option of s.options) 
        {
          //PrintLog(option.value) ;
          if (h == option.value)
          {
            eventEndHour.current = option.value ;
            option.selected = true ;
          }
        }
      }
  
      m = dateEnd.getMinutes() ;
      s = document.getElementById("endMinute") ;
      if (s !== null)
      {
        
        var option_1 = "" ;
        for (var option of s.options) 
        {
          if (m == option.value)
          {
            option.selected = true ;
            eventEndMinute.current = option.value ;
          }
          else {
            if (m > option_1.value &&  m < option.value)
            {
              eventEndMinute.current = option.value ;
              option.selected = true ;
            }
          }
          option_1 = option ;
        }
      }
  }
  




  if (reloadInfos.current === true) {
    reloadInfos.current = false ;

    eventDay.current = printDate(dateStart) ;
    eventType.current = props.TypeReunion ;
    setEventTitle(props.Title) ;
    setEventLocation(props.Location) ;
    setEventData(props.Data) ;


    setCompteur(0) ;
  }




  useEffect(() => {
    PrintLog("ModalEditEvent useEffect") ;

    if (compteur === 0) {
      SetHourAndMinute() ;
      setCompteur(1) ;
    }
   
  });









  // les titres des champs
  const sTitre = "Title" ;
  const sData = "Comment" ;
  const sLocation = "Location" ;
  const sAllDay = "All Day" ;


  // pour les titres
  const stitre = useRef(sTitre) ;
  const sdata = useRef(sData) ;
  const sallday  = useRef(sAllDay) ;
  const slocation = useRef(sLocation) ;

  
  // pour le reload des traductions
  const [reloadTraductions, setReloadTraductions] = useState(true) ;


  






  function TranslateAll(data, Page) 
  {
    let t = FindTranslation(data,Page, sTitre) ;
    if (t !== "Not Found")
      stitre.current = t ;
    t = FindTranslation(data,Page, sData) ;
    if (t !== "Not Found")
      sdata.current = t ;
    t = FindTranslation(data,Page, sLocation) ;
    if (t !== "Not Found")
      slocation.current = t ;

    t = FindTranslation(data,Page, sAllDay) ;
    if (t !== "Not Found")
      sallday.current = t ;
        
  }
  

  if (reloadTraductions === true) {
    TranslateAll(Translations_Text,"FullCalendar") ;
    setReloadTraductions(false) ;
  }



  if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            reloadInfos.current = true ;
    }




  
















    // fonctions pour gerer la sauvegarde, le cancel et le delete





    function printDate2(temp) {
      var dateStr = padStr(temp.getFullYear()) + "-" +  padStr(1 + temp.getMonth()) + "-" + padStr(temp.getDate())   ;
      return dateStr ;
    }
    

  function RenderAfterLoad() {
    if (props.SendCloseMessage !== undefined)
      props.SendCloseMessage() ;
    if (props.ForceRender !== undefined)
      props.ForceRender() ;
  }  

    
  function ForceRender() {
    getEventsForUser("userEvents",storedToken,RenderAfterLoad) ;
  }

  






  function inputsValidation() {
    let titreCheck;

    if (eventTitle.length === 0) {
        titreCheck = false;
        setMsgTitre("Le titre est requis") ;
    } else {
        titreCheck = true;
        setMsgTitre("") ;
    }

    if (titreCheck === true)
    {
      let sStartDate = printDate2(dateStart) + " " + padStr(eventStartHour.current) + ":" + padStr(eventStartMinute.current) ;
      let sEndDate = printDate2(dateStart) + " " + padStr(eventEndHour.current) + ":" + padStr(eventEndMinute.current) ;

      PrintLog(sStartDate) ;
      PrintLog(sEndDate) ;
      
      let sAllDay = "0" ;
      if (isAllDay.current === true)
        sAllDay = "1"

      if (props.Mode === "Add")
        SaveEvent(storedToken,eventType.current,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,ForceRender) ;
      else
        UpdateEvent(storedToken,props.ID,eventType.current,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,ForceRender) ;
      
    }

  }


  function handleSave(e) {

      e.preventDefault();
      try {
          inputsValidation();
      } catch (e) {
          PrintLog(e);
      } finally {
      }
  }


  function handleCancel() {
      if (props.SendCloseMessage !== undefined)
          props.SendCloseMessage() ;
  }

  
  function RemoveEvent(){
    DeleteEvent(storedToken,props.ID,ForceRender) ;
  }



  function renderOptions() {
    var arr = FindTranslation_SelectBox(Translations_SelectBox,"TypeReunion") ;

    return arr.map((Ligne) => {
      return <option value={Ligne.OptionValue}> {Ligne.OptionText}</option> ;
  })
  }







  // render
  return (
    <div>
      <Modal size="lg" show={isModalOpen}>

        <Modal.Header closeButton>

          <button onClick={RemoveEvent}><i className={`Dan_icon fe fe-trash-2`}></i></button>

        </Modal.Header>

        <Modal.Body>
              <FormGroup>
                <label>Type</label>
                <select id="TypeReunion"  className="form-control"  onChange={(e) =>  eventType.current = e.target.value}>
                  {renderOptions()}
                </select>



                <div className="add-vspace">
                  <label>{stitre.current}</label>
                  <input
                    className="form-control"
                    type="text"
                    value={eventTitle}
                    placeholder={msgTitre === "" ? "Titre" : msgTitre}
                    onChange={(e) =>  setEventTitle(e.target.value) }
                  />
                </div> 


               

                <div className="add-vspace">
                  <strong>{eventDay.current}</strong>  
                  <input type="checkbox" id="AllDay" className="add-hspace-50" value="AllDay" onChange={AllDayChange} />
                  <label htmlFor="AllDay" className="add-hspace-5"> {sallday.current}</label>
                </div>

                <div id="StartEnd" className="add-vspace-5">
                  <label>Plage horaire</label>  
                  <select id="startHour" className="form-control-Dan add-hspace-15" onChange={(e) =>  eventStartHour.current = e.target.value }>
                    <option value="0">0h</option>
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                    <option value="4">4h</option>
                    <option value="5">5h</option>
                    <option value="6">6h</option>
                    <option value="7">7h</option>
                    <option value="8">8h</option>
                    <option value="9">9h</option>
                    <option value="10">10h</option>
                    <option value="11">11h</option>
                    <option value="12">12h</option>
                    <option value="13">13h</option>
                    <option value="14">14h</option>
                    <option value="15">15h</option>
                    <option value="16">16h</option>
                    <option value="17">17h</option>
                    <option value="18">18h</option>
                    <option value="19">19h</option>
                    <option value="20">20h</option>
                    <option value="21">21h</option>
                    <option value="22">22h</option>
                    <option value="23">23h</option>
                  </select>

                  <select id="startMinute" className="form-control-Dan" onChange={(e) =>  eventStartMinute.current = e.target.value }>
                    <option value="0">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>

                  <label className="add-hspace-15"> - </label>

                  <select id="endHour" className="form-control-Dan add-hspace-15" onChange={(e) => { 
                    eventEndHour.current = e.target.value ; 
                    PrintLog("change endHour") ;
                  } }>
                    <option value="0">0h</option>
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                    <option value="4">4h</option>
                    <option value="5">5h</option>
                    <option value="6">6h</option>
                    <option value="7">7h</option>
                    <option value="8">8h</option>
                    <option value="9">9h</option>
                    <option value="10">10h</option>
                    <option value="11">11h</option>
                    <option value="12">12h</option>
                    <option value="13">13h</option>
                    <option value="14">14h</option>
                    <option value="15">15h</option>
                    <option value="16">16h</option>
                    <option value="17">17h</option>
                    <option value="18">18h</option>
                    <option value="19">19h</option>
                    <option value="20">20h</option>
                    <option value="21">21h</option>
                    <option value="22">22h</option>
                    <option value="23">23h</option>
                  </select>

                  <select id="endMinute" className="form-control-Dan" onChange={(e) =>  eventEndMinute.current = e.target.value }>
                    <option value="0">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>


                </div>

                <div className="add-vspace">
                  <label>{slocation.current}</label>
                  <input
                    className="form-control"
                    type="text"
                    value={eventLocation}
                    onChange={(e) =>  setEventLocation(e.target.value) }
                  />
                </div> 



                <div className="add-vspace">
                  <label>{sdata.current}</label>
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

