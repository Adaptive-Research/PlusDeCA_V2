import React, {useState, useRef} from "react";
import { Link, useParams } from "react-router-dom";
import { Row} from "react-bootstrap";
import {getASpecificGroup, subscribeGroup, unSubscribeGroup, showAllMembersIntoAGroup, getAGroupCreator} from "../../../data/customlibs/api_angelo";
import {FindTranslation, PrintLog} from  "../../../data/customlibs/utils" ;
import '../../../assets/css/GlobalInputbackground.css';
import './CardSearchGroup.css';

export default function ShowGroup(props) {

    const storedToken = localStorage.getItem('token');
    
    // pour le reload des infos
    const reloadInfos = useRef(true) ;

    // pour le Rerender
    const [compteur, setCompteur] = useState(0) ;    
 
    // pour le ForceRender
    const downloaded_ShowGroup = useRef(false) ;
    const downloaded_Members = useRef(false) ;
    const downloaded_Creator = useRef(false) ;
        
    const { id } = useParams();
   
    function RenderAfterLoad(variable) {
        PrintLog("RenderAfterLoad") ;

        if (variable === "showGroup")
            downloaded_ShowGroup.current = true ;

        if (variable === "allMembers")
            downloaded_Members.current = true ;

        if (variable === "groupCreator")
            downloaded_Creator.current = true ;
    

        if (downloaded_ShowGroup.current === true && downloaded_Members.current === true && downloaded_Creator.current === true)
            setCompteur(compteur+1) ; 
    
    }

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        PrintLog("reloadInfos") ;

        reloadInfos.current = false ;
        downloaded_Members.current = false ;      
        downloaded_Creator.current = false ;  
        downloaded_ShowGroup.current = false ;         


        getASpecificGroup("showGroup",id,storedToken,RenderAfterLoad) ;
        showAllMembersIntoAGroup("allMembers",id, storedToken, RenderAfterLoad) ;
        getAGroupCreator("groupCreator",id, storedToken, RenderAfterLoad) ;

    }
    
    function ForceRenderGroup() {
        downloaded_Members.current = false ;      
        showAllMembersIntoAGroup("allMembers",id, storedToken, RenderAfterLoad) ;
    }
    

    const renderGroupCreator = () => {
        const groupCreator = JSON.parse(localStorage.getItem("groupCreator"));
        console.log(groupCreator);
        if(groupCreator != null){

            return groupCreator.map((creator) => {
                    var sFonction = creator.Fonction ;
                    if (creator.Fonction === null)
                        sFonction = "" ;

                    return <Row key={creator.id}>
                        <Link
                            to={ `${process.env.PUBLIC_URL}/pages/showProfile` } 
                            >{ creator.Prenom + " " + creator.Nom }
                        </Link>

                        <Link to={ `${process.env.PUBLIC_URL}/pages/showEntreprise` } >
                            { sFonction + " " +  creator.Entreprise }
                        </Link>
                    </Row>
            });
        }
    }
    
    const renderAllMembersOfGroup = () => {
        const allGroupMembers = JSON.parse(localStorage.getItem("allMembers"));
        // console.log(allGroupMembers);
        if(allGroupMembers != null){

            return allGroupMembers.map((member) => {
                    var sFonction = member.Fonction ;
                    if (member.Fonction === null)
                        sFonction = "" ;
    
                    return <Row key={member.id}>
                        <Link
                            to={ `${process.env.PUBLIC_URL}/pages/showProfile` } 
                            className="text-2xl"
                        >{ member.Prenom + " " + member.Nom }
                        </Link>
                        <Link to={ `${process.env.PUBLIC_URL}/pages/showEntreprise` } >
                            { sFonction + " " +  member.Entreprise }
                        </Link>
                    </Row>
            });
        }
    }
    
    const renderGroup = () => {
        const group = JSON.parse(localStorage.getItem("showGroup"));

        var groupImage = '' ;    
        if (group[0].group_image !== '0')
            groupImage = process.env.REACT_APP_API_GET_IMAGE_URL + group[0].group_image + '/';
        
        // pour ecrire la phrase correspondant au nombre de membres
        let sMembre = 'membre' ;
        let sMembres = 'membres'
        let sNombre = '' ;

        if (group[0].group_number === 0)
            sNombre = '0' + ' '  + sMembre ;
        else 
            if(group[0].group_number === 1)
                sNombre = '1' + ' '  + sMembre ;
            else
                sNombre = group[0].group_number + ' ' + sMembres ;

        // var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
        // var doc = new DOMParser().parseFromString(xmlString, "text/xml");
        // console.log(doc.firstChild.innerHTML); // => <a href="#">Link...
        // console.log(doc.firstChild.firstChild.innerHTML); 


        if (group !== null)
        {
            function renderSubscriptionButtons() {
                return <div className="btnIcon">
                    { 
                        group[0].isMember !== true  ?
                            <div className="subscriptButDiv">
                                <button className='btn-success p-1 rounded-2' onClick={() => subscribeGroup(storedToken, id,ForceRenderGroup)}>Rejoindre le groupe</button>                    
                            </div>
                        :
                            <div className="subscriptButDiv">
                                <Link 
                                    to={ `${process.env.PUBLIC_URL}/SearchGroups` }
                                    onClick={() => unSubscribeGroup(storedToken, id,ForceRenderGroup)} 
                                    className="btn-danger p-1 rounded-2">
                                        Quitter le groupe
                                </Link>
                            </div>
                    }
                </div>
            }
        
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
                                <h3 className="mb-5 font-weight-bold">{ group[0].nom }</h3>
                                <div className="text-small">
                                    <span>{ group[0].group_city }</span>
                                </div>
                                <div className="text-small">
                                    <span>{ sNombre }</span>
                                </div>
                            </div>
                            <hr />
                            { renderSubscriptionButtons() }
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                        </div>
                        <div className="groupBlock2 mt-4 p-4 row">
                            <div className="col-lg-1 col-md-1 col-sm-2"></div>
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <h3 className=" font-weight-bold">A propos du groupe</h3>
                                <p className="text-justify">{ group[0].sdescription }</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <h3 className=" font-weight-bold">Créateur</h3>
                                { renderGroupCreator() }
                                <h3 className="mt-5 font-weight-bold">Membres</h3>
                                { renderAllMembersOfGroup() }
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
