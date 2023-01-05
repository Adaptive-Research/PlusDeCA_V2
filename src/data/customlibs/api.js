
import axios from "axios";
import  "../../GlobalVariables" ;


var CryptoJS = require("crypto-js");






// Cette fonction sert a psser les parametres quand on utilise fetch plutot que axios

function getParameters(parameters) {
    var formBody = [];
    for (var property in parameters) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(parameters[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody ;
}










// Tout le bloc ci-dessous dans le cas ou on utilise  fetch plutot qu'axios
// Cela sert a extraire les donnees de la reponse

function getDataFromBody(body) {
    let data = "" ;

    if (typeof(body) === "object")
    {
        if (body.constructor === Array)
            data = body ;
    }
    else {
        let Reponse = String(body) ;
        var lines = Reponse.split('\n');
        var LastLine = "" ;
        for (let i = 0 ; i < lines.length ; i++)
        {
            if (lines[i].length > 1 )
            LastLine = lines[i] ;
        }

        if (LastLine.indexOf("ERROR") >= 0)
            data = LastLine ;
        else
            data  = JSON.parse(LastLine);
    }
    return data ;
}




function ManageResponse_fetch( variable,  body, ForceRender ) {
    const data =  getDataFromBody(body) ;

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
    
   
    if (ForceRender !== undefined)
        if (ForceRender !== null)
            ForceRender(variable) ; 

}








// Tout ce bloc sert quand on utilise axios plutot que fetch 
// Cela sert a extraire les donnees de la reponse


function getLastLineFromResponse(response) {
    let data = "" ;


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
        data = LastLine ;
    }
    return data ;
}



function getDataFromResponse(response) {
    let data = "" ;

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

        if (LastLine.indexOf("ERROR") >= 0)
            data = LastLine ;
        else
            data  = JSON.parse(LastLine);
    }
    return data ;
}





function ManageResponse_select_axios(variable, response , ForceRender) {
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

    if (ForceRender !== undefined)
        if (ForceRender !== null)
            ForceRender(variable) ; 
}



