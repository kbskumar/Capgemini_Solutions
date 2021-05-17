import React, {useEffect, useState} from 'react';
import {Alert, Button, Card, Container} from "react-bootstrap";
import FlashMessage from "react-flash-message";
import {Redirect} from "react-router-dom";

export default function UpdateCoupon(props) {
    const [id,setId] = useState(0);
    const [code,setCode] = useState("");
    const [type,setType] = useState("");
    const [v_p,setVP] = useState(0);
    const [extra_percentage,setExtrap] = useState(0);
    const [cartvalue,setCartValue] = useState(0);
    const [date,setDate] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");
    const [updating,setUpdating] = useState(false);
    const [updated,setUpdated] = useState(false);
    const [selected,setSelected] = useState([]);
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
    const submit = async (e) => {
        console.log(id)
        e.preventDefault();
        console.log(JSON.stringify({id,code,type,v_p,extra_percentage,cartvalue,date,company,category}));
        await fetch('http://localhost:9000/api/coupons/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id,code,type,v_p,extra_percentage,cartvalue,date,company,category
            })
        }).then(
            function (response){
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                setUpdated(true);
            }
        );
    }
    const update = async (val) =>{
        setSelected(val);setId(val.id);setCode(val.code);setType(val.type);setVP(val.v_p);setExtrap(val.extra_percentage);setCartValue(val.cartvalue);
        setDate(val.date);setCompany(val.company);setCategory(val.category);
        setUpdating(true);
    }
    if(updated){
        return <Redirect to="/"/>;
    }
    return (
        <>
        { !updating ?
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
                                        <Button onClick={(e)=>{e.preventDefault();update(val)}}>Update Coupon</Button>
                                    </Card.Body>
                                </Card>
                            );
                        });
                    })}
                </>
            </Container>
                :
        <form className={"form-add"}  onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Update Coupon Details</h1>
            {updated?<FlashMessage duration={5000}><Alert variant={"success"} dismissible={true}>Coupon added</Alert></FlashMessage> :""}
            <label className={"add-label"}>Code:<input type="text" className="form-control" placeholder={selected.code} defaultValue={selected.code} required
                          onChange={e => setCode(e.target.value)}/></label>
            <label className={"add-label"}>Type:<input type="text" className="form-control" placeholder={selected.type} defaultValue={selected.type} required
                               onChange={e => setType(e.target.value)}/></label>
            <label className={"add-label"}>Value/percentage:<input type="number" className="form-control" placeholder={selected.v_p} defaultValue={selected.v_p} required
                                           onChange={e => setVP(e.target.value)}/></label>
            <label className={"add-label"}>Extra Percentage:<input type="number" className="form-control" placeholder={selected.extra_percentage} defaultValue={selected.extra_percentage} required
                                           onChange={e => setExtrap(e.target.value)}/></label>
            <label className={"add-label"}>CartValue:<input type="number" className="form-control" placeholder={selected.cartvalue} defaultValue={selected.cartvalue} required
                                    onChange={e => setCartValue(e.target.value)}/></label>
            <label className={"add-label"}>Date:<input type="date" className="form-control" placeholder={selected.date} defaultValue={selected.date} required
                               onChange={e => setDate(e.target.value)}/></label>
            <label className={"add-label"}>Company:<input type="text" className="form-control" placeholder={selected.company} defaultValue={selected.company} required
                                  onChange={e => setCompany(e.target.value)}/></label>
            <label className={"add-label"}>Category:<input type="text" className="form-control" placeholder={selected.category} defaultValue={selected.category} required
                          onChange={e => setCategory(e.target.value)}/></label>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Update Coupon</button>
            {/*{added?<FlashMessage duration={5000}><div className={"alert-success"}>Coupon added</div></FlashMessage>:<FlashMessage duration={5000}><div className={"alert-success"}>Coupon not added</div></FlashMessage>}*/}
        </form>
        }
        </>
    );
}