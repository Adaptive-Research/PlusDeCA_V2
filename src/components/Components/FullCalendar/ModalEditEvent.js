import React, { useEffect, useState, useRef } from "react";
import  { FindTranslation, getIDFromToken  } from "../../../functions_Dan.js" ;
import axios from "axios";
import {
  FormGroup,
  Modal, 
  Button,
} from "react-bootstrap";
import { DayTimeColsView } from "@fullcalendar/timegrid";


export function ModalEditEvent(props) {
  console.log("EventData") ;


  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  //console.log(storedToken) ;
  //console.log(idUser) ;

  const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
  const [isModalOpen,setIsModalOpen] = useState(false) ;


  // pour le reload des infos
  const [reloadInfos, setReloadInfos] = useState(true) ;



  // pour la gestion de la date de reunion et les heures de reunion
  let dateStart = new Date(props.Start) ;
  let dateEnd = new Date(props.End) ;






  // pour l'affichage du AllDay
  const isAllDay = useRef(false) ;

  function AllDayChange()
  {
    console.log("AllDayChange") ;
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
  const [eventType,setEventType]  = useState("1") ;
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



  
  
  if (reloadInfos === true) {

  console.log("reloadInfos") ;
  console.log(props) ;


    eventDay.current = printDate(dateStart) ;
    setEventType(props.TypeReunion) ;
    setEventTitle(props.Title) ;
    setEventLocation(props.Location) ;
    setEventData(props.Data) ;


    setReloadInfos(false) ;
  }




  useEffect(() => {
    console.log("eventData useEffect") ;

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
    //console.log("h") ;
    //console.log(h) ;
    s = document.getElementById("startHour") ;
    if (s !== null)
    {
      for (var option of s.options) 
      {
        //console.log(option.value) ;
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
    //console.log("h") ;
    //console.log(h) ;
    s = document.getElementById("endHour") ;
    if (s !== null)
    {
      for (var option of s.options) 
      {
        //console.log(option.value) ;
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
      stitre.current = t ;
    t = FindTranslation(response.data,Page,VL, sData) ;
    if (t !== "Not Found")
      sdata.current = t ;
    t = FindTranslation(response.data,Page,VL, sLocation) ;
    if (t !== "Not Found")
      slocation.current = t ;

    t = FindTranslation(response.data,Page,VL, sAllDay) ;
    if (t !== "Not Found")
      sallday.current = t ;
        

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




  
















    // fonctions pour gerer la sauvegarde, le cancel et le delete





    function printDate2(temp) {
      var dateStr = padStr(temp.getFullYear()) + "-" +  padStr(1 + temp.getMonth()) + "-" + padStr(temp.getDate())   ;
      return dateStr ;
    }
    



    const SaveEvent = async () => {
      console.log("SaveEvent") ;
      //console.log("idEntreprise") ;
      //console.log(idEntreprise) ;

      console.log(props) ;

      let sStartDate = printDate2(dateStart) + " " + padStr(eventStartHour.current) + ":" + padStr(eventStartMinute.current) ;
      let sEndDate = printDate2(dateStart) + " " + padStr(eventEndHour.current) + ":" + padStr(eventEndMinute.current) ;

      console.log(sStartDate) ;
      console.log(sEndDate) ;
      
      let sAllDay = "0" ;
      if (isAllDay.current === true)
        sAllDay = "1"

      
      if (props.Mode === "Add")
      {
          const url = process.env.REACT_APP_API_CREATE_EVENT_URL ;
          const response = await axios.post(url, {
              token: storedToken,
              Submit: 1,
              debug:1,
              Event_Type: eventType,
              Event_Title: eventTitle ,
              Event_AllDay: sAllDay ,
              Event_Start: sStartDate,
              Event_End: sEndDate,
              Event_Location: eventLocation,
              Event_Data: eventData,
          }, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
          })
         

          if (response.data.includes("ERROR:")) {
              console.log(`Error: ${response.data}`);
          } else {
              console.log(response.data) ;
              console.log("Event added");
          }
      }
      else{
          const url = process.env.REACT_APP_API_EDIT_EVENT_URL;
          const response = await axios.post(url, {
              token: storedToken,
              Submit: 1,
              debug: 1,
              idEvent: props.ID,
              Event_Type: eventType,
              Event_Title: eventTitle ,
              Event_AllDay: sAllDay,
              Event_Start: sStartDate,
              Event_End: sEndDate,
              Event_Location: eventLocation,
              Event_Data: eventData,
          }, {
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              }
              
          })

          if (response.data.includes("ERROR:")) {
              console.log(`Error: ${response.data}`);
          } else {
              console.log(response.data) ;
              console.log("Event modified");
          }


      }
      
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
      SaveEvent() ;
      if (props.SendCloseMessage !== null)
      {
        props.SendCloseMessage() ;
        if (props.ForceRender !== null)
          props.ForceRender() ;
      }
    }

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



  const DeleteEvent = async () => {
    console.log("DeleteEvent()") ;

    const url = process.env.REACT_APP_API_DELETE_EVENT_URL;
    const response = await axios.post(url, {
        token: storedToken,
        Submit: 1,
        debug: 1,
        idEvent: props.ID,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        
    })

    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log(response.data) ;
        console.log("Event deleted");
    }

    if (props.SendCloseMessage !== null)
    {
      props.SendCloseMessage() ;
      if (props.ForceRender !== null)
        props.ForceRender() ;
    }
  }
  

  











  // render
  return (
    <div>
      <Modal size="lg" show={isModalOpen}>

        <Modal.Header closeButton>

          <button onClick={DeleteEvent}><i className={`Dan_icon fe fe-trash-2`}></i></button>

        </Modal.Header>

        <Modal.Body>
              <FormGroup>
                <label>Type</label>
                <select id="TypeReunion"  className="form-control"  onChange={(e) =>  setEventType(e.target.value)}>
                  <option value="1">Réunion d'entrepreneurs</option>
                  <option value="2">Salon</option>
                  <option value="3">Rendez-vous client</option>
                  <option value="4">Webinaire</option>
                  <option value="5">Autre</option>
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

                  <select id="endHour" className="form-control-Dan add-hspace-15" onChange={(e) =>  eventEndHour.current = e.target.value }>
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
