import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from  "../../../data/customlibs/utils";
import {getUserFormations,getFormationsCategories,getFormationsGroupes} from "../../../data/customlibs/api";
import CardFormation from "./CardFormation" ;
import ModalEditFormation from "./ModalEditFormation" ;
import ModalShowFormation from "./ModalShowFormation" ;


    
  



export default function FormationList() {
    PrintLog("FormationList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const ValueLangue = localStorage.getItem('ValueLangue') ;

    
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

    PrintLog('Mes traductions');
    PrintLog(Translations_Text);
   


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditFormation, setShowEditFormation] = useState(false) ;
    const [showFormation, setShowFormation] = useState(false) ;

    // pour le ForceRender
    const downloaded_Formations = useRef(false) ;
    const downloaded_Formations_categories = useRef(false) ;
    const downloaded_Formations_groupes = useRef(false) ;


    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [idCategorie, setIdCategorie] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("");
    const [duree,setDuree] = useState("") ;
    const [tarif,setTarif] = useState("") ;
    const [idGroupe,setIdGroupe] = useState("") ;




    // pour le reload des infos
    const reloadInfos = useRef(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;

   

    //Pour la traduction du titre 
    const sTrainings = 'Trainings';
    //Pour la traduction des tabs 
    const sBeingCreated = 'Being created';
    const sReadyToBeDispensed = 'Ready to be dispensed';
    //Pour les Boutons
    const sAddTraining = 'Add training';
    const sCancel = 'Cancel';
    const sSave = 'Save';
    const sClose = 'Close';
    //Pour les champs du formulaire
    const sTitle = 'Title';
    const sDuration = 'Duration';
    const sIndividual = 'Individual';
    const sNumberOfPeople='Number of people for the training';
    const sPricePerson = 'Price excl. tax per person';
    const sRate = 'Rate';
    const sCategory = 'Category';
    const sCommercialEfficiency ='Commercial Efficiency';
    const sContents = 'Contents';
    const sPhoto = 'Photo';
    const sDragFiles = 'Drag Files Or Click to Browse';



    const [trainings, setTrainings] = useState(sTrainings);
    const [beingCreated, setBeingCreated] = useState(sBeingCreated);
    const [readyToBeDispensed, setReadyToBeDispensed] = useState(sReadyToBeDispensed);
    const [addTraining, setAddTraining] = useState(sAddTraining);
    const [saveBtn, setSaveBtn] = useState(sSave);
    const [cancelBtn, setCancelBtn] = useState(sCancel);
    const [closeBtn, setCloseBtn] = useState(sClose);
    const [dragFiles, setDragFiles] = useState(sDragFiles);
    const [photoField, setPhotoField] = useState(sPhoto);
    const [contentsField, setContentsField] = useState(sContents);
    const [commercialEfficiency, setCommercialEfficiency]=useState(sCommercialEfficiency);
    const [categorieField, setCategorieField] = useState(sCategory);
    const [rate, setRate] = useState(sRate);
    const [duration, setDuration] = useState(sDuration);
    const [individual, setIndividual] = useState(sIndividual);
    const [numberOfPeople, setNumberOfPeople] = useState(sNumberOfPeople);
    const [pricePerson, setPricePerson] = useState(sPricePerson);
    const [titleField, setTitleField] = useState(sTitle);

    function TranslateAll(data,Page){
        PrintLog('TranslateAll') ;
        PrintLog(data);
    
        let t = FindTranslation(data,Page, sTrainings) ;
        if (t !== "Not Found")
        setTrainings(t) ;

        t = FindTranslation(data,Page, sBeingCreated) ;
        if (t !== "Not Found")
          setBeingCreated(t) ;
    
        t = FindTranslation(data,Page, sReadyToBeDispensed) ;
        if (t !== "Not Found")
          setReadyToBeDispensed(t) ;
    
        t = FindTranslation(data,Page, sAddTraining) ;
        if (t !== "Not Found")
          setAddTraining(t) ;
    
        t = FindTranslation(data,Page, sSave) ;
        if (t !== "Not Found")
          setSaveBtn(t) ;
    
        t = FindTranslation(data,Page, sCancel) ;
        if (t !== "Not Found")
          setCancelBtn(t) ;
    
        t = FindTranslation(data,Page, sClose) ;
        if (t !== "Not Found")
          setCloseBtn(t) ;
    
        t = FindTranslation(data,Page, sDragFiles) ;
        if (t !== "Not Found")
          setDragFiles(t) ;
    
        t = FindTranslation(data,Page, sPhoto) ;
        if (t !== "Not Found")
          setPhotoField(t) ;
    
        t = FindTranslation(data,Page, sContents) ;
        if (t !== "Not Found")
          setContentsField(t) ;
    
        t = FindTranslation(data,Page, sPricePerson) ;
        if (t !== "Not Found")
          setPricePerson(t) ;

        t = FindTranslation(data,Page, sTitle) ;
        if (t !== "Not Found")
          setTitleField(t) ;
    
        t = FindTranslation(data,Page, sDuration) ;
        if (t !== "Not Found")
          setDuration(t) ;
    
        t = FindTranslation(data,Page, sIndividual) ;
        if (t !== "Not Found")
          setIndividual(t) ;

        t = FindTranslation(data,Page, sRate) ;
        if (t !== "Not Found")
          setRate(t) ;

        t = FindTranslation(data,Page, sNumberOfPeople) ;
        if (t !== "Not Found")
          setNumberOfPeople(t) ;

        t = FindTranslation(data,Page, sCategory) ;
        if (t !== "Not Found")
          setCategorieField(t) ;

        t = FindTranslation(data,Page, sCommercialEfficiency) ;
        if (t !== "Not Found")
          setCommercialEfficiency(t) ;
    
    }

 
    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"FormationList") ;
        setReloadTraductions(false) ;
    }
      

    function RenderAfterLoad(variable) {
        PrintLog("RenderAfterLoad") ;
        //PrintLog("downloaded_Formations.current") ;
        //PrintLog(downloaded_Formations.current) ;
        
        if (variable === "userFormations")
            downloaded_Formations.current = true ;
        
        if (variable === "Formations_categories")
            downloaded_Formations_categories.current = true ;

        if (variable === "Formations_groupes")
            downloaded_Formations_groupes.current = true ;

            
        if ( (downloaded_Formations.current === true) && (downloaded_Formations_categories.current === true) && (downloaded_Formations_groupes.current === true) )
            setCompteur(compteur+1) ; 
    }
  


    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        PrintLog("reloadInfos: " + ValueLangue) ;
        getUserFormations("userFormations",storedToken,RenderAfterLoad) ;
        getFormationsGroupes("Formations_groupes",storedToken,ValueLangue, RenderAfterLoad) ;
        getFormationsCategories("Formations_categories",storedToken,ValueLangue, RenderAfterLoad) ;

            
        reloadInfos.current = false ;
    }




    // Callbacks pour la fenetre ModalEditFormation
    // il y en a 3
    // - ModalEditFormationClose
    // - SendFormationData
    // - ForceRenderFormation



    // C'est le callback appele quand on ferme ModalEditFormation
    function ModalEditFormationClose()
    {
        setShowEditFormation(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendFormationData(ShowWindow, Formation) {
        PrintLog("SendFormationData")
        if (Formation === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setIdCategorie("") ;
            setText("") ;
            setHtml("") ;
            setDuree("") ;
            setTarif("") ;
            setIdGroupe("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            PrintLog("Mode Edit") ;

            setIdAncestor(Formation.idAncestor) ;
            setTitle(Formation.Formation_Title) ;
            setIdCategorie(Formation.Formation_idCategorie) ;
            setText(Formation.Formation_Text) ;
            setHtml(Formation.Formation_Html) ;
            setDuree(Formation.Formation_Duree) ;
            setTarif(Formation.Formation_Tarif) ;
            setIdGroupe(Formation.Formation_idGroupe) ;
        }
        


        if (ShowWindow === "false")
            setShowEditFormation(false) ;
        else
            setShowEditFormation(true) ;
    }    


    function ForceRenderFormation() {
        
        //PrintLog("ForceRenderFormation") ;
        setShowEditFormation(false) ;

        downloaded_Formations.current = false ;   
        getUserFormations("userFormations",storedToken, RenderAfterLoad) ;
    }








    // Callbacks pour la fenetre ModalShowFormation
    // il y en a 3
    // - ModalShowFormationClose
    // - SendFormationData
    // - ForceRenderFormation est le meme que pour la  ModalEditFormation



    // C'est le callback appele quand on ferme ModalEditFormation
    function ModalShowFormationClose()
    {
        setShowFormation(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendShowFormationData(Formation) {

        setIdAncestor(Formation.idAncestor) ;
        setTitle(Formation.Formation_Title) ;
        setIdCategorie(Formation.Formation_idCategorie) ;
        setText(Formation.Formation_Text) ;
        setHtml(Formation.Formation_Html) ;
        setDuree(Formation.Formation_Duree) ;
        setTarif(Formation.Formation_Tarif) ;
        setIdGroupe(Formation.Formation_idGroupe) ;
        
        setShowFormation(true) ;
    }    













    





    // Separate drafts from published formations
    const renderFormations = (TypeFormation) => {
        const formations = JSON.parse(localStorage.getItem("userFormations"));

        if (formations !== null)
        {

            return formations.map((Ligne) => {
                //PrintLog("Ligne.id: "+Ligne.id) ;
                if  (TypeFormation === "Brouillon") {
                    if (Ligne.iscurrent === "1" && Ligne.isValidated === "0") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardFormation 
                                        Formation={Ligne}
                                        TypeFormation={TypeFormation}
                                        SendFormationData={SendFormationData}  
                                        ForceRenderFormation = {ForceRenderFormation}
                                    /> 
                                </Col> ;
                }
                else if(TypeFormation === "Valide"){
                    if(Ligne.iscurrent === "1" && Ligne.isValidated === "1"){
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardFormation 
                                        key={Ligne.id}
                                        Formation={Ligne}
                                        TypeFormation={TypeFormation}
                                        SendShowFormationData={SendShowFormationData}  
                                        ForceRenderFormation = {ForceRenderFormation}
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
                    <h1 className="page-title">{trainings}</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendFormationData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                       {addTraining}
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


                                        <ModalEditFormation 
                                            Render={compteur}
                                            show={showEditFormation} 
                                            SendCloseMessage={ModalEditFormationClose}  
                                            ForceRenderFormation={ForceRenderFormation}
                                            ModeEdit={modeEdit}
                                            idAncestor={idAncestor}
                                            Title={title} 
                                            idCategorie = {idCategorie} 
                                            Html= {html}
                                            Text={text}
                                            Duree={duree}
                                            Tarif={tarif}
                                            idGroupe={idGroupe}
                                            SaveButton = {saveBtn}
                                            CancelButton = {cancelBtn}
                                            AddTrainingButton= {addTraining}
                                            TitleField = {titleField}
                                            DurationField = {duration}
                                            Individual = {individual}
                                            CategoryField = {categorieField}
                                            ContentsField = {contentsField}
                                            PhotoField = {photoField}
                                            DragFiles = {dragFiles}
                                            Rate = {rate}
                                            PricePerson = {pricePerson}
                                            NumberOfPeople={numberOfPeople}
                                            CommercialEfficiency={commercialEfficiency}
                                        />

                                        <ModalShowFormation 
                                            //Render={compteur}
                                            show={showFormation} 
                                            SendCloseMessage={ModalShowFormationClose}  
                                            Title={title} 
                                            Html= {html}
                                            Duree={duree}
                                            Tarif={tarif}
                                            Groupe={idGroupe}
                                            CloseButton = {closeBtn}
                                        />



                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Brouillon"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Brouillon" title={beingCreated}>
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderFormations("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title={readyToBeDispensed}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderFormations("Valide")}
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
