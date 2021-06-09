import React from 'react';

export default function Footer(){
    return(
        <footer id='contact'>
            <div className="container">
                <div className="row">
                    <div className="section-intro" data-aos="fade-up">
                        <p className="display-6">Get In Touch</p>

                        <p className="lead">
                            Did you like what I have done till now, below are links to get in touch with me.
                        </p>
                    </div>
                    <div className='col-sm'>
                        Reachable Accounts:
                        <ul className="list">
                            
                            <li className="list-item">
                                <a href='https://www.instagram.com/amogha128/' style={{'textDecoration':'none'}}><i className='bi bi-instagram'> Instagram</i></a>
                            </li>
                            <li className="list-item">
                                <a href='https://www.linkedin.com/in/amoghavarsha-kudaligi-34b902171/' style={{'textDecoration':'none'}}><i className="bi bi-linkedin"> Linkedin</i></a>
                            </li>
                            <li className="list-item">
                                <i className="bi bi-discord"></i>
                            </li>
                            <li className="list-item">
                                <a href='https://github.com/amovar18' style={{'textDecoration':'none'}}><i className="bi bi-github"> GitHub</i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        Other ways to reach me:
                        <ul className="list">
                            <li className="list-item">
                                <a href='mailto:kgamoghavarsha@gmail.com' style={{'textDecoration':'none'}}><i className='bi bi-envelope'> Gmail</i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}