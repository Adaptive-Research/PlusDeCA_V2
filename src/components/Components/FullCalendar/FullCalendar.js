import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import {Breadcrumb, Card,Row,Col} from "react-bootstrap"
import {EventData} from "./EventData"
import axios from "axios";
import  { FindTranslation, getIDFromToken } from "../../../functions_Dan.js" ;



export default function FullCalendars() {

  const [reloadInfos, setReloadInfos] = useState(true) ;
  const [dataEvents, setDataEvents] = useState() ;




  
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
          Event_Start = Event_Start.replace(" ","T") ;
          Event_End = Event_End.replace(" ","T") ;


          let s = {"id" : String(response.data[i].id) ,"title" : String(response.data[i].Event_Name), "start" : String(Event_Start) } ;
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

  const initialstate1 = {
    
    
    events: [
      { title: "Réunion d'entrepreneurs", id: "1", bg: "bg-blue-700", border: "border-primary" },
      { title: "Salon", id: "2", bg: " bg-red2-700", border: "border-success" },
      { title: "Rendez-vous client", id: "3", bg: "bg-blue2-600", border: "border-info" },
      { title: "Webinaire", id: "4", bg: "bg-orange-600", border: "border-info" },
      { title: "Autre", id: "5", bg: "bg-green2-700", border: "border-danger" },
    ],
  };
  const [state] = useState(initialstate1);



  useEffect(() => {

    const INITIAL_EVENTS = [
      {
        id: "1",
        title: "Naissance",
        start: '1968-02-16T10:00:00',
      },
    ];
  
    console.log("INITIAL_EVENTS") ;
    console.log(INITIAL_EVENTS) ;
  
    if (reloadInfos === true)
      setDataEvents(INITIAL_EVENTS) ;
  
  
  
  
  
      
   
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });

  }, []);



  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }


  // utilise quand on clique sur un evenement
  const handleEventClick = (clickInfo) => {
    console.log('handleEventClick') ;
    document.querySelector(".EventData").classList.toggle("open");
  };


  const handleEvents = (events) => {};


  // c'est utilise quand on selectionne une date
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Saisissez un titre pour cet évènement");
    let calendarApi = selectInfo.view.calendar;

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
  };

  //rightsidebar
  const openCloseEventData = () => {
    console.log('openCloseEventData') ;
    document.querySelector(".EventData").classList.toggle("open");
  };



  return (
    <div>
    
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <div id="external-events">
                    <h4>
                      <strong>A placer sur le calendrier</strong>
                    </h4>

                    {state.events.map((event) => (
                      <div
                        className={`fc-event m-1 ${event.bg} ${event.border}`}
                        title={event.title}
                        data={event.id}
                        key={event.id}
                      >
                        <div className="fc-event-main">{event.title}</div>
                      </div>
                    ))}
                    <EventData />
                  </div>
                </Col>
                <Col md={9} >
                  <div className="fullclndr">
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
                      weekends={state.weekendsVisible}
                      events={dataEvents}
                      select={handleDateSelect}
                      eventContent={renderEventContent}
                      eventClick={handleEventClick}
                      eventsSet={handleEvents}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     
    </div>
  );
}
