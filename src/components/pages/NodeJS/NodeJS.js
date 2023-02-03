import React, { useState,useRef} from "react";
import {testExpress} from  "../../../data/customlibs/api_express_daniel";
import {PrintLog} from  "../../../data/customlibs/utils";






export default function NodeJS(props) {

    PrintLog("NodeJS") ;

    const storedToken = localStorage.getItem('token') ;
    const [reponse,setReponse]= useState("") ;

    function RenderAfterLoad() {
        const rep = localStorage.getItem('express') ;
        setReponse(rep) ;
        
    }

    function test() {
        console.log("test") ;
        testExpress("express",storedToken,RenderAfterLoad) ;
       
    }   


    return (
        <>
            <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {test()}}>
                        Test Node 
                    </button>

                </div>
            <div className="page-header">
                {reponse}
            </div>
        </>
    );

}

