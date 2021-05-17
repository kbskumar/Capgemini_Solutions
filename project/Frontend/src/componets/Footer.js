import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Online Coupon Service
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Website Links</Heading>
			<hr />
			<FooterLink href="/">Home</FooterLink>
            <FooterLink href="/login">Login</FooterLink>
            <FooterLink href="/register">Signup</FooterLink>
            
		</Column>
		<Column>
			<Heading>Popular Searches</Heading>
			<hr></hr>
			<FooterLink href="#">Amazon offers</FooterLink>
			<FooterLink href="#">Fashion offers</FooterLink>
			<FooterLink href="#">Flipkart offers</FooterLink>
			<FooterLink href="#">Myntra offers</FooterLink>
		</Column>
		
		<Column>
			<Heading>Social Media</Heading>
			<hr></hr>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
            
		    

			</FooterLink>

		</Column>

		</Row>
		<hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} KB MEMES | All rights reserved |
            Terms Of Service | Privacy
			</p>
		</div>
	</Container>
	</Box>
);
};
export default Footer;
