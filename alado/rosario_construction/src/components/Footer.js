import React from 'react';

const centered = {
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0, 
    right: 0,
}
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer bg-dark"  style={{ "color":"#fff", "height": "220px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm" style={ centered }>
                            <h6 className="title mb-4 font-bold">Company name</h6>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div className="col-sm" style={ centered }>Contact Info</div>
                    </div>
                </div>
                <div style={{ 'textAlign': 'center' }}>
                    <small>Design By <a style={{ 'textDecoration':'none', 'color': 'inherit' }} href="http://www.evergarcia.com" target="blank">Ever Uriel Garcia</a></small>
                </div>
            </footer>
        )
    }
}

export default Footer;

{/* <footer className="footer">
    <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
        <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="title mb-4 font-bold">Company name</h6>
           <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <hr />
        <div className="col-md-2 col-lg-2 col-xl-2" style={{ 'paddingLeft': 0, 'paddingRight': 0 }}>
            <h6 className="title mb-4 font-bold">Products</h6>
            <p><a href="#!">MDBootstrap</a></p>
            <p><a href="#!">MDWordPress</a></p>
            <p><a href="#!">BrandFlow</a></p>
            <p><a href="#!">Bootstrap Angular</a></p>
        </div>
    </div>
</footer> */}


