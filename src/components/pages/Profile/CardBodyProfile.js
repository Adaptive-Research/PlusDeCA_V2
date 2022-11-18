
import {Card, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import user8 from "../../../assets/images/users/8.jpg";


export default function CardBodyProfile(props){
 
 return (
    <Card.Body className=" bg-white">
    <div className="wideget-user">
        <Row>
            <Col lg={12} md={12} xl={6}>
                <div className="wideget-user-desc d-sm-flex">
                    <div className="wideget-user-img">
                        <img className="" src={user8} alt="img"/>
                    </div>
                    <div className="user-wrap">
                        <h4>{props.UserProfile.Prenom} {props.UserProfile.Nom}</h4>
                        <h6 className="text-muted mb-3">
                            Member Since: November 2017
                        </h6>
                        <Link to="#" className="btn btn-primary mt-1 mb-1 ">
                            <i className="fa fa-rss"></i> Follow
                        </Link>
                        <Link
                            to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                            className="btn btn-secondary mt-1 mb-1 ms-1"
                        >
                            <i className="fa fa-envelope"></i> E-mail
                        </Link>
                    </div>
                </div>
            </Col>
            <Col lg={12} md={12} xl={6}>
                <div className="text-xl-right mt-4 mt-xl-0">
                    <Link
                        to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                        className="btn btn-white me-1"
                    >
                        Message
                    </Link>
                    <Link
                        to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                        className="btn btn-primary me-1"
                    >
                        Edit Profile
                    </Link>
                </div>

                <div className="mt-5">

                    <div className="main-profile-contact-list float-md-end d-md-flex">
                        <div className="me-5">
                            <div className="media">
                                <div className="media-icon bg-primary  me-3 mt-1">
                                    <i className="fe fe-file-plus fs-20 text-white"></i>
                                </div>
                                <div className="media-body">
                                    <span className="text-muted">Posts</span>
                                    <div className="fw-semibold fs-25">328</div>
                                </div>
                            </div>
                        </div>

                        <div className="me-5 mt-5 mt-md-0">
                            <div className="media">
                                <div className="media-icon bg-success me-3 mt-1">
                                    <i className="fe fe-users  fs-20 text-white"></i>
                                </div>
                                <div className="media-body">
                                    <span className="text-muted">Followers</span>
                                    <div className="fw-semibold fs-25">937k</div>
                                </div>
                            </div>
                        </div>

                        <div className="me-0 mt-5 mt-md-0">
                            <div className="media">
                                <div className="media-icon bg-orange me-3 mt-1">
                                    <i className="fe fe-wifi fs-20 text-white"></i>
                                </div>
                                <div className="media-body">
                                    <span className="text-muted">Following</span>
                                    <div className="fw-semibold fs-25">2,876</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
    </Card.Body>)
}