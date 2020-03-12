import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<header className="App-header">
            <h1>E-commerce store</h1>
         </header>
         <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
         </Switch>
		</div>
	);
}

export default App;
