


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


function getUserId(token) {
    // return the user id from the login token
    // user id is  a number sequence before ";"
    const userToken = localStorage.getItem("token");
    const newArr = userToken.split(";");
    const usrId = newArr[0];
    return usrId;
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




function Up(Liste,value) {
    let i,arr,index ;
    
    arr =[] ;
    index = Liste.indexOf(value);
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

function Down(Liste,value) {
    let i,arr,index ;
    
    arr =[] ;
    index = Liste.indexOf(value);
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


export {
    checkEmail,
    checkWordLength,
    checkDuplicate,
    toLog,
    getUserId,
    createArticle,
    Up, Down,
   
};

