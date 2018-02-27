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

/**
 *  locationSuccess - Handle success callback for getting geolocation information.
 *    Data returned from API.
 */
// function locationSuccessCurrent(data){
//     console.log('locationSuccessCurrent');
//     console.log(data.location);
//     gLocation = data.location;
// }
let gLocation = null
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen_food: '',
            food_chooser: 'food_types',
            details: currentList
        }
        console.log('currentList ', currentList)
        this.current_location();
        this.get_the_food = this.get_the_food.bind(this);
    }


    current_location(){
        console.log('Palms')
        const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyA1-xIGGFLGXREQFO5L07MXUX_LJ59TmmU';
        fetch(url, {method: 'post'})
            .then(response => response.json())
            .then(data => {
                gLocation = data.location;
                initMap(gLocation.lat, gLocation.lng);
            })

        // fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.1445,-106.6447&rankby=distance&type=restaurant&keyword=food&key=AIzaSyA1-xIGGFLGXREQFO5L07MXUX_LJ59TmmU')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //first ajax call to get longitude and latitude from current location
        // $.ajax({
        //     url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCJClzDDzSQKXcCAw9UlCm2C8L4ypBj-tg',
        //     dataType: 'json',
        //     method: 'post',
        //     success: locationSuccessCurrent,
        //     error: locationErrorCurrent
        // })
    }

    get_the_food (food_array) {     
        var value = food_array[Math.floor(Math.random() * food_array.length)];
        this.setState({chosen_food: value});
        initMap(gLocation.lat, gLocation.lng, value);
    }

    details(){
        if(currentList){
            return (
                <Details details = { currentList } />
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
                        <FoodChooser food_chooser = { this.get_the_food }/>
                    </Segment>
                    <Segment style = {{ background: 'transparent', height: '65%', 'overflow':'auto' }}>
                        {/* <Details details = { currentList } /> */}
                        { this.details() }
                    </Segment>
                </Segment.Group>
            )
        }
    }

    export default Main;
    {/* <div style={{backgroundImage: "url('./assets/images/background3.jpg')"}}> */}