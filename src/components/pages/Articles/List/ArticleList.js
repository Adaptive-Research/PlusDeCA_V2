import React, {useEffect, useState} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

export default function ArticleList() {
    const [rendered, setRendered] = useState(false);


    const token = localStorage.getItem("token");

    const deleteArticle = async (id, version) => {
        const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_ARTICLE_URL;
        const response = await axios.post(url, {
            Submit: 1,
            token: token,
            idAncestor: id,
            NumVersion: version
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(
            (response) => {
                console.log(response.data);
                window.location.reload();
            }
        )

    }


    //Method to get all articles created by this user
    const getUserArticles = async (token) => {
        const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
        const response = await axios.post(url, {
            token: token,
            Submit: 1,
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        localStorage.setItem("userArticles", JSON.stringify(response.data));
        setRendered(true);
    }


    const reduceText = (text) => {
        if (text.length > 100) {
            return text.substring(0, 100) + "...";
        } else {
            return text;
        }
    }


    // Separate drafts from published articles
    const renderArticles = () => {
        const articles = JSON.parse(localStorage.getItem("userArticles"));
        console.log(articles);
        return articles.map((article) => {
            return (
                <Col md={4}>
                    <Card>
                        <img
                            className="card-img-top br-tr-7 br-tl-7"
                            src={require("../../../../assets/images/media/19.jpg")}
                            alt="Card cap"
                        />
                        <Card.Header>
                            <Card.Title as="h5"> {article.Article_Title} </Card.Title>
                            <button className="btn btn-success"
                                    style={{marginLeft: "50%"}}>
                                {article.Article_Category}
                            </button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {article.Article_Text.length > 100 ? article.Article_Text.substring(0, 100) + "..." : article.Article_Text}
                            </Card.Text>
                            <button className='btn btn-warning'>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger'
                                    onClick={() => deleteArticle(article.idAncestor, article.NumVersion)}>
                                <i className="fa fa-trash"></i>
                            </button>
                            <Link
                                to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                                className="float-end">
                                Read more <i
                                className="fa fa-angle-double-right"></i>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }


    useEffect(() => {
        if (!rendered) {
            getUserArticles(token).then(r => console.log(`Articles loaded`));
        } else {
            console.log("rendered")
        }

    }, [rendered])


    return (
        <div>

            <div className="page-header">
                <div>
                    <h1 className="page-title">Articles</h1>
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
                                                        {renderArticles()}
                                                    </Row>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Brouillon" title="Brouillon">
                                                <div className="tab-pane " id="tab-61">
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
