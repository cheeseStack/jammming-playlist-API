// Codecademy page: 
// https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-front-end-development/tracks/fscj-22-react-part-ii/modules/wdcp-22-jammming-54dd6aa4-39da-42be-989f-67a12f65b1a8/kanban_projects/jammming-react18


import React from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      < Header />

      <body>
        < SearchBar />
        <div id="resultsAndTracklist">  
          < SearchResults />

        </div>
                
      </body>      
    </div>
  );
}

export default App;
