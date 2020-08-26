import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
	render() {
		return (
			<div className="container">
				{/*-----Container ----- */}

				<div className="row">
					{/*-----row ----- */}

					<div className="col-sm sideDiv" id="left">
						{/*-----maindiv 1 ----- */}
					</div>
					{/*-----maindiv 1 end ----- */}

					<div className="col-sm">{/*-----fillerdiv 1 ----- */}</div>
					{/*-----fillerdiv end ----- */}

					<div className="col-sm sideDiv" id="right">
						{/*-----maindiv 2 ----- */}
					</div>
					{/*-----maindiv 2 end ----- */}
				</div>
				{/*-----row end ----- */}

				{/*-----Container end----- */}
			</div>
		);
	}
}
export default Main;