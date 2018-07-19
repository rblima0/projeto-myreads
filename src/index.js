import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css'

ReactDOM.render(
    <BrowserRouter basename="/projeto-myreads">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();