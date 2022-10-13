import React from "react";
import * as underconstruction  from "../../../data/Pages/underconstruction/underconstruction";
import * as custompagesswitcherdata from "../../../data/Switcher/Custompagesswitcherdata";
export default function UnderConstruction() {
  return (
    <div className="login-img">
      <div className="page">
        <div className="dropdown float-end custom-layout">
          <div
            className="demo-icon nav-link icon mt-4 bg-primary"
            onClick={() => custompagesswitcherdata.Swichermainright()}
          >
            <i className="fe fe-settings fa-spin text_primary"></i>
          </div>
        </div>
        <div className="">
          <div
            className="container"
            onClick={() => custompagesswitcherdata.Swichermainrightremove()}
          >
            <div className="row text-center mx-auto">
              <div className="col-lg-8 col-sm-12 center-block align-items-center construction  ">
                <div className="text-white">
                  <div className="card-body">
                    <h1 className="display-2 mb-0 fw-semibold">Coming Soon</h1>
                    <div id="launch_date" className="is-countdown">
                      <ul className="countdown">
                        <underconstruction.Underconstruction />
                      </ul>
                    </div>

                    <p>
                      we apologize for your in-convenience....any quaries
                      contact me
                    </p>
                    <h4>
                      <strong>Contact:</strong> Zanex@demo.com
                    </h4>
                    <div className="mt-5">
                      <button className="btn btn-icon" type="button">
                        <span className="btn-inner--icon">
                          <i className="fa fa-facebook-f"></i>
                        </span>
                      </button>
                      <button className="btn btn-icon" type="button">
                        <span className="btn-inner--icon">
                          <i className="fa fa-google"></i>
                        </span>
                      </button>
                      <button className="btn btn-icon" type="button">
                        <span className="btn-inner--icon">
                          <i className="fa fa-twitter"></i>
                        </span>
                      </button>
                      <button className="btn btn-icon" type="button">
                        <span className="btn-inner--icon">
                          <i className="fa fa-pinterest-p"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
