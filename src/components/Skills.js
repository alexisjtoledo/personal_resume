import React, { Component } from 'react'
import $ from 'jquery';

export class Skills extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        $('.skill-bar').hover(function(){
            $(this).children('.skill').toggleClass('dark');
        });
    }
    render() {
        return (
            <div id="content">
            <div className="main-article">
                <h1>Technical Skills</h1>

                <div className="skill-bar">
                    <span className="skill w87" id="w87">
                        <p>HTML5 + CSS3</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w74" id="w71">
                        <p>JS + jQuery</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w71" id="w71">
                        <p>C# + .NET</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w67" id="w67">
                        <p>Git + GitHub</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w63" id="w63">
                        <p>SQL</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w41" id="w41">
                        <p>ReactJS</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w36" id="w36">
                        <p>NodeJS</p>
                    </span>
                </div>
                <div className="skill-bar">
                    <span className="skill w36" id="w36">
                        <p>MongoDB</p>
                    </span>
                </div>
                <hr />
                <p>
                    <strong className="skills">Responsive design</strong>
                    <strong className="skills">User Experience</strong>
                    <strong className="skills">User Interface</strong>
                    <strong className="skills">Adobe XD</strong>
                    <strong className="skills">Zeplin</strong>
                    <strong className="skills">Phonegap Build</strong>
                </p>
                <h1>Adittional skills</h1>
                <h4>Graphic Design</h4>
                <p>
                    <strong className="skills">Adobe Illustrator</strong>
                    <strong className="skills">Adobe Photoshop</strong>
                    <strong className="skills">Adobe Indesign</strong>
                    <strong className="skills">Adobe Premiere Pro</strong>
                    <strong className="skills">Adobe After Effects</strong>
                </p>
                <h4>Online Marketing</h4>
                <p>
                    <strong className="skills">Search Engine Optimization</strong>
                    <strong className="skills">Search Engine Marketing</strong>
                    <strong className="skills">Social Media Optimization</strong>
                    <strong className="skills">Social Media Marketing</strong>
                    <strong className="skills">Google Adwords</strong>
                    <strong className="skills">E-mail marketing</strong>
                    <strong className="skills">Digital Strategy</strong>
                    <strong className="skills">Photography</strong>
                    <strong className="skills">Online Advertising</strong>
                    <strong className="skills">Facebook Marketing</strong>
                    <strong className="skills">Facebook Pixel</strong>
                    <strong className="skills">Google Analytics</strong>
                    <strong className="skills">Google Search Console</strong>
                </p>
                <h4>Soft Skills</h4>
                <p>
                    <strong className="skills">Teamwork</strong>
                    <strong className="skills">Conflict management</strong>
                    <strong className="skills">Adaptability</strong>
                </p>
            </div>
        </div>
        )
    }
}

export default Skills
