import './index.css';

import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { themeOptions } from './common/Theme/ThemeOptions';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={themeOptions}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
