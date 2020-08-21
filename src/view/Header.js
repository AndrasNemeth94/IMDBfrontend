import React, { Component } from 'react';
import './Header.css'


class Header extends Component {

    render(){
        
        return (
            <div className='container-fluid'>{/*----container--- */}

                <div className='row'>{/*----row----- */}

                        <div className='col-sm logo'>{/*----logo---- */}
                                <p>logo</p>
                        </div>{/*----logo end---- */}

                        <div className='col-sm menu'>{/*----col 1---- */}
                                <p>menu</p>
                        </div>{/*----col 1 end---- */}

                        <div className='col-sm searchBar'>{/*----col 2---- */}
                                <p>Searchbar</p>
                        </div>{/*----col 2 end---- */}
                                
                        <div className='col-sm pro'>{/*----col 3---- */}
                                    <p>IMDbPro</p>
                        </div>{/*----col 3 end---- */}

                        <div className='col-sm watchList'>{/*----col 4---- */}
                                <p>Watch List</p>
                        </div>{/*----col 4 end---- */}

                        <div className='col-sm signIn'>{/*----col 5---- */}
                                <p>Sign in</p>
                        </div>{/*----col 5 end---- */}

                        <div className='col-sm'>{/*----col 6---- */}
                                
                        </div>{/*----col 6 end---- */}
                    </div>{/*----row end----- */}
            {/*----container end--- */}
            </div>
        );
    }
};
export default Header;