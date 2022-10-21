import React , { useState } from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {useNavigate} from "react-router";
import {
  Col,
  Row,
  Card,
  Form,
  FormGroup,
  FormControl,
  ListGroup,
  Breadcrumb,
} from "react-bootstrap";

import axios from "axios";
import  { FindTranslation, getIDFromToken } from "../../../functions_Dan.js" ;



export default function EditProfile() {
  console.log("EditProfile") ;

  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  //console.log(storedToken) ;  
  //console.log(idUser) ;



  const sProfile = "Profile" ;
  const sEditProfile = "Edit Profile" ;
  const sAboutMe = "About Me" ;
  const sContactNumber = "Contact Number" ;
  const sEmailAddress = "Email Address" ;
  const sFirstName = "First Name" ;
  const sLastName = "Last Name" ;
  const sVisibility = "Visible by everyone" ;
  const navigate = useNavigate() ;

  // pour les titres
  const [profile, setProfile] = useState(sProfile) ;
  const [editProfile, setEditProfile] = useState(sEditProfile) ;
  const [aboutMe, setAboutMe] = useState(sAboutMe) ;
  const [contactNumber, setContactNumber] = useState(sContactNumber) ;
  const [emailAddress, setEmailAddress] = useState(sEmailAddress) ;
  const [firstName, setFirstName] = useState(sFirstName) ;
  const [lastName, setLastName] = useState(sLastName) ;
  const [visibility, setVisibility] = useState(sVisibility) ;

  // pour le contenu des champs
  const [prenom, setPrenom] = useState("") ;
  const [nom, setNom] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [emailVisible, setEmailVisible] = useState(false) ;
  const [telephone, setTelephone] = useState("") ;
  const [telephoneVisible, setTelephoneVisible] = useState(false) ;
  const [bio, setBio] = useState("") ;
  const [bioVisible, setBioVisible] = useState(false) ;


  // pour le reload des infos
  const [reloadInfos, setReloadInfos] = useState(true) ;
  const [reloadTraductions, setReloadTraductions] = useState(true) ;



  async function TranslateAll(url, Page,VL)
  {
    const response = axios.post(url, {
        Submit: 1,
        Page: Page,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then( function(response) {

      console.log(response.data) ;

      let t = FindTranslation(response.data,Page,VL, sProfile) ;
      if (t !== "Not Found")
        setProfile(t) ;

      t = FindTranslation(response.data,Page,VL, sEditProfile) ;
      if (t !== "Not Found")
        setEditProfile(t) ;

      t = FindTranslation(response.data,Page,VL, sAboutMe) ;
      if (t !== "Not Found")
        setAboutMe(t) ;

      t = FindTranslation(response.data,Page,VL, sContactNumber) ;
      if (t !== "Not Found")
        setContactNumber(t) ;

      t = FindTranslation(response.data,Page,VL, sEmailAddress) ;
      if (t !== "Not Found")
        setEmailAddress(t) ;

      t = FindTranslation(response.data,Page,VL, sFirstName) ;
      if (t !== "Not Found")
        setFirstName(t) ;

      t = FindTranslation(response.data,Page,VL, sLastName) ;
      if (t !== "Not Found")
        setLastName(t) ;

      t = FindTranslation(response.data,Page,VL, sVisibility) ;
      if (t !== "Not Found")
        setVisibility(t) ;

      setReloadTraductions(false) ;
    })
  }

  const url1 = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;
  const Page = "EditProfile" ;
  const VL = "FR" ;

  if (reloadTraductions === true)
    TranslateAll(url1,Page,VL) ;





  async function GetInfo(url,t,id)
  {
    console.log("GetInfo") ;
    console.log(url) ;
    console.log(t) ;
    console.log(id) ;


    const response = axios.post(url, {
        Submit: 1,
        token: t,
        idUser: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then( function(response) {

      console.log("response.data") ;
      console.log(response.data) ;
      let pos = response.data.indexOf("ERROR") ;
      if (pos !== 0)
      {
        const profileDetails = response.data[0];
        localStorage.setItem('profileDetails', JSON.stringify(profileDetails));
        setPrenom(response.data[0].Prenom) ;
        setNom(response.data[0].Nom) ;
        setEmail(response.data[0].Email) ;
        setTelephone(response.data[0].Telephone) ;
        setBio(response.data[0].Bio) ;

        setBioVisible(false) ;
        if (response.data[0].BioVisible === "1")
          setBioVisible(true) ;

        setTelephoneVisible(false) ;
        if (response.data[0].TelephoneVisible === "1")
          setTelephoneVisible(true) ;

        setEmailVisible(false) ;
        if (response.data[0].EmailVisible === "1")
          setEmailVisible(true) ;


        setReloadInfos(false) ;
      }
    })
  }


  const url2 = process.env.REACT_APP_API_SHOW_INFOS_UTILISATEUR_URL;
  if (reloadInfos === true)
    GetInfo(url2,storedToken,idUser) ;




  const SaveData = async (tok,p,n,e,ev,tel,telvis,b,bv) => {
    const url = process.env.REACT_APP_API_CREATE_INFOS_UTILISATEUR_URL ;
    const response = await axios.post(url, {
      Submit: 1,
      token:tok ,
      Prenom:p,
      Nom: n,
      Email: e,
      EmailVisible: ev,
      Telephone: tel,
      TelephoneVisible: telvis,
      Bio: b,
      BioVisible: bv
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    console.log(response.data);

    if (response.data.includes("ERROR:")) {
      console.log(`Error found: ${response.data}`);
    }
    else {
      console.log("Saved");
    }


  }




  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log("Save") ;

      let bv = 0 ;
      if (bioVisible === true)
        bv = 1 ;
      let tv = 0 ;
      if (telephoneVisible === true)
        tv = 1 ;
      let ev = 0 ;
      if (emailVisible === true)
        ev = 1 ;


      SaveData(storedToken,prenom,nom,email,ev,telephone,tv,bio,bv) ;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Login attempt");
    }
  }


  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Cancel") ;
    setReloadInfos(true) ;
    navigate(-1);
  }




  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">{editProfile}</h1>
        </div>
      </div>

      <Row>

        <Col lg={12} xl={8} md={12} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">{profile}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <label htmlFor="exampleInputname">{firstName}</label>
                    <input
                      className="form-control"
                      type="text"
                      value={prenom}
                      onChange={(e) =>  setPrenom(e.target.value) }
                    />
                  </FormGroup>
                </Col>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <label htmlFor="exampleInputname1">{lastName}</label>
                    <input
                      className="form-control"
                      type="text"
                      value={nom}
                      onChange={(e) =>  setNom(e.target.value) }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup className="mt-2">
                <label htmlFor="exampleInputEmail1">{emailAddress}</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) =>  setEmail(e.target.value) }
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <label htmlFor="exampleInputnumber">{contactNumber}</label>
                 <input
                  className="form-control"
                  type="text"
                  value={telephone}
                  onChange={(e) =>  setTelephone(e.target.value)  }
                />
              </FormGroup>


              <FormGroup>
                <Form.Label className="form-label">{aboutMe}</Form.Label>
                <textarea
                  className="form-control"
                  rows="6"
                  defaultValue="."
                  value={bio}
                  onChange={(e) =>  setBio(e.target.value) }
                ></textarea>
              </FormGroup>


            </Card.Body>

            <Card.Footer className="text-end">
            <button onClick={handleSubmit} className="btn btn-success mt-1 me-2">
                Save
              </button>

              <button onClick={handleCancel} className="btn btn-danger">
                Cancel
              </button>
            </Card.Footer>
          </Card>
        </Col>



        <Col lg={12} xl={4} md={12} sm={12}>


          <Card className="profile-edit">
            <Card.Header>
              <Card.Title>{visibility}</Card.Title>
            </Card.Header>
            <Card.Body>

              <div className="form-group mg-b-10">
                <label className="custom-switch ps-0">
                  <input
                    type="checkbox"
                    name="EmailVisible"
                    className="custom-switch-input"
                    checked={emailVisible}
                    onChange={(e) => setEmailVisible(!emailVisible)}
                  />
                  <span className="custom-switch-indicator"></span>
                  <span className="custom-switch-description mg-l-10">
                  {emailAddress}
                  </span>
                </label>
              </div>

              <div className="form-group mg-b-10">
                <label className="custom-switch ps-0">
                  <input
                    type="checkbox"
                    name="TelephoneVisible"
                    className="custom-switch-input"
                    checked={telephoneVisible}
                    onChange={(e) => setTelephoneVisible(!telephoneVisible)}
                  />
                  <span className="custom-switch-indicator"></span>
                  <span className="custom-switch-description mg-l-10">
                  {contactNumber}
                  </span>
                </label>
              </div>

              <div className="form-group mg-b-10">
                <label className="custom-switch ps-0">
                  <input
                    type="checkbox"
                    name="BioVisible"
                    className="custom-switch-input"
                    checked={bioVisible}
                    onChange={(e) => setBioVisible(!bioVisible)}
                  />
                  <span className="custom-switch-indicator"></span>
                  <span className="custom-switch-description mg-l-10">
                  {aboutMe}
                  </span>
                </label>
              </div>



            </Card.Body>

            <Card.Footer className="text-end">

              <button onClick={handleSubmit} className="btn btn-success mt-1 me-2">
                Save
              </button>

              <button onClick={handleCancel} className="btn btn-danger">
                Cancel
              </button>

            </Card.Footer>

          </Card>

        </Col>

      </Row>

    </div>
  );
}
