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


    return  <Row key={props.Group.id} className="">
                <hr />
                <div className="rowGroup container col-lg-9 col-md-12 col-sm-12">
                    <div className="col-lg-3 col-md-3">
                    { props.Group.group_image !== '0' ?
                        <div>
                            <img
                                className="rowImage rounded-3"
                                src={FichierImage}
                                alt=""  
                            />
                        </div> : null
                    }
                    </div>
                    <div className="secondPartGroup col-lg-9 col-md-9">
                        <div className="col-lg-12 col-md-12 col-sm-8">
                            <h3 className="titleGroup text-xl font-weight-semibold mb-3">{props.Group.nom}</h3>
                            <h6 as="h6" className="cityGroup mb-5" style={{ color:"rgb(135 116 87)", marginTop:"-10px", fontWeight:"600", textTransform: "uppercase" }}>{props.Group.group_city}</h6>
                            <p className="textDescript text-justify mb-5" style={{ color:"rgb(135 116 67)" }}>{ props.Group.sdescription.substr(0, 200) + ' ...' }</p>
                            <p className="text-justify" style={{ color:"rgb(135 116 67)" }}>{ sNombre }</p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-3">
                            <button className='btn-primary' onClick={() => ShowGroupe(props.Group)}>
                                <i className="fa fa-eye"></i>
                                &nbsp;
                                    <Link 
                                        to={{
                                        pathname: `${process.env.PUBLIC_URL}/VoirGroup`, 
                                        query:{idGroup: props.Group.idGroup},
                                        // state:{idGroup: props.Group.idGroup}
                                    }} className="text-white">
                                    Voir
                                  </Link>
                            </button>
                            &nbsp; &nbsp;
                            <button className='buttonJoin btn-success' onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>
                                {/* <i className="fa fa-share"></i> */}
                                &nbsp;
                                <span>Rejoindre</span>
                            </button>                    
                        </div>
                    </div>
                </div>
            </Row>
}