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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state  {date: new Date()};
  }

  // manditory
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.react(
  <Clock />,
  document.getElementById('root')
);

// common syntax 
// props, state, react components

