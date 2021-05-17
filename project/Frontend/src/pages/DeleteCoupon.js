import React, {useEffect, useState} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import {Redirect} from "react-router-dom";
export default function UpdateCoupon(props) {
    const [deleted,setDeleted] = useState(false);
    const [couponData,setCouponData] = useState([]);
    useEffect(()=>{
        const getCouponData = async () =>{
            await fetch("http://localhost:9000/api/getcoupons",{
                method: "GET"
            }).then(
                function (response){
                    if(response.status !== 200){
                        console.log("There is a problem.Status code: "+response.status);
                        return;
                    }
                    response.json().then(function (data){
                        console.log(data);
                        setCouponData(data);
                    })
                }
            )
        }
        getCouponData();
    },[])
    let temp = [];
    for (let i = 0; i < couponData.length; i = i + 3) {
        temp.push(couponData.slice(i, i + 3));
    }
    const deleteCoupon = async (val) => {
        // console.log(val.id)
        // console.log(JSON.stringify({id,code,type,v_p,extra_percentage,cartvalue,date,company,category}));
        await fetch('http://localhost:9000/api/deletecoupon/'+val.id, {
            method: 'DELETE'
        }).then(
            function (response){
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                setDeleted(true);
            }
        );
    }
    if(deleted){
        return <Redirect to="/"/>;
    }
    return (
        <>
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
                                                `../img/${val.company}.png`
                                                // "https://7coupons.in/images/stores/" + val.company + ".png"
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
                                                        : val.type === "percentage"
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
                                            <Button onClick={(e)=>{e.preventDefault();deleteCoupon(val)}}>Delete Coupon</Button>
                                        </Card.Body>
                                    </Card>
                                );
                            });
                        })}
                    </>
                </Container>
        </>
    );
}