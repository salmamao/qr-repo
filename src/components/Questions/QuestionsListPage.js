import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/thunks/questions';
import QuestionItem from "./QuestionItem";
import Loader from 'react-loader-spinner'

const mapStateToProps = (state, ownProps) => ({
    questions: state.questions.items,
    fetching: state.questions.fetching,
});

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
});
class QuestionsListPage extends Component {

    componentDidMount() {
        this.props.fetchQuestions();
    }

    render() {
        const {questions, fetching} = this.props;
        let counter = 0;
        if (fetching) {
            return <div className="loader">
                <Loader type="Rings" color="#333" height={80} width={80} timeout={0}/>
            </div>
        }

        if (questions && questions.length > 0) {
            return (
                <div id="questions-list">
                    <div className="header-section">
                        <h2><span className="highlight">Liste</span> des questions </h2>
                        <h5><em>choisissez la question à laquelle vous souhaitez répondre</em></h5>
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