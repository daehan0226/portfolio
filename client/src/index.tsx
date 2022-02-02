import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LangState from './context/lang';

import * as dotenv from 'dotenv';

ReactDOM.render(
    <React.StrictMode>
        <LangState>
            <App />
        </LangState>
    </React.StrictMode>,
    document.getElementById('root'),
);
