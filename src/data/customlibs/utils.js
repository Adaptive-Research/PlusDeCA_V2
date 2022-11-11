import axios from "axios";


const checkEmail = (mail) => {
    // Check if email is valid or not
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validRegex.test(mail)) {
        return false;
    }
    return true;
}

const checkWordLength = (word) => {
    if (word.length < 8) {
        return false;
    }
    return true;
}


const getAllUsersEmail = async () => {
    const url = process.env.REACT_APP_API_GET_USERS_URL;


    const usersEmail = [];

    const response = await axios.get(url).then(
        (response) => {
            const data = response.data;
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                data.forEach((element) => {
                    if (!usersEmail.includes(element.Email)) {
                        usersEmail.push(element.Email);
                    }
                });
            }
        }
    )
    localStorage.fin = JSON.stringify(usersEmail);
    return usersEmail;
};


const checkDuplicate = (mail) => {

    const newEmails = JSON.parse(localStorage.fin);

    if (newEmails.includes(mail)) {
        return true;
    } else {
        return false;
    }
    localStorage.removeItem("fin");
}


const toLog = () => {
    window.location.href = "https://plusdeca.fr";
}


const getUserId = (token) => {
    // return the user id from the login token
    // user id is  a number sequence before ";"
    const userToken = localStorage.getItem("token");
    const newArr = userToken.split(";");
    const usrId = newArr[0];
    return usrId;
}



const getActivitiesForUser = (variable, Token,UserId, ForceRender) => {
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
            const data = response.data;
            //console.log(data) ;
            
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                let Activities = [];

                data.forEach((element) => {
                    Activities.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(Activities));
            }
            else{
                localStorage.removeItem(variable);
            }
            
            ForceRender(variable) ;

        })
}




const getAllEnterprises = (variable,ForceRender) => {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_URL;
    axios.get(url).then(
        (response) => {
            const data = response.data;
          
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                const allEnterprises = [];
                data.forEach((element) => {
                        allEnterprises.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(allEnterprises));
            }
            else 
                localStorage.removeItem(variable);
           
            ForceRender(variable) ;
        })
}


const getEnterprisesByUser = (variable,Token, UserId,ForceRender) => {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_FOR_USER_URL;
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
            const data = response.data;
           

            //console.log(data) ;
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                let Entreprises = [];
                data.forEach((element) => {
                    Entreprises.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(Entreprises));
            }
            else 
                localStorage.removeItem(variable);
            
            ForceRender(variable) ;
        })
}



const getAllActivities = (variable,ForceRender) => {
    // retrieve all activities in server
    // search and store activities created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ACTIVITY_URL;
    const response = axios.get(url).then(
        (response) => {
            const data = response.data;
          
            let pos = data.indexOf("ERROR") ;
            if (pos < 0) { 
                const allActivities = [];
                data.forEach((element) => {
                    allActivities.push(element);
                });
                localStorage.setItem(variable, JSON.stringify(allActivities));
            }
            else 
                localStorage.removeItem(variable);
           
            ForceRender(variable) ;
        })
}



//Method to get all articles created by this user
const getUserArticles = async (tok,ForceRender) => {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_ARTICLES_BY_USER_URL;
    const response = await axios.post(url, {
        token: tok,
        Submit: 1,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    
    let variable = "userArticles" ;
    let data = response.data ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let Articles = [];

        data.forEach((element) => {
            Articles.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(Articles));
    }
    else{
        localStorage.removeItem(variable);
    }
    ForceRender(variable) ;
}


//Method to get all Interviews created by this user
const getUserInterviews = async (tok,ForceRender) => {
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

    let variable = "userInterviews" ;
    let data = response.data ;
    let pos = data.indexOf("ERROR") ;
    if (pos < 0) { 
        let Interviews = [];

        data.forEach((element) => {
            Interviews.push(element);
        });
        localStorage.setItem(variable, JSON.stringify(Interviews));
    }
    else{
        localStorage.removeItem(variable);
    }
    ForceRender(variable) ;
}




export {
    checkEmail,
    checkWordLength,
    getAllUsersEmail,
    checkDuplicate,
    toLog,
    getUserId,
    getActivitiesForUser,
    getAllEnterprises,
    getEnterprisesByUser,
    getAllActivities,
    getUserArticles,
    getUserInterviews,
};
