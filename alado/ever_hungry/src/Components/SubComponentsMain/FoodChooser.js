import React from 'react';
import { Button } from 'semantic-ui-react';

const FoodChooser = (props) => {
        return (
                <Button color='red' onClick = { () => props.food_chooser(props.all_foods) }>Search</Button>
        )
}

export default FoodChooser;