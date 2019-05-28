// import React, { Component } from 'react';
// or when using function below
import React from 'react';
import './Hello.css'

// class Hello extends Component {
//   render() {
//     return (
//       <div className='f1 tc'>
//         <h1>Women Rule!</h1>
//         <p>{this.props.greeting}</p>
//       </div>
//     );
//   }
// }

// is a function, the same as
const Hello = (props) => {
    return (
      <div className='f1 tc'>
        <h1>Women Rule!</h1>
        <p>{props.greeting}</p>
      </div>
    );
}



export default Hello;