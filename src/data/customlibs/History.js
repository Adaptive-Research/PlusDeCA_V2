

/*

{ 
    Type: InterestedBy,
    NumVersion:,
    Date: ,
    idActivity: 
}

{ 
    Type: Meeting,
    NumVersion:,
    Date: ,
    Where: ,
    Who:,
    Comment: 
        
}

{ 
    Type: Call,
    NumVersion:,
    Date: ,
    Who:,
    Comment:  
          
}



*/


export function History_AddCall(history,sDate, sWho, sComment) {
    let arr = [] ;

    if (history !== null)
        arr = JSON.parse(history); 
    
    const r = {
            Type: 'Call',
            NumVersion: '1.0',
            Date: sDate,
            Who: sWho,
            Comment: sComment
          };
    arr.push(r) ;
    return JSON.stringify(arr) ;
}


export function History_AddMeeting(history,sDate,sWhere, sWho, sComment ) {
    let arr = [] ;

    if (history !== null)
        arr = JSON.parse(history); 
    
    const r = {
            Type: 'Meeting',
            NumVersion: '1.0',
            Date: sDate,
            Where: sWhere, 
            Who: sWho,
            Comment: sComment
          };
    arr.push(r) ;
    return JSON.stringify(arr) ;
}


export function History_AddInterestedBy(history,sDate,sIdActivity ) {
    let arr = [] ;

    if (history !== null)
        arr = JSON.parse(history); 
    
    const r = {
            Type: 'InterestedBy',
            NumVersion: '1.0',
            Date: sDate,
            idActivity: sIdActivity 
          };
    arr.push(r) ;
    return JSON.stringify(arr) ;
}


export function History_Find(history, TypeToSearchIn, Value) {
    let arr = [] ;

    if (history !== null)
    {
        let source = [] ;
        source = JSON.parse(history); 
        for (let i = 0 ; i < source.length; i++) {
            let obj = source[i]
            if ( obj[TypeToSearchIn] === Value)
                arr.push(obj) ;
        }
    }
    return arr ;
}