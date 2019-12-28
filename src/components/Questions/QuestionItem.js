import React, { Component } from "react";

class QuestionItem extends Component {
    render() {
        let {item, counter} = this.props;

        return (
            <div key={`question-${counter}`} className="list-item">
                <div>
                    <span className="item-right">?</span>
                </div>
                <div className="item-body">
                    <h4>Question {counter}</h4>
                    <h5>Theme: <span>{item.theme}</span></h5>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    }
}

export default QuestionItem;
