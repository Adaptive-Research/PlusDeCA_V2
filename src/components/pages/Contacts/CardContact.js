
import {Card} from "react-bootstrap";
import {DeleteContact} from "../../../data/customlibs/api";





export default function CardContact(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Contact provient directment de ce qui a ete charge de la base de donnees


    function EditContact(Contact) {
        if (props.SendContactData !== null)
            props.SendContactData(true, Contact) ;
    }




    if(props.TypeContact === 'Brouillon'){
        return  <Card key={props.Contact.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Contact.Contact_Title}</Card.Title>
                        <Card.Body  style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditContact(props.Contact)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteContact(storedToken, props.Contact.idAncestor,props.ForceRenderContact)}>
                                <i className="fa fa-trash"></i>
                            </button>                     
                        </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }else  if(props.TypeContact === 'Valide'){
        return  <Card key={props.Contact.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Contact.Contact_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditContact(props.Contact)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteContact(storedToken, props.Contact.idAncestor,props.ForceRenderContact)}>
                                <i className="fa fa-trash"></i>
                            </button>      
                         </Card.Body>
                    </Card.Header>
                </Card>
    }else  {
        return  <Card key={props.Contact.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Contact.Contact_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditContact(props.Contact)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteContact(storedToken, props.Contact.idAncestor,props.ForceRenderContact)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    






}