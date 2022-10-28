import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import {Breadcrumb, Card,Row,Col} from "react-bootstrap"
import {useNavigate} from "react-router";
import {EventData} from "./EventData"
import axios from "axios";
import  { FindTranslation, getIDFromToken } from "../../../functions_Dan.js" ;



export default function FullCalendars() {

  const [reloadInfos, setReloadInfos] = useState(true) ;
  const [dataEvents, setDataEvents] = useState() ;

  // pour l'affichage des fenetres modales
  const [showEditEvent, SetShowEditEvent] = useState(false) ;






  const navigate = useNavigate();
  
  console.log("FullCalendar component") ;


  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  //console.log(storedToken) ;  
  //console.log(idUser) ;





  let eventGuid = 0;

  // une date iso a le format suivant:     2022-10-18T14:43:00.189Z
  // la ligne ci-desssous efface tout ce qui est apres T pour ne garder que YYYY-MM-DD
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today



  

  async function GetInfo(url,t) 
  {
    console.log("GetInfo") ;
    console.log(url) ;
    console.log(t) ;


    const response = axios.post(url, {
        Submit: 1,
        token: t,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then( function(response) {
   
      console.log("response.data") ;
      console.log(response.data) ;

      let pos = response.data.indexOf("ERROR") ;
      if (pos !== 0)
      { 
        
        let ed = [] ;
        
        for (let i = 0 ; i < response.data.length; i++)
        {
          let Event_Start = response.data[i].Event_Start ;
          let Event_End = response.data[i].Event_End ;


          // les 2 lignes ci-dessous servent a mettre au format ISO:    2022-10-18T14:43:00
          if (Event_Start !== "")
            Event_Start = Event_Start.replace(" ","T") ;
          if (Event_End !== "")
            Event_End = Event_End.replace(" ","T") ;

          let vAllDay = false ;  
          if ( response.data[i].Event_AllDay === "1")
            vAllDay = true ;

         

          let s = {
            
          "id" : String(response.data[i].id) ,
          "title" : String(response.data[i].Event_Title), 
          "allDay" : String(vAllDay), 
          "start" : String(Event_Start),
          "end" : String(Event_End), 
          "extendedProps":
          {
            "type" : String(response.data[i].Event_Type), 
            "location" : String(response.data[i].Event_Location), 
            "data" : String(response.data[i].Event_Data)  
          } 
                  
        } ;
          ed.push(s) ;
        }
        console.log("ed") ; 
        console.log(ed) ;

        setDataEvents(ed) ;
        setReloadInfos(false) ;
      

      }
    })
  }


  // on charge les data
  const url2 = process.env.REACT_APP_API_SHOW_EVENT_URL ;
  if (reloadInfos === true)
    GetInfo(url2,storedToken) ;
  
  console.log("dataEvents") ; 
  console.log(dataEvents) ;

  function createEventId() {
    return String(eventGuid++);
  }


  // C'est le callback appele quand on ferme ModalEditCompany 
  function ModalEditEventClose()
  {
      //console.log("ModalEditCompanyClose") ;
      SetShowEditEvent(false) ;
  }





function ForceRender(variable) {
      navigate(0) ;
}









 
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }



  // pour les infos 
  const [modeEdit,SetModeEdit]= useState("") ;
  const [idEvent, setIdEvent] = useState("") ;
  const [typeReunion, setTypeReunion] = useState("") ;
  const [titre, setTitre] = useState("") ;
  const [allDay, setAllDay] = useState("") ;
  const [start, setStart] = useState("") ;
  const [end, setEnd] = useState("") ;
  const [location, setLocation] = useState("") ;
  const [data, setData] = useState("") ;
 


  // utilise quand on clique sur un evenement
  const handleEventClick = (clickInfo) => {
    console.log('handleEventClick') ;

    console.log("id: " + clickInfo.event.id) ;
    console.log("title: " + clickInfo.event.title) ;
    console.log("allday: " + clickInfo.event.allday) ;
    console.log("startStr: " + clickInfo.event.startStr) ;
    console.log("endStr: " + clickInfo.event.endStr) ;
    console.log("url: " + clickInfo.event.url) ;
    console.log("backgroundColor: " + clickInfo.event.backgroundColor) ;
    console.log("borderColor: " + clickInfo.event.borderColor) ;
    console.log("textColor: " + clickInfo.event.textColor) ;


    SetModeEdit("Edit") ;
    setIdEvent(clickInfo.event.id) ;
    setTypeReunion(clickInfo.event.extendedProps.type) ;
    setTitre(clickInfo.event.title) ;
    setAllDay(clickInfo.event.allday) ;
    setStart(clickInfo.event.start) ;
    setEnd(clickInfo.event.end) ;
    setLocation(clickInfo.event.extendedProps.location) ;
    setData(clickInfo.event.extendedProps.data) ;





    /*
    console.log(clickInfo) ;

    console.log(clickInfo.event.title) ;
    console.log(clickInfo.el.style) ;

    clickInfo.el.style.backgroundColor = "red" ; 
    */



    SetShowEditEvent(true) ;
  };







  const handleEvents = (events) => {};


  // c'est utilise quand on selectionne une date
  const handleDateSelect = (selectInfo) => {

    console.log('handleDateSelect') ;
    console.log(selectInfo) ;

    SetShowEditEvent(true) ;
    SetModeEdit("Add") ;


    /*
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
    */
  };

  //rightsidebar
  const openCloseEventData = () => {
    console.log('openCloseEventData') ;
  };



  return (
    <div>
    
          <Card>
            <Card.Body>

              <Row>
              
                <Col>
                  <div className="fullclndr" >
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        weekends={true}
                        events={dataEvents}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        eventsSet={handleEvents}
                      />
                  </div>
                </Col>

              
                <Col md={5}>
                  <EventData 
                    show={showEditEvent} 
                    SendCloseMessage={ModalEditEventClose}  
                    ForceRender={ForceRender}
                    Mode={modeEdit}
                    ID={idEvent}
                    Title={titre}
                    AllDay={allDay}
                    Start={start}
                    End={end}
                    Location={location}
                    Data={data}
                  />
                </Col>  
              </Row>
              
            </Card.Body>
          </Card>
     
    </div>
  );
}
