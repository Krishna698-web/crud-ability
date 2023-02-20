import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);

    const [tabledark, setTableDark] = useState('');

    const getData = () => {
        axios
            .get("https://63d9d668b28a3148f67a0a56.mockapi.io/react-crud")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`https://63d9d668b28a3148f67a0a56.mockapi.io/react-crud/${id}`)
            .then(() => {
                getData();
            });
    };

    const setLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }


    const tableDark = () => {
        if (tabledark === 'table-dark'){
            setTableDark('');
        }else{
            setTableDark('table-dark');
        }
    }

    return (
        <div className="mx-auto mt-5" style={{width: 600}}>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={tableDark} type="checkbox" id="flexSwitchCheckDefault" />
            </div>
            <div className="d-flex justify-content-between">
                <h1>Read</h1>
                <Link to='/'>
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => (
                    <tbody key={eachData.id}>
                        <tr>
                            <th scope="row">{eachData.id}</th>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to='/update'>
                                    <button className="btn-success" onClick={() => setLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button
                                    className="btn-danger"
                                    onClick={() => deleteHandler(eachData.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    );
};

export default Read;
