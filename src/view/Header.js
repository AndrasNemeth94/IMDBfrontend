import React, { Component } from "react";
import "./Header.css";
import * as ReactBootStrap from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<ReactBootStrap.Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
			>
				{/*---navbar--- */}

				<ReactBootStrap.Navbar.Brand href="Home">
					<img
						src={require("../img/LoMLM.png")}
						alt="LoMLM"
						width="200px"
						height="60px"
					/>
				</ReactBootStrap.Navbar.Brand>
				{/*---logo--- */}
				<div className="col-md-6"></div>

				<div className="col-md menuBar">
					{/*---menuBar col---- */}
					<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
					{/*---area control--- */}

					<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
						{/*---collapse area--- */}
						<ReactBootStrap.Nav className="mr-auto">
							<ReactBootStrap.Nav.Link href="Home" className="navLink">
								<span className="linkText">HOME</span>
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.Nav.Link href="Programs" className="navLink">
								<span className="linkText">PROGRAMS</span>
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.Nav.Link href="Blog" className="navLink">
								<span className="linkText">BLOG</span>
							</ReactBootStrap.Nav.Link>
							<ReactBootStrap.Nav.Link href="Contact" className="navLink">
								<span className="linkText">CONTACT</span>
							</ReactBootStrap.Nav.Link>
						</ReactBootStrap.Nav>
					</ReactBootStrap.Navbar.Collapse>
				</div>
				{/*---menuBar col end---- */}
				{/*---collapse area end--- */}

				{/*---navbar end--- */}
			</ReactBootStrap.Navbar>
		);
	}
}
export default Header;
