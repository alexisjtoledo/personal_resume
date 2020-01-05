import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePicture from '../img/profile.jpg';




export class Sidebar extends Component {
    render() {

        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img className="crop" src={ProfilePicture} alt="Alexis Toledo" />
                    <h3>Alexis Toledo</h3>
                    <p>Web & graphic designer</p>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <NavLink className="main-menu" activeClassName="active-menu" to="/about">About me</NavLink>
                    </li>
                    <li>
                        <NavLink className="main-menu" activeClassName="active-menu" to="/experience">Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className="main-menu" activeClassName="active-menu" to="/education">Education</NavLink>
                    </li>
                    <li>
                        <NavLink className="main-menu" activeClassName="active-menu" to="/skills">My Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className="main-menu" activeClassName="active-menu" to="/portfolio">Portfolio</NavLink>
                    </li>
                </ul>
                <ul id="social-media">
                    <li>
                        <a href="https://www.linkedin.com/in/alexistoledo/?locale=en_US" className="no-back" target="_blank" rel="noopener noreferrer"  alt="My linkedin Profile">
                            <i className="fa fa-linkedin" aria-hidden="true" alt="My linkedin Profile"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/alexisjtoledo" className="no-back" target="_blank" rel="noopener noreferrer" alt="My Github Repository">
                            <i className="fa fa-github" aria-hidden="true"  alt="Github Logo"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.flickr.com/photos/alexisjtoledo/albums" className="no-back" target="_blank" rel="noopener noreferrer" alt="My Flickr Account">
                            <i className="fa fa-flickr" aria-hidden="true" alt="Flickr Logo"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        )

    }
}


export default Sidebar
