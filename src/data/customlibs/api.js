
import axios from "axios";






function getDataFromResponse(response) {
    let data = "" ;

    //console.log("response.data") ;
    //console.log(response.data) ;
    //console.log(typeof(response.data)) ;


    if (typeof(response.data) === "object")
    {
        if (response.data.constructor === Array)
            data = response.data ;
    }
    else {
        let Reponse = String(response.data) ;
        var lines = Reponse.split('\n');
        var LastLine = "" ;
        for (let i = 0 ; i < lines.length ; i++)
        {
            if (lines[i].length > 1 )
            LastLine = lines[i] ;
        }

        //console.log("\n\n") ;
        //console.log("LastLine") ;
        //console.log(LastLine) ;

        if (LastLine.indexOf("ERROR") >= 0)
            data = LastLine ;
        else
            data  = JSON.parse(LastLine);
    }
    return data ;
}









/*****************************************************************************************************************************************************
 * 
 * 
 *  Comptes Utilisateurs
 * 
 * 
 ****************************************************************************************************************************************************/



async function getAllUsersEmail() {
    const url = process.env.REACT_APP_API_GET_USERS_URL;


    const usersEmail = [];

    const response = await axios.get(url) ;

    const data = response.data;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        data.forEach((element) => {
            if (!usersEmail.includes(element.Email)) {
                usersEmail.push(element.Email);
            }
        });
    }

    localStorage.fin = JSON.stringify(usersEmail);
    return usersEmail;
};


async function requestLogin(mail, pass)  {
    const url = process.env.REACT_APP_API_LOGIN_URL;
  
    const response = await axios.post(url, {
        Submit: 1,
        Email: mail,
        Password: pass
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    console.log("response.data");
    console.log(response.data);

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else 
        return [true,response.data] ;

}


async function SaveNewUtilisateur(mail, pass) {
    const url = process.env.REACT_APP_API_SIGNUP_URL;

    console.log("password: " + pass) ;
    
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        Email: mail,
        Password: pass
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User created");
        return [true,response.data] ;
    }
}




/*****************************************************************************************************************************************************
 * 
 * 
 *  Company 
 * 
 * 
 ****************************************************************************************************************************************************/



 function getAllCompanies(variable,ForceRender) {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_URL;
    axios.get(url).then(
        (response) => {
            const data =  getDataFromResponse(response) ;

            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                const res = [];
                data.forEach((element) => {
                        res.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(res));
            }
            else 
                localStorage.removeItem(variable);
           
            ForceRender(variable) ;
        })
}


function getCompaniesForUser(variable,tok, UserId,ForceRender) {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_FOR_USER_URL;
    axios.post(url, {
        token: tok,
        Submit: 1,
        idUtilisateur: UserId
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {

            const data =  getDataFromResponse(response) ;

            //console.log(data) ;
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                let res = [];
                data.forEach((element) => {
                    res.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(res));
            }
            else 
                localStorage.removeItem(variable);
            
            ForceRender(variable) ;
        })
}



async function SaveCompany (tok,name,webSite,siret,email,phone,SendCloseMessage,ForceRenderCompany) {
    console.log("SaveCompany") ;
    const url = process.env.REACT_APP_API_CREATE_ENTERPRISE_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        Nom: name,
        SiteWeb: webSite,
        Siret: siret,
        Email: email,
        Telephone: phone
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    console.log(response.data) ;
    
    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log("company added");
        SendCloseMessage() ;
        ForceRenderCompany() ;
    }
    
}

async function UpdateCompany (tok,idEntreprise, name,webSite,siret,email,phone,SendCloseMessage,ForceRenderCompany) {
    console.log("UpdateCompany") ;
    const url = process.env.REACT_APP_API_EDIT_ENTERPRISE_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug: 1,
        idEntreprise: idEntreprise ,
        Nom: name,
        SiteWeb: webSite,
        Siret: siret,
        Email: email,
        Telephone: phone
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log("company modified");
        SendCloseMessage() ;
        ForceRenderCompany() ;
    }
}


