import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

const Home = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        getemp();
    }, []);

    const getemp = async () => {
        const result = await axios.get("http://localhost:3000/emp");
        setUser(result.data);
    }

    const deleteuser = async id => {
        await axios.delete(`http://localhost:3000/emp/${id}`);
        getemp();
    }

    return (

        <div className="container">
            <br/>
            <table class="table table-striped">
                
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Job</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => (
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{user.name}</td>
                        <td>{user.job}</td>
                        <td>
                            <Link class="btn btn-primary mr-2">View</Link>
                            <Link class="btn btn-warning mr-2" to={`/contact/${user.id}`}>Edit</Link>
                            <Link class="btn btn-danger mr-10" onClick={() => deleteuser(user.id)}>Delete</Link>
                        </td>
                    </tr>
                    ))}

                    
                </tbody>
            </table>
        </div>

    );
};

export default Home;