function ManageResponse_save_axios(response,ForceRender) {
    if (window.DEBUG_API)
        console.log(response.data) ;

    if (response.data.includes("ERROR:")) {
        console.log(`Error: ${response.data}`);
    } else {
        if (ForceRender !== undefined)            
            if (ForceRender!== null)
                ForceRender() ;
    }
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




async function SaveNewUser(mail, pass) {
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


async function requestLogin(mail, pass)  {
    const url = process.env.REACT_APP_API_LOGIN_URL;
  
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        Email: mail,
        Password: pass
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    //console.log("requestLogin: response");
    //console.log(response.data);

    const data =  getLastLineFromResponse(response) ;

    if (data.includes("ERROR:")) 
        return [false,data] ;
    else 
        return [true,data] ;

}


async function UpdatePasswordUser(tok, mail, pass) {
    console.log("ChangePasswordForUser") ;


    const url = process.env.REACT_APP_API_UPDATE_PASSWORD_USER_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        Email: mail,
        Password: pass,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    

    //console.log(response.data) ;

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User created");
        return [true,response.data] ;
    }
}



function DeleteUser(tok,idUser,ForceRender) {
    console.log("DeleteUser") ;

    const url = process.env.REACT_APP_API_DELETE_USER_URL;
    axios.post(
        url, {
            token: tok,
            Submit: 1,
            debug:1 ,
            id: idUser
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
    ).then(
        (response) => ManageResponse_save_axios(response,ForceRender) 
    
    )
}





/*****************************************************************************************************************************************************
 * 
 * 
 *  Managed Users
 * 
 * 
 ****************************************************************************************************************************************************/


 async function getManagedUsers(variable, tok, ForceRender) {
    if (window.DEBUG_getManagedUser) {
        console.log("getManagedUsers") ;
    }

    const url = process.env.REACT_APP_API_GET_MANAGED_USERS_URL;
    const response = await axios.post(url, {
        Submit: 1,
        //debug:1,
        token: tok
        }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    if (window.DEBUG_getManagedUser) {
        console.log("getManagedUsers: reponse") ;
        console.log(response.data) ;
    }

    const data =  getDataFromResponse(response) ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let res = [];

        data.forEach((element) => {
            res.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(res));
    }
    if (ForceRender !== undefined)
        ForceRender(variable) ;
}


async function AddManagedUser(tok, mail, pass,idEntreprise,idR) {

    if (window.DEBUG_AddManagedUser) {
        console.log("AddManagedUtilisateur") ;
        console.log("idEntreprise: " + idEntreprise) ;
        console.log("idRole: " + idR) ;
    }

    const url = process.env.REACT_APP_API_ADD_MANAGED_USER_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        Email: mail,
        Password: pass,
        idEntreprise: idEntreprise, 
        idRole: idR
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    if (window.DEBUG_AddManagedUser) {
        console.log("AddManagedUtilisateur; reponse") 
        console.log(response.data) ;
    }


    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User created");
        return [true,response.data] ;
    }
}





async function UpdateRoleUser(tok, mail, idEntreprise,idR) {
    if (window.DEBUG_UpdateRoleUser) {
        console.log("UpdateRoleUser: (" + mail + "," + idEntreprise + "," + idR + " ) ") ;
    }

    var rqt =  {
        Submit: 1,
        debug:1,
        token: tok,
        idEntreprise: idEntreprise, 
        idRole: idR
    } ;

    if (mail !== null)
        rqt.Email = mail ; 
    console.log(rqt) ;

    const url = process.env.REACT_APP_API_UPDATE_ROLE_USER_URL;
    const response = await axios.post(url, rqt, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    if (window.DEBUG_UpdateRoleUser) {
        console.log("UpdateRoleUser: reponse") ;
        console.log(response.data) ;
    }

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User access rights modified");
        return [true,response.data] ;
    }
}



async function UpdateFonctionUser(tok, mail, idEntreprise,f) {
    console.log("UpdateFonctionUser") ;

    var rqt =  {
        Submit: 1,
        //debug:1,
        token: tok,
        idEntreprise: idEntreprise, 
        Fonction: f
    } ;

    if (mail !== null)
        rqt.Email = mail ; 

    console.log(rqt) ;
    const url = process.env.REACT_APP_API_UPDATE_FONCTION_USER_URL;
    const response = await axios.post(url, rqt , {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    console.log("UpdateFonctionUser: reponse") ;
    //console.log(response.data) ;

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User Job modified");
        return [true,response.data] ;
    }
}


async function UpdateFondateurUser(tok, mail, idEntreprise,f) {
    console.log("UpdateFonctionUser") ;

    var rqt =  {
        Submit: 1,
        //debug:1,
        token: tok,
        idEntreprise: idEntreprise, 
        Fondateur: f
    } ;

    if (mail !== null)
        rqt.Email = mail ; 

    const url = process.env.REACT_APP_API_UPDATE_FONDATEUR_USER_URL;
    const response = await axios.post(url,rqt, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    //console.log(response.data) ;

    if (response.data.includes("ERROR:")) 
        return [false,response.data] ;
    else {
        console.log("User Founder modified");
        return [true,response.data] ;
    }
}






async function getEntrepriseUtilisateur(variable,tok,ForceRender) {
    console.log("getEntrepriseUtilisateur") ;
    let chaine = "" ;
    const url = process.env.REACT_APP_API_UPDATE_GET_COMPANY_ROLE_FOR_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }) ;

    const data =  getDataFromResponse(response) ;

    console.log("getEntrepriseUtilisateur: reponse") ;
    //console.log(response.data) ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) {
        const res = [];
        data.forEach((element) => {
            res.push(element);
        });
        chaine = JSON.stringify(res);
    }
       
    //console.log("chaine:" + chaine) ;
    var encrypted = CryptoJS.AES.encrypt(chaine, "rtyGH;6435@fzw");
    localStorage.setItem(variable, encrypted);

    if (ForceRender !== undefined)    
    if (ForceRender !== null)
        ForceRender(variable) ;


}







/*****************************************************************************************************************************************************
 * 
 * 
 *  Company 
 * 
 * 
 ****************************************************************************************************************************************************/



 async function searchCompanies(variable,tok, s, ForceRender) {
    const url = process.env.REACT_APP_API_SEARCH_COMPANIES_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        Searching: s
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }) ;

    ManageResponse_select_axios(variable, response,ForceRender) ;
}








function getCompaniesForUser(variable,tok, UserId,ForceRender) {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_COMPANIES_FOR_USER_URL;
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

            ManageResponse_select_axios(variable, response,ForceRender) ;

        })
}



async function SaveCompany (tok,name,webSite,siret,email,phone,ForceRender) {
    console.log("SaveCompany") ;
    const url = process.env.REACT_APP_API_CREATE_COMPANY_URL;
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

    ManageResponse_save_axios(response,ForceRender) ;
}


