import React, {useState,useRef} from "react";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveGroup,UpdateGroup} from "../../../data/customlibs/api_angelo";
import {FindTranslation} from  "../../../data/customlibs/utils" ;
import {getASpecificGroup} from "../../../data/customlibs/api_angelo";
import '../../../assets/css/GlobalInputbackground.css';
import {PrintLog} from  "../../../data/customlibs/utils";
import './CardSearchGroup.css';

export default function ShowGroup(props) {

    const storedToken = localStorage.getItem('token');
    // const theIdGroup = props.idGroup;
    // console.log(this.params);
    PrintLog("ShowGroup") ;
    //PrintLog("props") ;
    // PrintLog(theIdGroup) ;
    PrintLog(props) ;
    
    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;    
 
    // pour le ForceRender
    const downloaded_Groups = useRef(false) ;
        
    const modeEdit = useRef("") ;
    const [idGroup, setIdGroup] = useState("");
    const [nom, setNom] = useState("");
    const [tags, setTag] = useState("");
    const [city, setCity] = useState("");
    const [group_number, setGroupNumber] = useState("");

    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [htmltext, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const sdescription = useRef("");   // ceci est le texte contenu dans l'objet Result 

    const [group_image, setPhoto] = useState("");
    const [nomMsg, setNomMsg] = useState("");
    const [tagMsg, setTagMsg] = useState("");
    const [cityMsg, setCityMsg] = useState("");
    const [descriptionMsg, setDescriptionMsg] = useState("");
   
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
        getASpecificGroup("showGroup",props.idGroup,storedToken,RenderAfterLoad) ;
        reloadInfos.current = false ;
    }

    function ForceRenderGroup() {
        getASpecificGroup("showGroup", props.idGroup, storedToken, RenderAfterLoad) ;
    }
    
    // Separate drafts from published groups
    const renderGroup = (TypeGroup) => {
        const group = JSON.parse(localStorage.getItem("showGroup"));

        if (group === null)
        {
            return <Row id="user-profile">
                    <Row className="">
                        <div className="groupBlock1 mb-2 bg-white p-5 row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                {/* <img src={ group.group_image } alt="" /> */}
                                <img src={ 'https://secure.meetupstatic.com/photos/event/e/f/d/clean_509523837.jpeg' } className="rounded-3" alt="" />
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 mb-5">
                                {/* <h3 className="mb-5">{ group.nom }</h3> */}
                                <h2 className="mb-5 text-bold">{ 'Nom du groupe' }</h2>
                                <div className="text-small">
                                    {/* <span>{ group.group_city }</span> */}
                                    <span>{ 'Ville du groupe' }</span>
                                </div>
                                <div className="text-small">
                                    {/* <span>{ group.group_number }</span> */}
                                    <span>{ 'N membres' }</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="groupBlock2 mt-5 p-5 row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <h3 className=" font-weight-bold">A propos du groupe</h3>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora neque maxime reprehenderit nesciunt! Voluptate, harum eligendi eveniet atque omnis dolorum libero doloremque earum dolore modi sint dolorem nesciunt sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga maiores alias unde quis numquam ratione quod eos ipsam omnis nam error ut doloribus velit obcaecati, eum consequuntur asperiores explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ut atque earum at molestias? Rerum, expedita! Excepturi reiciendis, sint asperiores assumenda sapiente beatae blanditiis natus ratione nobis ea exercitationem eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora neque maxime reprehenderit nesciunt! Voluptate, harum eligendi eveniet atque omnis dolorum libero doloremque earum dolore modi sint dolorem nesciunt sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga maiores alias unde quis numquam ratione quod eos ipsam omnis nam error ut doloribus velit obcaecati, eum consequuntur asperiores explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ut atque earum at molestias? Rerum, expedita! Excepturi reiciendis, sint asperiores assumenda sapiente beatae blanditiis natus ratione nobis ea exercitationem eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora neque maxime reprehenderit nesciunt! Voluptate, harum eligendi eveniet atque omnis dolorum libero doloremque earum dolore modi sint dolorem nesciunt sed? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga maiores alias unde quis numquam ratione quod eos ipsam omnis nam error ut doloribus velit obcaecati, eum consequuntur asperiores explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ut atque earum at molestias? Rerum, expedita! Excepturi reiciendis, sint asperiores assumenda sapiente beatae blanditiis natus ratione nobis ea exercitationem eum!</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <h3 className=" font-weight-bold">Organisateur</h3>
                                <span className="mb-5">Nom Prénoms</span>
                                <h3 className="mt-5 font-weight-bold">Membres</h3>
                                <span>Nom Prénoms</span>
                            </div>
                        </div>
                    </Row>
                </Row> ;
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
