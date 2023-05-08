import React, { useState } from "react";

import './SearchBar.css'

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const searchBox = event.target.querySelector('input[id="search"]').value
        setSearchTerm(searchBox)

    }

    return (
        <div id="searchBar" onSubmit={handleSubmit}>
            <form action="#" id="searchForm">
                <input type="text" id="search" placeholder="Enter a song, artist, or album . . ." />
                <input type="submit" value="Search" id="searchButton"/>
            </form>
            <div className="searchTerm">
                <h3>You searched for: {searchTerm}</h3>
            </div>

        </div>
    )
}

export default SearchBar