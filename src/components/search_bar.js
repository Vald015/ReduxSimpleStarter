import React, {Component} from 'react';

/* Search bar class */
class SearchBar extends Component {
  /* Render function */
  render(){
      return <input onChange = {event => console.log(event.target.value)} />; /* Return JSX component */
  }

  //onInputChange(event) {
  //    console.log(event.target.value);
  //}
}

export default SearchBar;
