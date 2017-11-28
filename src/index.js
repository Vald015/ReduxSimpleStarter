import React from 'react'; //explicitly declare the use of react
import ReactDOM from 'react-DOM';

// Create a new component. This componentshould produce
// some HTML

const App = function(){
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
React.render(App);
