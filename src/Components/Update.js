import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    }, []);

    const navigate = useNavigate();

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`https://63d9d668b28a3148f67a0a56.mockapi.io/react-crud/${id}`, {
            name: name,
            email: email,
        }).then(() => (
            navigate('/read')
        ))
    }

    return (
        <div className="mx-auto mt-5" style={{width: 500}}>
            <h1>Create</h1>
            <form >
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Name
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
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
                        value={email}
                    />
                </div>
                <button
                    onClick={updateHandler}
                    type="submit"
                    className="btn btn-primary mx">
                    Update
                </button>
                <Link to='/read'>
                    <button
                        className="btn btn-secondary mx-2">
                        back
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default Update