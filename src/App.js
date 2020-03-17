import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/userActions";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}
   unsubscribeFormAuth = null;
	componentDidMount() {
		this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.onSnapshot(snapshot => {
               this.props.setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               })
            })
         }
         this.props.setCurrentUser(userAuth);
		});
   }
   
   componentWillUnmount(){
      this.unsubscribeFormAuth();
   }

	render() {
		return (
			<div className="container">
				<header className="App-header">
					<Header currentUser={this.state.currentUser} />
				</header>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/sign-in" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser
})

export default connect(mapStateToProps, {setCurrentUser})(App);
