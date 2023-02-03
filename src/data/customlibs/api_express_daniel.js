
import axios from "axios";
import {getDataFromResponse} from "./api.js"
import {PrintLog} from "./utils";




async function testExpress(variable,tok,ForceRender) {
    PrintLog("testExpress") ;
    let chaine = "" ;
    const url = process.env.REACT_APP_API_TEST_EXPRESS_URL;
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

   
    localStorage.setItem(variable, data);

    if (ForceRender !== undefined)    
    if (ForceRender !== null)
        ForceRender(variable) ;


}




export {
    testExpress
}
