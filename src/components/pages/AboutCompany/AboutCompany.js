import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
export default function AboutCompany() {
  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">About</h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">Pages</Link>
            </li>
            <li className="breadcrumb-item active breadcrumds" aria-current="page">
              About
            </li>
          </ol>
        </div>
        <div className="ms-auto pageheader-btn">
          <Link to="#" className="btn btn-primary btn-icon text-white me-3">
            <span >
              <i className="fe fe-plus"></i>&nbsp;
            </span>
            Add Account
          </Link>
          <Link to="#" className="btn btn-success btn-icon text-white">
            <span>
              <i className="fe fe-log-in"></i>&nbsp;
            </span>
            Export
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body p-4 text-dark">
              <div className="statistics-info">
                <div className="row text-center">
                  <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-primary-gradient box-shadow-primary">
                        <i className="icon icon-people text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Employees</h5>
                      <h2 className="counter mb-0">
                        <CountUp end={2569} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-secondary-gradient box-shadow-secondary">
                        <i className="icon icon-rocket text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Sales</h5>
                      <h2 className="counter  mb-0">
                        <CountUp end={1765} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  mt-4 mb-4">
                    <div className="counter-statuss">
                      <div className="counter-icon bg-success-gradient box-shadow-success">
                        <i className="icon icon-docs text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Projects</h5>
                      <h2 className="counter mb-0">
                        <CountUp end={846} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 mt-4 mb-4">
                    <div className="counter-status">
                      <div className="counter-icon bg-danger-gradient box-shadow-danger">
                        <i className="fe fe-trending-up text-white"></i>
                      </div>
                      <h5 className="mb-2">Total Growth</h5>
                      <h2 className="counter  mb-0">
                        <CountUp end={7253} start={0} duration={1.74} />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body about-con pabout">
              <h1 className="mb-4 fw-semibold">Why Zanex ?</h1>
              <h4 className="leading-normal">
                majority have suffered alteration in some form, by injected
                humour
              </h4>
              <p className="leading-normal">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to as necessary
                All the Lorem Ipsum generators on the Internet tend to repeat
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <Link to="#" className="btn btn-primary  mt-2">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body pabout">
              <h1 className="mb-4 fw-semibold">What is Our Services?</h1>
              <h4 className="leading-normal">
                majority have suffered alteration in some form, by injected
                humour
              </h4>
              <p className="leading-normal">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to as necessary
                All the Lorem Ipsum generators on the Internet tend to repeat
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <Link to="#" className="btn btn-primary mt-2">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
          <div className="card text-center overflow-hidden">
            <img
              src={require("../../../assets/images/media/1.jpg")}
              alt="img"
              className=""
            />
            <div className="card-body">
              <h3 className="mb-3">Company history</h3>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and you a complete account of the system
              </p>
              <Link to="#" className="btn btn-primary">
                -Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
          <div className="card text-center overflow-hidden">
            <img
              src={require("../../../assets/images/media/2.jpg")}
              alt="img"
              className=""
            />
            <div className="card-body">
              <h3 className="mb-3">About Team</h3>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and you a complete account of the system
              </p>
              <Link to="#" className="btn btn-secondary">
                -Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
          <div className="card text-center overflow-hidden">
            <img
              src={require("../../../assets/images/media/6.jpg")}
              alt="img"
              className=""
            />
            <div className="card-body">
              <h3 className="mb-3">Company growth</h3>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and you a complete account of the system
              </p>
              <Link to="#" className="btn btn-success">
                -Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-3">
          <div className="card text-center overflow-hidden">
            <img
              src={require("../../../assets/images/media/7.jpg")}
              alt="img"
              className=""
            />
            <div className="card-body">
              <h3 className="mb-3">Our Statistics</h3>
              <p>
                I must explain to you how all this mistaken idea of denouncing
                pleasure and you a complete account of the system
              </p>
              <Link to="#" className="btn btn-danger">
                -Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
