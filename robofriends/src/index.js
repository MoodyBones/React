// we can use import because react has webpack built in
// as long as we keep them at the top
import React from 'react';
import ReactDOM from 'react-dom';
// react allows to add css to each component
// ./ means its in the same folder
import './index.css';
// import Hello from './example-react';
// service worker is a new feature that allows offline work
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// ReactDOM.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
