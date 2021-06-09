import React from 'react';

export default function Header(){
    return(
        <header class="s-header">
            <div class="header-logo">
                <a href="index.html">
                    <img src="images/logo.svg" alt="Homepage"/>
                </a>
            </div>

            <div class="header-content">
                <nav class="row header-nav-wrap">
                    <ul class="header-nav">
                        <li><a class="smoothscroll" href="#hero" title="Intro">Home</a></li>
                        <li><a class="smoothscroll" href="#about" title="About">About</a></li>
                        <li><a class="smoothscroll" href="#services" title="Services">Services</a></li>
                        <li><a class="smoothscroll" href="#portfolio" title="Works">Works</a></li>
                        <li><a href="mailto:#0" title="Contact us">Say Hello</a></li>
                    </ul>
                </nav>

                <a href="#0" class="btn btn--stroke btn--small">Download CV</a>

            </div>

            <a class="header-menu-toggle" href="#0"><span>Menu</span></a>
    </header> 
    )
}