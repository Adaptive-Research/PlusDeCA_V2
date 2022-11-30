

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





function Upload_BusinessCards(NomFichier,Fichier) {

  const formData = new FormData();
  formData.append(NomFichier, Fichier);

  // Post the form, just make sure to set the 'Content-Type' header
  axios.post('/Upload-BusinessCards', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.log(response);
  });
}

function Upload_Image(url, tok, Fichier,RenderUpload) {

    const formData = new FormData();
    formData.append('Submit','1') ;
    formData.append('debug','1') ;
    formData.append('token',tok) ;
    //formData.append(NomFichier, Fichier);
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
    Upload_BusinessCards,
    Upload_Image,
} ;