import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


    

ReactDOM.render(<App />, document.getElementById('body'));
// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));
// ReactDOM.render(<Slider />, document.getElementById('sliders'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
