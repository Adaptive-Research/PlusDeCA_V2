// import React, {Fragment} from "react";
import { Route, Link, useParams } from "react-router-dom";
import {Card, Row} from "react-bootstrap";
import {subscribeGroup, unSubscribeGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardSearchGroup.css';

export default function CardSearchGroup(props) {
    PrintLog("CardSearchGroup") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;
    

    // pour ecrire la phrase correspondant au nombre de membres
    let sMembre = 'membre' ;
    let sMembres = 'membres'
    let sNombre = '' ;

    if (props.Group.group_number <= 0){
        sNombre = '0' + ' '  + sMembre ;
    }else {
        if(props.Group.group_number === 1)
            sNombre = '1' + ' '  + sMembre ;
        else if(props.Group.group_number > 1)
            sNombre = props.Group.group_number + ' ' + sMembres ;
    }

    // pourquoi ne pas mettre l'image du logo quand il n'y pas d'image plutot que ne rien afficher   
    var FichierImage = '' ;    
    if (props.Group.group_image !== '0')
        FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.group_image + '/' ;


    function renderSubscriptionButtons() {
        return <div className="btnIcon">
            { 
                props.Group.isMember != true  ?
                    <div className="test">
                        <button className='btn-success p-1 rounded-2' onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>Rejoindre</button>                    
                    </div>
                :
                    <div className="test">
                        <button onClick={() => unSubscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)} className="btn-danger p-1 rounded-2">Quitter</button>
                    </div>
            }
        </div>
    }


    if (window.screen.width >= 991)
        return  <Row key={props.Group.id} className="bigRow">
                    <hr />
                    <Link 
                        // to={{
                        // pathname: `${process.env.PUBLIC_URL}/VoirGroup`, 
                        // query:{idGroup: props.Group.idGroup},
                        // // state:{idGroup: props.Group.idGroup}
                        // }}
                        to={ `${process.env.PUBLIC_URL}/VoirGroup/${props.Group.id}` }
                        className="rowGroup container col-lg-9 col-md-12 col-sm-12 mb-2"
                        >
                        { props.Group.group_image !== '0' ?
                            <img
                                className="rowImage col-lg-3 col-md-3 col-sm-2"
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
                        
                    { renderSubscriptionButtons() }

                </Row>
    else
        return  <Row key={props.Group.id} className="bigRow">
                    <hr />
                    <Link 
                        // to={{
                        // pathname: `${process.env.PUBLIC_URL}/VoirGroup`, 
                        // query:{idGroup: props.Group.idGroup},
                        // // state:{idGroup: props.Group.idGroup}
                        // }}
                        to={ `${process.env.PUBLIC_URL}/VoirGroup/${props.Group.id}` }
                        className="rowGroup container col-lg-9 col-md-12 col-sm-12 mb-2"
                        >
                        { props.Group.group_image !== '0' ?
                            <img
                                className="rowImage col-lg-3 col-md-3 col-sm-2"
                                src={FichierImage}
                                alt=""  
                            /> : null
                        }
                        <div className="secondPartGroup col-lg-9 col-md-9">
                            <h3 className="titleGroup text-xl text-dark font-weight-bold mb-3">{props.Group.nom}</h3>
                            <h6 as="h6" className="cityGroup mb-3" style={{ color:"rgb(135 116 87)", marginTop:"-10px", fontWeight:"600", textTransform: "uppercase" }}>{props.Group.group_city}</h6>
                            <p className="text-justify" style={{ color:"rgb(135 116 67)" }}>{ sNombre }</p>
                        </div>
                    </Link>
                        
                    { renderSubscriptionButtons() }

                </Row>
    
}