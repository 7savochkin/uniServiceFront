import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router
} from "react-router-dom";


console.log("Hello world!");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Suspense fallback={<p>Error</p>}>
            <Router>
                <App/>
            </Router>
        </Suspense>
    // </React.StrictMode>
);
