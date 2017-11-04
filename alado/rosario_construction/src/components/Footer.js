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
            <footer className="nice">
                <div className="row">
                    <div className="col-md-4 col-sm-6 footer-navigation">
                        <h3><a href="#">Company<span>logo</span></a></h3>
                        <p className="links"><a href="#">Home</a><strong>·</strong><a href="#">About</a><strong>·</strong><a href="#">Services</a><strong>·</strong><a href="#">Contact</a></p>
                        <p className="company-name">Company Name © 2017</p>
                    </div>
                    <div className="col-md-4 col-sm-6 footer-contacts">
                        <div><span className="fa fa-map-marker footer-contacts-icon"></span>
                            <p><span className="new-line-span">21 Revolution Street</span>Paris, France</p>
                        </div>
                        <div><i className="fa fa-phone footer-contacts-icon"></i>
                            <p className="footer-center-info email text-left">+1 555 123456</p>
                        </div>
                        <div><i className="fa fa-envelope footer-contacts-icon"></i>
                            <p><a href="#" target="_blank">support@company.com</a></p>
                        </div>
                    </div>
                    <div className="clearfix visible-sm-block"></div>
                    <div className="col-md-4 footer-about">
                        <h4>About the company</h4>
                        <p>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</p>
                        <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-github"></i></a></div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;