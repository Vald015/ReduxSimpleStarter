import React,{Component} from 'react'; //explicitly declare the use of react
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBqSXPRmhiju0U-T2EP6fVONQp3j-yAGqw';

// Create a new component. This componentshould produce
// some HTML
class App extends Component{

  constructor(props){
    super(props);

    this.state = { videos : [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // this.setState ({ videos : videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));
