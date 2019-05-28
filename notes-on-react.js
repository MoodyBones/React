//////////////////////
// React

// was created by facebook
// a tool, that allows them to build a website in a predictable way that can have multiple developers working on at the same time

// allows the dom to change in predictable ways, thats easy to scale and manage

//  used in
// mobile devices to build native apps
// virtual reality apps
// desktop apps
// anywhere that has a view

// facebook, instagram, netflix

// princibles
// thinking in components

// atoms
// icons

// molecules
// combine atoms that have similar functionality

// organisms
// bigger than molecules

// templates
// a combination of organisms

// pages
// the page of your app


// like lego blocks



// One Way Data Flow
// data flows from top to bottom

// creates bug free code


// Virtual DOM
// important to minimise DOM manipulation, because of bugs and speed

// Virtual DOM is JS object
// it describes the current state of the website
// the react-bot will automatically make changes to the DOM in the most optimine way possible

// react takes care of event handlers and query selectors
// react changes the view


// Eco-System
// has a great eco-system
// npm, node.js, babel, react/router, webpack etc


// Example React Code

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state  {date: new Date()};
//   }

//   // manditory
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.react(
//   <Clock />,
//   document.getElementById('root')
// );

// common syntax 
// props, state, react components


// react scripts replaces webpack/babel etc.
// use eject to customize


// manifest.json
// new feature that allows users to download an shortcut to your website and have an icon on their desktop

// favicon
// icon in title bar


///////////////
// To Update
// create react app (orr any other)

// open package.json
// update dependencies {"react-scripts": "2.1.1"} 
// to updated version number

// then run in terminal
// npm install
// this will read the package file, and reinstall using react scripts newer version

// then to check its working
// run, 



// ////
// Remember updating can cause bugs!!!

// & the reason we have a package.json, is so we can give it to other developers
// that are working on the same project, so they know what versions to use :)


// we can use import because react has webpack built in
// as long as we keep them at the top
import React from 'react';

// for mobile/other
import ReactDOM from 'react-dom';

// react allows to add css to each component
// ./ means its in the same folder
import './index.css';

// if there is no .js it will assume e.g. ./App.js
import App from './App';

// service worker is a new feature that allows offline work
import * as serviceWorker from './serviceWorker';

// Tacyons
// predefined classnames (like bootstrap) we can add to components
// to make things look nice 
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello React Ninja'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// COMPONENTS
// naming standard is to capitilize
// e.g. Hello.js


// Create React App
// shows you the errors in the browser, without needing the console




// JSX
// it allows you to write html like syntax in a js file
// similar to html, but not
// react uses JSX to create a virtual (fake) DOM
// className vs class

// seperation of concerns
// it's better to have functionality and styles per componenet
// each component is seperate
