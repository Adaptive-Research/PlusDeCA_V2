
import {Card} from "react-bootstrap";
import {DeleteGroup} from "../../../data/customlibs/api";





export default function CardGroup(props) {
    console.log("CardGroup") ;
    console.log(props) ;
    const storedToken = localStorage.getItem('token') ;

    // props.Group provient directment de ce qui a ete charge de la base de donnees


    function EditGroup(Group) {
        if (props.SendGroupData !== null)
            props.SendGroupData(true, Group) ;
    }


    let FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Group.Group_Image + '/' ;

    if(props.TypeGroup === 'Brouillon'){
        return  <Card key={props.Group.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={FichierImage}
                        alt=""
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Group.Nom}</Card.Title>
                        <Card.Body  style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditGroup(props.Group)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            {/* LIGNE SUIVANTE A REVOIR... */}
                            <button className='m-2 btn btn-danger' onClick={() => DeleteGroup(storedToken, props.Group.idAncestor,props.ForceRenderGroup)}>
                                <i className="fa fa-trash"></i>
                            </button>                     
                        </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }
    else  {
        return  <Card key={props.Group.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={FichierImage}
                        alt=""
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Group.Nom}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditGroup(props.Group)}>
                                <i className="fa fa-edit"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }

}