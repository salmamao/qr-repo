import React from 'react';
import './styles/app.scss';
import {Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionsListPage from "./components/Questions/QuestionsListPage";
import QuestionUnitPage from "./components/Questions/QuestionUnitPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const urls = {
    home_page: '/',
    questions_list: '/questions',
    question_unit: '/question/:counter/:questionId',
};

function App(props) {
    return (
        <React.Fragment>
            <NavBar/>
            <Switch>
                <Route exact path={urls.home_page} component={HomePage}/>
                <Route path={urls.questions_list} component={QuestionsListPage}/>
                <Route path={urls.question_unit} component={QuestionUnitPage} />
            </Switch>
            {!props.location.pathname.endsWith("/") && <Footer/>}
        </React.Fragment>
    );
}

export default withRouter(App);
