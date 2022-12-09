export function FindTranslation(data,Page, Message ){
    for(var x in data)
    {
      if (data[x].Page === Page)
        if (data[x].Message === Message) {
          return data[x].Traduction ;
        }
    }
    return "Not Found";
  }

  
 export function remove_NLastChars(str,n) {
  let s = str.slice(0, -n);
  console.log(s) ;
  return s ;
 }

export function remove_linebreaks( str ) {
    let s3 = str.replace( /(\r\n|\n|\r)/gm , '' );
    console.log(s3) ;
    return s3 ;
}

export function getIDFromToken(t){
  let pos = t.indexOf(';') ;
  if (pos === -1)
    return null ;
  return t.substring(0,pos) ;
}