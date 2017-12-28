import React from "react";

const header = {
    display: 'block',
    background: 'transparent',
    padding: '0 0 10px',
    borderBottom: '2px solid #5383d3'
}

const SomeAbout = () =>
    <div>
        <div className="row" style={{ 'textAlign': 'center', 'marginTop': '.5rem' }}>
            <div className="col-lg-4">
                <h4 style={ header }>GENERAL-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>SUB-<span style={{ 'color': '#5383d3' }}>CONTRACTING</span></h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-lg-4">
                <h4 style={ header }>CONCRETE-<span style={{ 'color': '#5383d3' }}>CONSTRUCTION</span></h4>
                <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
        </div>
    </div>

export default SomeAbout;