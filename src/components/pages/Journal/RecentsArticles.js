import React from 'react';
import { Link } from 'react-router-dom';
import Journal_Img2 from '../../../assets/images/journal/Journal_Img2.jpg';
import Journal_Img3 from '../../../assets/images/journal/Journal_Img3.jpg';
import Journal_Img1 from '../../../assets/images/journal/Journal_Img1.jpg';
import Journal_Img4 from '../../../assets/images/journal/Journal_Img4.jpg';
import Journal_Img5 from '../../../assets/images/journal/Journal_Img5.jpg';
import Journal_Img6 from '../../../assets/images/journal/Journal_Img6.jpg';
import '../../../assets/css/RecentsArticles.css';


const RecentsArticles = () => {
  return (
    <div className='Recents_Articles Charbel-div-center-col Fill-Container'>
            <div className='Recents_Article_Title Start-Text Fill-Container'>
                Nos Récentes Interviews
            </div>
            <div className='Recents_Article_Container Fill-Container'>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img4} alt=''className='Fill-Container'/>
                    </div>
                </div>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img5} alt='' className='Fill-Container'/>
                    </div>
                </div>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img6} alt='' className='Fill-Container'/>
                    </div>
                </div>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img1} alt='' className='Fill-Container'/>
                    </div>
                </div>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img2} alt='' className='Fill-Container'/>
                    </div>
                </div>
                <div className='Recent_Article Charbel-div-center-line'>
                    <div className='Recent_Article_Text Charbel-div-center-col Start-Text'>
                        <div className='Recent_Article_Title'>
                            Titre
                        </div>
                        <div className='Recent_Article_Desc'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi!
                        </div>
                        <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`}>
                            Lire
                        </Link>
                    </div>
                    <div className='Recent_Article_Img Charbel-div-center-line'>
                        <img src={Journal_Img3} alt='' className='Fill-Container'/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RecentsArticles;