import React from 'react';

class Home extends React.Component {
    render(){
        return (
            <main>
                <div>
                    <div className="row" style={{ 'marginLeft': '3%', 'marginRight': '3%','textAlign': 'center', 'marginTop': '.5rem' }}>
                        <div className="col-lg-4">
                            <h3>Heading</h3>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        </div>
                        <div className="col-lg-4">
                            <h3>Heading</h3>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        </div>
                        <div className="col-lg-4">
                            <h3>Heading</h3>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Some Projects</h3>
                    <div className="row" style={{'marginTop': '.5rem',  'backgroundColor': '#F9F9F9'}}>
                        <div className="col-md-7">
                            <a href="#">
                                <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
                            </a>
                        </div>
                        <div className="col-md-5">
                            <h3>Project One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{'marginTop': '.5rem', 'backgroundColor': '#F9F9F9'}}>
                        <div className="col-md-5">
                            <h3>Project One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                        </div>
                        <div className="col-md-7">
                            <a href="#">
                                <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="row" style={{'marginTop': '.5rem', 'backgroundColor': '#F9F9F9'}}>
                        <div className="col-md-7">
                            <a href="#">
                                <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="" />
                            </a>
                        </div>
                        <div className="col-md-5">
                            <h3>Project One</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
                        </div>
                    </div>
                </div>


                <div>
                    <h3>References</h3>

                    <div className="card" style={{'marginTop': '.5rem'}}>
                        <div className="card-header">Quote</div>
                        <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        </div>
                    </div>

                    <div className="card" style={{'marginTop': '.5rem'}}>
                        <div className="card-header">Quote</div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>

                    <div className="card" style={{'marginTop': '.5rem'}}>
                        <div className="card-header">Quote</div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;