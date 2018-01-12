import React from 'react';
import Map from './Map.js';

class Contact extends React.Component {
    onSubmit(event){
        console.log(event)
        // var formData = new FormData(document.getElementsByName('yourForm')[0])
    }
    render(){
        return (
            <div className="container">
              < Map 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhIQ4d9JV5e_JQOqEsBRTzKjdg3sUhpjo&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
              <div style={{ 'textAlign': 'center'}}>

                  <div className="row" style={{ marginTop: "5rem" }}>
                    <div className="col-sm col-md-4">
                          <h3>Contact Details</h3>
                          <p>
                              <br />Albuquerque, NM
                              <br />
                          </p>
                          <p>
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                              <span> (505) 400-1198</span>
                          </p>
                          <p>
                              <i className="fa fa-envelope-o" aria-hidden="true"></i>
                              <a href="mailto:uriel621@live.com"> uriel621@live.com</a>
                          </p>
                          <p>
                              <i className="fa fa-clock-o" aria-hidden="true"></i>
                              <span> Monday - Friday: 9:00 AM to 5:00 PM</span>
                          </p>
                      </div>

                      <hr />
                      
                      <div className="col-sm col-md-8">
                          <h3>Send us a Message</h3>
                          <form onSubmit={ this.onSubmit } action="post" name="sentMessage" id="contactForm" noValidate="">
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Full Name:</label>
                                      <input type="text" className="form-control" id="name" required="" data-validation-required-message="Please enter your name." />
                                      <p className="help-block"></p>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Phone Number:</label>
                                      <input type="tel" className="form-control" id="phone" required="" data-validation-required-message="Please enter your phone number." />
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Email Address:</label>
                                      <input type="email" className="form-control" id="email" required="" data-validation-required-message="Please enter your email address." />
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div className="control-group form-group">
                                  <div className="controls">
                                      <label>Message:</label>
                                      <textarea rows="10" cols="100" className="form-control" id="message" required="" data-validation-required-message="Please enter your message" maxLength="999" style={{ "resize":"none" }}></textarea>
                                      <div className="help-block"></div>
                                  </div>
                              </div>
                              <div id="success"></div>
                              <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
                          </form>
                      </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default Contact;