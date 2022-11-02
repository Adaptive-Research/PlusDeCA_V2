import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import {Card,Row,Col} from "react-bootstrap"
import {useNavigate} from "react-router";
import {EventData} from "./EventData"
import axios from "axios";
import  { getIDFromToken } from "../../../functions_Dan.js" ;




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









  

  async function GetInfoFromDatabase(url,t) 
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


          let vAllDay = false ;  
          if ( response.data[i].Event_AllDay === "1")
            vAllDay = true ;

         

          let bgColor= "#06377e" ;
          if  (response.data[i].Event_Type === "2")
            bgColor= "#006600" ;
          if  (response.data[i].Event_Type === "3")
            bgColor = "#0d6efd" ;
          if  (response.data[i].Event_Type === "4")
            bgColor= "#168c7f" ;
          if  (response.data[i].Event_Type === "5")
            bgColor= "#b05002" ;



          console.log("bgColor") ;  
          console.log(bgColor) ;  

          let s = {
            
            "id" : String(response.data[i].id) ,
            "title" : String(response.data[i].Event_Title), 
            "allDay" : vAllDay, 
            "start" : String(Event_Start),
            "end" : String(Event_End), 
            "backgroundColor": String(bgColor),
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
    GetInfoFromDatabase(url2,storedToken) ;
  
  console.log("dataEvents") ; 
  console.log(dataEvents) ;



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
    //console.log("eventInfo") ;
    //console.log(eventInfo) ;
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
    console.log('handleEventClick') ;

    console.log("id: " + clickInfo.event.id) ;
    console.log("title: " + clickInfo.event.title) ;
    console.log("allDay: " + clickInfo.event.allDay) ;
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

    console.log('handleDateSelect') ;
    console.log(selectInfo) ;

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
                </Col>

              
                <Col md={5}>
                  <EventData 
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
                </Col>  
              </Row>
              
            </Card.Body>
          </Card>
     
    </div>
  );
}
