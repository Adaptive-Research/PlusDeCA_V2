import React , { useState, useRef } from "react";
import  Journal_NavBar  from './Journal_NavBar';
import Logo from '../../../assets/images/brand/logo-2.png';
import Journal_Img1 from '../../../assets/images/journal/Journal_Img1.jpg';
import Journal_Img2 from '../../../assets/images/journal/Journal_Img2.jpg';
import Journal_Img3 from '../../../assets/images/journal/Journal_Img3.jpg';
import '../../../assets/css/Journal.css';
import RecentsArticles from './RecentsArticles';

import {getTranslations_Text, getTranslations_SelectBox, getLanguage,getActivitiesForUser,getCompaniesForUser,getEntrepriseUtilisateur} from "../../../data/customlibs/api";
import  { getIDFromToken, FindTranslation } from  "../../../data/customlibs/utils" ;
import {searchCompanies, getDataFromResponse} from "../../../data/customlibs/api";



export default function Journal(props) {
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

    const reloadTraductions = useRef(true) ;

    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;
   

    //PrintLog(Translations_Text);

    const sFeatured = 'Featured';
    const sNetworkNews = 'Network News';
    const sUpcomingMeetings = 'Upcoming meetings';
    const sArticlesEntrepreneurs= 'Articles from Entrepreneurs';
    const sFoundOnNet = 'Found on the web';
    const sEntrepreneurInLight = 'Entrepreneur in Light';

    const [featured, setFeatured] = useState(sFeatured);
    const [networkNews, setNetworkNews] = useState(sNetworkNews);
    const [upComingMeetings, setUpComingMeetings] = useState(sUpcomingMeetings);
    const [articlesEntrepreneurs, setArticlesEntrepreneurs] = useState(sArticlesEntrepreneurs);
    const [foundOnNet, setFoundOnNet] = useState(sFoundOnNet);
    const [entrepreneursInLight,setEntrepreneursInLight] = useState(sEntrepreneurInLight);


    
    function TranslateAll(data,Page){
        PrintLog("Journal TranslateAll");
        PrintLog(data) ;
    
        let t = FindTranslation(data,Page, sFeatured) ;
        if (t !== "Not Found")
          setFeatured(t) ;
    
        t = FindTranslation(data,Page, sNetworkNews) ;
        if (t !== "Not Found")
          setNetworkNews(t) ;

        t = FindTranslation(data,Page, sUpcomingMeetings) ;
        if (t !== "Not Found")
          setUpComingMeetings(t) ;

        t = FindTranslation(data,Page, sArticlesEntrepreneurs) ;
        if (t !== "Not Found")
          setArticlesEntrepreneurs(t) ;

        t = FindTranslation(data,Page, sFoundOnNet) ;
        if (t !== "Not Found")
          setFoundOnNet(t) ;

        t = FindTranslation(data,Page, sEntrepreneurInLight) ;
        if (t !== "Not Found")
          setEntrepreneursInLight(t) ;
    }

    if (reloadTraductions.current === true) {
        reloadTraductions.current = false ;
        TranslateAll(Translations_Text,"Journal") ;
    }


    return (
        <div>
            {/* 
            <Journal_NavBar
                Featured={featured}
                NetworkNews={networkNews}
                UpComingMeetings={upComingMeetings}
                ArticlesEntrepreneurs={articlesEntrepreneurs}
                FoundOnNet={foundOnNet}
                EntrepreneursInLight={entrepreneursInLight}
            />
            */}

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
