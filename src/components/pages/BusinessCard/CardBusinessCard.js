
import {Card} from "react-bootstrap";
import {DeleteBusinessCard} from "../../../data/customlibs/api";





export default function CardBusinessCard(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.BusinessCard provient directment de ce qui a ete charge de la base de donnees


    function EditBusinessCard(BusinessCard) {
        if (props.SendBusinessCardData !== null)
            props.SendBusinessCardData(true, BusinessCard) ;
    }




    if(props.TypeBusinessCard === 'Brouillon'){
        return  <Card key={props.BusinessCard.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.BusinessCard.BusinessCard_Title}</Card.Title>
                        <Card.Body  style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditBusinessCard(props.BusinessCard)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteBusinessCard(storedToken, props.BusinessCard.idAncestor,props.ForceRenderBusinessCard)}>
                                <i className="fa fa-trash"></i>
                            </button>                     
                        </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }else  if(props.TypeBusinessCard === 'Valide'){
        return  <Card key={props.BusinessCard.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.BusinessCard.BusinessCard_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditBusinessCard(props.BusinessCard)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteBusinessCard(storedToken, props.BusinessCard.idAncestor,props.ForceRenderBusinessCard)}>
                                <i className="fa fa-trash"></i>
                            </button>      
                         </Card.Body>
                    </Card.Header>
                </Card>
    }else  {
        return  <Card key={props.BusinessCard.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.BusinessCard.BusinessCard_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditBusinessCard(props.BusinessCard)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteBusinessCard(storedToken, props.BusinessCard.idAncestor,props.ForceRenderBusinessCard)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    






}