import React from 'react';
function Education(){
    return(
        <div id="education" className = "container">
            <div className = "row">
                <p className = "display-6">Education</p>
            </div>
            <div className = "row">
                <div  className='col-9'>
                    <p className = "lead">LDRP Institute of Technology and Research</p>
                    <p className = "text-muted">
                        Degree: B.Tech<br/>
                        Stream: Computer Engineering
                    </p>
                </div>
                <div  className='col-3'>
                    <p className = "lead">June 2019- May 2022</p>
                    <p className = "text-muted">
                        8.9 CGPA
                    </p>
                </div>
            </div>
            <div className = "row">
                <div  className='col-9'>
                    <p className = "lead">Gujarat Technological University</p>
                    <p className = "text-muted">
                        Degree: Diploma in Engineering<br/>
                        Stream: Computer Engineering
                    </p>
                </div>
                <div  className='col-3'>
                    <p className = "lead">June 2016- May 2019</p>
                    <p className = "text-muted">
                        9.9 CGPA
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default Education;