
import {Card} from "react-bootstrap";
import {DeleteArticle} from "../../../data/customlibs/api";





export default function CardArticle(props) {
    console.log("CardArticle") ;
    console.log(props) ;
    const storedToken = localStorage.getItem('token') ;

    // props.Article provient directment de ce qui a ete charge de la base de donnees


    function EditArticle(Article) {
        if (props.SendArticleData !== null)
            props.SendArticleData(true, Article) ;
    }


    let FichierImage = process.env.REACT_APP_API_GET_IMAGE_URL + props.Article.Article_Image + '/' ;

    if(props.TypeArticle === 'Brouillon'){
        return  <Card key={props.Article.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={FichierImage}
                        alt=""
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Article.Article_Title}</Card.Title>
                        <Card.Body  style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditArticle(props.Article)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className='m-2 btn btn-danger' onClick={() => DeleteArticle(storedToken, props.Article.idAncestor,props.ForceRenderArticle)}>
                                <i className="fa fa-trash"></i>
                            </button>                     
                        </Card.Body>
                        
                    </Card.Header>
                   
                </Card>
    }
    else  {
        return  <Card key={props.Article.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={FichierImage}
                        alt=""
                    />
                    <Card.Header style={{padding: '2rem'}}>
                        <Card.Title as="h5">{props.Article.Article_Title}</Card.Title>
                        <Card.Body style={{position: 'absolute', right: '10px'}}>
                            <button className='btn btn-primary' onClick={() => EditArticle(props.Article)}>
                                <i className="fa fa-edit"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    

}