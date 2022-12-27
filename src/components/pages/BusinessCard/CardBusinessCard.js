
import {Card} from "react-bootstrap";
import {DeleteBusinessCard} from "../../../data/customlibs/api";
import '../../../assets/css/BusinessCard.css';
import { FaGlobe } from 'react-icons/fa';
import { IoMdPhonePortrait, IoMdMail } from 'react-icons/io';
import '../../../assets/css/GlobalInputbackground.css';



export default function CardBusinessCard(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.BusinessCard provient directment de ce qui a ete charge de la base de donnees


    function EditBusinessCard(BusinessCard) {
        if (props.SendBusinessCardData !== null)
            props.SendBusinessCardData("Edit",BusinessCard) ;
    }

    function ClasserBusinessCard(BusinessCard) {
        if (props.SendBusinessCardData !== null)
            props.SendBusinessCardData("Classify",BusinessCard) ;
    }



    let SiteWeb, S;
    S = props.BusinessCard.SiteWeb.toUpperCase() ;
    if ( S.includes("HTTP:") ) 
        SiteWeb = props.BusinessCard.SiteWeb ;
    else
        SiteWeb = "https://"+ props.BusinessCard.SiteWeb ;

    return(
        <Card key={props.BusinessCard.id} className = 'BusinessCard'>
            <Card.Header style={{padding: '2rem',justifyContent: 'space-between',border:'none'}}>
                <Card.Title as="h5">{props.BusinessCard.Entreprise}</Card.Title>            
                <Card.Title as="h5">{props.BusinessCard.LieuRencontre}</Card.Title>            
            </Card.Header>
            <Card.Body>
                <div className='BusinessCard-Content'>
                    <h4 className='Prospect-FullName'>{props.BusinessCard.Prenom} {props.BusinessCard.Nom}</h4>
                    <span className='Prospect-Fonction'><h4>{props.BusinessCard.Fonction}</h4></span>
                    <div className='BusinessCard-Coordonees'>
                        <p className='Prospect-Email'><IoMdMail /> {props.BusinessCard.Email}</p>
                        <p className='Prospect-Telephone'><IoMdPhonePortrait /> {props.BusinessCard.TelephoneContact}</p>
                        <p className='Prospect-SiteWeb'><FaGlobe /> <a href={SiteWeb} target="_blank" rel="noreferrer" >{props.BusinessCard.SiteWeb}</a> </p>
                    </div>
                </div>                  
                <div className='BusinessCardBtns'>
                    <button className='btn btn-success' onClick={() => ClasserBusinessCard(props.BusinessCard)}>
                        <i className="fe fe-phone"></i>
                    </button>

                    <button className='m-1 btn btn-primary' onClick={() => ClasserBusinessCard(props.BusinessCard)}>
                        <i className="fe fe-chevrons-right"></i>
                    </button>

                    <button className='btn btn-primary' onClick={() => EditBusinessCard(props.BusinessCard)}>
                        <i className="fa fa-edit"></i>
                    </button>

                    <button className='m-1 btn btn-danger' onClick={() => DeleteBusinessCard(storedToken, props.BusinessCard.id,props.ForceRenderBusinessCard)}>
                        <i className="fa fa-trash"></i>
                    </button>   
                </div>                  
            </Card.Body> 
        </Card>
                    
    );


}