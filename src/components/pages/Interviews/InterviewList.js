import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {Link} from "react-router-dom";
import {BsPencilSquare} from "react-icons/bs";
import {FaPenAlt,FaEye,FaRegThumbsUp} from "react-icons/fa";
import {AiOutlineSave} from "react-icons/ai";
import axios from "axios";
import '../../../assets/css/InterviewsList.css';
import CardInterview from "./CardInterview.js";

export default function InterviewList() {
    const [rendered, setRendered] = useState(false);

    console.log("Profile") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;



    //Method to get all articles created by this user
    const getUserInterviews = async (tok) => {
        //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
        const url =  process.env.REACT_APP_API_SHOW_INTERVIEWS_FOR_USER_URL;
        const response = await axios.post(url, {
            token: tok,
            Submit: 1,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        localStorage.setItem("userInterviews", JSON.stringify(response.data));
        setRendered(true);
    }

        // pour le reload des infos
        const [reloadInfos, setReloadInfos] = useState(true) ;

        // recuperation des informations au depart
        if (reloadInfos === true)
        {
            //console.log("reloadInfos") ;
            getUserInterviews(storedToken) ;
    
                
            setReloadInfos(false) ;
        }


    //Pour rendre les interview auxquelles il faut encore répondre , (Ces Fonctions sont provisoires et seront utilisées uniquement pour la maquette)

    function RenderCurrentInterviews(interview) {
        //{interview.Titre}
        return (
            <Col md={4}>
                <Card key={interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">Titre Interview</Card.Title>
                        <div className='Interview_Card_Btns_Container'>
                            <button className="btn Valide-Interview">
                                    <Link
                                        to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                        className="QuestionsDetailsView">
                                       <AiOutlineSave/>
                                    </Link>
                            </button>
                            <button className="btn Edit-Interview">
                                    <Link
                                        to={`${process.env.PUBLIC_URL}/QuestionsForInterview`}
                                        className="QuestionsDetailsView">
                                        <BsPencilSquare/>
                                    </Link>
                            </button>
                        </div>
                    </Card.Header>
                   
                </Card>
            </Col>
        )
    }

    const renderCurrentInterviews =()=> {
        const interviews = JSON.parse(localStorage.getItem("userInterviews"));
        return RenderCurrentInterviews(interviews);
    }


 //Pour rendre les interview qui ont été validés par l'utilisateur (Ces Fonctions sont provisoires et seront utilisées uniquement pour la maquette)
    const renderValideInterviews =()=> {
        const interviews = JSON.parse(localStorage.getItem("userInterviews"));
        return RenderValideInterviews(interviews);
    }

    function RenderValideInterviews(interview) {
        //{interview.Titre}
        return (
            <Col md={4}>
                <Card key={interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">Titre Interview</Card.Title>
                            <button className="btn Edit-Valid-Interview">
                                    <Link
                                        to={`${process.env.PUBLIC_URL}/QuestionsForInterview`}
                                        className="QuestionsDetailsView">
                                        <FaPenAlt/>
                                    </Link>
                            </button>
                    </Card.Header>
                   
                </Card>
            </Col>
        )
    }
 //Pour rendre les interview qui ont été publiéés par les administrateur (Ces Fonctions sont provisoires et seront utilisées uniquement pour la maquette)
    const renderPublicInterviews =()=> {
        const interviews = JSON.parse(localStorage.getItem("userInterviews"));
        return RenderPublicInterviews(interviews);
    }

    function RenderPublicInterviews(interview) {
        //{interview.Titre}
        return (
            <Col md={4}>
                <Card key={interview.id}  className="Public-Interview">
                        <Card.Title as="h5">Question Interview</Card.Title>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, dolor atque?
                        </p>
                        <div className='Public-Interview-Btns'>
                            <button className="btn Like-Public-Interview">
                                <Link
                                    to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                    className="QuestionsDetailsView">
                                    <FaRegThumbsUp/>
                                </Link>
                            </button>
                            <button className="btn View-Public-Interview">
                                <Link
                                    to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                    className="QuestionsDetailsView">
                                    <FaEye/>
                                </Link>
                            </button>
                        </div>
                </Card>
            </Col>
        )
    }


    return (
        <div>

            <div className="page-header">
                <div>
                    <h1 className="page-title">Mes Interviews</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <Link to={`${process.env.PUBLIC_URL}/pages/ArticleAdd`}
                          className="btn btn-primary btn-icon text-white me-3">
            <span>
              <i className="fe fe-plus"></i>&nbsp;
            </span>
                        Ajouter
                    </Link>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard`} className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
                        Retour
                    </Link>
                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">
                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Publié"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Publié" title="Publié">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderPublicInterviews()}
                                                        {renderPublicInterviews()}
                                                        {renderPublicInterviews()}
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Validé" title="Validé">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderValideInterviews()}
                                                        {renderValideInterviews()}
                                                        {renderValideInterviews()}
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="A Répondre" title="A Répondre">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderCurrentInterviews()}
                                                        {renderCurrentInterviews()}
                                                        {renderCurrentInterviews()}
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










    // Separate drafts from published articles
 /*   const renderInterviews = (TypeInterview) => {
        const interviews = JSON.parse(localStorage.getItem("userInterviews"));
       
         return interviews.map((Ligne) => {
            if  (TypeInterview === "A_Repondre") {
                if (Ligne.isPublished === "0") {
                    return <Col md={4}> 
                    <CardInterview
                        Interview={Ligne}
                        /> 
                    </Col> ;
                }
            }
         })
    }

*/
























/**
 * 
    if (!rendered) {
        getUserInterviews(storedToken).then(r => console.log(`Interviews loaded`));
    } else {
        console.log("rendered")
    }

 */