import React from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      < Header />

      <body>
        < SearchBar />
                
      </body>      
    </div>
  );
}

export default App;
