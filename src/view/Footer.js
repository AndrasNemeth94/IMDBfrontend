import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					{/*---row---- */}

					<div className="col-sm face">
						<p>facebook</p>
					</div>

					<div className="col-sm insta">
						<p>instagram</p>
					</div>

					<div className="col-sm twitch">
						<p>twitch</p>
					</div>

					<div className="col-sm twitter">
						<p>twitter</p>
					</div>

					<div className="col-sm youtube">
						<p>youtube</p>
					</div>
				</div>

				<div className="row">
					{/*--row 2---*/}
					<div className="col-sm">
						<p>article1</p>
					</div>

					<div className="col-sm">
						<p>aerticle2</p>
					</div>

					<div className="col-sm">
						<p>aerticle3</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>
				</div>
				{/*--row 2 end---*/}

				<div className="row">
					{/*--row 3--*/}
					<div className="col-sm">
						<p>article1</p>
					</div>

					<div className="col-sm">
						<p>aerticle2</p>
					</div>

					<div className="col-sm">
						<p>aerticle3</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>

					<div className="col-sm">
						<p>article4</p>
					</div>
				</div>
				{/*----row 3 end---*/}

				<div className="row">
					{/*---row 4----- */}

					<div className="col copyright">
						{/*----col copyright 1----- */}
						<p>an amazon company</p>
					</div>
					{/*----col copyright 1 end----- */}
				</div>
				{/*---row 4 end----- */}

				<div className="row">
					{/*---row 5----- */}

					<div className="col copyright">
						{/*----col copyright 2----- */}
						<p>© 1990-2020 by IMDb.com, Inc.</p>
					</div>
					{/*----col copyright 2 end----- */}
				</div>
				{/*---row 5 end----- */}

				{/*----container---*/}
			</div>
		);
	}
}
export default Footer;
