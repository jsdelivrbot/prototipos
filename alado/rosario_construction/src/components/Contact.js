import React from 'react';

class Contact extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <iframe width="100%" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <h3>Contact Details</h3>
                        <p>
                            3481 Melrose Place
                            <br />Beverly Hills, CA 90210
                            <br />
                        </p>
                        <p>
                            <abbr title="Phone">P</abbr>: (123) 456-7890
                        </p>
                        <p>
                            <abbr title="Email">E</abbr>:
                            <a href="mailto:name@example.com">name@example.com</a>
                        </p>
                        <p>
                            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <h3>Send us a Message</h3>
                        <form name="sentMessage" id="contactForm" noValidate="">
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
        )
    }
}

export default Contact;

{/* <div style="height: 400px; width: 100%" class="section" id="map" style="position: relative; overflow: hidden;">
  <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
    <div class="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
      <div tabindex="0" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
        <div style="z-index: 1; position: absolute; top: 0px; left: 0px; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, 0);">
          <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
              <div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
                <div style="width: 256px; height: 256px; position: absolute; left: 493px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 749px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 749px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 493px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 493px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 749px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 237px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 237px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: 237px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: -19px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: -19px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; position: absolute; left: -19px; top: -152px;"></div>
              </div>
            </div>
          </div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
            <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
              <div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 493px; top: 104px;">
                  <canvas draggable="false" height="256" width="256" style="user-select: none; position: absolute; left: 0px; top: 0px; height: 256px; width: 256px;"></canvas>
                </div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 749px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 749px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 493px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 493px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 749px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 237px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 237px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 237px; top: -152px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -19px; top: 104px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -19px; top: 360px;"></div>
                <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: -19px; top: -152px;"></div>
              </div>
            </div>
          </div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
            <div aria-hidden="true" style="position: absolute; left: 0px; top: 0px; z-index: 1; visibility: inherit;">
              <div style="position: absolute; left: 493px; top: 104px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9372!3i17488!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=129802"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 749px; top: 104px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9373!3i17488!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=116201"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 493px; top: -152px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9372!3i17487!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=13706"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 749px; top: 360px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9373!3i17489!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=101226"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 237px; top: 104px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9371!3i17488!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=12332"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 237px; top: 360px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9371!3i17489!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=128428"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: -19px; top: 360px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9370!3i17489!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=10958"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 237px; top: -152px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9371!3i17487!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=27307"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: -19px; top: -152px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9370!3i17487!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=40908"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 749px; top: -152px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9373!3i17487!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=105"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: -19px; top: 104px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9370!3i17488!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=25933"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
              <div style="position: absolute; left: 493px; top: 360px; transition: opacity 200ms ease-out;"><img draggable="false" alt="" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i15!2i9372!3i17489!4i256!2m3!1e0!2sm!3i398094763!3m14!2sen-US!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcy50OjV8cC5zOi0xMDB8cC5sOjY1fHAudjpvbixzLnQ6MnxwLnM6LTEwMHxwLmw6NTF8cC52OnNpbXBsaWZpZWQscy50OjQ5fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDo1MHxwLnM6LTEwMHxwLmw6MzB8cC52Om9uLHMudDo1MXxwLnM6LTEwMHxwLmw6NDB8cC52Om9uLHMudDo0fHAuczotMTAwfHAudjpzaW1wbGlmaWVkLHMudDoxOHxwLnY6b2ZmLHMudDo2fHMuZTpsfHAudjpvbnxwLmw6LTI1fHAuczotMTAwLHMudDo2fHMuZTpnfHAuaDojZmZmZjAwfHAubDotMjV8cC5zOi05Nw!4e0&amp;token=114827"
                style="width: 256px; height: 256px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
            </div>
          </div>
        </div>
        <div class="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;">
          <p class="gm-style-pbt"></p>
        </div>
        <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px;">
          <div style="z-index: 1; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px;"></div>
        </div>
        <div style="z-index: 4; position: absolute; top: 0px; left: 0px; width: 100%; transform-origin: 0px 0px 0px; transform: matrix(1, 0, 0, 1, 0, 0);">
          <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;"></div>
          <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
        </div>
      </div>
      <div style="margin-left: 5px; margin-right: 5px; z-index: 1000000; position: absolute; left: 0px; bottom: 0px;">
        <a target="_blank" href="https://maps.google.com/maps?ll=-12.043333,-77.038375&amp;z=15&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3" title="Click to see this area on Google Maps" style="position: static; overflow: visible; float: none; display: inline;">
          <div style="width: 66px; height: 26px; cursor: pointer;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 66px; height: 26px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></div>
        </a>
      </div>
      <div style="background-color: white; padding: 15px 21px; border: 1px solid rgb(171, 171, 171); font-family: Roboto, Arial, sans-serif; color: rgb(34, 34, 34); box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 16px; z-index: 10000002; display: none; width: 256px; height: 148px; position: absolute; left: 291px; top: 110px;">
        <div style="padding: 0px 0px 10px; font-size: 16px;">Map Data</div>
        <div style="font-size: 13px;">Map data ©2017 Google</div>
        <div style="width: 13px; height: 13px; overflow: hidden; position: absolute; opacity: 0.7; right: 12px; top: 12px; z-index: 10000;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/mapcnt6.png" draggable="false" style="position: absolute; left: -2px; top: -336px; width: 59px; height: 492px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
        <img
        alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" style="width: 37px; height: 37px; user-select: none; border: 0px; padding: 0px; margin: 0px; position: absolute; right: 0px; top: 0px; z-index: 10001; cursor: pointer;"></div>
      <div class="gmnoprint" style="z-index: 1000001; position: absolute; right: 161px; bottom: 0px; width: 121px;">
        <div draggable="false" class="gm-style-cc" style="user-select: none; height: 14px; line-height: 14px;">
          <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
            <div style="width: 1px;"></div>
            <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
          </div>
          <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a style="color: rgb(68, 68, 68); text-decoration: none; cursor: pointer; display: none;">Map Data</a><span>Map data ©2017 Google</span></div>
        </div>
      </div>
      <div class="gmnoscreen" style="position: absolute; right: 0px; bottom: 0px;">
        <div style="font-family: Roboto, Arial, sans-serif; font-size: 11px; color: rgb(68, 68, 68); direction: ltr; text-align: right; background-color: rgb(245, 245, 245);">Map data ©2017 Google</div>
      </div>
      <div class="gmnoprint gm-style-cc" draggable="false" style="z-index: 1000001; user-select: none; height: 14px; line-height: 14px; position: absolute; right: 0px; bottom: 0px;">
        <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
          <div style="width: 1px;"></div>
          <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
        </div>
        <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" style="text-decoration: none; cursor: pointer; color: rgb(68, 68, 68);">Terms of Use</a></div>
      </div>
      <button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" style="background: none; border: 0px; margin: 10px 14px; padding: 0px; position: absolute; cursor: pointer; user-select: none; width: 25px; height: 25px; overflow: hidden; top: 0px; right: 0px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/sv9.png" draggable="false" class="gm-fullscreen-control" style="position: absolute; left: -52px; top: -86px; width: 164px; height: 175px; user-select: none; border: 0px; padding: 0px; margin: 0px;"></button>
      <div
      class="gmnoprint gm-bundled-control" draggable="false" controlwidth="28" controlheight="55" style="margin: 10px; user-select: none; position: absolute; left: 0px; top: 0px;">
        <div class="gmnoprint" controlwidth="28" controlheight="55" style="position: absolute; left: 0px; top: 0px;">
          <div draggable="false" style="user-select: none; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px; cursor: pointer; background-color: rgb(255, 255, 255); width: 28px; height: 55px;">
            <button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 28px; height: 27px; top: 0px; left: 0px;">
              <div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png" draggable="false" style="position: absolute; left: 0px; top: 0px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;"></div>
            </button>
            <div style="position: relative; overflow: hidden; width: 67%; height: 1px; left: 16%; background-color: rgb(230, 230, 230); top: 0px;"></div>
            <button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" style="background: none; display: block; border: 0px; margin: 0px; padding: 0px; position: relative; cursor: pointer; user-select: none; width: 28px; height: 27px; top: 0px; left: 0px;">
              <div style="overflow: hidden; position: absolute; width: 15px; height: 15px; left: 7px; top: 6px;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl.png" draggable="false" style="position: absolute; left: 0px; top: -15px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; width: 120px; height: 54px;"></div>
            </button>
          </div>
        </div>
    </div>
    <div class="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth="0" controlheight="0" style="margin: 10px; user-select: none; position: absolute; display: none; bottom: 26px; left: 0px;">
      <div class="gmnoprint" controlwidth="28" controlheight="0" style="display: none; position: absolute;">
        <div title="Rotate map 90 degrees" style="width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; cursor: pointer; background-color: rgb(255, 255, 255); display: none;"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4.png" draggable="false" style="position: absolute; left: -141px; top: 6px; width: 170px; height: 54px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
        <div
        class="gm-tilt" style="width: 28px; height: 28px; overflow: hidden; position: absolute; border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; top: 0px; cursor: pointer; background-color: rgb(255, 255, 255);"><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/tmapctrl4.png" draggable="false" style="position: absolute; left: -141px; top: -13px; width: 170px; height: 54px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;"></div>
    </div>
  </div>
  <div draggable="false" class="gm-style-cc" style="position: absolute; user-select: none; height: 14px; line-height: 14px; right: 71px; bottom: 0px;">
    <div style="opacity: 0.7; width: 100%; height: 100%; position: absolute;">
      <div style="width: 1px;"></div>
      <div style="background-color: rgb(245, 245, 245); width: auto; height: 100%; margin-left: 1px;"></div>
    </div>
    <div style="position: relative; padding-right: 6px; padding-left: 6px; font-family: Roboto, Arial, sans-serif; font-size: 10px; color: rgb(68, 68, 68); white-space: nowrap; direction: ltr; text-align: right; vertical-align: middle; display: inline-block;"><span>200 m&nbsp;</span>
      <div style="position: relative; display: inline-block; height: 8px; bottom: -1px; width: 47px;">
        <div style="width: 100%; height: 4px; position: absolute; left: 0px; top: 0px;"></div>
        <div style="width: 4px; height: 8px; left: 0px; top: 0px; background-color: rgb(255, 255, 255);"></div>
        <div style="width: 4px; height: 8px; position: absolute; background-color: rgb(255, 255, 255); right: 0px; bottom: 0px;"></div>
        <div style="position: absolute; background-color: rgb(102, 102, 102); height: 2px; left: 1px; bottom: 1px; right: 1px;"></div>
        <div style="position: absolute; width: 2px; height: 6px; left: 1px; top: 1px; background-color: rgb(102, 102, 102);"></div>
        <div style="width: 2px; height: 6px; position: absolute; background-color: rgb(102, 102, 102); bottom: 1px; right: 1px;"></div>
      </div>
    </div>
  </div>
</div>
</div>
</div> */}