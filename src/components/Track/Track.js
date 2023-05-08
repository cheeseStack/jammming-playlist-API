import React from "react";

import './Track.css'


const Track = (props) => {

    return (
        <div className="track">
            <div className="tractInformation">
                <h3><span className="joins">title: </span>{props.name}</h3>
                <div className="artistAlbumId">
                    <h4 className="artist"><span className="joins">artist: </span> {props.artist}</h4>
                    <p className="album"><span className="joins">album: </span>{props.album}</p>
                    <p className="songId"><span className="joins">id: </span>{props.id}</p>
                </div>
                
            </div>
            <div className="addButtonDiv">
                <button type="submit" className="addButton"> Add to Playlist </button>
            </div>
        </div>
    )
}

export default Track