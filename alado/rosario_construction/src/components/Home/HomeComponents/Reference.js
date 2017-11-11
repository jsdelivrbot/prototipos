import React from "react";

const Reference = () =>
    <div>
        <h3>References</h3>
        <div className="card" style={{'marginTop': '.5rem'}}>
            <div className="card-body">

                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer ">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>

                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>

                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                
            </div>
        </div>
    </div>

export default Reference;