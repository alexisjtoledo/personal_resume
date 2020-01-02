import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Footer extends Component {
    render() {
        return (
            <footer>
                <ul className="list-unstyled footer-menu">
                    <li>
                        <NavLink className="footer-element" activeClassName="active-menu" to="/about"><i className="fa fa-id-card-o" aria-hidden="true"></i><br/>About Me</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-element" activeClassName="active-menu" to="/experience"><i className="fa fa-bank" aria-hidden="true"></i><br/>Experience</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-element" activeClassName="active-menu" to="/education"><i className="fa fa-graduation-cap" aria-hidden="true"></i><br/>Education</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-element" activeClassName="active-menu" to="/skills"><i className="fa fa-code" aria-hidden="true"></i><br/>My Skills</NavLink>
                    </li>
                    <li>
                        <NavLink className="footer-element" activeClassName="active-menu" to="/portfolio"><i className="fa fa-briefcase" aria-hidden="true"></i><br/>Portfolio</NavLink>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer
