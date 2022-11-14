import '../../../assets/css/InterviewsList.css';
import {Card} from "react-bootstrap";
import {ValidateInterview,InvalidateInterview} from "../../../data/customlibs/utils";



export default function CardInterview(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Interview provient directment de ce qui a ete charge de la base de donnees


    function EditInterview(Interview) {
        if (props.SendInterviewData !== null)
            props.SendInterviewData(true, Interview) ;
    }



    



    function ShowInterview(Interview) {
        if (props.SendInterviewData !== null)
            props.SendInterviewData(true, Interview) ;
    }




    if(props.TypeInterview === 'A_Repondre'){
        return  <Card key={props.Interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary'  onClick={() =>  EditInterview(props.Interview)}>
                                <i className="fa fa-edit"></i>
                            </button>

                            <button className='btn btn-success add-hspace-10'  onClick={() =>  ValidateInterview(storedToken, props.Interview.idInterview,props.ForceRenderInterview)}>
                                <i className="fa fa-chevron-down"></i>
                            </button>                            
                    </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }else  if(props.TypeInterview === 'Valide'){
        return  <Card key={props.Interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary' onClick={() =>  ShowInterview(props.Interview)}>
                                    <i className="fe fe-eye"></i>
                            </button>

                            <button className='btn btn-warning add-hspace-10'  onClick={() =>  InvalidateInterview(storedToken, props.Interview.idInterview,props.ForceRenderInterview)}>
                                <i className="fa fa-history"></i>
                            </button>       
                         </Card.Body>
                    </Card.Header>
                </Card>
    }else  {
        return  <Card key={props.Interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary' onClick={() =>  ShowInterview(props.Interview)}>
                                    <i className="fe fe-eye"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    

    


}

