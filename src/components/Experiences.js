import React from 'react';

export default function Expericences(){
    return(
        <section id="about" class="s-about target-section">
            <div class="s-about__section s-about__section--profile">
                <div class="right-vert-line"></div>
                <div class="row">
                    <div class="column large-6 medium-8 tab-full">

                        <div class="section-intro" data-num="01" data-aos="fade-up">
                            <h3 class="subhead">About Me</h3>
                            <h1 class="display-1">I'm the kind of person who isn't afraid of challenges.</h1>
                        </div>

                        <div class="profile-pic" data-aos="fade-up">
                            <img src="images/profile-pic.jpg" 
                             srcset="images/profile-pic.jpg 1x, images/profile-pic@2x.jpg 2x" alt=""/>
                        </div>

                        <h3 data-aos="fade-up">Profile</h3>

                        <p data-aos="fade-up">
                        In consectetuer turpis ut velit. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. 
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis 
                        mi consectetuer lacinia. Fusce neque. Curabitur nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, 
                        condimentum eget, diam. Phasellus magna. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, 
                        ipsum. Maecenas egestas arcu quis ligula mattis placerat. Suspendisse pulvinar, augue ac venenatis condimentum, 
                        sem libero volutpat nibh, nec pellentesque velit pede quis nunc.
                        </p>
                    </div>
                </div>

            </div> 

        </section>
    )
}