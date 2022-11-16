import React from 'react';
import  Journal_NavBar  from './Journal_NavBar';
import Logo from '../../assets/images/brand/logo-2.png';
import Journal_Img1 from '../../assets/images/journal/Journal_Img1.jpg';
import Journal_Img2 from '../../assets/images/journal/Journal_Img2.jpg';
import Journal_Img3 from '../../assets/images/journal/Journal_Img3.jpg';
import '../../assets/css/Journal.css';
import RecentsArticles from './RecentsArticles';


const Journal = () => {
  return (
    <div>
        <Journal_NavBar/>

        


        <div className='Journal'>
            <div className='Journal_Header'>
                <div className='Logo'>
                    <img src={Logo} alt=''/>
                </div>
                <div className='Journal_Main_Title'>
                    Les Actualités de Plus De CA
                </div>
            </div>
            <div className='Journal_Articles_Container'>
                <div className='Journal_Article'>
                    <div className='Journal_Articles_Text'>
                        <div className='Journal_Articles_Text_Title'>
                                Le titre de l'article
                        </div>
                        <div className='Journal_Articles_Text_Paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className='Journal_Articles_Text_Btn'>
                            <button>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className='Journal_Articles_Img'>
                        <img src={Journal_Img1} alt=''/>
                    </div>
                </div>
                <div className='Journal_Article'>
                    <div className='Journal_Articles_Text'>
                        <div className='Journal_Articles_Text_Title'>
                                Le titre de l'article
                        </div>
                        <div className='Journal_Articles_Text_Paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className='Journal_Articles_Text_Btn'>
                            <button>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className='Journal_Articles_Img'>
                        <img src={Journal_Img2} alt=''/>
                    </div>
                </div>
                <div className='Journal_Article'>
                    <div className='Journal_Articles_Text'>
                        <div className='Journal_Articles_Text_Title'>
                                Le titre de l'article
                        </div>
                        <div className='Journal_Articles_Text_Paragraph'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam quo excepturi, fugiat repellendus quis, cupiditate, officiis aliquid numquam ipsa possimus blanditiis repudiandae dicta vitae maiores ab iusto eaque culpa delectus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className='Journal_Articles_Text_Btn'>
                            <button>
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className='Journal_Articles_Img'>
                        <img src={Journal_Img3} alt=''/>
                    </div>
                </div>
            </div>
             <RecentsArticles /> 
        </div>
  
    </div>
  )
}

export default Journal;