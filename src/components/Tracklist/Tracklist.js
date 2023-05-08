import React from "react";
import Track from "../Track/Track";
import { songs } from "../../data/mockData";




import './Tracklist.css'

const TrackList = (props) => {

    
    return (
        <div id="trackList">
            <h4>Track List: </h4>
            {songs.map((song) => {
                return (
                    < Track 
                    name={song.name}
                    artist={song.artist}
                    album={song.album}
                    id={song.id}
                />
                ) 
            })}
                

            <div className="searchTracks">

            </div>
        </div>
    )
}

export default TrackList