async function UpdateCompany (tok,idEntreprise, name,webSite,siret,email,phone,ForceRender) {
    console.log("UpdateCompany") ;
    const url = process.env.REACT_APP_API_UPDATE_COMPANY_URL;
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

    ManageResponse_save_axios(response,ForceRender) ;
}


function DeleteCompany(tok,idEntreprise,ForceRender) {
    //console.log("DeleteCompany") ;

    const url = process.env.REACT_APP_API_DELETE_COMPANY_URL;
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
    ).then( (response) => ManageResponse_save_axios(response,ForceRender) )
}


async function LinkCompany (tok,idEntreprise, founder, job,ForceRender) {
    console.log("LinkCompany") ;
    const url = process.env.REACT_APP_API_LINK_COMPANY_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug: 1,
        idEntreprise: idEntreprise ,
        Fondateur: founder,
        Fonction: job,
        idRole: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    ManageResponse_save_axios(response,ForceRender) ;
}

async function DeleteLinkCompany (tok,idEntreprise,ForceRender) {
    console.log("DeleteLinkCompany") ;
    const url = process.env.REACT_APP_API_DELETE_LINK_COMPANY_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug: 1,
        idEntreprise: idEntreprise 
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    ManageResponse_save_axios(response,ForceRender) ;
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
            ManageResponse_select_axios(variable, response,ForceRender) ;
        })
}



function getAllActivities(variable,ForceRender) {
    // retrieve all activities in server
    // search and store activities created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ACTIVITY_URL;
    axios.get(url).then(
        (response) => {
            ManageResponse_select_axios(variable, response,ForceRender) ;
        })
}

async function SaveActivity(tok,idEntreprise,name,webSite,email,phone,description,ForceRender) {
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

    ManageResponse_save_axios(response,ForceRender) ;
}


async function UpdateActivity(tok,idEntreprise,idActivite, name,webSite,email,phone,description,ForceRender) {
    const url = process.env.REACT_APP_API_UPDATE_ACTIVITY_URL ;
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

    ManageResponse_save_axios(response,ForceRender) ;

    
}

function DeleteActivity(tok,idActivite,ForceRender) {

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
        ManageResponse_save_axios(response,ForceRender) ;
    })
  
}











/*****************************************************************************************************************************************************
 * 
 * 
 *  Articles
 * 
 * 
 ****************************************************************************************************************************************************/


//Method to get all formations created by this user
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

    ManageResponse_select_axios(variable, response,ForceRender) ;
}



// Function that sends axios requesst to create a new formation
async function SaveArticle(tok,title,tags,texte,html,photo,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_ARTICLE_URL;
    console.log("SaveArticle") ;

    const url =  process.env.REACT_APP_API_CREATE_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        Article_Title: title,
        Article_Tags: tags,
        Article_Text: texte,
        Article_Html: html,
        Article_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}



// Function that sends axios request to update an formation
async function UpdateArticle(tok,idAncestor, title,tags,texte,html,photo,ForceRender ){

    const url =  process.env.REACT_APP_API_UPDATE_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        idAncestor: idAncestor,
        Article_Title: title,
        Article_Tags: tags,
        Article_Text: texte,
        Article_Html: html,
        Article_Image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}




function DeleteArticle(tok, id, ForceRender) {
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
            ManageResponse_save_axios(response,ForceRender) ;
        }
    )

}






// Function that sends axios request to update an formation
async function PublishArticle(tok,idAncestor,ForceRender ){

    const url =  process.env.REACT_APP_API_PUBLISH_ARTICLE_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        debug:1,
        idAncestor: idAncestor,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}




















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

    ManageResponse_select_axios(variable, response,ForceRender) ;
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

    ManageResponse_select_axios(variable, response,ForceRender) ;

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

    ManageResponse_select_axios(variable, response,ForceRender) ;
}   





 // Function that sends axios requesst to save an answer for am Interview
async function SaveAnswer (tok, idInter, idQ, rep,ForceRender ) {
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

    ManageResponse_save_axios(response,ForceRender) ;
}




// Function that sends axios requesst to save an answer for am Interview
async function ValidateInterview (tok, idInter,ForceRender) {
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

    ManageResponse_save_axios(response,ForceRender) ;
       
}


// Function that sends axios requesst to save an answer for am Interview
async function InvalidateInterview (tok, idInter,ForceRender ) {
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

    ManageResponse_save_axios(response,ForceRender) ;
       
}










