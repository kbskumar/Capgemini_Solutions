import React, {useState} from "react";
import {Container, Card, Button} from "react-bootstrap";

export default function SavedCoupons(props) {
    const [re,setRe] = useState(false);
    if(re){
        setRe(false);
    }
    console.log(props);
    const data = props.location.state.sear.coupons;
    let temp = [];
    if(data){
        for (let i = 0; i < data.length; i = i + 3) {
            temp.push(data.slice(i, i + 3));
        }
    }
    const saveListener = async (e) => {
        console.log("pressed");
        console.log(e);
        const id = "";
        const email = JSON.parse(sessionStorage.getItem("cred")).username;
        const couponId = [e.id];
        await fetch("http://localhost:9006/api/Savedcoupons/",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id,
                email,
                couponId
            })
        }).then(function (response){
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status,
                );
            }
            let coupons = JSON.parse(sessionStorage.getItem("savedcoupons"));
            coupons = coupons.concat(couponId);
            console.log("coupons = ",coupons);
            sessionStorage.setItem("savedcoupons",JSON.stringify(coupons));
            setRe(true);
            return;
        })
    }
    const unSaveListener = async (e) => {
        console.log("pressed");
        console.log(e);
        const id = "";
        const email = JSON.parse(sessionStorage.getItem("cred")).username;
        const couponId = [e.id];
        await fetch("http://localhost:9006/api/deletesavedcoupon/",{
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id,
                email,
                couponId
            })
        }).then(function (response){
            if (response.status !== 200) {
                console.log(
                    "Looks like there was a problem. Status Code: " + response.status,
                );
            }
            let coupons = JSON.parse(sessionStorage.getItem("savedcoupons"));
            const temp = coupons.findIndex((va)=>va===e.id)
            coupons.splice(temp,1);
            sessionStorage.setItem("savedcoupons",JSON.stringify(coupons));

            props.location.state.sear.coupons.splice(temp,1);
            console.log("coupons= ",JSON.parse(sessionStorage.getItem("savedcoupons"))  );
            setRe(true);
            return;
        })
    }
    return (
        <Container
            className="my-3 d-flex justify-content-center flex-wrap"
            style={{ minHeight: "min-content" }}
        >
            <>
                {temp.map((value) => {
                    return value.map((val) => {
                        return (
                            <Card
                                className={`d-flex justify-content-center align-items-center flex-column text-center col-lg-2 col-md-4 col-sm-6 col-sm-6 m-2 myCard`}
                                style={{
                                    minWidth: "fit-content",
                                }}
                                key={val.id}
                            >
                                <Card.Img
                                    variant="top"
                                    className=" mt-3 w-50"
                                    src={
                                        "https://7coupons.in/images/stores/" + val.company + ".png"
                                    }
                                />
                                <Card.Body>
                                    <Card.Subtitle className="border-top border-bottom text-black text-monospace fw-bold bg-light py-2 px-2 mb-3">
                                        {val.code === "" ? "No Code necessary" : val.code}
                                    </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted fw-bold">
                                        {val.company}
                                    </Card.Subtitle>
                                    {val.type && (
                                        <Card.Text>
                                            {val.type === "value"
                                                ? `Upto ₹ ${val.v_p} Off`
                                                : val.type === "percent"
                                                    ? `Upto ${val.v_p}% Off`
                                                    : ""}
                                        </Card.Text>
                                    )}
                                    {val.cartval && (
                                        <Card.Text>Min. cart Value: ₹{val.cartvalue}</Card.Text>
                                    )}
                                    {val.extra_percentage !== 0 && (
                                        <Card.Text>
                                            {val.extra_percentage !== 0
                                                ? "Extra percentage :" + val.extra_percentage
                                                : ""}
                                        </Card.Text>
                                    )}
                                    {val.date !== "" && (
                                        <Card.Text>
                                            {val.date !== "" ? "Expiry Date: " + val.date : ""}
                                        </Card.Text>
                                    )}
                                    {JSON.parse(sessionStorage.getItem("savedcoupons")).includes(val.id) ?
                                        (<Button onClick={(e)=>{e.preventDefault();unSaveListener(val)}}>UnSave Coupon</Button>):
                                        (<Button onClick={(e)=>{e.preventDefault();saveListener(val)}}>Save Coupon</Button>)
                                    }
                                </Card.Body>
                            </Card>
                        );
                    });
                })}
            </>
        </Container>
    );
}
