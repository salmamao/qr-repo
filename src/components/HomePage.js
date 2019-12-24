import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div id="home">
                <div className="overlay">
                    <div className="container">
                        <div className="content-heading text-center">
                            <h1>Ready for a Quiz ?  </h1>
                            <Link to="/questions" className="button">Let's GO !</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
    }

    }

export default HomePage;