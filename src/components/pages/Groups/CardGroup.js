
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

    return  <Row key={props.Group.idGroup} className="rowGroup">
                <hr />
                <div className="d-flex">
                    <div className="col-lg-3 col-md-3 col-sm-2">
                        <img
                            className="rowImage"
                            src={FichierImage}
                            alt=""  
                        />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-10">
                        <h3 className="text-xl font-weight-semibold">{props.Group.nom}</h3>
                        <h6 as="h6" className="mb-4 text-uppercase" style={{ color:"rgb(135 116 87)", marginTop:"-10px", fontWeight:"600" }}>{props.Group.tags}</h6>
                        <div>
                            <p className="text-justify" style={{ color:"rgb(135 116 67)" }}>{ props.Group.sdescription.substr(0, 150) + ' ...' }</p>
                            {/* <button className='btn btn-primary' onClick={() => EditGroup(props.Group)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-1 btn btn-danger' onClick={() => DeleteGroup(storedToken, props.Group.idGroup,props.ForceRenderGroup)}>
                                <i className="fa fa-trash"></i>
                            </button>                      */}
                        </div>
                    </div>
                </div>
            </Row>
}