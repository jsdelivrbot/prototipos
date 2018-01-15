import React from "react";
import { Link } from 'react-router-dom';

const SomeProjects = () =>
    <div>

        <h2 style={{ 'textAlign':'center' }}>Some Projects</h2>
        <hr />
        <div className="row" style={{'marginTop': '.5rem',  'backgroundColor': '#F9F9F9', 'border': '1px solid rgba(0,0,0,.125)'}}>
            <div className="col-md-7">
            <Link to="/services">
                <img className="img-fluid rounded mb-3 mb-md-0" src='static/rosario_construction_app/images/concrete/image_4.jpg' alt="" />
            </Link>
            </div>
            <div className="col-md-5">
                <h3 style={{ 'textAlign':'center', 'color': '#5383d3' }}>Project One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
            </div>
        </div>
        <hr />
        <div className="row" style={{'marginTop': '.5rem',  'backgroundColor': '#F9F9F9', 'border': '1px solid rgba(0,0,0,.125)'}}>
            <div className="col-md-7">
                <Link to="/services">
                        <img className="img-fluid rounded mb-3 mb-md-0" src="static/rosario_construction_app/images/plaster/image_1.jpg" alt="" />
                </Link>  
                {/* src="http://placehold.it/700x300" */}
            </div>
            <div className="col-md-5">
                <h3 style={{ 'textAlign':'center', 'color': '#5383d3' }}>Project Two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
            </div>
        </div>
        <hr />
        <div className="row" style={{'marginTop': '.5rem', 'backgroundColor': '#F9F9F9', 'border': '1px solid rgba(0,0,0,.125)'}}>
            <div className="col-md-7">
                <Link to="/services">
                    <img className="img-fluid rounded mb-3 mb-md-0" src="static/rosario_construction_app/images/block_walls_1/image_2.jpg" alt="" />
                </Link>
            </div>
            <div className="col-md-5">
                <h3 style={{ 'textAlign':'center', 'color': '#5383d3' }}>Project Three</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
            </div>
        </div>
    </div>

export default SomeProjects;