import React from 'react';
import './styles/app.scss';
import {Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuestionsListPage from "./components/Questions/QuestionsListPage";
import QuestionUnitPage from "./components/Questions/QuestionUnitPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const urls = {
    home_page: '/',
    questions_list: '/questions',
    question_unit: '/question(/:questionId)',
};

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <Switch>
                <Route exact path={urls.home_page} component={HomePage}/>
                <Route path={urls.questions_list} component={QuestionsListPage}/>
                <Route path={urls.question_unit} component={QuestionUnitPage} />
            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
