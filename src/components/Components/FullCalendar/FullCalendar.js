import React, { useRef, useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import {Card} from "react-bootstrap"
import {ModalEditEvent} from "./ModalEditEvent"
import {getEventsForUser} from "../../../data/customlibs/api";
import '../../../assets/css/FullCalendar.css';



export default function FullCalendars() {

  const reloadInfos = useRef(true) ;
  const [dataEvents, setDataEvents] = useState() ;

  // pour l'affichage des fenetres modales
  const [showEditEvent, SetShowEditEvent] = useState(false) ;
  const fullCalendarRef = useRef() ;
  


  



  
  PrintLog("FullCalendar component") ;


  const storedToken = localStorage.getItem('token') ;


  


 function AddEventsToFullCalendar(ShouldRender)
 {
    let userEvents =  [] ;
    let suserEvents = localStorage.getItem('userEvents') ;
    if (suserEvents !== undefined)
    {
      userEvents = JSON.parse(suserEvents) ;
      if (userEvents !== null) {
      
        let pos = userEvents.indexOf("ERROR") ;
        if (pos !== 0)
        { 
          let ed = [] ;
          
          for (let i = 0 ; i < userEvents.length; i++)
          {
            let obj = userEvents[i] ;
            let Event_Start = obj.Event_Start ;
            let Event_End = obj.Event_End ;
          
          
            let vAllDay = false ;  
            if ( obj.Event_AllDay === "1")
              vAllDay = true ;
          
          
          
            let bgColor= "#CCCCCC" ;
            if  (obj.Event_Type === "1")
              bgColor = "#06377e" ;
            if  (obj.Event_Type === "2")
              bgColor= "#006600" ;
            if  (obj.Event_Type === "3")
              bgColor = "#0d6efd" ;
            if  (obj.Event_Type === "4")
              bgColor= "#168c7f" ;
            if  (obj.Event_Type === "5")
              bgColor= "#b05002" ;
            
          
          
          
            //PrintLog("bgColor") ;  
            //PrintLog(bgColor) ;  
          
            let s = {
              
              "id" : String(obj.id) ,
              "title" : String(obj.Event_Title), 
              "allDay" : vAllDay, 
              "start" : String(Event_Start),
              "end" : String(Event_End), 
              "backgroundColor": String(bgColor),
              "extendedProps":
              {
                "type" : String(obj.Event_Type), 
                "location" : String(obj.Event_Location), 
                "data" : String(obj.Event_Data)  
              } 
            
                      
            } ;
            ed.push(s) ;
          }

          setDataEvents(ed) ;

          if (ShouldRender)
            fullCalendarRef.current.render();
        }
      }
    }
 }




  

 

  // on charge les data
  if (reloadInfos.current === true) {
    reloadInfos.current = false ;
    AddEventsToFullCalendar(false) ;
  }
  


  // C'est le callback appele quand on ferme ModalEditCompany 
  function ModalEditEventClose()
  {
      SetShowEditEvent(false) ;
  }


  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


  function ForceRender(variable) {
        PrintLog("ForceRender") ;
        delay(500).then(() => AddEventsToFullCalendar(true) );
  }






 
  function renderEventContent(eventInfo) {
    //PrintLog("eventInfo") ;
    //PrintLog(eventInfo) ;
    return (
      <>
        <span>{eventInfo.timeText}</span>
        <span className="add-hspace-5"> <b>{eventInfo.event.title}</b> </span>
      </>
    );
  }



  // pour les infos 
  const [modeEdit,SetModeEdit]= useState("") ;
  const [idEvent, setIdEvent] = useState("") ;
  const [typeReunion, setTypeReunion] = useState(1) ;
  const [titre, setTitre] = useState("") ;
  const [allDay, setAllDay] = useState("") ;
  const [start, setStart] = useState("") ;
  const [end, setEnd] = useState("") ;
  const [location, setLocation] = useState("") ;
  const [data, setData] = useState("") ;
 


  // utilise quand on clique sur un evenement
  const handleEventClick = (clickInfo) => {
    PrintLog('handleEventClick') ;

    PrintLog("id: " + clickInfo.event.id) ;
    PrintLog("title: " + clickInfo.event.title) ;
    PrintLog("allDay: " + clickInfo.event.allDay) ;
    PrintLog("startStr: " + clickInfo.event.startStr) ;
    PrintLog("endStr: " + clickInfo.event.endStr) ;
    PrintLog("url: " + clickInfo.event.url) ;
    PrintLog("backgroundColor: " + clickInfo.event.backgroundColor) ;
    PrintLog("borderColor: " + clickInfo.event.borderColor) ;
    PrintLog("textColor: " + clickInfo.event.textColor) ;


    SetModeEdit("Edit") ;
    setIdEvent(clickInfo.event.id) ;
    setTypeReunion(clickInfo.event.extendedProps.type) ;
    setTitre(clickInfo.event.title) ;
    setAllDay(clickInfo.event.allDay) ;
    setStart(clickInfo.event.start) ;
    setEnd(clickInfo.event.end) ;
    setLocation(clickInfo.event.extendedProps.location) ;
    setData(clickInfo.event.extendedProps.data) ;



    SetShowEditEvent(true) ;
  };







  const handleEvents = (events) => {};




  
  // c'est utilise quand on selectionne une date
  const handleDateSelect = (selectInfo) => {

    PrintLog('handleDateSelect') ;
    PrintLog(selectInfo) ;

    SetShowEditEvent(true) ;
    SetModeEdit("Add") ;

    setIdEvent("0") ;
    setTypeReunion("1") ;
    setTitre("") ;
    setAllDay(selectInfo.allDay) ;
    setStart(selectInfo.start) ;
    setEnd(selectInfo.end) ;
    setLocation("") ;
    setData("") ;


  };


  const openCloseEventData = () => {
    PrintLog('openCloseEventData') ;
  };



  return (
    <div>
          <Card>
            <Card.Body>

                  <div className="fullclndr" >
                      <FullCalendar
                        ref={fullCalendarRef}
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
                        initialView="timeGridWeek"
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
                  <ModalEditEvent 
                    show={showEditEvent} 
                    SendCloseMessage={ModalEditEventClose}  
                    ForceRender={ForceRender}
                    Mode={modeEdit}
                    ID={idEvent}
                    TypeReunion={typeReunion}
                    Title={titre}
                    AllDay={allDay}
                    Start={start}
                    End={end}
                    Location={location}
                    Data={data}
                  />
            </Card.Body>
          </Card>
     
    </div>
  );
}
