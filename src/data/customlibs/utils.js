


function checkEmail(mail) {
    // Check if email is valid or not
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(mail)) {
        return false;
    }
    return true;
}

function checkWordLength(word) {
    if (word.length < 8) {
        return false;
    }
    return true;
}



function checkDuplicate(mail) {
    const newEmails = JSON.parse(localStorage.fin);

    if (newEmails.includes(mail)) {
        return true;
    } else {
        return false;
    }
    //localStorage.removeItem("fin");
}


function toLog() {
    window.location.href = "https://plusdeca.fr";
}








function FindReponseFromIDQuestionAndAnswerForSelect(Questions,idQuestion,Answer) {
    for (let i=0 ; i < Questions.length ; i++)
    {
        if (Questions[i].idQuestion === idQuestion && Questions[i].idSelectOption === Answer) {
            return [i,Questions[i].SelectOption] ;
        }
    }
    return [-1,"-1"] ;
}


function FindReponse(Answers,idQuestion) {
    //console.log("FindReponse:" + idQuestion) ;
    for (let i = 0 ; i < Answers.length; i++) {
        if (Answers[i].idQuestion === idQuestion)
            return Answers[i].Reponse ;
    }
    return "" ;
}


function FindQuestionFromID(Questions,idQuestion) {
    for (let i=0 ; i < Questions.length ; i++)
    {
        if (Questions[i].idQuestion === idQuestion)
            return i ;
    }
    return -1 ;
}


function FindQuestionAndAnswer(Questions,Answers,Texte,step){
    let q = "" ;
    let a = "" ;
    let aS = "-1" ;
    let idQ = -1 ;
    let idS = 0 ;

    if (Answers.length > 0)
    {
        if (step >= 0 && step < Questions.length)
        {
            q = Questions[step].Question ;
            //console.log("q") ;
            //console.log(q) ;

    

            idQ = Questions[step].idQuestion ;
            idS = Questions[step].idSelectOption ;

            //console.log("idS") ;
            //console.log(idS) ;

            if (idS === "0")
            {
                a = FindReponse(Answers,idQ) ;
            }
            else
            {
                aS = FindReponse(Answers,idQ) ;
                let values = FindReponseFromIDQuestionAndAnswerForSelect(Questions,idQ,aS) ;
                step = values[0] ;
                a = values[1] ; 
            }
            //console.log("a") ;
            //console.log(a) ;
        }
    }

    return [step,q,a] ;
}



function createArticle(Questions,Answers,RenderQuestionReponse)
{
    let Texte = "" ; 
    let step = 0 ;
    let q = "" ;
    let a = "" ;
    let idQS = -1 ;
    

    if (Answers.length > 0)
    {
        while (step >= 0 && step < Questions.length)
        {
            let values = FindQuestionAndAnswer(Questions,Answers,Texte,step) ;
            step = values[0] ;
            q = values[1] ;
            a = values[2] ;

            a = a.replace(/\n/g, "<br />") ;

            Texte = Texte+RenderQuestionReponse(q,a) ;

            if (step >= 0 && step < Questions.length) {
                idQS = Questions[step].idQuestionSuivante ;
                step = FindQuestionFromID(Questions,idQS) ;
            }

            //console.log("Texte") ;
            //console.log(Texte) ;
        }

    }


    return Texte ;
}





function UpInArray(Liste,get,value) {
    let i,arr,index ;
    
    arr =[] ;

    index = -1 ;
    for (i = 0 ; i < Liste.length; i++)
        if (get(Liste[i]) === value) 
            index = i ;

    if (index > 0) {
        for (i = 0 ; i < index-1 ; i++)
            arr.push(Liste[i]) ;
        arr.push(Liste[index]) ;
        for (i = index-1 ; i < Liste.length ; i++)
            if (i !== index)
                arr.push(Liste[i]) ;
        return [arr,true] ;
    } 
    else 
        arr = Liste ;

    return [arr,false] ;
}

function DownInArray(Liste,get,value) {
    let i,arr,index ;
    
    arr =[] ;
    
    index = -1 ;
    for (i = 0 ; i < Liste.length; i++)
        if (get(Liste[i]) === value) 
            index = i ;

    if (index < Liste.length-1) {
        for (i = 0 ; i < index+2 ; i++)
            if (i !== index)
                arr.push(Liste[i]) ;
        arr.push(Liste[index]) ;
        for (i = index+2 ; i < Liste.length ; i++)
                arr.push(Liste[i]) ;

        return [arr,true] ;
    } 
    else 
        arr = Liste ;

    return [arr,false] ;
}


