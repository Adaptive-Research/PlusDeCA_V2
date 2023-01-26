import React, {useState, useRef} from "react";
import { useParams } from "react-router-dom";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveGroup,UpdateGroup} from "../../../data/customlibs/api_angelo";
import {FindTranslation} from  "../../../data/customlibs/utils" ;
import {getASpecificGroup} from "../../../data/customlibs/api_angelo";
import '../../../assets/css/GlobalInputbackground.css';
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardSearchGroup.css';

export default function ShowGroup(props) {

    const storedToken = localStorage.getItem('token');
    
    // pour le reload des infos
    const reloadInfos = useRef(true) ;

    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;    
 
    // pour le ForceRender
    const downloaded_Groups = useRef(false) ;
        
    const { id } = useParams();
   
    function RenderAfterLoad(variable) {
        PrintLog("RenderAfterLoad") ;

        if (variable === "showGroup")
            downloaded_Groups.current = true ;
    
        if (downloaded_Groups.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_Groups.current = false ;      
    }

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        PrintLog("reloadInfos") ;
        getASpecificGroup("showGroup",id,storedToken,RenderAfterLoad) ;
        reloadInfos.current = false ;
    }

    function ForceRenderGroup() {
        getASpecificGroup("showGroup", id, storedToken, RenderAfterLoad) ;
    }
    
    function htmlToText(html) {
        var temp = document.createElement('p');
        temp.innerHTML = html;
        return temp.textContent; // Or return temp.innerText if you need to return only visible text. It's slower.
    }
    
    // Separate drafts from published groups
    const renderGroup = () => {
        const group = JSON.parse(localStorage.getItem("showGroup"));
        console.log(process.env.REACT_APP_API_GET_IMAGE_URL + group[0].group_image + '/');

        var groupImage = '' ;    
        if (group[0].group_image !== '0')
            groupImage = process.env.REACT_APP_API_GET_IMAGE_URL + group[0].group_image + '/';
        
        // pour ecrire la phrase correspondant au nombre de membres
        let sMembre = 'membre' ;
        let sMembres = 'membres'
        let sNombre = '' ;

        if (group[0].group_number === 0)
            sNombre = '1' + ' '  + sMembre ;
        else 
            sNombre = group[0].group_number + 1 + ' ' + sMembres ;

        // var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
        // var doc = new DOMParser().parseFromString(xmlString, "text/xml");
        // console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
        // console.log(doc.firstChild.firstChild.innerHTML); 

        if (group !== null)
        {
            return <Row className="">
                        <div className="groupBlock1 mb-2 bg-white pt-4 pl-4 pr-4 row">
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                            {/* <div className=""> */}
                                {
                                    group[0].group_image !== "0" ?
                                    <img className="imageGroup col-lg-5 col-md-5 col-sm-8 rounded-5 mb-2" src={ groupImage } alt="" />
                                    : null
                                }
                            {/* </div> */}
                            <div className="groupContent1 col-lg-5 col-md-5 col-sm-8">
                                <h3 className="mb-5 text-bold">{ group[0].nom }</h3>
                                <div className="text-small">
                                    <span>{ group[0].group_city }</span>
                                </div>
                                <div className="text-small">
                                    <span>{ sNombre }</span>
                                </div>
                            </div>
                            <hr />
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                        </div>
                        <div className="groupBlock2 mt-4 p-4 row">
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <h3 className=" font-weight-bold">A propos du groupe</h3>
                                <p className="text-justify">{ group[0].sdescription }</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <h3 className=" font-weight-bold">Organisateur</h3>
                                <span className="mb-5">Nom Prénoms</span>
                                <h3 className="mt-5 font-weight-bold">Membres</h3>
                                <span>Nom Prénoms</span>
                            </div>
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                        </div>
                    </Row>;
        }
        else
            return "" ;
    }

    return (
        <div>
            
            <div className="">{renderGroup()}</div>
            
        </div>
    );
}
