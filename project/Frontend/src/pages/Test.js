import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
const stores = [
	"aliexpress",
	"amazon",
	"udemy",
	"flipkart",
	"myntra",
	"makemytrip",
	"ajio",
	"goibibo",
];
const categories = [
	"fashion",
	"electronics",
	"travel",
	"food",
	"entertainment",
	"gifts",
	"grocery",
	"health",
	"homeliving",
	"kids",
	"recharge",
	"software",
];

export default function Home() {
	const [query, setQuery] = useState("");
	const [redirect, setRedirect] = useState(false);
	const [data, setData] = useState("");
	const [path, setPath] = useState("");
	const submit = async (value) => {
		setQuery(value);
		console.log("something", query);
		await fetch("http://localhost:9000/api/gettype/" + query, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			mode: "no-cors",
		}).then(function (response) {
			if (response.status !== 200) {
				console.log(
					"Looks like there was a problem. Status Code: " + response.status,
				);
				return;
			}
			response.text().then(async function (data) {
				if (data === "company") {
					setPath("store");
					await fetch(
						"http://localhost:9000/api/getcouponsbycompany/" + query,
						{
							method: "GET",
							headers: { "Content-Type": "application/json" },
							mode: "no-cors",
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
							setData(data);
						});
					});
				} else if (data === "category") {
					setPath("category");
					await fetch(
						"http://localhost:9000/api/getcouponsbycategory/" + query,
						{
							method: "GET",
							headers: { "Content-Type": "application/json" },
							mode: "no-cors",
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
							setData(data);
						});
					});
				}
			});
		});
		setRedirect(true);
	};
	if (redirect) {
		return (
			<Redirect
				to={{ pathname: "/store", state: { data: data, type: path } }}
			></Redirect>
		);
	}
	return (
		<div className={"container"}>
			<div className={"col-lg-12 mb30 text-center panel"}>
				<div
					className={"panel-heading"}
					style={{ backgroundColor: "#3f4356", color: "#ccc", fontWeight: 600 }}
				>
					Get Coupons by your favourite store
				</div>
				<div className={"row panel-body"}>
					{stores.map((value) => {
						return (
							<div
								className={"col-md-2 col-sm-4 col-xs-6"}
								style={{ padding: "2rem 3rem" }}
							>
								<a
									href="/"
									onClick={(e) => {
										setQuery(value);
										e.preventDefault();
										return submit(value);
									}}
								>
									{value}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
