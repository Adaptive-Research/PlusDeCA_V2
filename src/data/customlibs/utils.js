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
            data.forEach((element) => {
                if (!usersEmail.includes(element.Email)) {
                    usersEmail.push(element.Email);
                }
            });
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
}

const toLog = () => {
    window.location.href = "https://plusdeca.fr";
}


const getUserId = (token) => {
    // return the user id from the login token
    // user id is  a number sequence before ";"
    const userToken = JSON.parse(localStorage.token);
    const newArr = userToken.split(";");
    const usrId = newArr[0];
    return usrId;
}


const getAllEnterprises = () => {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_URL;
    const personalId = getUserId();
    const response = axios.get(url).then(
        (response) => {
            const data = response.data;
            const userEnterprises = [];
            data.forEach((element) => {
                if (element.id === personalId) {
                    userEnterprises.push(element);
                }
            });
            console.log(userEnterprises);
            localStorage.setItem('userEnterprises', JSON.stringify(userEnterprises));
            return userEnterprises;
        })
}


const getEnterprisesByUser = () => {
    // retrieve all enterprises in server
    // search and store enterprises created by active user
    // return them in array
    const url = process.env.REACT_APP_API_SHOW_ENTERPRISES_FOR_USER_URL;
    const userId = getUserId();
    const response = axios.post(url, {
        token: JSON.parse(localStorage.token),
        Submit: 1,
        idUtilisateur: userId
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(
        (response) => {
            const data = response.data;
            const userEnterprises = [];
            data.forEach((element) => {
                userEnterprises.push(element);
            });
            localStorage.setItem('userEnterprises', JSON.stringify(userEnterprises));
            return userEnterprises;
        })
}


export {
    checkEmail,
    checkWordLength,
    getAllUsersEmail,
    checkDuplicate,
    toLog,
    getUserId,
    getAllEnterprises,
    getEnterprisesByUser
};