import React, { Component } from 'react';
import ProfilePicture from '../img/profile.jpg';

export class About extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="content">
            <div className="main-article" id="about">
                {/* Only appears in mobile version */}
                <img className="hidden-photo" src={ProfilePicture} alt="Alexis Toledo" />
                <h1 className="title-web">Hello, I'm Alexis!</h1>
                {/* Regular content */}
                <h1 className="title-mobile">Hello,<br />I'm Alexis!</h1>
                <p>I'm a <strong>Web & Graphic Designer</strong> from Córdoba, Argentina. I have more than 8 years of experience in graphic design and 3 years designing responsive web sites and web apps with HTML5, CSS3, and JS. I have experience working in most of the stages of web development and in solving problems.</p> 

                <p>I also have a strong background in management and teamwork. I'm an organized person, so I always try to keep my code &#40;and its documentation&#41; as clean as possible. An important part of my current job is digital marketing, so I know very well all the principles of SEO and the importance of building optimized webpages.</p>
                        
                <p>Currently, I'm working on strengthening my skills and learning modern technologies like NodeJS and ReactJS. I am also specializing in User Experience.</p>

                <p><i className="fa fa-envelope" aria-hidden="true"></i> <strong>Contact me: </strong><a href="mailto:alexis.toledo@live.com" target="_blank" rel="noopener noreferrer"> alexis.toledo@live.com</a></p>
                <p><i className="fa fa-github" aria-hidden="true"></i> <strong>My repository: </strong><a href="https://github.com/alexisjtoledo" target="_blank" rel="noopener noreferrer"> alexisjtoledo on Github</a></p>
                <p><i className="fa fa-linkedin-square" aria-hidden="true"></i> <strong>My Professional profile: </strong><a href="https://github.com/alexisjtoledo" target="_blank" rel="noopener noreferrer"> alexistoledo on LinkedIn</a></p>
                <br/>
                <a href="https://drive.google.com/file/d/1dQ8NcI3zNNYqMTNa2dUWNdSxn8N3A8wG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="no-link">
                    <button type="button" className="btn btn-primary btn-lg btn-block btn-about"><i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD MY CV</button>
                </a>
            </div>
        </div>
        )
    }
}

export default About
