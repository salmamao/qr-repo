import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div id="menu">
                <nav>
                    <div className="container">
                            <ul className="nav">
                                <li><NavLink exact activeClassName="active" to="/" className="scroll">Get Started!</NavLink></li>
                                <li><NavLink activeClassName="active" to="/questions" className="scroll">Questions</NavLink></li>
                            </ul>
                    </div>
                </nav>

            </div>
        );
    }

}

export default NavBar;
