import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/thunks/questions';
import QuestionItem from "./QuestionItem";

const mapStateToProps = (state, ownProps) => ({
    questions: state.questions.items,
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
});
class QuestionsListPage extends Component {
    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const {questions} = this.props;
        let counter = 0;

        if (questions && questions.length > 0) {
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
                                {questions.map((item) => { counter++;
                                        return <QuestionItem key={counter} counter={counter} item={item}/>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsListPage);