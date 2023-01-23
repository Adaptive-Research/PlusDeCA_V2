
import axios from "axios";
import {ManageResponse_select_axios,ManageResponse_save_axios} from "./api.js"
import  "../../GlobalVariables" ;
import {PrintLog} from "./utils";






/**************************************************************************************************
 * 
 *  Groupes
 * 
 **************************************************************************************************/

//Method to get all groups created by this user
async function getAllGroups(variable,tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_ALL_GROUPS_URL;
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

//Method to get all groups created by this user
async function getUserGroups(variable,tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_GROUPS_BY_USER_URL;
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

// Function that sends axios requesst to create a new group
async function SaveGroup(tok,nom,tags,sdescription,htmltext,group_city,photo,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_GROUP_URL;
    PrintLog("SaveGroup") ;

    const url =  process.env.REACT_APP_API_CREATE_GROUP_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        nom: nom,
        tags: tags,
        sdescription: sdescription,
        htmltext: htmltext,
        group_city: group_city,
        group_image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}

// Function that sends axios request to update a group
async function UpdateGroup(tok,idGroup,nom,tags,sdescription,htmltext,group_city,photo,ForceRender ){

    const url =  process.env.REACT_APP_API_UPDATE_GROUP_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        idGroup: idGroup,
        nom: nom,
        tags: tags,
        sdescription: sdescription,
        htmltext: htmltext,
        group_city: group_city,
        group_image: photo
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}

function DeleteGroup(tok, idGroup, ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_GROUP_URL;
    const url = process.env.REACT_APP_API_DELETE_GROUP_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        id: idGroup,
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

// Function that sends axios request to update a group
async function PublishGroup(tok, idGroup, ForceRender ){

    const url =  process.env.REACT_APP_API_PUBLISH_GROUP_URL;
    const response = await axios.post(url, {
        Submit: 1,
        token: tok,
        debug:1,
        id: idGroup,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_save_axios(response,ForceRender) ;
}

function subscribeGroup(tok, idGroup, ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_GROUP_URL;
    const url = process.env.REACT_APP_API_SUBSCRIBE_GROUP_URL;
    axios.post(url, {
        Submit: 1,
        token: tok,
        debug: 1,
        idgroupe: idGroup,
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

//Method to get a specific group 
async function getASpecificGroup(variable,idGroup, tok,ForceRender) {
    //const url = 'https://frozen-cove-79898.herokuapp.com/http://78.249.128.56:8001/API/Show-Articles';
    const url =  process.env.REACT_APP_API_SHOW_A_SPECIFIC_GROUP_URL;
    const response = await axios.post(url, {
        token: tok,
        debug:1,
        Submit: 1,
        idGroup: idGroup,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });

    ManageResponse_select_axios(variable, response,ForceRender) ;
}





export {

    getAllGroups,
    getUserGroups,
    SaveGroup,
    UpdateGroup,
    DeleteGroup,
    PublishGroup,
<<<<<<< HEAD
    subscribeGroup,
    getASpecificGroup

=======
>>>>>>> feature_dan
   
};