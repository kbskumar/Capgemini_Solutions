import React, {useState,useEffect} from 'react';
import '../App.css';
import {Switch} from "antd";

const Cal = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    const [caLState, setCalState] = useState();

    useEffect(() => {
            const date = new Date();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const num = date.getDate();

            const curr = `${num}/${month}/${year}`
            setCalState(curr);
    }, []);

    return(
        <div className="App">
            <Switch onClick={toggler}/>
            {toggle ? <div><h3>{caLState}</h3></div>:<span></span>}
        </div>
    )
}

export default Cal;