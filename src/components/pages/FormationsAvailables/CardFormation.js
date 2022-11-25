
import {Card} from "react-bootstrap";
import {DeleteFormation} from "../../../data/customlibs/api";
import {ValidateFormation,InvalidateFormation} from "../../../data/customlibs/api";





export default function CardFormation(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Formation provient directment de ce qui a ete charge de la base de donnees

    function ShowFormation(Formation) {
        if (props.SendShowFormationData !== null)
            props.SendShowFormationData(Formation) ;
    }

        return  <Card key={props.Formation.id}>
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Formation.Formation_Title}</Card.Title>
                    </Card.Header>

                    <Card.Body >
                            <div>
                                {props.Formation.Formation_Text}
                            </div>

                            <div style={{width:'100%',marginTop:'15px',textAlign:'end'}}>
                                <button className='btn btn-primary' onClick={() => ShowFormation(props.Formation)}>
                                    <i className="fa fa-eye"></i>
                                </button>
                            </div>                 

                    </Card.Body>
                </Card>
  
}