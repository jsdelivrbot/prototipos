/*jshint esversion: 6 */ 
/*jshint ignore:start */
import React from 'react';

const VideoDetail = (props) => {
    console.log("PRPS VIDEO-detail", props)

    if(!props.video){
        return <div>Loading...</div>
    }
    const videoId = props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`; //if js variable use brackets

    const title = props.video.snippet.title; 
    const description = props.video.snippet.description;
    console.log(title)
    
    return (
        <div className = 'video-detail col-md-8'>
            <div className = 'embed-responsive embed-responsive-16by9'>
                <iframe className = 'embed-responsive-item' src = { url }></iframe>
            </div>
            <div className = 'details'>
                <div>{ title }</div> 
                <div>{ description }</div>
            </div>
        </div>
    )
};

export default VideoDetail