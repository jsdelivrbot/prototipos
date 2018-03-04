import React from 'react';

const Details = (props) => {
    
    let lists = []
    if (!props.details.length) {
        return (
            <div></div>
        );
    }
    console.log('props in details--> ', !!props.details)
    for(let i = 0; i < 5; i++) {
        lists.push(    <div className="restaurant" style={{ 'height': '20%' }} key={ i }>
                        <p style={{ 'margin': '0' }} className="restaurant-name">{ props.details[i].name }</p>
                        <p style={{ 'margin': '0' }} className="restaurant-address">{ props.details[i].vicinity }</p>
                        {/* <button>Photos</button> */}
                        <button>Directions</button>
                    </div>)
    }
    return (
        <div>
            {
                lists.map((list, index) => list)
            }
        </div>
    )
}

export default Details