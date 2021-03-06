import React, {Component} from 'react';

/* Search bar class */
class SearchBar extends Component {
  /* Function called automatically each time a instance of the clss is created
   * Used to initialize variables and state.
   */
  constructor(props){
    super(props); /* Component already has contructor, call parent method */
    this.state = {term: ''};  /* Record user input */
  }
  /* Render function to return JSX component */
  render(){
      return(
        <div className = "search-bar">
          <input
            value = {this.state.term}
            onChange = {event => this.onInputChange(event.target.value)} />
        </div>
      );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

//Value of the input: {this.state.term}
  /* Another way to define event handlers */
  //onInputChange(event) {
  //    console.log(event.target.value);
  //}
}

export default SearchBar;
