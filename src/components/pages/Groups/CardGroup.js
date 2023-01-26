
import { Route, Link, useParams } from "react-router-dom";
import {Card, Row} from "react-bootstrap";
import {DeleteGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardGroup.css';

export default function CardGroup(props) {
    PrintLog("CardGroup") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;

    // props.Group provient directment de ce qui a ete charge de la base de donnees
    // pour ecrire la phrase correspondant au nombre de membres
    let sMembre = 'membre' ;
    let sMembres = 'membres'
    let sNombre = '' ;

    if (props.Group.group_number === 0)
        sNombre = '1' + ' '  + sMembre ;
    else 
        sNombre = props.Group.group_number + 1 + ' ' + sMembres ;

    function EditGroup(Group) {
        if (props.SendGroupData !== null)
            props.SendGroupData(true, Group) ;
    }


    var FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.group_image + '/' ;

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
                <button className='btn btn-primary iconBut1' onClick={() => EditGroup(props.Group)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className='btn btn-danger iconBut2' onClick={() => DeleteGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>
                    <i className="fa fa-trash"></i>
                </button> 
            </div>
        </Row>
}