import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div id="menu">
                <nav>
                    <div className="container">
                            <ul className="nav">
                                <li><NavLink exact activeClassName="active" to="/" className="scroll">Commencer !</NavLink></li>
                                <li><NavLink isActive={(match, location) => {
                                    match = location.pathname.startsWith("/question");
                                    if (match) {return true}
                                }}
                                    activeClassName="active" to="/questions" className="scroll">Questions</NavLink></li>
                            </ul>
                    </div>
                </nav>

            </div>
        );
    }

}

export default NavBar;
