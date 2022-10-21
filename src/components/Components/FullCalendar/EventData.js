import React, { useState } from "react";
import { Link } from "react-router-dom";
import  { FindTranslation, getIDFromToken  } from "../../../functions_Dan.js" ;
import axios from "axios";
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


export function EventData() {


  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  //console.log(storedToken) ;
  //console.log(idUser) ;



  // les titres des champs
  const sTitre = "Title" ;
  const sComment = "Comment" ;


  // pour les titres
  const [titre, setTitre] = useState(sTitre) ;
  const [comment, setComment] = useState(sComment) ;


   // pour le contenu des champs
   const [eventNom, setEventNom] = useState("") ;
   const [eventData, setEventData] = useState("") ;

  // pour le reload des infos
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
   

    let t = FindTranslation(response.data,Page,VL, sTitre) ;
    if (t !== "Not Found")
      setTitre(t) ;
    t = FindTranslation(response.data,Page,VL, sComment) ;
      if (t !== "Not Found")
        setComment(t) ;

    setReloadTraductions(false) ;               
    })
  }


  const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;
  const Page = "FullCalendar" ;
  const VL = "FR" ;

  if (reloadTraductions === true)
    TranslateAll(url,Page,VL) ;

  
  
  function Outhover() {
    console.log("Outhover()") ;
    document.querySelector(".EventData").classList.remove("open");
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit") ;
    document.querySelector(".EventData").classList.remove("open");
    /*
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
    */
  }


  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Cancel") ;
    document.querySelector(".EventData").classList.remove("open");
    //setReloadInfos(true) ;  
  }


  


  return (
    <div className="EventData ">
      <div className="panel panel-primary card mb-0 shadow-none border-0">
        <div className="tab-menu-heading border-0 d-flex p-3">
          <div className="card-options ms-auto">
            <Link
              to="#"
              className="sidebar-icon text-end float-end me-1"
              onClick={() => Outhover()}
            >
              <i className="fe fe-x text-white"></i>
            </Link>
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu border-bottom"></div>
          <Card className="Dan_color">
            <Card.Header>
              <button><i className={`Dan_icon fe fe-save`}></i></button>
              <button><i className={`Dan_icon fe fe-x`}></i></button>
              <button><i className={`Dan_icon fe fe-trash-2`}></i></button>

            </Card.Header>
            <Card.Body>
                  <FormGroup>
                    <label htmlFor="exampleInputname">Type</label>
                    <select name="Event_Type"  className="form-control">
                      <option value="1">Réunion d'entrepreneurs</option>
                      <option value="2">Salon</option>
                      <option value="3">Rendez-vous client</option>
                      <option value="4">Webinaire</option>
                      <option value="5">Autre</option>
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="exampleInputname">{titre}</label>
                    <input
                      className="form-control"
                      type="text"
                      value={eventNom}
                      onChange={(e) =>  setEventNom(e.target.value) }
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="exampleInputname1">{comment}</label>
                    <textarea
                        className="form-control"
                        rows="6"
                        defaultValue="."
                        value={eventData}
                        onChange={(e) =>  setEventData(e.target.value) }
                      ></textarea>                    
                  </FormGroup>
            </Card.Body>


          </Card>
        </div>
      </div>
    </div>
  );
}

