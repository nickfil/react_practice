import React from 'react';

function About() {
    return (
        <React.Fragment>
           <h1>About</h1>
           <p>This is the TodoList app v1.0.0. It is part of a React.js crash course</p> 
           <p>To find this crash course, please click <a 
                                                        style={{color: 'blue', textDecoration: 'underline'}} 
                                                        href="https://www.youtube.com/watch?v=sBws8MSXN7A"
                                                        title="React JS Crash Course"
                                                        target="_blank"
                                                        rel="noopener noreferrer">here</a></p>
        </React.Fragment>
    )
}

export default About;
