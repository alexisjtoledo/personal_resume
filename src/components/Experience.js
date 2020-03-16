import React, { Component } from 'react'

export class Experience extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <div id="content">
            <div className="main-article">
                <h1>My professional experience</h1>
                <div className="timeline">
                    <div className="job right-job">
                        <div className="content">
                            <h3>2016 - 2020</h3>
                            <h4>Municipality of Córdoba</h4>
                            <h5>Cabinet Adviser</h5>
                            <p>I was in charge of the development of the management systems of the educational programs of the Municipal Education System, its communication, and the coordination of its Community Managers. I also provided technical support in the programs developed by the schools. You can find the Open Source Applications I've developed on the <a href="https://github.com/ModernizacionMuniCBA" target="_blank" rel="noopener noreferrer">Github Repository</a> of that institution.</p>
                            <p><strong>Outstanding accomplishments:</strong></p>
                            <p>- I reduced the academic activities budget in almost 80 million Pesos
                            by suggesting and designing the digitalization of the annual
                            municipal congress. I also designed its mobile App.</p>
                            <p>- I proposed and coordinated the centralizing of the data of all institution's
                            centers in one place. I made the Front End design of that project too.</p>
                        </div>
                    </div>
                    <div className="job left-job">
                        <div className="content">
                            <h3>2015 - PRESENT</h3>
                            <h4>2612/c Communication Consultancy</h4>
                            <h5>Partner & Co-founder</h5>
                            <p>2612/c is a multimedia communication consultancy. We provide solutions from 2015 to both public and private sector clients and institutions. We take care of branding, digital communication, online
                            marketing, web development, and mobile apps. Some of our clients: National University of Córdoba &#40;2018&#41;, Capilla del Monte City Hall &#40;2017&#41;, Eilat Travel and Tourism &#40;2018&#41;, and so others.</p>
                            <p>I am working in an open-source “Open Government” platform to help out
                            smalls and medium town halls of Argentina.</p>
                        </div>
                    </div>
                    <div className="job right-job">
                        <div className="content">
                            <h3>2016</h3>
                            <h4>Brenda Austin National Congresswoman</h4>
                            <p>Member of the communication team. I was in charge of web development and digital marketing during the midterm elections.</p>
                        </div>
                    </div>
                    <div className="job left-job">
                        <div className="content">
                            <h3>2015 - 2016</h3>
                            <h4>CEDI Consulting and Training</h4>
                            <p>Modernization Assistant at Córdoba’s Judicial System. In my team, we were in charge of the digitalization of the expedients.</p>
                        </div>
                    </div>
                    <div className="job right-job">
                        <div className="content">
                            <h3>2012 - 2014</h3>
                            <h4>Universitarian Federation of Córdoba</h4>
                            <p>I was the Press Secretary for two periods. My main role was to coordinate the press team. I also coordinated the "digital platform" project what included the release of a brand new website, many changes in social media strategy and a general rebranding.</p>
                        </div>
                    </div>
                    <div className="job left-job">
                        <div className="content">
                            <h3>2010 - 2014</h3>
                            <h4>Freelancer</h4>
                            <p>I started designing simple webpages for local small business and professional services in HTML + CSS. I also got some experience using flash animations, WordPress, and other CMS and CRM platforms like PrestaShop and Moodle.</p>
                        </div>
                    </div>
                </div>
                <br />
                <a href="https://www.linkedin.com/in/alexistoledo/?locale=en_US" target="_blank" rel="noopener noreferrer" className="no-link">
                    <button type="button" className="btn btn-primary btn-lg btn-block btn-about"><i className="fa fa-linkedin-square" aria-hidden="true"></i> MORE INFORMATION</button>
                </a>
            </div>
        </div>
        )
    }
}

export default Experience
