import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import './signin.scss';
import Button from "../custom-button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		let { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2>Already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
                  value={email}
                  label="Email"
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						type="password"
						name="password"
                  value={password}
                  label="Password"
						handleChange={this.handleChange}
						required
					/>
               <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Button type="submit">Sign In</Button>&nbsp;
                  <Button onClick={signInWithGoogle}>Sign In with Google</Button>
               </div>
				</form>
			</div>
		);
	}
}

export default SignIn;