function DeleteCompany(tok,idEntreprise,ForceRenderCompany) {
    //console.log("DeleteCompany") ;

    const url = process.env.REACT_APP_API_DELETE_ENTERPRISE_URL;
    axios.post(
        url, {
            token: tok,
            Submit: 1,
            debug:1 ,
            id: idEntreprise
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    ).then(
        (response) => {
            ForceRenderCompany() ;
        }
    )
}








/*****************************************************************************************************************************************************
 * 
 * 
 *  Activities
 * 
 * 
 ****************************************************************************************************************************************************/


function getActivitiesForUser(variable, Token,UserId, ForceRender) {
    //console.log("getActivitiesForUser: "+ UserId) ;
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISESETACTIVITES_FOR_USER_URL;
    axios.post(url, {
        token: Token,
        Submit: 1,
        idUtilisateur: UserId
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            const data =  getDataFromResponse(response) ;
            
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                let res = [];

                data.forEach((element) => {
                    res.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(res));
            }
            else{
                localStorage.removeItem(variable);
            }
            
            ForceRender(variable) ;

        })
}



function getAllActivities(variable,ForceRender) {
    // retrieve all activities in server
    // search and store activities created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ACTIVITY_URL;
    axios.get(url).then(
        (response) => {
            const data = response.data;
          
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                const res = [];
                data.forEach((element) => {
                    res.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(res));
            }
            else 
                localStorage.removeItem(variable);
           
            ForceRender(variable) ;
        })
}

async function SaveActivity(tok,idEntreprise,name,webSite,email,phone,description,SendCloseMessage,ForceRenderActivity) {
    console.log("SaveActivity") ;
    const url = process.env.REACT_APP_API_CREATE_ACTIVITY_URL;

    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        idEntreprise: idEntreprise,
        Nom: name,
        SiteWeb: webSite,
        Email: email,
        Telephone: phone,
        Description: description
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })


    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log("Activity added");
        SendCloseMessage() ;
        ForceRenderActivity() ;
    }
    
}


async function UpdateActivity(tok,idEntreprise,idActivite, name,webSite,email,phone,description,SendCloseMessage,ForceRenderActivity) {
    const url = process.env.REACT_APP_API_EDIT_ACTIVITY_URL ;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        idEntreprise: idEntreprise,
        idActivite: idActivite ,
        Nom: name,
        SiteWeb: webSite,
        Email: email,
        Telephone: phone,
        Description: description
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })


    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log("Activity modified");
        SendCloseMessage() ;
        ForceRenderActivity() ;
    }
    
    
}

function DeleteActivity(tok,idActivite,ForceRenderActivity) {

    const url = process.env.REACT_APP_API_DELETE_ACTIVITY_URL;
    axios.post(url, {
        token: tok,
        Submit: 1,
        id: idActivite
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((response) => {
        console.log(response.data);
        ForceRenderActivity() ;
    })
  
}











/*****************************************************************************************************************************************************
 * 
 * 
 *  Articles
 * 
 * 
 ****************************************************************************************************************************************************/


//Method to get all articles created by this user
async function getUserArticles(variable,tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_ARTICLES_BY_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        debug:1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    //let variable = "userArticles" ;

    const data =  getDataFromResponse(response) ;
        
    //console.log("test") ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        //console.log("test1") ;

        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    else{
        localStorage.removeItem(variable);
    }
    //console.log("test2") ;

    ForceRender(variable) ;
}



// Function that sends axios requesst to create a new article
async function SaveArticle(tok,title,category,texte,html,photo,ForceRenderArticle) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_ARTICLE_URL;
    console.log("SaveArticle") ;

    const url =  process.env.REACT_APP_API_CREATE_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        Article_Title: title,
        Article_Category: category,
        Article_Text: texte.current,
        Article_Html: html,
        Article_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("Article created");
        ForceRenderArticle() ;
    }
}



// Function that sends axios request to update an article
async function UpdateArticle(tok,idAncestor, title,category,texte,html,photo,ForceRenderArticle ){

    const url =  process.env.REACT_APP_API_EDIT_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idAncestor: idAncestor,
        Article_Title: title,
        Article_Category: category,
        Article_Text: texte,
        Article_Html: html,
        Article_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("Article updated");
        ForceRenderArticle() ;
    }

}




function DeleteArticle(tok, id, ForceRenderArticle) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_ARTICLE_URL;
    const url = process.env.REACT_APP_API_DELETE_ARTICLE_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        idAncestor: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            console.log(response.data);
            ForceRenderArticle() ;
        }
    )

}





// La fonction qui permet de Valider un Article
async function ValidateArticle (tok, idArticle, ForceRenderArticle) {
    console.log("ValidateArticle: " + idArticle) ;
  
    const url=process.env.REACT_APP_API_VALIDATE_ARTICLE_URL;
    console.log("New URL " + url);

    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        id: idArticle

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });


    if (response.data.includes("ERROR:")) 
        console.log(response.data);
    else {
        console.log("Article validated");
        ForceRenderArticle() ;
     }
       
}


