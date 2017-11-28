import React from 'react'; //explicitly declare the use of react
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBqSXPRmhiju0U-T2EP6fVONQp3j-yAGqw';

// Create a new component. This componentshould produce
// some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
