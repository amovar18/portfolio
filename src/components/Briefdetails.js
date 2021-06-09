import React from 'react';

export default function Briefdetails(){
    return(
        <div className="container">
            <div className="row">
                    <p className='display-6'>Brief description about me:</p>
                    <p className='lead'>
                        I guess if you are here you either read my resume, checked my linkedin profile or someone referred me to you.
                        I'm Amoghavarsha, a<mark>frontend developer</mark> and a <mark>Android developer</mark> currently based out of Gujarat, India.
                        I mainly work with React.js, Android, sometimes I even work as a fullstack developer on MERN (MongoDB, Express.js, React.js, Node.js) stack.
                        I am a senior year computer engineering student graduating in 2022. Please do read ahead.
                    </p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            My accounts:
                        </li>
                        <li className="list-inline-item">
                            <a href='https://github.com/amovar18'><i className="bi bi-github"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/amoghavarsha-kudaligi-34b902171/" ><i className="bi bi-linkedin"></i></a>
                        </li>
                    </ul>
            </div>
            <hr/>
        </div>
    );
}