// La fonction permettant d'invalider un article
async function InvalidateArticle (tok, idArticle, ForceRenderArticle) {
    console.log("InvalidateArticle: " + idArticle) ;

  
    const url =  process.env.REACT_APP_API_INVALIDATE_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        id: idArticle

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });


    if (response.data.includes("ERROR:")) 
        console.log(response.data);
     else {
        console.log("Article invalidated");
        ForceRenderArticle() ;
     }
       
}


///Mamao

















/*****************************************************************************************************************************************************
 * 
 * 
 *  Interviews
 * 
 * 
 ****************************************************************************************************************************************************/

async function getUserInterviews(variable,tok,ForceRender) {
    console.log("getUserInterviews") ;

    localStorage.removeItem(variable);
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_INTERVIEWS_FOR_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        //debug: 1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });


    const data =  getDataFromResponse(response) ;

    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    ForceRender(variable) ;
}





async function getInterviewQuestions(variable,tok,idInter, ForceRender) {
    console.log(" getInterviewQuestions") ;
    localStorage.removeItem(variable);

    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_QUESTIONS_FOR_INTERVIEW_URL;
    const response = await axios.post(url, {
        token: tok,
        //debug: 1,
        Submit: 1,
        idInterview:idInter
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data) ;

    const data =  getDataFromResponse(response) ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    ForceRender(variable) ;
}   



async function getInterviewAnswers(variable,tok,idInter, ForceRender) {
    console.log(" getInterviewAnswers") ;
    console.log("token: ",tok) ;
    console.log("idInter: ",idInter) ; 

    localStorage.removeItem(variable);

    const url =  process.env.REACT_APP_API_SHOW_ANSWERS_URL;
    const response = await axios.post(url, {
        token: tok,
        //debug: 1,
        Submit: 1,
        idInterview:idInter
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    console.log("response.data") ;
    console.log(response.data) ;

    const data =  getDataFromResponse(response) ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        let s = JSON.stringify(res) ;
        //console.log("s") ;
        //console.log(s) ;
        localStorage.setItem(variable,s );
    }
    ForceRender(variable) ;
}   





 // Function that sends axios requesst to save an answer for am Interview
async function SaveAnswer (tok, idInter, idQ, rep ) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
    console.log("SaveInterview") ;
    
    const url =  process.env.REACT_APP_API_SAVE_ANSWER_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idInterview: idInter,
        idQuestion: idQ,
        Reponse: rep 

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) 
        console.log(`Error found: ${response.data}`);
    else 
        console.log("Answer saved");
}




// Function that sends axios requesst to save an answer for am Interview
async function ValidateInterview (tok, idInter,ForceRenderInterview ) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
    console.log("ValidateInterview: " + idInter) ;

  
    const url =  process.env.REACT_APP_API_VALIDATE_INTERVIEW_URL;
    console.log("URL Valide  " + url);
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idInterview: idInter

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });


    if (response.data.includes("ERROR:")) 
        console.log(response.data);
     else {
        console.log("Interview validated");
        ForceRenderInterview() ;

     }
       
}


// Function that sends axios requesst to save an answer for am Interview
async function InvalidateInterview (tok, idInter,ForceRenderInterview ) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
    console.log("InvalidateInterview: " + idInter) ;

  
    const url =  process.env.REACT_APP_API_INVALIDATE_INTERVIEW_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idInterview: idInter

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });


    if (response.data.includes("ERROR:")) 
        console.log(response.data);
     else {
        console.log("Interview validated");
        ForceRenderInterview() ;
     }
       
}










/*****************************************************************************************************************************************************
 * 
 * 
 *  FullCalendar Events
 * 
 * 
 ****************************************************************************************************************************************************/



function getEventsForUser(tok,UseAnswerFromDatabase) 
{
  console.log("GetEventsForUser") ;

  const url = process.env.REACT_APP_API_SHOW_EVENT_URL ;
  axios.post(url, {
      Submit: 1,
      debug:1 ,
      token: tok,
  }, {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
      }
  }).then( function(response) {
 
    const obj =  getDataFromResponse(response) ;
    UseAnswerFromDatabase(obj) ;
  })
}



