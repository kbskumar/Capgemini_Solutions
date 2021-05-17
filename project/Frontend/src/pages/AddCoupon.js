import React, {useState} from 'react';
import {Alert} from "react-bootstrap";
import FlashMessage from "react-flash-message";

export default function AddCoupon(props) {
    const [id,setId] = useState(0);
    const [code,setCode] = useState("");
    const [type,setType] = useState("");
    const [v_p,setVP] = useState(0);
    const [extra_percentage,setExtrap] = useState(0);
    const [cartvalue,setCartValue] = useState(0);
    const [date,setDate] = useState("");
    const [company,setCompany] = useState("");
    const [category,setCategory] = useState("");
    const [added,setAdded] = useState(false);
    const submit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({id,code,type,v_p,extra_percentage,cartvalue,date,company,category}));
        await fetch('http://localhost:9000/api/coupons', {
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
                setAdded(true);
            }
        );
    }
    return (
        <form className={"form-add"}  onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Add Coupon Details</h1>
            {added?<FlashMessage duration={5000}><Alert variant={"success"} dismissible={true}>Coupon added</Alert></FlashMessage> :""}
            <label className={"add-label"}>Id:<input type="number" className="form-control" placeholder="id   " required
                                                  onChange={e => setId(e.target.value)}/></label>
            <label className={"add-label"}>Code:<input type="text" className="form-control" placeholder="code" required
                                                       onChange={e => setCode(e.target.value)}/></label>
            <label className={"add-label"}>Type:<input type="text" className="form-control" placeholder="type" required
                                                       onChange={e => setType(e.target.value)}/></label>
            <label className={"add-label"}>Value/percentage:<input type="number" className="form-control" placeholder="value/percentage" required
                                                                   onChange={e => setVP(e.target.value)}/></label>
            <label className={"add-label"}>Extra Percentage:<input type="number" className="form-control" placeholder="extra percentage" required
                                                                   onChange={e => setExtrap(e.target.value)}/></label>
            <label className={"add-label"}>CartValue:<input type="number" className="form-control" placeholder="cart value" required
                                                            onChange={e => setCartValue(e.target.value)}/></label>
            <label className={"add-label"}>Date:<input type="date" className="form-control" required
                                                       onChange={e => setDate(e.target.value)}/></label>
            <label className={"add-label"}>Company:<input type="text" className="form-control" placeholder="company" required
                                                          onChange={e => setCompany(e.target.value)}/></label>
            <label className={"add-label"}>Category:<input type="text" className="form-control" placeholder="category" required
                                                           onChange={e => setCategory(e.target.value)}/></label>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Add Coupon</button>
            {/*{added?<FlashMessage duration={5000}><div className={"alert-success"}>Coupon added</div></FlashMessage>:<FlashMessage duration={5000}><div className={"alert-success"}>Coupon not added</div></FlashMessage>}*/}
        </form>
    );
}