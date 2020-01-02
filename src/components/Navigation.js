import React, { Component } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="topnav">
                <div className="container">
                    <div className="header-name">Alexis Toledo</div>
                    <button type="button" className="btn btn-info">
                        <a href="mailto:alexis.toledo@live.com" target="_blank" rel="noopener noreferrer">&nbsp;<i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;</a>
                    </button>
                </div>
            </nav>
        )
    }
}

export default Navigation
