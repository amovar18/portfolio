import React from 'react';

export default function Services(){
    return(
        <div id="services" className="container">
            <div className="row">
                <div className="column large-6 s-services__leftcol">
                    <div className="div-intro" data-num="02" data-aos="fade-up">
                        <p className="display-6">Expertise</p>

                        <p className="display-6">
                            <small>I work on building Single Page Applications using React framework.</small>
                        </p>
                    </div>

                <p className="lead">
                    I guess my left hemisphere of my brain is more dominant because I cannot design creatively, but I can
                    convert designs into working UI's. I work mainly on the following areas.
                </p>
            </div>
            <div className='row'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Frontend Development
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                I work with HTML, CSS, JavaScript and Bootstrap. Along with that I also work with Javascript frameworks like React.js, Redux etc. I can easily adapt to any new framework and learn things on the go its how I learnt Docker.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Android Development
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Android application development is another one of my strong suite. I have deployed my own android application on playstore and I tend to playaround with Android SDK along with firebase for IoT projects. I mainly create my android applications in Java but I can learn new frameworks easily.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Backend Development
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Backend development is another thing that I can do. I can create custom REST API and deploy them on cloud platforms like heroku, GCP etc. I can easily work with NoSQL and SQL databases like Firebase Realtime database, MongoDB, PostgreSQL, MySQL etc. I have created many REST API in the past using PHP, NodeJS etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </div>
    )
}