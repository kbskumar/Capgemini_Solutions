import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';


const About = () => {

    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        job: ""
    });
    

    const {name,job} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }
    
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/emp", user);
        history.push("/")
    }

    return (

        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name" name="name" value={name} onChange={e => onInputChange(e)}/>
                </div>
                <div class="form-group">
                    <label>Email Job</label>
                    <input type="text" class="form-control" placeholder="Enter Job" name="job" value={job} onChange={e => onInputChange(e)} />
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>

    );
};

export default About;