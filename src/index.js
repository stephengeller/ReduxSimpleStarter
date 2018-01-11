import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAJYRA4ymHnb7eaoaf0O_coVz-h49F--x8';

const App = () => {
    return (
        <div>
        Hi!
            < SearchBar/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));