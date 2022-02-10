import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LangState, AuthState } from './context';

import * as dotenv from 'dotenv';

ReactDOM.render(
    <React.StrictMode>
        <AuthState>
            <LangState>
                <App />
            </LangState>
        </AuthState>
    </React.StrictMode>,
    document.getElementById('root'),
);
