import React, {Component} from "react";
import {withRouter} from 'react-router-dom';

class QuestionItem extends Component {
    render() {
        let {item, counter, history} = this.props;

        return (
            <div key={`question-${counter}`} className="list-item"
                 onClick={() => history.push(`/question/${counter}/${item.id}`)}>
                <div>
                    <span className="item-right">?</span>
                </div>
                <div className="item-body">
                    <h4>Question {counter}</h4>
                    <h5>Thème: <span>{item.theme}</span></h5>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(QuestionItem);
