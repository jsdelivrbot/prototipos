/*jshint esversion: 6 */ 
/*jshint ignore:start */
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const destination = document.querySelector(".container");
const API_KEY = 'AIzaSyA1-xIGGFLGXREQFO5L07MXUX_LJ59TmmU';

// Create a new component. This component should produce somw HTML
 class App extends React.Component {
   constructor(props){ //always props
    super(props)
    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.state = { 
      videos: [], 
      selectedVideo: null 
    };

    
   }
    onVideoSelect(selectedVideo) { //or handleInputChange // run this code
        console.log('selectedVideo: ', selectedVideo)
        //console.log(this.state)
        this.setState({ selectedVideo })
    }

    videoSearch(term) {
      YTSearch({ key: API_KEY, term: term }, (data) => { //videos
        console.log(data)
        this.setState({ 
          videos: data, // this.setState({ videos: videos }) or this.setState({ videos }) AJAX
          selectedVideo: data[0]
        }) 
      })
    }
   
   render() {//pass props - videos
     return (
      <div>
          <SearchBar onSearchTermChange = { term => this.videoSearch(term) }/>
          <VideoDetail video = { this.state.selectedVideo }/>
          <VideoList
            onVideoSelect = { this.onVideoSelect }
            videos = { this.state.videos } 
            />
      </div>
    );
   }

 }

 // This puts it on the DOM
  ReactDOM.render(
    <App />, // The Component
    destination //Where the component will be placed
  );

  /*jshint ignore:end */
  /*
    A component is a fucntion or object that returns an amount of HTML
    
  */
