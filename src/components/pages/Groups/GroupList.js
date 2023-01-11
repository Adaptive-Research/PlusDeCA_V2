import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from  "../../../data/customlibs/utils" ;
import {getUserGroups} from "../../../data/customlibs/api_angelo";
import CardGroup from "./CardGroup" ;
import ModalEditGroup from "./ModalEditGroup" ;

  



export default function GroupList() {
    console.log("GroupList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

    console.log('Mes traductions');
    console.log(Translations_Text);


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditGroup, setShowEditGroup] = useState(false) ;

    // pour le ForceRender
    const downloaded_Groups = useRef(false) ;

    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [id, setIdGroup] = useState("");
    const [nom, setNom] = useState("");
    const [sdescription, setDescription] = useState("");
    const [tags, setTag] = useState("");
    const [group_image, setPhoto] = useState("");

    // pour le reload des infos
    const reloadInfos = useRef(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;
   
    //Pour les Tabs
    const sInProgress = "In Progress";
    const sValid = "Validated";
    const sPublished = "Published";
   // Pour le Titre
   const sItems = "Groups";
   //Pour les Boutons
   const sAddItem ='Add Group';
   const sCancel = 'Cancel';
   const sSave = 'Save';
   //Pour les labels et les champs de la modale

    const sNom = 'Name';
    const sTags = 'Tags';
    const sDescription = 'Description';
    const sPictureFile = 'Picture File';
    const sSendPhoto = 'Send Photo';
    const sAddPicture  = 'Add a picture';


    const [inProgress, setInProgress] = useState(sInProgress);
    const [valid, setValid] = useState(sValid);
    const [published, setPublished] = useState(sPublished);
    const [items, setItems] = useState(sItems);
    const [addItem, setAddItem] = useState(sAddItem);
    const [cancel, setCancel] = useState(sCancel);
    const [save, setSave] = useState(sSave);
    const [fieldNom, setFieldNom] = useState(sNom);
    const [fieldTag, setFieldTag] = useState(sTags);
    const [fieldDescription, setFieldDescription] = useState(sDescription);
    const [fieldPicture, setFieldPicture] = useState(sPictureFile);
    const [fieldSendPhoto, setSendPhoto] = useState(sSendPhoto);
    const [addPicture, setAddPicture] = useState(sAddPicture);



    function TranslateAll(data,Page){

        console.log('GroupList TranslateAll') ;
        console.log(data);
    
        let t = FindTranslation(data,Page, sInProgress) ;
        if (t !== "Not Found")
          setInProgress(t) ;
    
        t = FindTranslation(data,Page, sValid) ;
        if (t !== "Not Found")
          setValid(t) ;
    
        t = FindTranslation(data,Page, sPublished) ;
        if (t !== "Not Found")
          setPublished(t) ;
    
        t = FindTranslation(data,Page, sItems) ;
        if (t !== "Not Found")
          setItems(t) ;
    
        t = FindTranslation(data,Page, sAddItem) ;
        if (t !== "Not Found")
          setAddItem(t) ;
    
        t = FindTranslation(data,Page, sCancel) ;
        if (t !== "Not Found")
          setCancel(t) ;
    
        t = FindTranslation(data,Page, sSave) ;
        if (t !== "Not Found")
          setSave(t) ;

        t = FindTranslation(data,Page, sNom) ;
        if (t !== "Not Found")
            setFieldNom(t) ;
    
        t = FindTranslation(data,Page, sTags) ;
        if (t !== "Not Found")
            setFieldDescription(t) ;
      
        t = FindTranslation(data,Page, sDescription) ;
        if (t !== "Not Found")
          setFieldDescription(t) ;
    
        t = FindTranslation(data,Page, sPictureFile) ;
        if (t !== "Not Found")
          setFieldPicture(t) ;
    
        t = FindTranslation(data,Page, sSendPhoto) ;
        if (t !== "Not Found")
          setSendPhoto(t) ;
    
        t = FindTranslation(data,Page, sAddPicture) ;
        if (t !== "Not Found")
          setAddPicture(t) ;
    }

    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"GroupList") ;
        setReloadTraductions(false) ;
    }
                
    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        getUserGroups("userGroups",storedToken,RenderAfterLoad) ;
        reloadInfos.current = false ;
    }

    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_Groups.current") ;
        //console.log(downloaded_Groups.current) ;
        
        if (variable === "userGroups")
            downloaded_Groups.current = true ;
    
        if (downloaded_Groups.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_Groups.current = false ;      
    }

    // Callbacks pour la fenetre ModalEditGroup
    // il y en a 3
    // - ModalEditGroupClose
    // - SendGroupData
    // - ForceRenderGroup

    // C'est le callback appele quand on ferme ModalEditGroup
    function ModalEditGroupClose()
    {
        setShowEditGroup(false) ;
    }

    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendGroupData(ShowWindow, Group) {
        //console.log("SendCompanyData")
        if (Group === null)
        {
            setModeEdit("Add") ;
            setIdGroup("") ;
            setNom("") ;
            setTag("") ;
            setDescription("") ;
            setPhoto("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            //console.log("Group") ;
            //console.log(Group) ;

            setIdGroup(Group.idGroup) ;
            setNom(Group.nom) ;
            setTag(Group.tags) ;
            setDescription(Group.sdescription) ;
            setPhoto(Group.group_image) ;
        }
        


        if (ShowWindow === "false")
            setShowEditGroup(false) ;
        else
            setShowEditGroup(true) ;
    }    


    function ForceRenderGroup() {
        setShowEditGroup(false) ;

        getUserGroups("userGroups",storedToken, RenderAfterLoad) ;
    }

    // Separate drafts from published groups
    const renderGroups = (TypeGroup) => {
        const groups = JSON.parse(localStorage.getItem("userGroups"));

        if (groups !== null)
        {

            return groups.map((group) => {
                //console.log("group.id: "+group.id) ;
                if  (TypeGroup === "Brouillon") {
                    if (group.iscurrent === "1"  && group.ispublished === "0") 
                        return <Col md={4}  key={group.id}> 
                                    <CardGroup 
                                        Group={group}
                                        TypeGroup={TypeGroup}
                                        SendGroupData={SendGroupData}  
                                        ForceRenderGroup = {ForceRenderGroup}
                                    /> 
                                </Col> ;
                }
                else if(TypeGroup === "Publie"){
                    if(group.iscurrent === "1" && group.ispublished === "1"){
                        return <Col md={4}  key={group.id}> 
                                    <CardGroup 
                                        key={group.id}
                                        Group={group}
                                        TypeGroup={TypeGroup}
                                        SendGroupData={SendGroupData}  
                                        ForceRenderGroup = {ForceRenderGroup}
                                    /> 
                                </Col> ;
                    }
                }
            })
        }
        else
            return "" ;
    }

    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">{items}</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendGroupData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                       {addItem}
                    </button>

                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">


                                        <ModalEditGroup 
                                            Render={compteur}
                                            show={showEditGroup} 
                                            SendCloseMessage={ModalEditGroupClose}  
                                            ForceRenderGroup={ForceRenderGroup}
                                            ModeEdit={modeEdit}
                                            idGroup={id} 
                                            Nom={nom} 
                                            Tags = {tags} 
                                            Description = {sdescription} 
                                            Photo = {group_image}
                                            FieldNom={fieldNom}
                                            FieldDescription ={fieldDescription}
                                            FieldTag ={fieldTag}
                                            FieldPicture={fieldPicture}
                                            FieldSendPhoto={fieldSendPhoto}
                                            AddPicture={addPicture}
                                            CancelButton={cancel}
                                            SaveButton={save}
                                        />

                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Brouillon"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Brouillon" title={inProgress}>
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderGroups("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>

                                            <Tab eventKey="Publié" title={published}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderGroups("Publie")}
                                                    </Row>
                                                </div>
                                            </Tab>

                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
