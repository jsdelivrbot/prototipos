import React from 'react';
import { Button } from 'semantic-ui-react';

/**
 *   Valid food types (categories).
 */
const food_types = ['american', 'barbecue', 'buffet', 'burgers', 'chinese', 'fast casual', 'fast food',
'indian', 'italian', 'mediterranean', 'mexican', 'pizza', 'pub', 'sandwiches',
'seafood', 'sushi', 'tapas', 'teppanyaki', 'thai', 'vegetarian'];

const random_chooser = () => food_types[Math.floor(Math.random() * food_types.length)];

const FoodChooser = (props) => {
        //console.log(props)
       // console.log(props.food_chooser(food_types[Math.floor(Math.random() * food_types.length)]))
        return (
                <Button color='red' onClick = { () => props.food_chooser(food_types) }>Search</Button>
        )
}

export default FoodChooser;