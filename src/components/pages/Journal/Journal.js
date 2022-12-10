import React , { useState } from "react";
import  Journal_NavBar  from './Journal_NavBar';
import Logo from '../../../assets/images/brand/logo-2.png';
import Journal_Img1 from '../../../assets/images/journal/Journal_Img1.jpg';
import Journal_Img2 from '../../../assets/images/journal/Journal_Img2.jpg';
import Journal_Img3 from '../../../assets/images/journal/Journal_Img3.jpg';
import '../../../assets/css/Journal.css';
import RecentsArticles from './RecentsArticles';
import {getAllTranslations, getAllUsersEmail,getLanguage,requestLogin} from "../../../data/customlibs/api";


export default function Journal(props) {
    const storedToken = localStorage.getItem('token') ;
    const [reloadTraductions, setReloadTraductions] = useState(true) ;



    function LoadTranslations() {
        console.log("LoadTranslations")
        const VL = localStorage.getItem('ValueLangue') ;
        console.log("ValueLangue: " +VL) ;
        getAllTranslations(process.env.REACT_APP_API_SHOW_TRANSLATION_URL,VL) ;
    } 

    if (reloadTraductions === true) {
        console.log("After reloadTraductions === true") ;
        getLanguage(storedToken,LoadTranslations) ;
        setReloadTraductions(false) ;
    }



    return (
        <div>
            <Journal_NavBar/>

            


            <div className='Journal Charbel-div-center-col Fill-Container'>
                <div className='Journal_Header Charbel-div-center-line Fill-Container'>
                    <div className='Logo'>
                        <img src={Logo} alt=''/>
                    </div>
                    <div className='Journal_Main_Title Charbel-div-center-line'>
                        Les Actualités de Plus De CA
                    </div>
                </div>
                <div className='Journal_Articles_Container Charbel-div-center-col Fill-Container'>
                    <div className='Journal_Article Charbel-div-center-line Fill-Container'>
                        <div className='Journal_Articles_Text Charbel-div-center-col'>
                            <div className='Journal_Articles_Text_Title Journal-Start-Text'>
                                    Le titre de l'article
                            </div>
                            <div className='Journal_Articles_Text_Paragraph Journal-Start-Text'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className='Journal_Articles_Text_Btn Journal-Start-Text'>
                                <button className='Charbel-div-center-line'>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className='Journal_Articles_Img Charbel-div-center-line'>
                            <img src={Journal_Img1} alt=''/>
                        </div>
                    </div>
                    <div className='Journal_Article Charbel-div-center-line Fill-Container'>
                        <div className='Journal_Articles_Text Charbel-div-center-col'>
                            <div className='Journal_Articles_Text_Title Journal-Start-Text'>
                                    Le titre de l'article
                            </div>
                            <div className='Journal_Articles_Text_Paragraph Journal-Start-Text'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className='Journal_Articles_Text_Btn Journal-Start-Text'>
                                <button className='Charbel-div-center-line'>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className='Journal_Articles_Img Charbel-div-center-line'>
                            <img src={Journal_Img2} alt=''/>
                        </div>
                    </div>
                    <div className='Journal_Article Charbel-div-center-line Fill-Container'>
                        <div className='Journal_Articles_Text Charbel-div-center-col'>
                            <div className='Journal_Articles_Text_Title Journal-Start-Text'>
                                    Le titre de l'article
                            </div>
                            <div className='Journal_Articles_Text_Paragraph Journal-Start-Text'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className='Journal_Articles_Text_Btn Journal-Start-Text'>
                                <button className='Charbel-div-center-line'>
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className='Journal_Articles_Img Charbel-div-center-line'>
                            <img src={Journal_Img3} alt=''/>
                        </div>
                    </div>
                </div>
                <RecentsArticles /> 
            </div>
    
        </div>
    )
}