function DeleteFromArray(Liste,get,value) {
    let index,i ;
    
    
    index = -1 ;
    for (i = 0 ; i < Liste.length; i++)
        if (get(Liste[i]) === value) 
            index = i ;

    if (index > -1) {
        Liste.splice(index, 1);
      }

    return Liste ;
}


function FindTranslation_SelectBox(data,idSelect) {
    var arr = []
    for(var x in data)
    {
      if (data[x].SelectId === idSelect)
        arr.push(data[x])
    }
    return arr ;
}


function FindValueForSelectBox(data,OptionValue) {
    for(var x in data)
    {
      if (data[x].OptionValue === OptionValue)
        return data[x].OptionText
    }
    return "" ;
}



function FindTranslation(data,Page, Message ){
    for(var x in data)
    {
      if (data[x].Page === Page)
        if (data[x].Message === Message) {
          return data[x].Traduction ;
        }
    }
    return "Not Found";
  }

  
function remove_NLastChars(str,n) {
  let s = str.slice(0, -n);
  console.log(s) ;
  return s ;
 }

function remove_linebreaks( str ) {
    let s3 = str.replace( /(\r\n|\n|\r)/gm , '' );
    console.log(s3) ;
    return s3 ;
}

function getIDFromToken(t){
    if (t !== null) {
        let pos = t.indexOf(';') ;
        if (pos === -1)
            return null ;
        return t.substring(0,pos) ;

    } 
    return null ;
}


function printRole(idR) {
    const Role = ["Standard","Admin","FullAdmin"]

    let idRole = parseInt(idR) ;
    if (idRole >= 1 && idRole <= 3) 
        return Role[idRole-1] ;
    else 
        return "" ;
}

function printFondateur(idR) {
    const Role = ["","Fondateur","Co fondateur"]

    let idRole = parseInt(idR) ;
    if (idRole >= 1 && idRole <= 3) 
        return Role[idRole-1] ;
    else 
        return "" ;
}



function IsAdmin(data, idEntreprise) {
//    console.log("IsAdmin: " + idEntreprise) ;
//    console.log(data) ;
    for(var x in data) {
      if (data[x].idEntreprise === idEntreprise) {
        var v = parseInt(data[x].idRole) ;  
//        console.log(data[x].idEntreprise, " --> " , v) ;
        if (v >= 2 ){
//            console.log("true") ;
            return true ;
        }
      }
    }
    return false
}


function IsFullAdmin(data, idEntreprise) {
//    console.log("IsAdmin: " + idEntreprise) ;
//    console.log(data) ;
    for(var x in data) {
      if (data[x].idEntreprise === idEntreprise) {
        var v = parseInt(data[x].idRole) ;  
//        console.log(data[x].idEntreprise, " --> " , v) ;
        if (v >= 3 ){
//            console.log("true") ;
            return true ;
        }
      }
    }
    return false
}


function IsAdminOnce(data) {
    //console.log("IsAdminOnce") ;
    //console.log(data) ;
    for(var x in data) {
      var v = parseInt(data[x].idRole) ;  
      if (v >= 2)
        return true ;
    }
    return false
}



function IsFullAdminOnce(data) {
    //console.log("IsAdminOnce") ;
    //console.log(data) ;
    for(var x in data) {
      var v = parseInt(data[x].idRole) ;  
      if (v >= 3)
        return true ;
    }
    return false
}


function FindEntrepriseUtilisateur(data,idEntreprise,Field) {
    console.log("FindEntrepriseUtilisateur") ;
    console.log(data) ;
    console.log(idEntreprise) ;
    console.log(Field) ;
    for (let i = 0 ; i < data.length ; i++) {
        let d = data[i] ;
        console.log(d) ;
        if (d.idEntreprise === idEntreprise) {
            if (Field === "idRole")
                return printRole(d.idRole) ;
            if (Field === "Fonction")
                return d.Fonction ;
            if (Field === "Fondateur")
                return printFondateur(d.Fondateur) ;
        }
    }
}



export {
    checkEmail,
    checkWordLength,
    checkDuplicate,
    toLog,
    createArticle,
    UpInArray, DownInArray, DeleteFromArray,

    FindTranslation,FindTranslation_SelectBox,FindValueForSelectBox,

    remove_NLastChars,remove_linebreaks,

    getIDFromToken,
    
    printRole,
    printFondateur,


    IsAdmin,
    IsFullAdmin,
    IsAdminOnce,
    IsFullAdminOnce,

    FindEntrepriseUtilisateur




   
};