async function SaveEvent(tok,eventType,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,SendCloseMessage,ForceRender)  {
    console.log("SaveEvent") ;
    
    const url = process.env.REACT_APP_API_CREATE_EVENT_URL ;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        Event_Type: eventType,
        Event_Title: eventTitle ,
        Event_AllDay: sAllDay ,
        Event_Start: sStartDate,
        Event_End: sEndDate,
        Event_Location: eventLocation,
        Event_Data: eventData
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    

    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log(response.data) ;
        console.log("Event added");
        SendCloseMessage() ;
        ForceRender() ;
    }
}
  

  async function UpdateEvent(tok,idEvent, eventType,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,SendCloseMessage,ForceRender)  {
      console.log("UpdateEvent") ;
      const url = process.env.REACT_APP_API_EDIT_EVENT_URL;
      const response = await axios.post(url, {
          token: tok,
          Submit: 1,
          debug: 1,
          idEvent: idEvent,
          Event_Type: eventType,
          Event_Title: eventTitle ,
          Event_AllDay: sAllDay,
          Event_Start: sStartDate,
          Event_End: sEndDate,
          Event_Location: eventLocation,
          Event_Data: eventData
      }, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          }
          
      })

      if (response.data.includes("ERROR:")) {
          console.log(`Error: ${response.data}`);
      } else {
          console.log(response.data) ;
          console.log("Event modified");
          SendCloseMessage() ;
          ForceRender() ;
        
      }


}
    


async function DeleteEvent(tok,idEvent,SendCloseMessage,ForceRender ) {
    console.log("DeleteEvent()") ;

    const url = process.env.REACT_APP_API_DELETE_EVENT_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug: 1,
        idEvent: idEvent,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        
    })

    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        console.log(response.data) ;
        console.log("Event deleted");
        SendCloseMessage() ;
        ForceRender() ;
    }

}





/*****************************************************************************************************************************************************
 * 
 * 
 *  Profile
 * 
 * 
 ****************************************************************************************************************************************************/


async function getProfile(tok,id, ForceRender)
  {
    console.log("getProfile: ", id) ;

    const url = process.env.REACT_APP_API_SHOW_INFOS_UTILISATEUR_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        idUser: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then ( response => {
        console.log("response.data") ;
        console.log(response.data) ;
        let pos = response.data.indexOf("ERROR") ;
        if (pos !== 0)
        {
          const profileDetails = response.data[0];
          localStorage.setItem('profileDetails', JSON.stringify(profileDetails));
    
          if (ForceRender !== null)
            ForceRender(response)  ;
        }
    }) ;
  }



  async function SaveProfile (tok,p,n,e,ev,tel,telvis,b,bv) {
    const url = process.env.REACT_APP_API_CREATE_INFOS_UTILISATEUR_URL ;
    const response = await axios.post(url, {
      Submit: 1,
      token:tok ,
      Prenom:p,
      Nom: n,
      Email: e,
      EmailVisible: ev,
      Telephone: tel,
      TelephoneVisible: telvis,
      Bio: b,
      BioVisible: bv
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })

    console.log(response.data);

    if (response.data.includes("ERROR:")) {
      console.log(`Error found: ${response.data}`);
    }
    else {
        const profileDetails = {
            Prenom:p,
            Nom: n,
            Email: e,
            EmailVisible: ev,
            Telephone: tel,
            TelephoneVisible: telvis,
            Bio: b,
            BioVisible: bv
        }
        localStorage.setItem('profileDetails', JSON.stringify(profileDetails));
        console.log("Profile Saved");
    }
  }






/*****************************************************************************************************************************************************
 * 
 * 
 *  Contacts
 * 
 * 
 ****************************************************************************************************************************************************/


//Method to get all Contacts created by this user
async function getUserContacts(variable,tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Contacts';
    const url =  process.env.REACT_APP_API_SHOW_CONTACTS_BY_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        debug:1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    //let variable = "userContacts" ;

    const data =  getDataFromResponse(response) ;
        
    //console.log("test") ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        //console.log("test1") ;

        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    else{
        localStorage.removeItem(variable);
    }
    //console.log("test2") ;

    ForceRender(variable) ;
}



// Function that sends axios requesst to create a new Contact
async function SaveContact(tok,title,category,texte,html,photo,ForceRenderContact) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_Contact_URL;
    console.log("SaveContact") ;

    const url =  process.env.REACT_APP_API_CREATE_CONTACT_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        Contact_Title: title,
        Contact_Category: category,
        Contact_Text: texte.current,
        Contact_Html: html,
        Contact_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("Contact created");
        ForceRenderContact() ;
    }
}



