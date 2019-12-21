import React, { Component } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="topnav">
                <div className="container">
                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <div className="header-name">Alexis Toledo</div>
                </div>
            </nav>
        )
    }
}

export default Navigation
