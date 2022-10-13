import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import{Breadcrumb,Card}from "react-bootstrap"
import { Link } from "react-router-dom";
export default function DefaultCalendar() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Default Calender</h1>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item" href="#">
          Components
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
              Default Calender
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link>
        </div>
      </div>
      <div className="">
        <Card>
          <Card.Body>
            <div className="cal1">
              <div className="clndr">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
