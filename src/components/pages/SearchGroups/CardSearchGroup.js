
import {Card, Row} from "react-bootstrap";
import {subscribeGroup} from "../../../data/customlibs/api_angelo";
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardSearchGroup.css';

export default function CardGroup(props) {
    PrintLog("CardGroup") ;
    PrintLog(props) ;
    const storedToken = localStorage.getItem('token') ;

    var FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.group_image + '/' ;

    return  <Row key={props.Group.id} className="rowGroup">
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
                            <button className='btn-success' onClick={() => subscribeGroup(storedToken, props.Group.id,props.ForceRenderGroup)}>
                                <i className="fa fa-share"></i>
                                &nbsp;
                                <span>Rejoindre</span>
                                {/* <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg fill-current" data-src="https://secure.meetupstatic.com/next/images/design-system-icons/share-outline.svg" data-icon="icon-32">
                                        <title>icon</title>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"></path>
                                    </svg>
                                </div> */}
                            </button>                    
                        </div>
                    </div>
                </div>
            </Row>
}