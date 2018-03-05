import React from 'react';
import { Segment } from 'semantic-ui-react';

import FoodChoice from './SubComponentsMain/FoodChoice';
import FoodChooser from './SubComponentsMain/FoodChooser';
import Details from './SubComponentsMain/Details';



const main_style = {
    height: '80%',
    margin: '0',
    backgroundImage:    `linear-gradient(rgba(255,255,255,.75), 
                        rgba(255,255,255,.75)), 
                        url('./assets/images/background3.jpg')`
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen_food: '',
            food_chooser: 'food_types',
            details: []
        }

        this.map;
        this.infowindow;
        this.gLocation;
        this.food_types =   [   'american', 'barbecue', 'buffet', 'burgers', 'chinese', 'fast casual', 'fast food',
                                'indian', 'italian', 'mediterranean', 'mexican', 'pizza', 'pub', 'sandwiches',
                                'seafood', 'sushi', 'tapas', 'teppanyaki', 'thai', 'vegetarian'
                            ];
        
        this.current_location();
        this.get_the_food = this.get_the_food.bind(this);
        this.callback = this.callback.bind(this);
    }



    initMap(lat, lng, food='pizza'){
        if(!lat || !lng) {
            return;
        }
        let pyrmont = {lat: lat, lng: lng};

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
        });

        this.infowindow = new google.maps.InfoWindow();
        let service = new google.maps.places.PlacesService(this.map);
            service.nearbySearch({
                location: pyrmont,
                rankBy: google.maps.places.RankBy.DISTANCE,
                types: ['restaurant'],
                keyword:food
            }, this.callback);
    }

    callback(results, status) {
        let detail_list = [];
        let kik = [];
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                if(i < 5){ 
                    this.createMarker(results[i]);
                    detail_list.push(results[i]);
                }
                else {
                    break;
                }
                
            }
        }
        this.setState({ 'details': detail_list});
    }

    createMarker(place) {
        let placeLoc = place.geometry.location;
        let marker = new google.maps.Marker({
            map: this.map,
            position: place.geometry.location
        });
        let infowindow = this.infowindow
        let map = this.map
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }


    current_location(){
        const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA1-xIGGFLGXREQFO5L07MXUX_LJ59TmmU';
        fetch(url, {method: 'post'})
            .then(response => response.json())
            .then(data => {
                this.gLocation = data.location;
                // initMap(gLocation.lat, gLocation.lng);
            })
    }

    get_the_food (food_array) {
        console.log('get_the_food()');
        let value = food_array[Math.floor(Math.random() * food_array.length)];
        this.setState({chosen_food: value});
        this.initMap(this.gLocation.lat, this.gLocation.lng, value)
        this.props.map(document.getElementById('map'))
    }

    details(){
        console.log('details() ', this.currentList)
        if(this.currentList){
            return (
                <Details details = { this.currentList } />
            )
        }
    }

    render(){
        return (
                <Segment.Group style = { main_style }>
                    <Segment style = {{ background: 'transparent', height: '10%' }}>
                        <FoodChoice food = { this.state.chosen_food } />
                    </Segment>
                    <Segment style = {{ background: 'transparent', height: '25%' }}>
                        <FoodChooser all_foods={ this.food_types } food_chooser = { this.get_the_food }/>
                    </Segment>
                    <Segment style = {{ background: 'transparent', height: '65%', 'overflow':'auto' }}>
                        <Details details={ this.state.details } />
                        {/* { this.details() } */}
                    </Segment>
                </Segment.Group>
            )
        }
    }

    export default Main;
    {/* <div style={{backgroundImage: "url('./assets/images/background3.jpg')"}}> */}