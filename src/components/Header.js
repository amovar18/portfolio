import React from "react";
export default function Header() {
    const links=[
        {title:'Home',path:'#Home'},
        {title:'About Me',path:'/#about'},
        {title:'Education',path:'/#education'},
        {title:'Expertise',path:'/#services'},
        {title:'Projects',path:'/#projects'},
        {title:'Contact Me',path:'/#contact'},
    ];
    return (
            <nav className='navbar navbar-expand-lg navbar-light' style={{'backgroundColor':'#B0E0E6'}}>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
                          <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarToggler'>
                        <div className='ms-auto p-2 bd-highlight'>
                            <ul className='navbar-nav mb-2 mb-lg-0'>
                                {links!==undefined ? links.map(({title,path})=>(
                                    <li className='nav-item' key={title}>
                                        <a className='nav-link' style={{'color':'#750D37'}} aria-current='page' href={path}>
                                            {title}
                                        </a>
                                    </li>
                                )):null}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
}