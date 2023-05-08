import React, { useState } from "react";

import './SearchBar.css'


let searchBoxValue;
function SearchBar(props) {

    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        searchBoxValue = event.target.value.toLowerCase()
        setSearchTerm(searchBoxValue)
    
    }

    return (
        <div id="searchBar" >
            <form action="#" id="searchForm">
                <input type="search" id="search" value={searchTerm} placeholder="Enter a song, artist, or album . . ." onChange={handleChange}/>
                <input type="submit" value="Search" id="searchButton"/>
            </form>
            <div className="searchTerm">
                <h3>You searched for: {searchTerm}</h3>
            </div>
        </div>
    )
}

export default SearchBar

export { searchBoxValue }