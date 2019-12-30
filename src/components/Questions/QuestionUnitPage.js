import React, { Component } from "react";
import {compose} from "redux";
import {fetchQuestion, validateAnswer} from "../../actions/thunks/questions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import ReactModal from 'react-modal';
import Loader from "react-loader-spinner";

const mapStateToProps = (state, ownProps) => ({
    questions: state.questions.items,
    fetching: state.questions.fetching
});

const mapDispatchToProps = dispatch => ({
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    validateAnswer: (questionId, answer) => dispatch(validateAnswer(questionId, answer)),
});
class QuestionUnitPage extends Component {

    constructor(props) {
        super(props);
        this.state = {content: "", theme: "", id: "", answerValidation: "", validAnswerModal: false};
    }

    componentDidMount() {
        const { match: { params }, fetchQuestion } = this.props;
        if (params.questionId) {
            fetchQuestion(params.questionId);
        }
    }

    componentWillReceiveProps(nextProps) {
        let { match: { params }, questions } = nextProps;

        if (params.questionId && questions && questions.length > 0 && params.questionId === questions[0].id) {
            let question = questions[0];
            let { content, theme, id } = question;
            this.setState({content, theme, id});
        }
    }

    handleAnswer(id, answer) {
        const {validateAnswer} = this.props;
        validateAnswer(id, answer).then((res) => {
            this.setState({
                validAnswerModal: true,
                answerValidation: res.value.data.data[0]}
            )}, err => err)
    }


    render() {
        const { match: { params }, history, fetching} = this.props;
        let { content, theme, id, validAnswerModal, answerValidation } = this.state;

        if (fetching) {
            return <div className="loader">
                <Loader type="Rings" color="#333" height={80} width={80} timeout={3000}/>
            </div>
        }

        return (
         <div id="questions-list" className="question-unit">
             <div className="header-section">
                 <h2>question {params.counter}:<span className="highlight" style={{textTransform: 'capitalize'}}> {theme} </span></h2>
                 <h3><em>{content}</em></h3>
                 <div className="separator"><span></span></div>
                 <div className="answer-buttons">
                     <button className="button" onClick={() => this.handleAnswer(id, true)}>oui</button>
                     <button className="button" onClick={() => this.handleAnswer(id, false)}>non</button>

                 </div>
                 <button className="button return-button" onClick={() => history.push(`/questions`)}>
                     Retournez à la liste des questions
                 </button>
             </div>
             <ReactModal
                 isOpen={validAnswerModal}
                 style={customModalStyles}
                 contentLabel="Modal"
                 onRequestClose={() => this.setState({validAnswerModal: false})}
                 shouldCloseOnOverlayClick={true}>
                 <div className="validate-answer-modal">
                     {answerValidation}
                 </div>
             </ReactModal>
         </div>
        );
    }
}

export const customModalStyles = {
    overlay: {
        zIndex: 4,
        backgroundColor: "hsla(0,0%,4%,.45)"
    },
    content: {
        top: '40%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.4s ease-out 0s',
        boxShadow: '0 9px 46px 8px rgba(0, 0, 0, .14), 0 11px 15px -7px rgba(0, 0, 0, .12), 0 24px 38px 3px rgba(0, 0, 0, .2)',
        minWidth: '40rem',
        maxWidth: '50%',
        color:'#b97741',
        padding: '20px',
        textAlign: 'center',
        fontSize: '2rem',
        background: "#333",
        border: 'none',
    },
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(QuestionUnitPage);
