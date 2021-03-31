import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useHistory ,useParams} from 'react-router-dom';


const Contact = () => {

    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        job: ""
    });
    

    const {name,job} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        loaduser();
    },[]);
    
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/emp/${id}`, user);
        history.push("/")
    }

    const loaduser = async () => {
        const result = await axios.get(`http://localhost:3000/emp/${id}`);
        setUser(result.data)
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
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
        </div>

    );
};

export default Contact;