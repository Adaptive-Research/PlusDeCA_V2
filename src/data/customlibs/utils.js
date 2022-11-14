


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



export {
    checkEmail,
    checkWordLength,
    checkDuplicate,
    toLog,
    getUserId,
    
};

