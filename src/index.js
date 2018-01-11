import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAJYRA4ymHnb7eaoaf0O_coVz-h49F--x8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'surfboards',
        }, (videos) => {
            this.setState({videos});
            console.log(this.state.videos)
        });
    }

    render() {
        return (
            <div>
                < SearchBar/>
                < VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));