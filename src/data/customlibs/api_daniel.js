


async function getUtilisateurPayant(variable,tok,ForceRender) {
    console.log("getUtilisateurPayant") ;
    let chaine = "" ;
    const url = process.env.REACT_APP_API_PAYING_USER_URL;
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




export {
    getUtilisateurPayant
}
