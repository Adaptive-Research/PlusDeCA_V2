
import {Card} from "react-bootstrap";
import {DeleteFormation} from "../../../data/customlibs/api";
import {ValidateFormation,InvalidateFormation} from "../../../data/customlibs/api";





export default function CardFormation(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Formation provient directment de ce qui a ete charge de la base de donnees


    function EditFormation(Formation) {
        if (props.SendFormationData !== null)
            props.SendFormationData(true, Formation) ;
    }




    if(props.TypeFormation === 'Brouillon'){
        return  <Card key={props.Formation.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                        <Card.Body  style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditFormation(props.Formation)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='btn btn-success add-hspace-10'  onClick={() =>  ValidateFormation(storedToken, props.Formation.id,props.ForceRenderFormation)}>
                                <i className="fa fa-chevron-down"></i>
                            </button>     
                            <button className='m-2 btn btn-danger' onClick={() => DeleteFormation(storedToken, props.Formation.idAncestor,props.ForceRenderFormation)}>
                                <i className="fa fa-trash"></i>
                            </button>                     
                        </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }else  if(props.TypeFormation === 'Valide'){
        return  <Card key={props.Formation.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditFormation(props.Formation)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='btn btn-warning add-hspace-10'  onClick={() =>  InvalidateFormation(storedToken, props.Formation.id,props.ForceRenderFormation)}>
                                <i className="fa fa-history"></i>
                            </button>      
                            <button className='m-2 btn btn-danger' onClick={() => DeleteFormation(storedToken, props.Formation.idAncestor,props.ForceRenderFormation)}>
                                <i className="fa fa-trash"></i>
                            </button>      
                         </Card.Body>
                    </Card.Header>
                </Card>
    }else  {
        return  <Card key={props.Formation.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditFormation(props.Formation)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteFormation(storedToken, props.Formation.idAncestor,props.ForceRenderFormation)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    

}