import React from 'react';

class Login extends React.Component {
    render(){
        return (
            <div className="container col-md-6" style={{ 'textAlign':'center', 'height':'300px' }}>
                <form className="form-signin">
                    <br />
                    <br />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <div className="checkbox" className="pull-left">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;



