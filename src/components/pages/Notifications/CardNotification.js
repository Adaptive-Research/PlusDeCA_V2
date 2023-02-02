// import React, {Fragment} from "react";
import { Route, Link, useParams } from "react-router-dom";
import {Card, Dropdown, Row} from "react-bootstrap";
import {PrintLog} from  "../../../data/customlibs/utils";

export default function CardNotification(props) {
    PrintLog("NotificationCard") ;
    PrintLog(props) ;

    return  <Dropdown.Item key={props.Notif.id} 
                className=" d-flex"
                href={`${process.env.PUBLIC_URL}/components/defaultChat/`}
                >
                <div className="me-3 notifyimg bg-primary-gradient brround box-shadow-primary">
                    <i className="fe fe-message-square"></i>
                    </div>
                    <div className="mt-1">
                    <h5 className="notification-text mb-1">
                        { props.Notif.notification_content }
                    </h5>
                    <span className="notification-subtext">
                        2 hours ago
                    </span>
                </div>
            </Dropdown.Item>
}