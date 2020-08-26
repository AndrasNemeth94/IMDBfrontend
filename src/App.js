import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./view/Header";
import Main from "./view/Main";
import Footer from "./view/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
