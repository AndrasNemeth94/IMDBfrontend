import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./view/Header";
import Main from "./view/Main";
import Footer from "./view/Footer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}
export default App;
