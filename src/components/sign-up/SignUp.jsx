import React, { Component } from "react";
import './signup.scss';
import FormInput from "../form-input/FormInput";
import Button from "../custom-button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	}
	handleSubmit = async e => {
		e.preventDefault();
		let { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("password didn't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confirmPassword: ""
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		let { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">Dont have an account</h2>
				<span>Sign up with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						handleChange={this.handleChange}
						required
					/>

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

					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm Password"
						handleChange={this.handleChange}
						required
					/>
					<div className="buttons">
						<Button type="submit">Sign Up</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
