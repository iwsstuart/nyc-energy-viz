import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
// import 'semantic-ui-less/semantic.less';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root'), // eslint-disable-line no-undef
);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>; // eslint-disable-line react/prop-types
// }
//
// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root'), // eslint-disable-line no-undef
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);
