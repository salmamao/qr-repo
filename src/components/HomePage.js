import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div id="home" style={{backgroundImage: "url('./image.png')"}}>
                <div className="overlay">
                    <div className="container">
                        <div className="content-heading text-center">
                            <h1>Prêt pour un quiz?</h1>
                            <Link to="/questions" className="button">C'est partie !</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;