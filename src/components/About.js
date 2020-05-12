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
                <p>I'm a <strong>Front End Developer</strong> based in Copenhaguen, Denmark. I have more than 8 years of experience building simple websites &#40;HTML + CSS + JS&#41; and more than two using modern Javascript frameworks as React and React-Native. I have strong knowledge in almost all stages of development.</p>

                <p>I am also a <strong>Graphic Designer</strong> with around 10 years in the field, so I also have a good understanding of User Experience and a unique approach to engaging designs. Although my role as a developer was principally individually-based, I am also used to team-working with the same good results.</p>

                <p>I am a responsible and ambitious person who loves keeping the clients satisfied with every project.</p>

                <br />

                <p><i className="fa fa-envelope" aria-hidden="true"></i> <strong>Contact me: </strong><a href="mailto:alexis.toledo@live.com" target="_blank" rel="noopener noreferrer"> alexis.toledo@live.com</a> - <a href="tel:+4550389693" rel="noopener noreferrer">+45 50 38 96 93</a></p>
                <p><i className="fa fa-github" aria-hidden="true"></i> <strong>My repository: </strong><a href="https://github.com/alexisjtoledo" target="_blank" rel="noopener noreferrer"> alexisjtoledo on Github</a></p>
                <p><i className="fa fa-linkedin-square" aria-hidden="true"></i> <strong>My Professional profile: </strong><a href="https://www.linkedin.com/in/alexistoledo/?locale=en_US" target="_blank" rel="noopener noreferrer"> alexistoledo on LinkedIn</a></p>
                <br/>
                <a href="https://drive.google.com/open?id=1RXMaQmhEvqx8Bbb9fnkUJdq_NqvCbsQA" target="_blank" rel="noopener noreferrer" className="no-link">
                    <button type="button" className="btn btn-primary btn-lg btn-block btn-about"><i className="fa fa-download" aria-hidden="true"></i> DOWNLOAD MY CV</button>
                </a>
            </div>
        </div>
        )
    }
}

export default About
