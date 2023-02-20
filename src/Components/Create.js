import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        axios.post("https://63d9d668b28a3148f67a0a56.mockapi.io/react-crud", {
            name: name,
            email: email,
            header,
        })
            .then(() => (
                history('/read')
            ))
        // if the data on the read page wont gets updated
    };

    return (
        <div className="mx-auto mt-5" style={{ width: 500 }}>
            <div className="d-flex justify-content-between">
                <h1>Create</h1>
                <Link to='/read'>
                    <button className="btn btn-primary">Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;
