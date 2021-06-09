import React from 'react';
function Aboutme(){
    return(
        <div id="about" className = "container">
            <div className = "row">
                <p className = "display-6">About Me</p>
                <p>
                    I'm the kind of person who isn't afraid of challenges, and faces them head on. I am pretty quick learner and I am not limited to my field only, 
                    since I read things which are not of my stream. In my past projects I have always led people in a group. I manage to complete my work on or before due date and even help others the process.
                    I have always wanted to work in the field of frontend development.
                </p>
                <p className='lead'>Profile</p>
                <p className = 'lead'>
                    <small>
                        I have been coding and developing applications since I was 15 years old. I was clear on what I wanted to do and what I wanted to become so I choose to do Diploma instead of going via the regular 10+2 stream.
                        For the past 5 years I have developed various projects worked on many languages ranging from C++ to PHP and now I work on JavaScript and on Android framework.
                        It seems that my left brain is dominant since I am really bad at mocking up designs but I am pretty good at bringing those design to real world UI.
                    </small>
                </p>
            </div>
            <div className='row'>
                <ul className='list'>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            Frontend Skills
                        </li>
                        <li className="list-inline-item">
                            <i>React.js,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Redux</i>
                        </li>
                        <li className="list-inline-item">
                            <i>HTML+CSS</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Boostrap,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Android apps</i>
                        </li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            Backend Skills
                        </li>
                        <li className="list-inline-item">
                            <i>Express.js,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Node.js,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>MongoDB,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>PostgreSQL,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>MySQL,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Heroku.</i>
                        </li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            Programming Languages
                        </li>
                        <li className="list-inline-item">
                            <i>C++,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>C,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Java,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Python,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Javascript,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>PHP.</i>
                        </li>
                    </ul>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            Other Skills
                        </li>
                        <li className="list-inline-item">
                            <i>Git Version Control,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Docker,</i>
                        </li>
                        <li className="list-inline-item">
                            <i>Linux Terminal.</i>
                        </li>
                    </ul>
                </ul>
                
            </div>
            <hr/>
        </div>
    );
}

export default Aboutme;