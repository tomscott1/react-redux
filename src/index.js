import React from 'react';
import ReactDOM from 'react-dom';

// Create a new componenet. This comonent should produce some HTML
const App = () => {
  return <div> Hello </div>;
};
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));