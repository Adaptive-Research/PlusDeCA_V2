import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from  "../../../data/customlibs/utils";
import {getAvailableFormations,getFormationsCategories,getFormationsGroupes} from "../../../data/customlibs/api";
import CardFormation from "./CardFormation" ;
import ModalShowFormation from "../Formations/ModalShowFormation" ;


    
  



export default function FormationAvailableList() {
    console.log("FormationAvailableList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const ValueLangue = localStorage.getItem('ValueLangue') ;

    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

    console.log('Mes traductions');
    console.log(Translations_Text);
   


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
    const [categorie, setCategorie] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("");
    const [duree,setDuree] = useState("") ;
    const [tarif,setTarif] = useState("") ;
    const [groupe,setGroupe] = useState("") ;


        //Pour la traduction du titre 
        const sTrainings = 'Trainings';
        //Pour les Boutons
        const sClose = 'Close';


        const [trainings, setTrainings] = useState(sTrainings);
        const [closeBtn, setCloseBtn] = useState(sClose);


    // pour le reload des infos
    const reloadInfos = useRef(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;

   

    function TranslateAll(data,Page){
        console.log('TranslateAll') ;
        console.log(data);
    
        let t = FindTranslation(data,Page, sTrainings) ;
        if (t !== "Not Found")
        setTrainings(t) ;

        t = FindTranslation(data,Page, sClose) ;
        if (t !== "Not Found")
          setCloseBtn(t) ;
    
    }

 
    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"FormationAvailableList") ;
        setReloadTraductions(false) ;
    }    

    



    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_Formations.current") ;
        //console.log(downloaded_Formations.current) ;
        
        if (variable === "Formations_Available")
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
        console.log("reloadInfos") ;
        getAvailableFormations("Formations_Available",storedToken,RenderAfterLoad) ;
        getFormationsGroupes("Formations_groupes",storedToken,ValueLangue, RenderAfterLoad) ;
        getFormationsCategories("Formations_categories",storedToken,ValueLangue, RenderAfterLoad) ;

            
        reloadInfos.current = false ;
    }





    function ForceRenderFormation() {
        
        //console.log("ForceRenderFormation") ;
        setShowEditFormation(false) ;

        downloaded_Formations.current = false ;   
        getAvailableFormations("Formations_Available",storedToken, RenderAfterLoad) ;
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
        setCategorie(Formation.Formation_idCategorie) ;
        setText(Formation.Formation_Text) ;
        setHtml(Formation.Formation_Html) ;
        setDuree(Formation.Formation_Duree) ;
        setTarif(Formation.Formation_Tarif) ;
        setGroupe(Formation.Formation_idGroupe) ;
        
        setShowFormation(true) ;
    }    













    





    // Separate drafts from published formations
    const renderAvailableFormations = (idCategorie) => {
        console.log("renderAvailableFormations");
        const formations = JSON.parse(localStorage.getItem("Formations_Available"));
       {
        if (formations !== null){
            console.log(formations);
            return formations.map((formation) => {
                if(formation.Formation_idCategorie == idCategorie){
                    return  <Col md={4}  key={formation.id}> 
                                <CardFormation 
                                    key={formation.id}
                                    Formation={formation}
                                    CategorieFormation={idCategorie}
                                    SendShowFormationData={SendShowFormationData}  
                                    ForceRenderFormation = {ForceRenderFormation}
                                />
                            </Col>
                }
            });
        }

       }
    }


   
    const RenderFormationAvailableTabs = () =>{
        const FormationsCategories = JSON.parse(localStorage.getItem("Formations_categories"));
        if(FormationsCategories !== null){
            console.log('FormationsCategories');
            console.log(FormationsCategories);
            return FormationsCategories.map((formationCategorie) => {
                if(formationCategorie.categorie !== null){
                    return  <Tab eventKey={formationCategorie.categorie} title={formationCategorie.categorie}>
                                <div className="tab-pane " id="tab-61">
                                    <Row className="row-cards ">
                                        {renderAvailableFormations(formationCategorie.idCategorie)}
                                    </Row>
                                </div>
                            </Tab>
                }
            });

        }else{
            console.log("Aucune formation n'est disponible");
        }
    }





    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">{trainings}</h1>
                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">

                                        <ModalShowFormation 
                                            //Render={compteur}
                                            show={showFormation} 
                                            SendCloseMessage={ModalShowFormationClose}  
                                            Title={title} 
                                            Html= {html}
                                            Duree={duree}
                                            Tarif={tarif}
                                            Groupe={groupe}
                                            CloseButton={closeBtn}
                                        />



                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Efficacit?? commerciale"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            {RenderFormationAvailableTabs()}



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