// Function that sends axios request to update an Contact
async function UpdateContact(tok,idAncestor, title,category,texte,html,photo,ForceRenderContact ){

    const url =  process.env.REACT_APP_API_EDIT_CONTACT_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idAncestor: idAncestor,
        Contact_Title: title,
        Contact_Category: category,
        Contact_Text: texte,
        Contact_Html: html,
        Contact_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("Contact updated");
        ForceRenderContact() ;
    }

}




function DeleteContact(tok, id, ForceRenderContact) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_Contact_URL;
    const url = process.env.REACT_APP_API_DELETE_CONTACT_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        idAncestor: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            console.log(response.data);
            ForceRenderContact() ;
        }
    )

}  



/*****************************************************************************************************************************************************
 * 
 * 
 *  BusinessCards
 * 
 * 
 ****************************************************************************************************************************************************/


//Method to get all BusinessCards created by this user
async function getUserBusinessCards(variable,tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-BusinessCards';
    const url =  process.env.REACT_APP_API_SHOW_BUSINESSCARDS_BY_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        debug:1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    //let variable = "userBusinessCards" ;

    const data =  getDataFromResponse(response) ;
        
    //console.log("test") ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        //console.log("test1") ;

        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    else{
        localStorage.removeItem(variable);
    }
    //console.log("test2") ;

    ForceRender(variable) ;
}



// Function that sends axios requesst to create a new BusinessCard
async function SaveBusinessCard(tok,title,category,texte,html,photo,ForceRenderBusinessCard) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_BusinessCard_URL;
    console.log("SaveBusinessCard") ;

    const url =  process.env.REACT_APP_API_CREATE_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        BusinessCard_Title: title,
        BusinessCard_Category: category,
        BusinessCard_Text: texte.current,
        BusinessCard_Html: html,
        BusinessCard_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("BusinessCard created");
        ForceRenderBusinessCard() ;
    }
}



// Function that sends axios request to update an BusinessCard
async function UpdateBusinessCard(tok,idAncestor, title,category,texte,html,photo,ForceRenderBusinessCard ){

    const url =  process.env.REACT_APP_API_EDIT_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idAncestor: idAncestor,
        BusinessCard_Title: title,
        BusinessCard_Category: category,
        BusinessCard_Text: texte,
        BusinessCard_Html: html,
        BusinessCard_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data)

    if (response.data.includes("ERROR:")) {
        console.log(`Error found: ${response.data}`);
    } else {
        console.log("BusinessCard updated");
        ForceRenderBusinessCard() ;
    }

}




function DeleteBusinessCard(tok, id, ForceRenderBusinessCard) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_BusinessCard_URL;
    const url = process.env.REACT_APP_API_DELETE_BUSINESSCARD_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        idAncestor: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            console.log(response.data);
            ForceRenderBusinessCard() ;
        }
    )

}  





/*****************************************************************************************************************************************************
 * 
 * 
 *  Traductions
 * 
 * 
 ****************************************************************************************************************************************************/

async function getTranslations(url, Page,VL) 
  {
    const response =  await axios.post(url, {
        Submit: 1,
        Page: Page,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    
    return response.data ;
  }
   



export {
    getDataFromResponse,
    

    getAllUsersEmail,
    requestLogin,
    SaveNewUtilisateur,
    
    
    getAllCompanies,
    getCompaniesForUser,
    SaveCompany,
    UpdateCompany,
    DeleteCompany,

    getActivitiesForUser,
    getAllActivities,
    SaveActivity,
    UpdateActivity,
    DeleteActivity,

    getUserArticles,
    SaveArticle,
    UpdateArticle,
    DeleteArticle,
    ValidateArticle,
    InvalidateArticle,

    getUserInterviews,
    getInterviewQuestions,
    getInterviewAnswers,
    SaveAnswer,
    ValidateInterview,
    InvalidateInterview,
    
    
    getEventsForUser,
    SaveEvent,
    UpdateEvent,
    DeleteEvent,


    getProfile,
    SaveProfile,


    getUserContacts,
    SaveContact,
    UpdateContact,
    DeleteContact,

    getUserBusinessCards,
    SaveBusinessCard,
    UpdateBusinessCard,
    DeleteBusinessCard,


    getTranslations


};