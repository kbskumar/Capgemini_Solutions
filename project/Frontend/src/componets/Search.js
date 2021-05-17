import React, {useState} from 'react'
import {Redirect} from "react-router-dom";



export default function Search(props) {
    const [query,setQuery] = useState('');
    const [redirect,setRedirect] = useState(false);
    const [d,setD] = useState([])
    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:9000/api/gettype/'+query, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(
             function (response){
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.text().then(async (data)=>{
                    if(data === "company"){
                        await fetch('http://localhost:9000/api/getcouponsbycompany/'+query,{
                            method: 'GET',
                            headers: {'Content-Type': 'application/json'},
                        }).then(
                            function (response){
                                if (response.status !== 200) {
                                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                                    return;
                                }
                                response.json().then(function (data) {
                                    console.log(data);
                                    setD(data);
                                    setRedirect(true);
                                })
                        })
                    }
                    else if(data === "category"){
                        await fetch('http://localhost:9000/api/getcouponsbycategory/'+query,{
                            method: 'GET',
                            headers: {'Content-Type': 'application/json'},
                        }).then(
                            function (response){
                                if (response.status !== 200) {
                                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                                    return;
                                }
                                response.json().then(function (data) {
                                    console.log(data);
                                    setD(data);
                                    setRedirect(true);
                                })
                        })
                    }
                })
            }
        )
    }
    if(redirect){
        console.log("in redirect",d);
        return <Redirect to={{pathname: "/store", state: {sear: d}}}/>;
    }
    return (
        <div className={"container-fluid"}>
            <div className={"row"}>
                <form className={"col-md-12"} style = {{ margin : "auto" }} onSubmit={submit}>
                    <div className="input-group">
                        <input type="search" name="s" id="form1" className="form-control" placeholder={"Search by stores"} onChange={e => setQuery(e.target.value)}/>
                        <div className={"input-group-btn"}>
                            <button type="submit" className="btn btn-success">
                                <i className="fa fa-search"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
