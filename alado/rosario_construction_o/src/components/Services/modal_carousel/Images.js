import React from 'react'

const Images = (props) => {
    console.log(props.pics)
    let img = props.pics.map((src, index) => {
        let image = null;
        if(index === 0){
            image = <div className="carousel-item active" style={{ height: 'auto' }} key={ index } >
                        <img className="d-block w-100" src={ src } alt="First slide" />
                    </div>  
        }
        else{
            image = <div className="carousel-item" style={{ height: 'auto' }} key={ index } >
                        <img className="d-block w-100" src={ src } alt="First slide" />
                    </div>
        }
        return image;
    })
    return (
        <div>
           { img }
        </div>
    );
}

export default Images;

