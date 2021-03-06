import React from 'react';

export default function Career(){
    return(
        <div className="s-about__section">

                <div className="row">
                    <div className="column">
                        <h3 data-aos="fade-up">Career</h3>
                    </div>
                </div>

                <div className="row block-large-1-2 block-900-full work-positions">

                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Google</span>
                                    <span className="position__pos">Product Designer</span>
                                </h6>
                                <div className="position__timeframe">
                                    June 2017 - Present
                                </div>
                            </div>

                            <p>
                            Pellentesque posuere. Etiam rhoncus. Praesent blandit laoreet nibh. 
                            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, 
                            eu sollicitudin urna dolor sagittis lacus. 
                            </p>
                        </div>
                    </div> 
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Facebook</span>
                                    <span className="position__pos">UX Director</span>
                                </h6>
                                <div className="position__timeframe">
                                    August 2015 - June 2017
                                </div>
                            </div>

                            <p>
                            Aliquam erat volutpat. Phasellus volutpat, metus eget egestas mollis, 
                            lacus lacus blandit dui, id egestas quam mauris ut lacus. Pellentesque 
                            dapibus hendrerit tortor. 
                            </p>
                        </div>
                    </div>
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Dropbox</span>
                                    <span className="position__pos">Mobile App Designer</span>
                                </h6>
                                <div className="position__timeframe">
                                    April 2014 - August 2015
                                </div>
                            </div>

                            <p>
                            In hac habitasse platea dictumst. Donec pede justo, fringilla vel, aliquet nec, 
                            vulputate eget, arcu. Fusce risus nisl, viverra et, tempor et, pretium in, sapien.
                            Phasellus volutpat, metus eget.
                            </p>
                        </div>
                    </div>
                    <div className="column" data-aos="fade-up">
                        <div className="position">
                            <div className="position__header">
                                <h6>
                                    <span className="position__co">Microsoft</span>
                                    <span className="position__pos">Product Designer</span>
                                </h6>
                                <div className="position__timeframe">
                                    June 2012 - February 2014
                                </div>
                            </div>

                            <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                            Curabitur blandit mollis lacus. Curabitur vestibulum aliquam leo. 
                            Vivamus in erat ut urna cursus vestibulum.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
    );
}