/*****************************************************************************************************************************************************
 * 
 * 
 *  FullCalendar Events
 * 
 * 
 ****************************************************************************************************************************************************/



function getEventsForUser(variable,tok,ForceRender) 
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

    ManageResponse_select_axios(variable, response,ForceRender) ;
  })
}



async function SaveEvent(tok,eventType,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,ForceRender)  {
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
    
    ManageResponse_save_axios(response,ForceRender) ;

}
  

  async function UpdateEvent(tok,idEvent, eventType,eventTitle,sAllDay, sStartDate,sEndDate,eventLocation,eventData,ForceRender)  {
      console.log("UpdateEvent") ;
      const url = process.env.REACT_APP_API_UPDATE_EVENT_URL;
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

      ManageResponse_save_axios(response,ForceRender) ;
}
    


async function DeleteEvent(tok,idEvent,ForceRender ) {
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
    ManageResponse_save_axios(response,ForceRender) ;


}





/*****************************************************************************************************************************************************
 * 
 * 
 *  Profile
 * 
 * 
 ****************************************************************************************************************************************************/


async function getProfile(variable,tok,id, ForceRender)
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
        ManageResponse_select_axios(variable,response,ForceRender) ;
        
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

    //console.log(response.data);

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



  async function SaveLanguage (tok,vl,ForceRender) {
    const url = process.env.REACT_APP_API_UPDATE_LANGUAGE_URL ;
    const response = await axios.post(url, {
      Submit: 1,
      token:tok ,
      debug:1,
      ValueLangue:vl
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    ManageResponse_save_axios(response,ForceRender) ;
  }  








function getLanguage(variable, tok,ForceRender) {
    console.log("getLanguage") ;  
    const url = process.env.REACT_APP_API_SHOW_LANGUAGE_URL ;
    axios.post(url, {
      Submit: 1,
      token:tok,
      debug:1
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then((response) => {
        console.log(response) ;
        const variable = "ValueLangue" ; 
        
        const data =  getLastLineFromResponse(response) ;
      
        let pos = data.indexOf("ERROR") ;
        if (pos < 0) 
            localStorage.setItem(variable, data);
        else
            localStorage.removeItem(variable);
        if (ForceRender !== null)
            ForceRender() ;
        
    
      }).catch((err) => console.error(err));
  

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

    ManageResponse_select_axios(variable,response,ForceRender) ;

}



// Function that sends axios requesst to create a new Contact
async function SaveContact(tok,title,category,texte,html,photo,ForceRender) {
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

    ManageResponse_save_axios(response,ForceRender) ;
}



// Function that sends axios request to update an Contact
async function UpdateContact(tok,idAncestor, title,category,texte,html,photo,ForceRender ){

    const url =  process.env.REACT_APP_API_UPDATE_CONTACT_URL;
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

    ManageResponse_save_axios(response,ForceRender) ;
}




function DeleteContact(tok, id, ForceRender) {
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
            ManageResponse_save_axios(response,ForceRender) ;
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

    ManageResponse_select_axios(variable,response,ForceRender) ;
}



// Function that sends axios requesst to create a new BusinessCard
async function SaveBusinessCard(tok,ide, lr,ent, tele,sw,sexe,pre,nom,fo,tel,em,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_BusinessCard_URL;
    console.log("SaveBusinessCard") ;

    const url =  process.env.REACT_APP_API_CREATE_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        idEntreprise: ide,
        LieuRencontre: lr,
        Entreprise: ent,
        TelephoneEntreprise: tele,
        SiteWeb: sw,
        Sexe: sexe,
        Prenom: pre,
        Nom: nom,
        Fonction: fo,
        TelephoneContact: tel,
        Email: em
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}



// Function that sends axios request to update an BusinessCard
async function UpdateBusinessCard(tok,id,ide, lr,ent, tele, sw,sexe,pre,nom,fo,tel,em,ForceRender){

    const url =  process.env.REACT_APP_API_UPDATE_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        id: id,
        idEntreprise: ide,
        LieuRencontre: lr,
        Entreprise: ent,
        TelephoneEntreprise: tele,
        SiteWeb: sw,
        Sexe: sexe,
        Prenom: pre,
        Nom: nom,
        Fonction: fo,
        TelephoneContact: tel,
        Email: em
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}




function DeleteBusinessCard(tok, id, ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_BusinessCard_URL;
    const url = process.env.REACT_APP_API_DELETE_BUSINESSCARD_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        id: id
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            ManageResponse_save_axios(response,ForceRender) ;
        }
    )

}  




/*****************************************************************************************************************************************************
 * 
 * 
 *  Formations
 * 
 * 
 ****************************************************************************************************************************************************/


//Method to get all formations created by this user
async function getUserFormations(variable,tok,ForceRender) {
    console.log("getUserFormations") ;
    const url =  process.env.REACT_APP_API_SHOW_FORMATIONS_BY_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        debug:1,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_select_axios(variable,response,ForceRender) ;
}



//Method to get all formations
async function getAvailableFormations(variable,tok,ForceRender) {
    console.log("getAvailableFormations") ;
    const url =  process.env.REACT_APP_API_SHOW_AVAILABLE_FORMATIONS_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        debug:1
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    ManageResponse_select_axios(variable,response,ForceRender) ;
}


//Method to get all formations created by this user
async function getFormationsGroupes(variable,tok,vl, ForceRender) {
    console.log("getFormationsGroupes") ;
    const url =  process.env.REACT_APP_API_SHOW_GROUPES_FORMATIONS_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        ValueLangue: vl
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    ManageResponse_select_axios(variable,response,ForceRender) ;
}


async function getFormationsCategories(variable,tok,vl, ForceRender) {
    console.log("getFormationsCategories") ;
    const url =  process.env.REACT_APP_API_SHOW_CATEGORIES_FORMATIONS_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        ValueLangue: vl
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_select_axios(variable,response,ForceRender) ;
}


// Function that sends axios requesst to create a new formation
async function SaveFormation(tok,title,duree,idgroupe,tarif, idcategorie,texte,html,photo,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_FORMATION_URL;
    console.log("SaveFormation") ;

    const url =  process.env.REACT_APP_API_CREATE_FORMATION_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        Formation_Duree:duree,
        Formation_idGroupe:idgroupe,
        Formation_Tarif: tarif,
        Formation_Title: title,
        Formation_idCategorie: idcategorie,
        Formation_Text: texte,
        Formation_Html: html,
        Formation_Image: photo,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}



// Function that sends axios request to update  formation
async function UpdateFormation(tok,idAncestor, title,duree,idgroupe,tarif,idcategorie,texte,html,photo,ForceRender ){

    const url =  process.env.REACT_APP_API_UPDATE_FORMATION_URL;
    const response = await axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
        idAncestor: idAncestor,
        Formation_Title: title,
        Formation_Duree:duree,
        Formation_idGroupe:idgroupe,
        Formation_Tarif: tarif,
        Formation_idCategorie: idcategorie,
        Formation_Text: texte,
        Formation_Html: html,
        Formation_Image: photo,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}




function DeleteFormation(tok, id, ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_FORMATION_URL;
    const url = process.env.REACT_APP_API_DELETE_FORMATION_URL;
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
            ManageResponse_save_axios(response,ForceRender) ;
        }
    )

}





