import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Store from "./pages/Store";
import Home from "./pages/Home";
import logo from "./assets/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Register from "./pages/Register";

import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Search from "./componets/Search";
import SavedCoupons from "./pages/SavedCoupons";
import News from "./pages/News";
import Score from "./pages/Score";
import AddCoupon from "./pages/AddCoupon";
import UpdateCoupon from "./pages/UpdateCoupon";
import DeleteCoupon from "./pages/DeleteCoupon";
export const credentailsContext = React.createContext();

function App() {
	const credentialsState = useState({});
	const [redirect, setRedirect] = useState(false);
	const [redirectSaved, setRedirectSaved] = useState(false);
	const query = useState("");
	const [d, setD] = useState([]);
	const submit = async (data) => {
		console.log("query", data, query);
		await fetch("http://localhost:9000/api/gettype/" + data, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		}).then(function (response) {
			if (response.status !== 200) {
				console.log(
					"Looks like there was a problem. Status Code: " + response.status,
				);
				return;
			}
			response.text().then(async (d) => {
				if (d === "company") {
					await fetch("http://localhost:9000/api/getcouponsbycompany/" + data, {
						method: "GET",
						headers: { "Content-Type": "application/json" },
					}).then(function (response) {
						if (response.status !== 200) {
							console.log(
								"Looks like there was a problem. Status Code: " +
									response.status,
							);
							return;
						}
						response.json().then(function (data) {
							console.log(data);
							setD(data);
							setRedirect(true);
						});
					});
				} else if (d === "category") {
					await fetch(
						"http://localhost:9000/api/getcouponsbycategory/" + data,
						{
							method: "GET",
							headers: { "Content-Type": "application/json" },
						},
					).then(function (response) {
						if (response.status !== 200) {
							console.log(
								"Looks like there was a problem. Status Code: " +
									response.status,
							);
							return;
						}
						response.json().then(function (data) {
							console.log(data);
							setD(data);
							setRedirect(true);
						});
					});
				}
			});
		});
	};

	// if (x.token){
	// 	setLoggedOut(true);
	// }
	const [loggedOut, setLoggedOut] = useState(
		!sessionStorage.getItem("loggedin") === "true",
	);
	function y() {
		sessionStorage.getItem("cred") ? setLoggedOut(true) : setLoggedOut(false);
	}
	// if(sessionStorage.getItem("loggedin")==="true"){
	// 	y();
	// }
	const logout = () => {
		sessionStorage.removeItem("cred");
		sessionStorage.removeItem("savedcoupons");
		sessionStorage.setItem("loggedin", "false");
		setLoggedOut(Boolean(sessionStorage.getItem("cred")));
	};
	useEffect(() => y());
	const savedCouponListener = async (e) => {
		e.preventDefault();
		const username = JSON.parse(sessionStorage.getItem("cred")).username;
		await fetch("http://localhost:9006/api/getsavedcoupons/", {
			method: "POST",
			headers: { "Content-Type": "application/text" },
			body: username
		}).then(function (response) {
			if (response.status !== 200) {
				console.log(
					"Looks like there was a problem. Status Code: " + response.status,
				);
				return;
			}
			response.json().then(function (data) {
				console.log("coupons",data.coupons);
				setD(data);
				setRedirectSaved(true);
			});
		});
	}
	return (
		<>
			<credentailsContext.Provider value={credentialsState}>
				<BrowserRouter>
					{redirect ? (
						<Redirect to={{ pathname: "/store", state: { sear: d } }} />
					) : (
						""
					)}
					{redirectSaved ? (
						<Redirect to={{ pathname: "/savedcoupons", state: { sear: d } }} />
					) : (
						""
					)}
					<div>
						<header>
							<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
								{console.log("logout:", loggedOut)}
								<Navbar.Brand href="/">
									<img src={logo} alt={"not available"} />
								</Navbar.Brand>
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto">
										<Nav.Link href="/">Home</Nav.Link>
										<NavDropdown title="Store" id="basic-nav-dropdown">
											<NavDropdown.Item
												onClick={(e) => {
													e.preventDefault();
													return submit("amazon");
												}}
											>
												Amazon
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">
												Myntra action
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">
												Flipkart
											</NavDropdown.Item>
										</NavDropdown>

										<NavDropdown title="Category" id="basic-nav-dropdown">
											<NavDropdown.Item
												onClick={(e) => {
													e.preventDefault();
													return submit("fashion");
												}}
											>
												Fashion
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.2">
												Electronic action
											</NavDropdown.Item>
											<NavDropdown.Item href="#action/3.3">
												Medicine
											</NavDropdown.Item>
										</NavDropdown>
										<NavDropdown title="My Account" id="basic-nav-dropdown">
											{!loggedOut ? "":(<NavDropdown.Item href="#action/3.1" onClick={(e)=>{e.preventDefault();return savedCouponListener(e);}}>
												Saved Coupons
											</NavDropdown.Item>)
											}
											{!loggedOut ? (
												<NavDropdown.Item href="/login">Login</NavDropdown.Item>
											) : (
												<NavDropdown.Item href="/login" onClick={logout}>
													Logout
												</NavDropdown.Item>
											)}
											{!loggedOut ? (
											<NavDropdown.Item href="/register">
												Register
											</NavDropdown.Item>
											):""}
											{loggedOut && JSON.parse(sessionStorage.getItem("cred")) &&JSON.parse(sessionStorage.getItem("cred")).roles[0]==="ROLE_ADMIN"? (
												<NavDropdown.Item href="/addcoupons">
													Add Coupons
												</NavDropdown.Item>
											):""}
											{loggedOut && JSON.parse(sessionStorage.getItem("cred")) &&JSON.parse(sessionStorage.getItem("cred")).roles[0]==="ROLE_ADMIN"? (
												<NavDropdown.Item href="/putcoupons">
													Update Coupons
												</NavDropdown.Item>
											):""}
											{loggedOut && JSON.parse(sessionStorage.getItem("cred")) &&JSON.parse(sessionStorage.getItem("cred")).roles[0]==="ROLE_ADMIN"? (
												<NavDropdown.Item href="/deletecoupons">
													Delete Coupons
												</NavDropdown.Item>
											):""}
										</NavDropdown>
										<Nav.Link href="/news">News</Nav.Link>
										<Nav.Link href="/score">Scores</Nav.Link>
									</Nav>
									<Nav>
										<Search></Search>
										{/*<Form inline>*/}
										{/*	<FormControl*/}
										{/*		type="text"*/}
										{/*		placeholder="Search"*/}
										{/*		className="mr-sm-2"*/}
										{/*	/>*/}
										{/*	<Button variant="outline-success">Search</Button>*/}
										{/*</Form>*/}
									</Nav>
								</Navbar.Collapse>
							</Navbar>
						</header>
					</div>
					<main
						className="d-flex flex-wrap justify-content-center align-items-center"
						style={{ minHeight: "80vh" }}
					>
						<Route path="/" exact component={Home}></Route>
						<Route exact path="/login" component={Login}></Route>
						<Route path="/register" component={Register}></Route>
						<Route
							path="/store"
							render={(props) => <Store {...props} />}
						></Route>
						<Route
							path="/savedcoupons"
							render={(props) => <SavedCoupons {...props} />}
						></Route>
						<Route path="/news" component={News}></Route>
						<Route path="/score" component={Score}></Route>
						<Route path="/addcoupons" component={AddCoupon}></Route>
						<Route path="/putcoupons" component={UpdateCoupon}></Route>
						<Route path="/deletecoupons" component={DeleteCoupon}></Route>

					</main>
				</BrowserRouter>
			</credentailsContext.Provider>
		</>
	);
}

export default App;