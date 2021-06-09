import React from 'react';

export default function Project(){
    return(
        <div id="projects" className="container">

            <div className="row">
                    <p className="display-6">Portfolio</p>
                    <p className="lead">
                        A selection of recent projects I have worked on.
                    </p>
            </div>

            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Opticonnect</h5>
                        <h6 className="card-subtitle mb-2 text-muted">E-Commerce</h6>
                        <p className="card-text">
                            An online Ecommerce website which was designed to help various opticians all over the country to sell and deliver their products to users across the country.
                            Consider it as an amazon for opticians.
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                Tools/Languages used:
                            </li>
                            <li className="list-inline-item">
                                <i>React.js,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Redux(primary state management tool),</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Express.js,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>MongoDB,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Heroku cloud.</i>
                            </li>
                        </ul>
                        <a href="https://github.com/amovar18/optilens" className="card-link"><i className='bi bi-github'></i></a>
                        <a href="http://loving-kepler-fcdb88.netlify.app/" className="card-link">Deployed Link</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">DocScan</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Android Application</h6>
                        <p className="card-text">
                            An offline android application that helps user to convert images that are either captured or selected from gallery and lets them create a PDF from it.
                            DocScan was created so that it can be used on the go no need to signin or pay for services like OCR that are paid in many apps, cherry on top is your data is totally safe since it works offline and does not need internet.
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                Tools/Languages used:
                            </li>
                            <li className="list-inline-item">
                                <i>Android,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Material UI,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>OpenCV,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Firebase SDK.</i>
                            </li>
                        </ul>
                        <a href="https://github.com/amovar18/docscan" className="card-link"><i className='bi bi-github'></i></a>
                        <a href="https://play.google.com/store/apps/details?id=com.DocScan" className="card-link">Deployed Link</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">AMSS</h5>
                        <h6 className="card-subtitle mb-2 text-muted">E commerce</h6>
                        <p className="card-text">
                            AMSS or (Automobile scrap seller) was created keeping in mind the customization market in India. Automobile garages can get good functioning parts at a fair rate. These parts are collected by company and are listed on website
                            for sale.
                        </p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                Tools/Languages used:
                            </li>
                            <li className="list-inline-item">
                                <i>React.js,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Redux(primary state management tool),</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Express.js,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>MongoDB,</i>
                            </li>
                            <li className="list-inline-item">
                                <i>Heroku cloud.</i>
                            </li>
                        </ul>
                        <p><mark>Note: Links for this wont work since the site is in development.</mark></p>
                        <a href="/#" className="card-link"><i className='bi bi-github'></i></a>
                        <a href="/#" className="card-link">TBA</a>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}