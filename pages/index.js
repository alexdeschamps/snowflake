import SnowflakeApp from '../components/SnowflakeApp';
import React, { Component } from 'react';

class index extends Component {
	constructor() {
		super()
			this.state = {
				isAuthenticated: false
			}
		this.logout = this.logout.bind(this);
	}
	logout = () => {
	    this.setState({isAuthenticated: false});
	    console.log('logging out');
	  };
	login = () => {
		this.setState({isAuthenticated: true});
	}

	 render() {
	 	if (this.state.isAuthenticated == false) {
	 		return(
	 			<div>
	 				<button onClick={this.login}>
	 					Log in
	 				</button>
	 			</div>
	 		)
	 	} else {
	 		return(
		 		<div>
		 			<SnowflakeApp logout ={this.logout} />
		 		</div>
	 		)
	 	}
	 }
}




export default index;