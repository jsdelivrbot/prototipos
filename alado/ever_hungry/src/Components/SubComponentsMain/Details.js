import React from 'react';

const Details = (props) => {
    
    let lists = []
    if (!props) {
        return;
    }
    // console.log('props--> ', props.details[0].name)
    for(let i = 0; i < 5; i++) {
        lists.push(    <div className="restaurant" style={{ 'height': '20%' }} key={ i }>
                        <p style={{ 'margin': '0' }} className="restaurant-name">{ i }</p>
                        <p style={{ 'margin': '0' }} className="restaurant-address">201 N Los Angeles St #22a, Los Angeles</p>
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