// La fonction qui permet de Valider une Formation
async function ValidateFormation (tok, idFormation, ForceRender) {
    console.log("ValidateFormation: " + idFormation) ;
  
    const url=process.env.REACT_APP_API_VALIDATE_FORMATION_URL;
    console.log("New URL " + url);

    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        id: idFormation

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}


// La fonction permettant d'invalider une formation
async function InvalidateFormation (tok, idFormation, ForceRender) {
    console.log("InvalidateFormation: " + idFormation) ;

  
    const url =  process.env.REACT_APP_API_INVALIDATE_FORMATION_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        id: idFormation

    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    ManageResponse_save_axios(response,ForceRender) ;
}




/*****************************************************************************************************************************************************
 * 
 * 
 *  Categories
 * 
 * 
 ****************************************************************************************************************************************************/
//La fonction permettant de Récupérer les Categories de BusinessCards

async function getBusinessCardCategories (variable,tok,ForceRender) {
    console.log("getBusinessCardsCategories") ;
    const url =  process.env.REACT_APP_API_SHOW_CATEGORIES_BUSINESSCARDS_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug: 1
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    ManageResponse_select_axios(variable,response,ForceRender) ;
}

//La fonction permettant de Créer les Categories de BusinessCards
async function SaveBusinessCardCategory (tok,idancestor, categorie,ordre,ForceRender) {
    console.log("SaveBusinessCardCategory") ;
    const url = process.env.REACT_APP_API_CREATE_CATEGORIE_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        idAncestor: idancestor,
        Categorie: categorie,
        Ordre: ordre
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    ManageResponse_save_axios(response,ForceRender) ;
}





