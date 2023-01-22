import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop/>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
