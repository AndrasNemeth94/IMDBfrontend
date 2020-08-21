import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    render(){

        return (
            <div className='container-fluid'>{/*----container---*/}
                
                    <div className='row'>{/*----row 1---*/}

                        <div className='col-sm face'>
                                <p>facebook</p>
                            </div>

                            <div className='col-sm insta'>
                                    <p>instagram</p>
                            </div>

                            <div className='col-sm twitch'>
                                <p>twitch</p>
                            </div>

                            <div className='col-sm twitter'>
                                <p>twitter</p>
                            </div>

                            <div className='col-sm youtube'>
                                <p>youtube</p>
                            </div>
                    </div>{/*----row 1 end---*/}

                    <div className='row'>{/*----row 2---*/}

                            <div className='col-sm'>{/*---art 1--- */}
                                <p>article1</p>
                            </div>{/*---art 1 end--- */}

                            <div className='col-sm'>{/*---art 2--- */}
                                <p>aerticle2</p>
                            </div>{/*---art 2 end--- */}

                            <div className='col-sm'>{/*---art 3--- */}
                                <p>aerticle3</p>
                            </div>{/*---art 3 end--- */}

                            <div className='col-sm'>{/*---art 4--- */}
                                <p>article4</p>
                            </div>{/*---art 4 end--- */}

                            <div className='col-sm'>{/*---art 5--- */}
                                <p>article4</p>
                            </div>{/*---art 5 end--- */}

                            <div className='col-sm'>{/*---art 6--- */}
                                <p>article4</p>
                            </div>{/*---art 6 end--- */}
                        
                    </div>{/*----row 2 end---*/}

                    <div className='row'>{/*----row 3---*/}

                    <div className='col-sm'>{/*---art 7--- */}
                                <p>article1</p>
                            </div>{/*---art 7 end--- */}

                            <div className='col-sm'>{/*---art 8--- */}
                                <p>aerticle2</p>
                            </div>{/*---art 8 end--- */}

                            <div className='col-sm'>{/*---art 9--- */}
                                <p>aerticle3</p>
                            </div>{/*---art 9 end--- */}

                            <div className='col-sm'>{/*---art 10--- */}
                                <p>article4</p>
                            </div>{/*---art 10 end--- */}

                            <div className='col-sm'>{/*---art 11--- */}
                                <p>article4</p>
                            </div>{/*---art 11 end--- */}

                            <div className='col-sm'>{/*---art 12--- */}
                                <p>article4</p>
                            </div>{/*---art 12 end--- */}
                        
                    </div>{/*----row 3 end---*/}

                    <div className='row'>{/*---row 4----- */}
                           
                            <div className='col copyright'>{/*----col copyright 1----- */}
                                    <p>an amazon company</p>
                                </div>{/*----col copyright 1 end----- */}

                        </div>{/*---row 4 end----- */}

                        <div className='row'>{/*---row 5----- */}

                            <div className='col copyright'>{/*----col copyright 2----- */}
                                    <p>© 1990-2020 by IMDb.com, Inc.</p>
                                </div>{/*----col copyright 2 end----- */}
                            
                        </div>{/*---row 5 end----- */}

                {/*----container---*/}
                </div>
        );
    }
};
export default Footer;