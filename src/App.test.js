import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

test('renders without crushing and find text element', () => {
    const {getByText} = render(
        <Router>
            <App/>
        </Router>
    );
    const textElement = getByText(/Prêt pour un quiz?/i);
    expect(textElement).toBeInTheDocument();
});
