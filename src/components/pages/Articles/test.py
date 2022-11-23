import requests

url = 'http://78.249.128.56:8011/API/Show-BusinessCards'



myobj = [ ('Submit' , '1'), ('debug' , '1'),  ('token', '12;e0a5e44f67251fc8fb2192d7574e84b1d31c8e52fa34f0125bdbf9eaa9ca')]

x = requests.post(url, data = myobj)
print(x.text)

#REACT_APP_API_VALIDATE_INTERVIEW_URL=http://78.249.128.56:8011/API/Validate-Interview
#REACT_APP_API_INVALIDATE_INTERVIEW_URL=http://78.249.128.56:8011/API/Invalidate-Interview


{/*


        <Row className="mb-4">
                        <label className="col-md-3 form-label">Titre :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={titleMsg === "" ? "Titre ..." : titleMsg}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">Categorie :</label>
                        <div className="">
                            <select id="Categories"  className="form-control"  onChange={(e) =>  category.current = e.target.value}>
                            <option value="1">Techno</option>
                            <option value="2">Juridique</option>
                            <option value="3">Compta</option>
                            <option value="4">News</option>
                            <option value="5">Autre</option>
                            </select>
                        </div>


                    </Row>



                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            Content:
                        </label>
                        <div className="mb-4">

                            <formeditor.EditorConvertToHTML Content={content} 
                                onEditorChange={(v) => {
                                    setHtml(v) ;
                                    console.log("onEditorChange") ;
                                    console.log("Html") ;
                                    console.log(html) ;
                                }}
                                
                                onChange={(v) => {
                                    setResult(v) ;
                                    console.log("onChange") ;
                                    console.log("result") ;
                                    console.log(result) ;
                                }}
                                

                            />
                        </div>

                    </Row>

                    <FormGroup className="mb-0 file">
                        <label className="col-md-3 form-label mb-4">
                            Photo :
                        </label>
                        <formadvanced.OuterDropzone
                            id="demo"
                            type="file"
                            name="files"
                            accept=".jpg, .png, image/jpeg, image/png"
                            multiple
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </FormGroup>    

*/}


















 console.log("title: " + title) ;
        console.log("category: " + category.current) ;
        console.log("result") ;
        console.log(result) ;
        console.log("html") ;
        console.log(html) ;
        console.log("texte") ;
        console.log(texte.current) ;
        

        if (result !== "")
        {
            if (result.blocks !== undefined)
                texte.current = String(result.blocks[0].text) ;
        }

        console.log("texte2") ;
        console.log(texte.current) ;


        let titleCheck, categoryCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (category.current.length > 0) {
            categoryCheck = true;
            setCategoryMsg("");
        } else {
            categoryCheck = false;
            setCategoryMsg("La categorie est obligatoire");
        }

        if (texte.current.length > 0) {
            descriptionCheck = true;
            //setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            //setDescriptionMsg("La description est obligatoire");
        }

        if (titleCheck && categoryCheck && descriptionCheck) {
            if (modeEdit.current === "Add")
                SaveBusinessCard(storedToken,title,category,texte.current,html,photo, props.ForceRenderBusinessCard);
            else
                UpdateBusinessCard(storedToken,idAncestor, title,category,texte.current,html,photo, props.ForceRenderBusinessCard);
        }