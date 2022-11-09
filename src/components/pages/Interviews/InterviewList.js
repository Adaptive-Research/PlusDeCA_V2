import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {Link} from "react-router-dom";
import {BsPencilSquare} from "react-icons/bs"
import axios from "axios";
import '../../../assets/css/InterviewsList.css';
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


    function RenderInterview(interview) {
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
                        <button className="btn Edit-Interview" style={{marginLeft: "50%",fontSize: "15px"}}>
                                <Link
                                    to={`${process.env.PUBLIC_URL}/QuestionsForInterview`}
                                    className="QuestionsDetailsView">
                                    <BsPencilSquare/>
                                </Link>
                        </button>
                    </Card.Header>
                   
                </Card>
            </Col>
        )
    }

    

    // Separate drafts from published articles
    const renderInterviews = () => {
        const interviews = JSON.parse(localStorage.getItem("userInterviews"));
        return RenderInterview(interviews);
    }


    if (!rendered) {
        getUserInterviews(storedToken).then(r => console.log(`Interviews loaded`));
    } else {
        console.log("rendered")
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
                                                        {renderInterviews()}
                                                        {renderInterviews()}
                                                        {renderInterviews()}
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
