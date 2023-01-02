import React from "react";
import { Link } from "react-router-dom";
import * as custompagesswitcherdata from "../../../../data/Switcher/Custompagesswitcherdata"
export default function Errorpage400() {
  return (
    <div className="error-bg">
      <div className="page">
        <div className="dropdown float-end custom-layout">
                <div className="demo-icon nav-link icon mt-4 bg-primary" onClick={()=>custompagesswitcherdata.Swichermainright()}>
                    <i className="fe fe-settings fa-spin text_primary"></i>
                </div>
            </div>
        <div className="page-content error-page error2" onClick={()=>custompagesswitcherdata.Swichermainright()}>
          <div className="container text-center">
            <div className="error-template">
              <h1 className="display-3 text-dark mb-2">
                Bravo. Vous avez trouvé une fonctionnalité qui n'existe pas encore.
              </h1>
              <h5 className="error-details text-dark">
                Cette fonctionnalité est en cours de développement. Elle sera disponible dans les mois qui viennent. </h5>
              <div className="text-center">
                <Link
                  to={`${process.env.PUBLIC_URL}/Journal/Page1`}
                  className="btn btn-primary mt-5 mb-5"
                >
                  <i className="fa fa-long-arrow-left"></i> Retour à la première page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
