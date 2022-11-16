import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Journal_NavBar.css';
import { CgMenuGridO } from 'react-icons/cg';



const Journal_NavBar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav className='Journal_NavBar'>
        <div className='Journal_Navbar_Container'>
            <ul className='Onglets_Container'>
                <li className='Onglet primary' >
                    <Link to={`${process.env.PUBLIC_URL}/Journal`} className='nav__Link active' >
                        A la Une
                    </Link>
                </li>
                <li className='Onglet'>
                    <Link className='nav__Link'>
                        Actualités du réseau
                    </Link>
                </li>
                <li className='Onglet'>
                    <Link className='nav__Link'>
                        Prochaines réunions
                    </Link>
                </li>
                <li className='Onglet'>
                    <Link className='nav__Link'>
                        Articles des Entrepreneurs
                    </Link>
                </li>
                <div className='Supp_Nav_Links'>
                    <button className='Supp_Nav_Btn' onClick={()=>{setIsNavShowing(prev => !prev)}}>
                        <CgMenuGridO />
                    </button>
                    <ul className={`Supp_Nav_Links_Container ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link className='nav__Link active'>
                                A la Une
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link className='nav__Link'>
                                Actualités du réseau
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link className='nav__Link'>
                                Prochaines réunions
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet mobile'>
                            <Link className='nav__Link'>
                                Articles des Entrepreneurs
                            </Link>
                        </li>
                        <li className='Supp_Nav_Onglet'>
                            <Link className='nav__Link'>
                                Trouvé sur le net
                            </Link>
                        </li> 
                        <li className='Supp_Nav_Onglet'>
                            <Link className='nav__Link'>
                                Entrepreneur à la Lumière
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