import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";


function App() {
	return (
		<div className="container">
			<header className="App-header">
            <Header />
         </header>
         <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
         </Switch>
		</div>
	);
}

export default App;
