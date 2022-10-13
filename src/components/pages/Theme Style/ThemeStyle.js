import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Card,Row,Col,} from "react-bootstrap";
import * as Switcherdata from "../../../data/Switcher/Switcherdata";

function ThemeStyle() {
  useEffect(()=>{
    Switcherdata.localStorageBackUp();
  })
  function changePrimaryColor() {
    var userColor = document.getElementById("colorID").value;
    localStorage.setItem("primaryColor", userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem("primaryHoverColor", userColor + 95);
    localStorage.setItem("primaryBorderColor", userColor);
    localStorage.setItem("primaryTransparent", userColor + 20);

    const dynamicPrimaryLight = document.querySelectorAll(
      "input.color-primary-light"
    );

    Switcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

    document.getElementById("myonoffswitch6").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("light-mode");

    // Removing
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("transparent-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function darkPrimaryColor() {
    var userColor = document.getElementById("darkPrimaryColorID").value;

    localStorage.setItem("darkPrimaryColor", userColor);

    const dynamicPrimaryDark = document.querySelectorAll(
      "input.color-primary-dark"
    );

    Switcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

    document.getElementById("myonoffswitch7").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("dark-mode");
    document.querySelector("body")?.classList.add("dark-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("transparent-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function transparentPrimaryColor() {
    var userColor = document.getElementById("transparentPrimaryColorID").value;

    localStorage.setItem("transparentPrimaryColor", userColor);

    const PrimaryTransparent = document.querySelectorAll(
      "input.color-primary-transparent"
    );

    Switcherdata.dynamicTransparentPrimaryColor(PrimaryTransparent, userColor);

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function BgTransparentBackground() {
    var userColor = document.getElementById("transparentBgColorID").value;

    localStorage.setItem("transparentBgColor", userColor);

    const dynamicBackgroundColor = document.querySelectorAll(
      "input.color-bg-transparent"
    );

    Switcherdata.dynamicBgTransparentBackground(
      dynamicBackgroundColor,
      userColor
    );

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");
    document.querySelector("body")?.classList.remove("bg-img1");
    document.querySelector("body")?.classList.remove("bg-img2");
    document.querySelector("body")?.classList.remove("bg-img3");
    document.querySelector("body")?.classList.remove("bg-img4");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparent-bgImgPrimaryColor");
    localStorage.removeItem("BgImage");

    Switcherdata.name();
  }
  function BgImgTransparentPrimaryColor() {
    var userColor = document.getElementById(
      "transparentBgImgPrimaryColorID"
    ).value;

    localStorage.setItem("transparent-bgImgPrimaryColor", userColor);

    const dynamicPrimaryImgTransparent = document.querySelectorAll(
      "input.color-primary-img-transparent"
    );

    Switcherdata.dynamicBgImgTransparentPrimaryColor(
      dynamicPrimaryImgTransparent,
      userColor
    );

    document.getElementById("myonoffswitchTransparent").checked = true;

    // Adding
    document.querySelector("body")?.classList.add("transparent-mode");

    // Removing
    document.querySelector("body")?.classList.remove("light-mode");
    document.querySelector("body")?.classList.remove("dark-mode");

    localStorage.removeItem("primaryColor");
    localStorage.removeItem("primaryHoverColor");
    localStorage.removeItem("primaryBorderColor");
    localStorage.removeItem("primaryTransparent");
    localStorage.removeItem("darkPrimaryColor");
    localStorage.removeItem("transparentPrimaryColor");
    localStorage.removeItem("transparentBgColor");

    document.querySelector("html").style.removeProperty("--transparent-body");

    if (
      document.querySelector("body")?.classList.contains("bg-img1") === false &&
      document.querySelector("body")?.classList.contains("bg-img2") === false &&
      document.querySelector("body")?.classList.contains("bg-img3") === false &&
      document.querySelector("body")?.classList.contains("bg-img4") === false
    ) {
      document.querySelector("body")?.classList.add("bg-img1");
      localStorage.setItem("BgImage", "bg-img1");
    }
    Switcherdata.name();
  }
  return (
    <div>
      <div>
        <div className="page-header">
          <div>
            <h1 className="page-title">Theme Style</h1>
            <Breadcrumb className="breadcrumb">
              <Breadcrumb.Item className="breadcrumb-item" href="#">
               Pages
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item active breadcrumds" aria-current="page">
                Theme Style
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ms-auto pageheader-btn">
            <Link to="#" className="btn btn-primary btn-icon text-white me-3">
              <span>
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
        {/* PAGE-HEADER END */}
        {/*Row*/}
        <div className="container">
          <Row className="row row-sm">
            <Col xl={6} className="col-xl-6 m-auto">
              <Card className=" sidebar-right1">
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Light Theme Style
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Light Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch7"
                          onClick={() => Switcherdata.LightTheme()}
                          id="myonoffswitch6"
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch6"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex">
                      <span className="me-auto mt-1">Light Primary</span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-color-picker color-primary-light border-0"
                          defaultValue="#6259ca"
                          id="colorID"
                          onInput={(e) => changePrimaryColor(e)}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id7="transparentcolor"
                          name="lightPrimary"
                        />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Dark Theme Style
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Dark Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch7"
                          id="myonoffswitch7"
                          onClick={() => Switcherdata.dark()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch7"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto mt-1">Dark Primary</span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-dark-color-picker color-primary-dark border-0"
                          defaultValue="#6259ca"
                          id="darkPrimaryColorID"
                          onInput={(e) => darkPrimaryColor(e)}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id8="transparentcolor"
                          name="darkPrimary"
                        />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Transparent Theme Style
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Transparent Theme</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch7"
                          id="myonoffswitchTransparent"
                          onClick={() => Switcherdata.transparent()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitchTransparent"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto mt-1">Transparent Primary</span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-transparent-color-picker color-primary-transparent border-0"
                          defaultValue="#6259ca"
                          id="transparentPrimaryColorID"
                          onInput={() => transparentPrimaryColor()}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id4="primary"
                          data-id9="transparentcolor"
                          name="tranparentPrimary"
                        />
                      </div>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto mt-1">
                        Transparent Background
                      </span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-transparent-color-picker color-bg-transparent border-0"
                          defaultValue="#6259ca"
                          id="transparentBgColorID"
                          onInput={() => BgTransparentBackground()}
                          type="color"
                          data-id5="body"
                          data-id6="theme"
                          data-id9="transparentcolor"
                          name="transparentBackground"
                        />
                      </div>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Transparent Bg-Image Style
                    </h6>
                  </div>
                  <div className="skin-body switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto mt-1">Bg-Image Primary</span>
                      <div className="">
                        <input
                          className="w-30p h-30 input-transparent-color-picker color-primary-transparent border-0"
                          defaultValue="#6259ca"
                          id="transparentBgImgPrimaryColorID"
                          onInput={() => BgImgTransparentPrimaryColor()}
                          type="color"
                          data-id="bg-color"
                          data-id1="bg-hover"
                          data-id2="bg-border"
                          data-id3="primary"
                          data-id4="primary"
                          data-id9="transparentcolor"
                          name="tranparentPrimary"
                        />
                      </div>
                    </div>
                    <div className="switch-toggle d-flex mt-2 bgimg-style">
                      <Link
                        className="bg-img1 me-2"
                        to="#"
                        onClick={() => Switcherdata.bgimage1()}
                      >
                        <img
                          src={require("../../../assets/images/media/bg-img1.jpg")}
                          alt=""
                          id="bgimage1"
                        />
                      </Link>
                      <Link
                        className="bg-img2 me-2"
                        to="#"
                        onClick={() => Switcherdata.bgimage2()}
                      >
                        <img
                          src={require("../../../assets/images/media/bg-img2.jpg")}
                          alt=""
                          id="bgimage2"
                        />
                      </Link>
                      <Link
                        className="bg-img3 me-2"
                        to="#"
                        onClick={() => Switcherdata.bgimage3()}
                      >
                        <img
                          src={require("../../../assets/images/media/bg-img3.jpg")}
                          alt=""
                          id="bgimage3"
                        />
                      </Link>
                      <Link
                        className="bg-img4 me-2"
                        to="#"
                        onClick={() => Switcherdata.bgimage4()}
                      >
                        <img
                          src={require("../../../assets/images/media/bg-img4.jpg")}
                          alt=""
                          id="bgimage4"
                        />
                      </Link>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Navigation Style
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Vertical Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch15"
                          onClick={() => Switcherdata.VerticalMenu()}
                          id="myonoffswitch1"
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch1"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Horizontal Click Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch15"
                          id="myonoffswitch2"
                          onClick={() => Switcherdata.horizontal()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch2"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Horizontal Hover Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch15"
                          id="myonoffswitch111"
                          onClick={() => Switcherdata.HorizontalHoverMenu()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch111"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      LTR and RTL VERSIONS
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">LTR Version</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch8"
                          id="myonoffswitch4"
                          onClick={() => Switcherdata.RtltoLtr()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch4"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">RTL Version</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch8"
                          id="myonoffswitch5"
                          onClick={() => Switcherdata.LtrtoRtl()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch5"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <div className="card-body menu-style">
                  <div>
                    <h6 className="main-content-label mb-3">Header Styles</h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle lightHeader d-flex">
                      <span className="me-auto">Light Header</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch3"
                          id="myonoffswitch8"
                          onClick={() => Switcherdata.Lightheader()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch8"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle  colorHeader d-flex mt-2">
                      <span className="me-auto">Color Header</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch3"
                          id="myonoffswitch9"
                          onClick={() => Switcherdata.Colorheader()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch9"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle darkHeader d-flex mt-2">
                      <span className="me-auto">Dark Header</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch3"
                          id="myonoffswitch10"
                          onClick={() => Switcherdata.Darkheader()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch10"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle darkHeader d-flex mt-2">
                      <span className="me-auto">Gradient Header</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch3"
                          id="myonoffswitch11"
                          onClick={() => Switcherdata.gradientheader()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch11"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-body menu-style">
                  <div>
                    <h6 className="main-content-label mb-3">Menu Styles</h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle lightMenu d-flex">
                      <span className="me-auto">Light Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch2"
                          id="myonoffswitch12"
                          onClick={() => Switcherdata.LightMenu()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch12"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle colorMenu d-flex mt-2">
                      <span className="me-auto">Color Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch2"
                          onClick={() => Switcherdata.ColorMenu()}
                          id="myonoffswitch13"
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch13"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle darkMenu d-flex mt-2">
                      <span className="me-auto">Dark Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch2"
                          onClick={() => Switcherdata.DarkMenu()}
                          id="myonoffswitch14"
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch14"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle gradientMenu d-flex mt-2">
                      <span className="me-auto">Gradient Menu</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch2"
                          onClick={() => Switcherdata.GradientMenu()}
                          id="myonoffswitch15"
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch15"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Layout Width Styles
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Full Width</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch4"
                           onClick={() => Switcherdata.FullWidth()}
                          id="myonoffswitch16"
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch16"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Boxed</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch4"
                           onClick={() => Switcherdata.Boxed()}
                          id="myonoffswitch17"
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch17"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Layout Positions
                    </h6>
                  </div>
                  <div className="switch_section">
                    <div className="switch-toggle d-flex">
                      <span className="me-auto">Fixed</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch5"
                          id="myonoffswitch18"
                          onClick={() => Switcherdata.Fixed()}
                          className="onoffswitch2-checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="myonoffswitch18"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                    <div className="switch-toggle d-flex mt-2">
                      <span className="me-auto">Scrollable</span>
                      <p className="onoffswitch2 my-0">
                        <input
                          type="radio"
                          name="onoffswitch5"
                          id="myonoffswitch19"
                          onClick={() => Switcherdata.Scrollable()}
                          className="onoffswitch2-checkbox"
                        />
                        <label
                          htmlFor="myonoffswitch19"
                          className="onoffswitch2-label"
                        />
                      </p>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body>
                  <div>
                    <h6 className="main-content-label mb-3">
                      Reset All Styles
                    </h6>
                  </div>
                  <div className="switch_section text-center px-0">
                    <div className="btn-list">
                      <button className="btn btn-success w-lg">
                        Save Settings
                      </button>
                      <button
                        className="btn btn-danger"
                         onClick={() => {
                          localStorage.clear();
                          document.querySelector("html").style = "";
                          Switcherdata.name();
                          Switcherdata.resetData();
                        }}
                        type="button"
                      >
                        Reset All
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ThemeStyle;
