// import React, {Fragment} from "react";
import { Route, Link, useParams } from "react-router-dom";
import {Card, Row} from "react-bootstrap";
import {getUserNotifications, unSubscribeGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
// import './CardSearchGroup.css';

export default function NotificationCard(props) {
    PrintLog("NotificationCard") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;

    return  <Row key={props.Group.id} className="bigRow">
                <hr />
                <Link 
                    to={ `${process.env.PUBLIC_URL}/VoirGroup/${props.Group.id}` }
                    className="rowGroup container col-lg-9 col-md-12 col-sm-12 mb-2"
                    >
                   <div className="me-3 notifyimg bg-primary-gradient brround box-shadow-primary">
                        <i className="fe fe-message-square"></i>
                        </div>
                        <div className="mt-1">
                        <h5 className="notification-label mb-1">
                            New review received
                        </h5>
                        <span className="notification-subtext">
                            2 hours ago
                        </span>
                    </div>
                </Link>

            </Row>
}