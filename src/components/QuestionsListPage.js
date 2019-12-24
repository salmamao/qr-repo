import React, {Component} from "react";

class QuestionsListPage extends Component {
    render() {
        return (
            <div id="questions-list">
                <div className="header-section">
                    <h2>Questions <span className="highlight">list</span></h2>
                    <h5><em>choose the question you want to answer</em></h5>
                    <div className="separator"><span></span></div>
                </div>
                <div className="container">
                    <div className="row list-section">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="list-item">
                                <div className="item-right">
                                    <span>?</span>
                                </div>
                                <div className="item-body">
                                    <h4>Question 1</h4>
                                    <h5>theme of the first question</h5>
                                    <p>Lorem Ipsum Dolor leo, ridiculus est ut cubilia nec,
                                        fermentum arcu praesent. Eget arcu vitae mauris amet odio ?</p>
                                </div>
                            </div>
                            <div className="list-item">
                                <div className="item-right">
                                    <span>?</span>
                                </div>
                                <div className="item-body">
                                    <h4>Question 2</h4>
                                    <h5>theme of the second question</h5>
                                    <p>Lorem Ipsum Dolor leo, ridiculus est ut cubilia nec,
                                        fermentum arcu praesent. Eget arcu vitae mauris amet odio ?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default QuestionsListPage;