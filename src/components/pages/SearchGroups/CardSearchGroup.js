// import React, {Fragment} from "react";
import { Route, Link, useParams } from "react-router-dom";
import {Card, Row} from "react-bootstrap";
import {subscribeGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardSearchGroup.css';
// const ShowGroup = React.lazy(() => import("./ShowGroup"));

export default function CardSearchGroup(props) {
    PrintLog("CardSearchGroup") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;
    

    // pour ecrire la phrase correspondant au nombre de membres
    let sMembre = 'membre' ;
    let sMembres = 'membres'
    let sNombre = '' ;

    if (props.Group.group_number === 0)
        sNombre = '1' + ' '  + sMembre ;
    else 
        sNombre = props.Group.group_number + 1 + ' ' + sMembres ;



    // pourquoi ne pas mettre l'image du logo quand il n'y pas d'image plutot que ne rien afficher   
    var FichierImage = '' ;    
    if (props.Group.group_image !== '0')
        FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.group_image + '/' ;


    function ShowGroupe(id) {
        
    }


    return  <Row key={props.Group.id} className="bigRow">
                <hr />
                <Link 
                    to={{
                    pathname: `${process.env.PUBLIC_URL}/VoirGroup`, 
                    query:{idGroup: props.Group.idGroup},
                    // state:{idGroup: props.Group.idGroup}
                    }}
                    className="rowGroup container col-lg-9 col-md-12 col-sm-12 mb-2"
                    >
                    { props.Group.group_image !== '0' ?
                        <img
                            className="rowImage col-lg-3 col-md-3"
                            src={FichierImage}
                            alt=""  
                        /> : null
                    }
                    <div className="secondPartGroup col-lg-9 col-md-9">
                        <h3 className="titleGroup text-xl text-dark font-weight-bold mb-3">{props.Group.nom}</h3>
                        <h6 as="h6" className="cityGroup mb-3" style={{ color:"rgb(135 116 87)", marginTop:"-10px", fontWeight:"600", textTransform: "uppercase" }}>{props.Group.group_city}</h6>
                        <p className="textDescript text-justify mb-3" style={{ color:"rgb(135 116 67)" }}>{ props.Group.sdescription.substr(0, 200) + ' ...' }</p>
                        <p className="text-justify" style={{ color:"rgb(135 116 67)" }}>{ sNombre }</p>
                    </div>
                </Link>
                <div className="btnIcon">
                    <button onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)} className="text-2xl iconBut">
                        <svg className="svg-icon" style={{ width: "2em", height: "2em", verticalAlign: "middle", fill: "currentColor" , overflow: "hidden" }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M962 512c0-247.785-202.215-450-450-450s-450 202.215-450 450c0 247.785 202.215 450 450 450 68.354 0 131.013-14.241 187.974-39.874 25.633 17.089 56.962 28.481 91.139 28.481 85.443 0 153.797-68.354 153.797-153.797 0-34.178-11.392-65.507-28.481-88.292 28.481-59.811 45.57-125.317 45.57-196.519zM776.874 685.735c2.848-2.848 8.544-5.696 14.241-5.696 8.544 0 17.089 8.544 17.089 19.937v76.899h79.747c8.544 0 17.089 8.544 17.089 19.937 0 8.544-8.544 17.089-17.089 17.089h-79.747v79.747c0 8.544-8.544 17.089-17.089 17.089-11.392 0-17.089-8.544-17.089-17.089v-79.747h-79.747c-11.392 0-19.937-8.544-19.937-17.089 0-5.696 2.848-11.392 5.696-14.241 2.848-2.848 8.544-5.696 14.241-5.696h79.747v-76.899c0-5.696 0-11.392 2.848-14.241zM321.177 554.722v-227.848c0-113.924 216.456-113.924 216.456 0v227.848c0 113.924-216.456 113.924-216.456 0zM634.468 902.189c-37.026 11.392-79.747 19.937-122.468 19.937-108.228 0-207.911-42.722-281.962-113.924 11.392-71.203 37.026-131.013 96.835-150.95 39.874 37.026 165.189 37.026 205.063 0 85.443 28.481 99.683 133.861 102.532 244.937zM791.114 640.165c-8.544 0-17.089 2.848-25.633 2.848-11.392-11.393-25.633-19.937-39.874-28.481 8.544-19.937 17.089-42.722 17.089-65.507v-210.759c0-79.747-62.658-122.468-131.013-128.165-17.089-2.848-25.633 11.392-25.633 22.785 2.848 11.392 11.392 19.937 19.937 19.937 51.265 2.848 96.835 31.329 96.835 82.596v210.759c0 25.633-11.392 48.418-28.481 59.811-19.937 14.241-14.241 31.329 0 34.177 11.393 2.848 22.785 8.544 34.178 11.392 2.848 2.848 8.544 5.696 11.392 5.696-31.329 17.089-54.114 42.722-68.354 74.050-17.089-48.418-45.57-85.443-91.139-108.228 11.392-19.937 17.089-42.722 17.089-65.507v-230.696c0-170.886-296.203-170.886-296.203 0v230.696c0 22.785 8.544 45.569 17.089 65.507-56.962 28.481-88.292 82.596-102.532 150.95-56.962-71.203-93.987-162.342-93.987-262.026 0-225 185.126-410.126 410.126-410.126 225 0 410.126 185.126 410.126 410.126 0 56.962-14.241 113.924-34.178 162.342-28.481-19.937-59.811-34.177-96.835-34.177z"/></svg>
                    </button>
                </div>
                <div className="btnDiv">
                    <button className='buttonJoin btn-success p-1 rounded-2' onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>
                        <span>Rejoindre</span>
                    </button>                    
                </div>
            </Row>
}