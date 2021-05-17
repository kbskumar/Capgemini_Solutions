import React, { useState } from "react";
import Footer from "../componets/Footer";
import { Redirect } from "react-router-dom";

export default function Home() {
	const [redirect, setRedirect] = useState(false);
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
	return (
		<div>
			{redirect ? (
				<Redirect to={{ pathname: "/store", state: { sear: d } }} />
			) : (
				""
			)}
			<main className="container-fluid my-3">
				<div className="card">
					<div
						className="card-header"
						style={{
							backgroundColor: "#3f4356",
							color: "#ccc",
							fontWeight: "600",
						}}
					>
						Get Coupons for your favorite Store
					</div>
					<div className="card-body d-flex flex-wrap">
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a
								onClick={(e) => {
									e.preventDefault();
									return submit("amazon");
								}}
							>
								<img
									className="img-fluid mb-1"
									src="https://7coupons.in/images/stores/aliexpress.jpeg"
									alt="Aliexpress Coupons"
								/>
							</a>
						</div>
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="store/amazon/">
								<img
									className="img-fluid mb-1"
									src="https://7coupons.in/images/stores/amazon.png"
									alt="Amazon Coupons"
								/>
							</a>
						</div>
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="store/udemy/">
								<img
									className="img-fluid mb-1"
									src="https://7coupons.in/images/stores/udemy.png"
									alt="Udemy Coupons"
								/>
							</a>
						</div>
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="store/flipkart/">
								<img
									className="img-fluid mb10"
									src="https://7coupons.in/images/stores/Flipkart.jpg"
									alt="Flipkart Coupons"
								/>
							</a>
						</div>
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="store/myntra/">
								<img
									className="img-fluid mb10"
									src="https://7coupons.in/images/stores/myntra.png"
									alt="Myntra Coupons"
								/>
							</a>
						</div>
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="store/makemytrip/">
								<img
									className="img-fluid mb10"
									src="https://7coupons.in/images/stores/makemytrip.png"
									alt="MakeMyTrip Coupons"
								/>
							</a>
						</div>
					</div>
				</div>

				<div className="text-center d-block bg-dark">
					<div className="d-block"></div>
					<div className="container align-content-center"></div>
				</div>
			</main>
			<main className="container-fluid my-3">
				<div className="card">
					<div className="card-header"></div>
					<div
						className="card-header"
						style={{
							backgroundColor: "#3f4356",
							color: "#ccc",
							fontWeight: "600",
						}}
					>
						Get Coupons for your favorite Store
					</div>
					<div className="card-body d-flex flex-wrap">
						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a onClick={(e) => {
								e.preventDefault();
								return submit("fashion");
							}}>
								<p>
									<img
										className="img-fluid mb-1"
										src="https://7coupons.in/images/categories/fashion.png"
										alt="Fashion Coupons"
									/>
								</p>
								<h5>Fashion</h5>
								<p className="text-muted small">
									Men&#039;s Apparels, Women&#039;s Apparels, Fashion
									Accessories
								</p>
							</a>
						</div>

						<div className="col-xs-6 col-sm-4 col-md-2 p-2">
							<a href="https://7coupons.in/category/electronics-gadgets/">
								<p>
									<img
										className="img-fluid mb-1"
										src="https://7coupons.in/images/categories/electronics.png"
										alt="Electronics Coupons"
									/>
								</p>
								<h5>Electronics</h5>
								<p className="text-muted small">
									Mobiles, Laptops, Cameras, Gaming, Accessories, Appliances
								</p>
							</a>
						</div>
					</div>
				</div>
			</main>
			<hr></hr>
			<Footer />
		</div>
	);
}
