import React from 'react';

export default function Contact(){
    return(
        <section id="hero" class="s-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg-3000.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y='center'>
            <div class="row hero-content">
                <div class="column large-full">
                    <h1>
                    Hello, I'm John Doe, <br/>
                    a frontend developer <br/>
                    & designer currently <br/>
                    based somewhere.
                    </h1>
                    <ul class="hero-social">
                        <li>
                            <a href="#0" title="">Twitter</a>
                        </li>
                        <li>
                            <a href="#0" title="">Behance</a>
                        </li>
                        <li>
                            <a href="#0" title="">Dribbble</a>
                        </li>
                    </ul>
                </div> 
            </div>
            <div class="hero-scroll">
                <a href="#about" class="scroll-link smoothscroll">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24l-8-9h6v-15h4v15h6z"/></svg>
                </a>
            </div>
        </section>
    );
}