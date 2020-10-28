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
                            <h3>2015 - 2020</h3>
                            <h4>Municipality of Córdoba</h4>
                            <h5>Modernization Chief Advisor</h5>
                            <p><strong>Main Roles:</strong></p>
                            <p>Strategic coordination with the Innovation, IT and Press Departments.</p>
                            <p>Ad-hoc applications, websites and landing pages development.</p>
                            <p>Head of communication of the Education Department.</p>
                            <p>Multimedia developing and supervision.</p>
                            <p>You can find the Open Source Applications I've developed/contributed on the <a href="https://github.com/ModernizacionMuniCBA" target="_blank" rel="noopener noreferrer">Github Repository</a> of that institution.</p>
                        </div>
                    </div>
                    <div className="job left-job">
                        <div className="content">
                            <h3>2015 - 2020</h3>
                            <h4>2612/c Communication Consultancy</h4>
                            <h5>Co-worker</h5>
                            <p>2612/c is a multimedia communication consultancy. We provide solutions since 2015 to both public and private sector clients and institutions. We take care of branding, digital communication, online marketing, advertising, and web & development. Some of our clients are the National University of Córdoba &#40;2018-2020&#41;, Franja Morada UNC &#40;2020&#41;, Eilat Travel and Tourism &#40;2018&#41;, Uniqa Health System &#40;2018&#41;, Güemes disco &#40;2018&#41;, Capilla del Monte City Hall &#40;2017&#41;, National Congresswoman Elías de Pérez &#40;2017&#41;, MercoCED &#40;2016&#41;, Ana Nicoletti &#40;electoral campaign&#41; &#40;2015&#41;, Franja Morada UBA &#40;2014&#41;, Governor Gerardo Morales &#40;external advice for electoral campaign&#41; &#40;2014&#41;.</p>
                            <p>I am working in an open-source “Open Government” platform to help smalls and medium town halls of Argentina.</p>
                        </div>
                    </div>
                    <div className="job right-job">
                        <div className="content">
                            <h3>2016</h3>
                            <h4>Brenda Austin National Congresswoman</h4>
                            <p>I worked in her communication team for the midterm elections. Roles: Digital strategy, editorial and web design.</p>
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
                            <p>I was the Press Secretary for two periods. My main role was to coordinate the press team. I also coordinated the realease of its "digital platform" project what included the release of a brand new website, many changes in social media strategy and a general rebranding.</p>
                        </div>
                    </div>
                    <div className="job left-job">
                        <div className="content">
                            <h3>2010 - 2014</h3>
                            <h4>Freelancer</h4>
                            <p>Graphic and Web Design. Some of my clients were: Miguel Duarte Consultant &#40;2012-2014&#41;, Franja Morada UNC &#40;2011-2014&#41;, Cortés Olmedo &#40;law buffet&#41; &#40;2013&#41;, Infected Clothing &#40;2010-2011&#41;. I also got some experience using flash animations, WordPress, and other CMS and CRM platforms like PrestaShop and Moodle.</p>
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
