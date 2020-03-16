import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import './signin.scss';
import Button from "../custom-button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async e => {
      e.preventDefault();
      let { email, password } = this.state;
      try {
         await auth.signInWithEmailAndPassword(email, password);
		   this.setState({ email: "", password: "" });
      } catch (error) {
         console.log(error);
      }
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
               <div className="buttons">
                  <Button type="submit">Sign In</Button>
                  <Button onClick={signInWithGoogle} isGoogleSignin>Sign In with Google</Button>
               </div>
				</form>
			</div>
		);
	}
}

export default SignIn;
