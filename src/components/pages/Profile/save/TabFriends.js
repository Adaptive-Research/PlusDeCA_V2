
import user15 from "../../../assets/images/users/15.jpg";
import user20 from "../../../assets/images/users/20.jpg";
import user9 from "../../../assets/images/users/9.jpg";
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";


export default function TabFriends(props) {

    return (
     
        <div className="tab-pane " id="tab-61">
            <span className="widget-users row profiletab  mb-5">
                <li className="col-lg-4  col-md-6 col-sm-12 col-12  ">
                    <Card className=" border p-0">
                        <Link to={`${process.env.PUBLIC_URL}/pages/profile/`}>
                            <Card.Body className=" text-center">
                                <img
                                    className="avatar avatar-xxl brround cover-image"
                                    src={user15}
                                    alt=""
                                />
                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                James Thomas
                                </h4>
                                <span className="text-muted">
                                Web designer
                                </span>
                            </Card.Body>
                        </Link>
                        <Card.Footer className=" text-center">
                            <div className="row user-social-detail">
                                <Link
                                    to="#"
                                    className="social-profile me-4 rounded text-center"
                                >
                                <i className="fa fa-google faico"></i>
                                </Link>
                                
                                <Link
                                    to="#"
                                    className="social-profile me-4 rounded text-center"
                                >
                                <i className="fa fa-facebook"></i>
                                </Link>
                                
                                <Link
                                    to="#"
                                    className="social-profile  rounded text-center"
                                >
                                <i className="fa fa-twitter"></i>
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </li>

                <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card className="border p-0">
                            <Link
                                to={`${process.env.PUBLIC_URL}/pages/profile/`}
                            >
                            <Card.Body className="text-center">
                                <img
                                    className="avatar avatar-xxl brround cover-image"
                                    src={user9}
                                    alt=""
                                />
                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                George Clooney
                                </h4>
                                <span className="text-muted">
                                Web designer
                                </span>
                            </Card.Body>
                            </Link>
                            <Card.Footer className="text-center">
                            <div className="row user-social-detail">
                                <Link
                                    to="#"
                                    className="social-profile me-4 rounded text-center"
                                >
                                <i className="fa fa-google"></i>
                                </Link>
                                <Link
                                    to="#"
                                    className="social-profile me-4 rounded text-center"
                                >
                                <i className="fa fa-facebook"></i>
                                </Link>
                                <Link
                                    to="#"
                                    className="social-profile  rounded text-center"
                                >
                                <i className="fa fa-twitter"></i>
                                </Link>
                            </div>
                            </Card.Footer>
                    </Card>
                </li>
                
                <li className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Card className="border p-0">
                        <Link
                            to={`${process.env.PUBLIC_URL}/pages/profile/`}
                        >
                        <Card.Body className="text-center">
                            <img
                                className="avatar avatar-xxl brround cover-image"
                                src={user20}
                                alt=""
                            />
                            <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                            Robert Downey Jr.
                            </h4>
                            <span className="text-muted">
                            Web designer
                            </span>
                        </Card.Body>
                        </Link>
                        <Card.Footer className="text-center">
                        <div className="row user-social-detail">
                            <Link
                                to="#"
                                className="social-profile me-4 rounded text-center"
                            >
                            <i className="fa fa-google"></i>
                            </Link>
                            <Link
                                to="#"
                                className="social-profile me-4 rounded text-center"
                            >
                            <i className="fa fa-facebook"></i>
                            </Link>
                            <Link
                                to="#"
                                className="social-profile  rounded text-center"
                            >
                            <i className="fa fa-twitter"></i>
                            </Link>
                        </div>
                        </Card.Footer>
                    </Card>
                </li>

            </span>
        </div>
   
    )}


      
          
      
    
