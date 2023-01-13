
import {Card, Row} from "react-bootstrap";
import {DeleteGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardGroup.css';

export default function CardGroup(props) {
    PrintLog("CardGroup") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;

    // props.Group provient directment de ce qui a ete charge de la base de donnees


    function EditGroup(Group) {
        if (props.SendGroupData !== null)
            props.SendGroupData(true, Group) ;
    }


    var FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.group_image + '/' ;

    return  <Card key={props.Group.idGroup} className="cardGroup d-flex">
                <img
                    className="cardImage"
                    src={FichierImage}
                    alt=""
                />
                <Card.Header style={{padding: '2rem'}}>
                    <Card.Title as="h5">{props.Group.nom}</Card.Title>
                    <Card.Body  style={{position: 'absolute', right: '0px'}}>
                        <button className='btn btn-primary' onClick={() => EditGroup(props.Group)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className='m-1 btn btn-danger' onClick={() => DeleteGroup(storedToken, props.Group.idGroup,props.ForceRenderGroup)}>
                            <i className="fa fa-trash"></i>
                        </button>                     
                    </Card.Body>
                    
                </Card.Header>
                
            </Card>


}