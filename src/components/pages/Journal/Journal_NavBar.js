
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/Journal_NavBar.css';
import { CgMenuGridO } from 'react-icons/cg';



const Journal_NavBar = (props) => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav className='Journal_NavBar'>
        <div className='Journal_Navbar_Container'>
            <ul className='Onglets_Container'>
                <li className='Onglet primary'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/Page1`} className='nav__Link'>
                        {props.Featured}
                    </Link>
                </li>
                <li className='Onglet'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/News`} className='nav__Link'>
                        {props.NetworkNews}
                    </Link>
                </li>
                <li className='Onglet'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`} className='nav__Link'>
                        {props.UpComingMeetings}
                    </Link>
                </li>

                <li className='Onglet'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/OurArticles`} className='nav__Link'>
                        {props.ArticlesEntrepreneurs}
                    </Link>
                </li>

                <li className='Onglet'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/FoundOnInternet`} className='nav__Link'>
                        {props.FoundOnNet}
                    </Link>
                </li>

                
                <li className='Onglet'>
                    <Link  to={`${process.env.PUBLIC_URL}/Journal/Entrepreneur`} className='nav__Link'>
                        {props.EntrepreneursInLight}
                    </Link>
                </li>



                <div className='Supp_Nav_Links Charbel-div-center-col'>
                    <button className='Supp_Nav_Btn' onClick={()=>{setIsNavShowing(prev => !prev)}}>
                        <CgMenuGridO />
                    </button>
                    <ul className={`Supp_Nav_Links_Container Charbel-div-center-col ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link to={`${process.env.PUBLIC_URL}/Journal/Page1`} className='nav__Link active'>
                                {props.Featured}
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link  to={`${process.env.PUBLIC_URL}/Journal/News`} className='nav__Link'>
                                {props.NetworkNews}
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link  to={`${process.env.PUBLIC_URL}/Journal/NextMeetings`} className='nav__Link'>
                                {props.UpComingMeetings}
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link   to={`${process.env.PUBLIC_URL}/Journal/OurArticles`} className='nav__Link'>
                                {props.ArticlesEntrepreneurs}
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet'>
                            <Link  to={`${process.env.PUBLIC_URL}/Journal/FoundOnInternet`} className='nav__Link'>
                                {props.FoundOnNet}
                            </Link>
                        </li> 
                        <li className='Supp_Nav_Onglet'>
                            <Link   to={`${process.env.PUBLIC_URL}/Journal/Entrepreneur`} className='nav__Link'>
                                {props.EntrepreneursInLight}
                            </Link>
                        </li> 
                    </ul>
                </div>

            </ul>
        </div>
    </nav>
  )
}

export default Journal_NavBar;