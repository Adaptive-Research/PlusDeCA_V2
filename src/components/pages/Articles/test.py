import requests

url = 'http://78.249.128.56:8011/API/Validate-Article'



myobj = [ ('Submit' , '1'), ('debug' , '1'),  ('token', '12;e0a5e44f67251fc8fb2192d7574e84b1d31c8e52fa34f0125bdbf9eaa9ca') , ('id','1' ) ]

x = requests.post(url, data = myobj)
print(x.text)

#REACT_APP_API_VALIDATE_INTERVIEW_URL=http://78.249.128.56:8011/API/Validate-Interview
#REACT_APP_API_INVALIDATE_INTERVIEW_URL=http://78.249.128.56:8011/API/Invalidate-Interview





       if  (TypeArticle === "Brouillon") {
                    if (Ligne.isPublished === "0") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardArticle 
                                        Article={Ligne}
                                        TypeArticle={TypeArticle}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
                                    /> 
                                </Col> ;
                }
                else {
                    if (Ligne.isPublished === "1") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardArticle 
                                        key={Ligne.id}
                                        Article={Ligne}
                                        SendArticleData={SendArticleData}  
                                        ForceRenderArticle = {ForceRenderArticle}
                                    /> 
                                </Col> ;
                }