import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from  "../../../data/customlibs/utils" ;
import {getUserArticles} from "../../../data/customlibs/api";
import CardArticle from "./CardArticle" ;
import ModalEditArticle from "./ModalEditArticle" ;

  



export default function ArticleList() {
    console.log("ArticleList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

    console.log('Mes traductions');
    console.log(Translations_Text);


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditArticle, setShowEditArticle] = useState(false) ;

    // pour le ForceRender
    const downloaded_Articles = useRef(false) ;

    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("<p>Hey this <strong>test</strong> rocks 😀</p>");
    const [photo, setPhoto] = useState("");

    // pour le reload des infos
    const reloadInfos = useRef(true) ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;


   
    //Pour les Tabs
    const sInWriting = "In Writing";
    const sValid = "Validated";
    const sPublished = "Published";
   // Pour le Titre
   const sItems = "Items";
   //Pour les Boutons
   const sAddItem ='Add Item';
   const sCancel = 'Cancel';
   const sSave = 'Save';
   //Pour les labels et les champs de la modale

    const sTitle = 'Title';
    const sContent = 'Content';
    const sCategory = 'Category';
    const sPictureFile = 'Picture File';
    const sSendPhoto = 'Send Photo';
    const sAddPicture  = 'Add a picture';


    const [inWriting, setInWriting] = useState(sInWriting);
    const [valid, setValid] = useState(sValid);
    const [published, setPublished] = useState(sPublished);
    const [items, setItems] = useState(sItems);
    const [addItem, setAddItem] = useState(sAddItem);
    const [cancel, setCancel] = useState(sCancel);
    const [save, setSave] = useState(sSave);
    const [fieldtitle, setFieldTitle] = useState(sTitle);
    const [fieldcontent, setFieldContent] = useState(sContent);
    const [fieldcategory, setFieldCategory] = useState(sCategory);
    const [fieldPicture, setFieldPicture] = useState(sPictureFile);
    const [fieldSendPhoto, setSendPhoto] = useState(sSendPhoto);
    const [addPicture, setAddPicture] = useState(sAddPicture);



    function TranslateAll(data,Page){

        console.log('ArticleList Translations') ;
        console.log(data);
    
        let t = FindTranslation(data,Page, sInWriting) ;
        if (t !== "Not Found")
          setInWriting(t) ;
    
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
        t = FindTranslation(data,Page, sTitle) ;
        if (t !== "Not Found")
            setFieldTitle(t) ;
      
        t = FindTranslation(data,Page, sCategory) ;
        if (t !== "Not Found")
            setFieldCategory(t) ;
      
        t = FindTranslation(data,Page, sContent) ;
        if (t !== "Not Found")
          setFieldContent(t) ;
    
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
        TranslateAll(Translations_Text,"ArticleList") ;
        setReloadTraductions(false) ;
    }
                

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        getUserArticles("userArticles",storedToken,RenderAfterLoad) ;
        reloadInfos.current = false ;
    }




    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_Articles.current") ;
        //console.log(downloaded_Articles.current) ;
        
        if (variable === "userArticles")
            downloaded_Articles.current = true ;


    
        if (downloaded_Articles.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_Articles.current = false ;      
    }
  





    // Callbacks pour la fenetre ModalEditArticle
    // il y en a 3
    // - ModalEditArticleClose
    // - SendArticleData
    // - ForceRenderArticle



    // C'est le callback appele quand on ferme ModalEditArticle
    function ModalEditArticleClose()
    {
        setShowEditArticle(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendArticleData(ShowWindow, Article) {
        //console.log("SendCompanyData")
        if (Article === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setCategory("1") ;
            setText("") ;
            setHtml("") ;
            setPhoto("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            //console.log("Article") ;
            //console.log(Article) ;

            setIdAncestor(Article.idAncestor) ;
            setTitle(Article.Article_Title) ;
            setCategory(Article.Article_Category) ;
            setText(Article.Article_Text) ;
            setHtml(Article.Article_Html) ;
            setPhoto(Article.Article_Image) ;
        }
        


        if (ShowWindow === "false")
            setShowEditArticle(false) ;
        else
            setShowEditArticle(true) ;
    }    


    function ForceRenderArticle() {
        
        //console.log("ForceRenderArticle") ;
        setShowEditArticle(false) ;

        getUserArticles("userArticles",storedToken, RenderAfterLoad) ;
    }


















    





    // Separate drafts from published articles
    const renderArticles = (TypeArticle) => {
        const articles = JSON.parse(localStorage.getItem("userArticles"));

        if (articles !== null)
        {
            //console.log("articles") ;
            //console.log(articles);

            return articles.map((Ligne) => {
                //console.log("Ligne.id: "+Ligne.id) ;
                if  (TypeArticle === "Brouillon") {
                    if (Ligne.iscurrent === "1" && Ligne.isValidated === "0" && Ligne.isPublished === "0") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardArticle 
                                        Article={Ligne}
                                        TypeArticle={TypeArticle}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
                                    /> 
                                </Col> ;
                }
                else if(TypeArticle === "Valide"){
                    if(Ligne.iscurrent === "1" && Ligne.isValidated === "1" && Ligne.isPublished === "0"){
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardArticle 
                                        key={Ligne.id}
                                        Article={Ligne}
                                        TypeArticle={TypeArticle}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
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
                    <button className='btn btn-primary' onClick={() => {SendArticleData(true, null) ;}}>
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


                                        <ModalEditArticle 
                                            Render={compteur}
                                            show={showEditArticle} 
                                            SendCloseMessage={ModalEditArticleClose}  
                                            ForceRenderArticle={ForceRenderArticle}
                                            ModeEdit={modeEdit}
                                            idAncestor={idAncestor}
                                            Title={title} 
                                            Category = {category} 
                                            Html= {html}
                                            Text={text}
                                            Photo = {photo}
                                            FieldTitle={fieldtitle}
                                            FieldCategory={fieldcategory}
                                            FieldContent ={fieldcontent}
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
                                            <Tab eventKey="Brouillon" title={inWriting}>
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderArticles("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title={valid}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderArticles("Valide")}
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Publié" title={published}>
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderArticles()}
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
