

import axios from "axios";




function getLastLineFromResponse(response) {

  let Reponse = String(response.data) ;
  var lines = Reponse.split('\n');
  var LastLine = "" ;
  for (let i = 0 ; i < lines.length ; i++)
  {
      if (lines[i].length > 1 )
      LastLine = lines[i] ;
  }

  return LastLine ;
}





function UploadFile(url, tok, Fichier, RenderUpload) {
    const formData = new FormData();
    formData.append('Submit','1') ;
    formData.append('debug','1') ;
    formData.append('token',tok) ;
    formData.append('data', Fichier);

    axios({
        method: "post",
        url:url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
          RenderUpload(getLastLineFromResponse(response)) ;

        })
        .catch(function (response) {
          console.log(response);
          RenderUpload(getLastLineFromResponse(response)) ;
        });
      
    }


function UploadBusinessCards(tok, Categorie, Fichier, RenderUpload) {

    const url = process.env.REACT_APP_API_UPLOAD_BUSINESSCARDS_URL ;
    const formData = new FormData();
    formData.append('Submit','1') ;
    formData.append('debug','1') ;
    formData.append('token',tok) ;
    formData.append('Categorie',Categorie) ;
    formData.append('data', Fichier);

    axios({
        method: "post",
        url:url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
          RenderUpload(getLastLineFromResponse(response)) ;

        })
        .catch(function (response) {
          console.log(response);
          RenderUpload(getLastLineFromResponse(response)) ;
        });
      
}
  



export {
    UploadFile,
    UploadBusinessCards
} ;