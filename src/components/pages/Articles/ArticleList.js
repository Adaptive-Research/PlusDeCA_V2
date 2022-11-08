import React, { useState,useRef} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getUserArticles} from "../../../data/customlibs/utils";
import CardArticle from "./CardArticle" ;
import ModalEditArticle from "./ModalEditArticle" ;
import {useNavigate} from "react-router";
//import axios from "axios";


export default function ArticleList() {
    console.log("ArticleList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

    const navigate = useNavigate() ; 
    


    // pour l'affichage de la fenetre modale
    const [showEditArticle, SetShowEditArticle] = useState(false) ;

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
    const [reloadInfos, setReloadInfos] = useState(true) ;



    // recuperation des informations au depart
    if (reloadInfos === true)
    {
        //console.log("reloadInfos") ;
        getUserArticles(storedToken,RenderAfterLoad) ;

            
        setReloadInfos(false) ;
    }





    // le callback qui est appele apres le chargement des donnees
    function RenderAfterLoad(variable) {
        if (variable === "userArticles")
            downloaded_Articles.current = true ;

        if (downloaded_Articles.current === true)
            navigate(0) ;
    }







    // Callbacks pour la fenetre ModalEditArticle
    // il y en a 3
    // - ModalEditArticleClose
    // - SendArticleData
    // - ForceRenderArticle



    // C'est le callback appele quand on ferme ModalEditArticle
    function ModalEditArticleClose()
    {
        SetShowEditArticle(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendArticleData(ShowWindow, Article) {
        //console.log("SendCompanyData")
        if (Article === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setCategory("") ;
            setText("") ;
            setHtml("") ;
            setPhoto("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            console.log("Article") ;
            console.log(Article) ;

            setIdAncestor(Article.idAncestor) ;
            setTitle(Article.Article_Title) ;
            setCategory(Article.Article_Category) ;
            setText(Article.Article_Text) ;
            setHtml(Article.Article_Html) ;
            setPhoto(Article.Article_Image) ;
        }
        


        if (ShowWindow === "false")
            SetShowEditArticle(false) ;
        else
            SetShowEditArticle(true) ;
    }    


    function ForceRenderArticle() {
        console.log("ForceRenderArticle") ;
        SetShowEditArticle(false) ;
        downloaded_Articles.current = false ;
        getUserArticles(storedToken, RenderAfterLoad) ;
    }


















    





    // Separate drafts from published articles
    const renderArticles = (TypeArticle) => {
        const articles = JSON.parse(localStorage.getItem("userArticles"));

        if (articles !== null)
        {
            console.log("articles") ;
            console.log(articles);

            return articles.map((Ligne) => {
                if  (TypeArticle === "Brouillon") {
                    if (Ligne.isPublished === "0") 
                        return <Col md={4}> 
                                    <CardArticle 
                                        Article={Ligne}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
                                    /> 
                                </Col> ;
                }
                else {
                    if (Ligne.isPublished === "1") 
                        return <Col md={4}> 
                                    <CardArticle 
                                        Article={Ligne}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
                                    /> 
                                </Col> ;
                }
            })
        }
        else
            return "" ;
    }


   






    return (
        <div>

            <div className="page-header">
                <div>
                    <h1 className="page-title">Articles</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendArticleData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                        Ajouter un article
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
                                            show={showEditArticle} 
                                            SendCloseMessage={ModalEditArticleClose}  
                                            ForceRenderArticle={ForceRenderArticle}
                                            ModeEdit={modeEdit}
                                            idAncestor={idAncestor}
                                            Title={title} 
                                            Category = {category} 
                                            Content= {html}
                                            Photo = {photo}
                                        />


                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Brouillon"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Brouillon" title="En cours d'écriture">
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderArticles("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Publié" title="Publié">
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
