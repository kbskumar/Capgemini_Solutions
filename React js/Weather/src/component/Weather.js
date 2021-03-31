import React,{useState ,useEffect} from "react";
import axios from 'axios';

const Weather = () => {


    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const getthedata =async () => {
            const url = `api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe7b0eb02d8b03c2133ee73a24ded40d`;
            const {result} = await axios.get(url);
            console.log("no");
        }
        console.log("yes");
    });


    return(
        <div>
            <div>
                <input type="Search" placeholder="Type here" onChange={(event) => { }} />
            </div>
            <div>
                <h2>Location</h2>
                <h1>5.12 Cel</h1>
                <h3>Min : 36 | Max : 98</h3>
            </div>
        </div>
        
    )
}

export default Weather;