// La fonction permettant de Modifier les Categories de BusinessCards
async function UpdateBusinessCardCategory (tok,idCategorie,categorie,ordre,ForceRender) {
    console.log("UpdateBusinessCardCategory") ;
    const url = process.env.REACT_APP_API_UPDATE_CATEGORIE_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        id:idCategorie,
        Categorie: categorie,
        Ordre: ordre
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    ManageResponse_save_axios(response,ForceRender) ;
}

//La fonction permettant de Supprimer les Categories de BusinessCards

async function DeleteAllBusinessCardCategories (tok,ForceRender) {
    const url = process.env.REACT_APP_API_DELETE_CATEGORIE_BUSINESSCARD_URL;
    axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            ManageResponse_save_axios(response,ForceRender) ;
        }
    )
}




async function SaveClassementBusinessCard (tok,idBusinessCard, idCategorie,ForceRender) {
    console.log("SaveClassementBusinessCard") ;
    const url = process.env.REACT_APP_API_CREATE_CLASSEMENT_BUSINESSCARD_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
        debug:1,
        idBusinessCard: idBusinessCard,
        idCategorie: idCategorie
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    ManageResponse_save_axios(response,ForceRender) ;
}


async function UpdateClassementBusinessCardsForNonExistingCategory (tok,ForceRender) {
    const url = process.env.REACT_APP_API_UPDATE_CLASSEMENT_BUSINESSCARD_FOR_NON_EXISTING_CATEGORIES_URL;
    axios.post(url, {
        Submit: 1,
        debug:1,
        token: tok,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            ManageResponse_save_axios(response,ForceRender) ;
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
   






// version fetch
async function getTranslations_Text(variable,VL,ForceRender) {

    const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;  

    let b = getParameters({
        Submit: 1,
        //debug:1,
        ValueLangue: VL
    }) ;

    //console.log("getTranslations_Text Body") ;
    //console.log(b) ;

    fetch(url, {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' ,
        },
            body: b
        }).then(response => response.text()) 
        .then(body => {
            //console.log(" getTranslations_Text reponse") ;
            //console.log(body) ;
            ManageResponse_fetch(variable, body , ForceRender) ;
        }) ;
}




/* version axios
async function  getTranslations_Text (variable,VL,ForceRender) {
    const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;  
    const response = await axios.post(url, {
        Submit: 1,
        debug: 1,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_select_axios(variable, response , ForceRender) ;
}
*/







async function  getTranslations_SelectBox(variable,VL,ForceRender) {
    const url = process.env.REACT_APP_API_SHOW_SELECTBOX_TRANSLATION_URL ;  
    const response = await axios.post(url, {
        Submit: 1,
        debug: 1,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_select_axios(variable, response , ForceRender) ;
}





export {
    getDataFromResponse,
    

    getAllUsersEmail,
    SaveNewUser,
    requestLogin,
    DeleteUser,

    getManagedUsers,
    AddManagedUser,
    getEntrepriseUtilisateur,

    UpdatePasswordUser,
    UpdateFonctionUser,
    UpdateFondateurUser,
    UpdateRoleUser,
    
    
    searchCompanies,
    getCompaniesForUser,
    SaveCompany,
    UpdateCompany,
    DeleteCompany,
    LinkCompany,
    DeleteLinkCompany,

    getActivitiesForUser,
    getAllActivities,
    SaveActivity,
    UpdateActivity,
    DeleteActivity,

    getUserArticles,
    SaveArticle,
    UpdateArticle,
    DeleteArticle,
    PublishArticle,

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

    SaveLanguage,
    getLanguage,

    getUserContacts,
    SaveContact,
    UpdateContact,
    DeleteContact,

    getUserBusinessCards,
    SaveBusinessCard,
    UpdateBusinessCard,
    DeleteBusinessCard,

    getUserFormations,
    getAvailableFormations,
    SaveFormation,
    UpdateFormation,
    DeleteFormation,
    ValidateFormation,
    InvalidateFormation,
    getFormationsCategories,
    getFormationsGroupes,

    getBusinessCardCategories,
    SaveBusinessCardCategory,
    UpdateBusinessCardCategory,
    DeleteAllBusinessCardCategories,
    UpdateClassementBusinessCardsForNonExistingCategory, 
    SaveClassementBusinessCard,

    getTranslations_Text,
    getTranslations_SelectBox
};