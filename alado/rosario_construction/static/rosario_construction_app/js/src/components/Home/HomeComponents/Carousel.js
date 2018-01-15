import React from 'react';

class Carousel extends React.Component {
    render(){
        return (
            <div>
                <header>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">

                        <div className="carousel-item active" style={{"backgroundImage": "url('https://cecoop.coopwebbuilder2.com/sites/cecoop/files/Clark%20Electric%20Coop/Services/Construction/Residentual-Home-Construction%20Pic.jpg')"}}>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h3>First Slide</h3>
                            <p>This is a description for the first slide.</p>
                        </div> */}
                        </div>
                
                        <div className="carousel-item" style={{"backgroundImage": "url('static/rosario_construction_app/images/block_walls_3/image_1.jpg')"}}>
                        {/* <div className="carousel-caption d-none d-md-block"> 
                            <h3>Second Slide</h3>
                            <p>This is a description for the second slide.</p>
                        </div> */}
                        </div>

                        <div className="carousel-item" style={{"backgroundImage": "url('http://www.billfrymire.com/gallery/weblarge/house-plan-blueprints-drafting-construction.jpg')"}}>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h3>Third Slide</h3>
                            <p>This is a description for the third slide.</p>
                        </div> */}
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Carousel;