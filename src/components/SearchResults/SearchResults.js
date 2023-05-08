import React, { useState } from "react";
import './SearchResults.css'
import TrackList from "../Tracklist/Tracklist";

const SearchResults = (props) => {

    return (
        <div id="searchResults">
            <h2 id="results">Results</h2>
            < TrackList />
        </div>
    )

}

export default SearchResults