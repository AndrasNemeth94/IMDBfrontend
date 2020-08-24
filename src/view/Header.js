import React, { Component } from 'react';
import './Header.css'


class Header extends Component {

    render(){
        
        return (
            <div className='container-fluid'>{/*----container--- */}


                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">{/*----navbar----- */}

                <div className='row menuRow'>{/*---menuRow---- */}

                       <div className='col-sm-4 logoCol'> {/*---logoCol---- */}
                        <a className="navbar-brand" href="Home">{/*-----logo link----- */}
                                <img src= {require('../img/LoMLM.png')} alt='LoMLM' width='200px' height='60px' />
                        </a>{/*-----logo link end----- */}

                        </div>{/*---logoCol end---- */}

                        <div className='col-sm-4'></div>{/*------EMPTY COL----- */}

                        <div className='col-sm-6 menuCol'>{/*---menuCol----- */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">{/*--hamburger menu button--- */}
                                <span className="navbar-toggler-icon"></span>
                        </button>{/*--hamburger menu button end--- */}

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">{/*---collapsed menu container--- */}

                        <ul className="navbar-nav navlinkList">{/*---dropdown menu---- */}

                                <li className="nav-item">

                                        <a className="nav-link" href="Home2">
                                                <p className='linkText'> HOME</p>
                                         </a>
                                </li>

                                <li className="nav-item">

                                        <a className="nav-link" href="Home2">
                                                <p className='linkText'> PROGRAMS</p>
                                         </a>
                                </li>

                                <li className="nav-item">

                                        <a className="nav-link" href="Home2">
                                                <p className='linkText'> BLOG</p>
                                         </a>
                                </li>

                                <li className="nav-item">

                                        <a className="nav-link" href="Home2">
                                               <p className='linkText'> CONTACT</p>
                                         </a>
                                </li>

                        </ul>{/*---dropdown menu end---- */}

                        </div>{/*---collapsed menu container end--- */}

                        </div>{/*---menuCol end----- */}
                </div>{/*---menuRow end---- */}
                </nav>
            </div>
        );
    }
};
export default Header;