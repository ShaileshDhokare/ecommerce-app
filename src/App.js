import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
               this.setState({
                  currentUser: {
                     id: snapshot.id,
                     ...snapshot.data()
                  }
               })
            })
         }
         this.setState({currentUser: userAuth});
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
					<Route exact path="/sign-in" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}
export default App;
