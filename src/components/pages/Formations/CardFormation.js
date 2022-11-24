
import {Card} from "react-bootstrap";
import {DeleteFormation} from "../../../data/customlibs/api";
import {ValidateFormation,InvalidateFormation} from "../../../data/customlibs/api";





export default function CardFormation(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Formation provient directment de ce qui a ete charge de la base de donnees


    function EditFormation(Formation) {
        if (props.SendFormationData !== null)
            props.SendFormationData(true,Formation) ;
    }


    function ShowFormation(Formation) {
        if (props.SendShowFormationData !== null)
            props.SendShowFormationData(Formation) ;
    }



    if(props.TypeFormation === 'Brouillon'){
        return  <Card key={props.Formation.id}>
                    <Card.Header style={{padding: '2rem'}}>
                    
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                    </Card.Header>

                    <Card.Body >
                            <div>
                                {props.Formation.Formation_Text}
                            </div>

                            <div style={{padding: '1rem'}}>
                                <button className='btn btn-primary' onClick={() => EditFormation(props.Formation)}>
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className='btn btn-success add-hspace-10'  onClick={() =>  ValidateFormation(storedToken, props.Formation.id,props.ForceRenderFormation)}>
                                    <i className="fa fa-chevron-down"></i>
                                </button>     
                                <button className='m-2 btn btn-danger' onClick={() => DeleteFormation(storedToken, props.Formation.idAncestor,props.ForceRenderFormation)}>
                                    <i className="fa fa-trash"></i>
                                </button>    
                            </div>                 
                    </Card.Body>
                   
                </Card>
    }else  if(props.TypeFormation === 'Valide'){
        return  <Card key={props.Formation.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                    </Card.Header>

                    <Card.Body >
                            <div>
                                {props.Formation.Formation_Text}
                            </div>

                            <div style={{padding: '2rem'}}>
                                <button className='btn btn-primary' onClick={() => ShowFormation(props.Formation)}>
                                    <i className="fa fa-eye"></i>
                                </button>

                                <button className='btn btn-warning add-hspace-10'  onClick={() =>  InvalidateFormation(storedToken, props.Formation.id,props.ForceRenderFormation)}>
                                    <i className="fa fa-history"></i>
                                </button>     
                            </div>                 

                    </Card.Body>
                </Card>
    }
}