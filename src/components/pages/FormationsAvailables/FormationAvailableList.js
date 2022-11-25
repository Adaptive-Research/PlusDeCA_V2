import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getUserFormations,getFormationsCategories,getFormationsGroupes} from "../../../data/customlibs/api";
import CardFormation from "./CardFormation" ;
import ModalShowFormation from "./ModalShowFormation" ;


    
  



export default function FormationAvailableList() {
    console.log("FormationAvailableList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

   


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




    // pour le reload des infos
    const reloadInfos = useRef(true) ;

   
    let ValueLangue = "FR" ;
    

    



    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_Formations.current") ;
        //console.log(downloaded_Formations.current) ;
        
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
        console.log("reloadInfos") ;
        getUserFormations("userFormations",storedToken,RenderAfterLoad) ;
        getFormationsGroupes("Formations_groupes",storedToken,"fr", RenderAfterLoad) ;
        getFormationsCategories("Formations_categories",storedToken,"fr", RenderAfterLoad) ;

            
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
        console.log("SendFormationData")
        if (Formation === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setCategorie("1") ;
            setText("") ;
            setHtml("") ;
            setDuree("") ;
            setTarif("") ;
            setGroupe("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;

            setIdAncestor(Formation.idAncestor) ;
            setTitle(Formation.Formation_Title) ;
            setCategorie(Formation.Formation_Categorie) ;
            setText(Formation.Formation_Text) ;
            setHtml(Formation.Formation_Html) ;
            setDuree(Formation.Formation_Duree) ;
            setTarif(Formation.Formation_Tarif) ;
            setGroupe(Formation.Formation_Groupe) ;
        }
        


        if (ShowWindow === "false")
            setShowEditFormation(false) ;
        else
            setShowEditFormation(true) ;
    }    


    function ForceRenderFormation() {
        
        //console.log("ForceRenderFormation") ;
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
        setCategorie(Formation.Formation_Categorie) ;
        setText(Formation.Formation_Text) ;
        setHtml(Formation.Formation_Html) ;
        setDuree(Formation.Formation_Duree) ;
        setTarif(Formation.Formation_Tarif) ;
        setGroupe(Formation.Formation_Groupe) ;
        
        setShowFormation(true) ;
    }    













    





    // Separate drafts from published formations
    const renderFormationsAvaibles = (CategorieFormation) => {
        const formations = JSON.parse(localStorage.getItem("userFormations"));
       {
        if (formations !== null){
            console.log("Nos Formations");
            console.log(formations);
            return formations.map((formation) => {
                if(formation.Formation_Categorie == CategorieFormation){
                    return  <Col md={4}  key={formation.id}> 
                                <CardFormation 
                                    key={formation.id}
                                    Formation={formation}
                                    CategorieFormation={CategorieFormation}
                                    SendShowFormationData={SendShowFormationData}  
                                    ForceRenderFormation = {ForceRenderFormation}
                                />
                            </Col>
                }
            });
        }
        /** 
         *  return  <CardFormation 
                                key={formation.id}
                                Formation={formation}
                                CategorieFormation={CategorieFormation}
                                SendShowFormationData={SendShowFormationData}  
                                ForceRenderFormation = {ForceRenderFormation}
                            />
         * 
         * 
         * if (formations !== null)
        {

            return formations.map((Ligne) => {
                //console.log("Ligne.id: "+Ligne.id) ;
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
            return "" ; */
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
                                        {renderFormationsAvaibles(formationCategorie.categorie)}
                                    </Row>
                                </div>
                            </Tab>
                }
            });

        }else{
            console.log("Aucune formation n'est disponible");
        }
    }


{
    /**
     * <Tab eventKey={formationCategorie.categorie} title={formationCategorie.categorie}>
                    <div className="tab-pane " id="tab-61">
                        <Row className="row-cards ">
                            Bonjour {formationCategorie.categorie}
                        </Row>
                    </div>
                </Tab>
     */
}


    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">Formations</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendFormationData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                        Ajouter une formation
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

                                        <ModalShowFormation 
                                            //Render={compteur}
                                            show={showFormation} 
                                            SendCloseMessage={ModalShowFormationClose}  
                                            Title={title} 
                                            Html= {html}
                                            Duree={duree}
                                            Tarif={tarif}
                                            Groupe={groupe}
                                        />



                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Efficacité commerciale"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            {RenderFormationAvailableTabs()}

                                            {
                                                /**
                                                 * <Tab eventKey="Brouillon" title="En cours de création">
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderFormations("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title="Prêtes à être dispensées">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderFormations("Valide")}
                                                    </Row>
                                                </div>
                                            </Tab>
                                                 */
                                            }

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
