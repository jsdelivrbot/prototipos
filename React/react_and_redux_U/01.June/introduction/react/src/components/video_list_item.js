/*jshint esversion: 6 */ 
/*jshint ignore:start */

import React from 'react';

const VideoListItem = (props) => {
    const imageUrl = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;
    console.log('VideoListItem props: ', props)

    const on_select = () => props.onVideoSelect(props.video)

    return (
        <li onClick = { on_select } className = 'list-group-item'>
            <div className = 'media-left'>
                <img className = 'media-heading' src = { imageUrl } />
            </div>
            
            <div className = 'media-body'>
                <div className = 'media-heading'>{ title }</div>
            </div>
        </li>
    )
}

export default VideoListItem;