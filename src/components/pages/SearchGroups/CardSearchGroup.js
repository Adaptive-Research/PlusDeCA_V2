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
                        <p className="textDescript text-justify mb-3" style={{ color:"rgb(135 116 67)" }}>{ props.Group.sdescription.substr(0, 120) + ' ...' }</p>
                        <p className="text-justify" style={{ color:"rgb(135 116 67)" }}>{ sNombre }</p>
                    </div>
                </Link>
                <div className="btnDiv">
                    <button className='buttonJoin btn-success p-1 rounded-2' onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>
                        {/* <i className="fa fa-share"></i> */}
                        &nbsp;
                        <span>Rejoindre</span>
                    </button>                    
                </div>
            </Row>
}