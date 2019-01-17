import SnowflakeApp from '../components/SnowflakeApp';
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import Config from '../config.json';

class index extends Component {
	constructor() {
		super()
			this.state = {
				isAuthenticated: false,
				user: null,
				token: ''
			}
		this.logout = this.logout.bind(this);
	}
	logout = () => {
	    this.setState({isAuthenticated: false});
	    console.log('logging out');
	  };
	
	login = (response) => {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              access_token: response.accessToken
            }),
            mode: 'cors',
            cache: 'default'
        };
        fetch('https://mighty-springs-20769.herokuapp.com/api/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            if (token) {
              r.json().then(user => {
                  localStorage.setItem('userid', user.id); 
                  localStorage.setItem('token', token);
                  localStorage.setItem('fullName', user.fullName);
                  this.setState({isAuthenticated: true, user, token});  
              });
            } else {
              alert("Use your official Clio email to log in.")
              }
        })
    };

	 render() {
	 	if (this.state.isAuthenticated == false) {
	 		return(
	 			<div>
	 				<GoogleLogin
	                    clientId={Config.GOOGLE_CLIENT_ID}
	                    render={renderProps => (
	                        <button className="googlebutton"
	                                onClick={renderProps.onClick}>Sign In with your Clio Email</button>
	                      )}
	                    onSuccess={this.login}
	                    onFailure={this.login}
	                />
	 			</div>
	 		)
	 	} else {
	 		return(
		 		<div>
		 			<SnowflakeApp logout={this.logout} />
		 		</div>
	 		)
	 	}
	 }
}




export default index;