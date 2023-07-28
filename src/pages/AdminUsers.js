import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../../utils/constants';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const res = await axios.get(URL + 'admin/users', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUsers(res.data.response);
    }
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(URL + 'admin/user/' + id, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            });
            setUsers(res.data.users);
        } catch (error) {
            throw new Error(error);
        }
    }
    return (
        <div>
            <ul>
                <h1 className='font-bold text-3xl m-5 text-center'>Registered Users</h1>
                <li className='flex flex-row justify-around outline m-3 text-xl font-bold'>
                    <p>Name</p>
                    <p>Email</p>
                    <p>Address</p>
                </li>
                {
                    users.length != 0 && (
                        users.map((user) => {
                            return (
                                <li key={user._id} className='flex flex-row justify-around outline m-3'>
                                    <p className='w-1/4 text-center' >{user.name}</p>
                                    <p className='w-1/4 text-center'>{user.email}</p>
                                    <p className='w-1/4 text-center'>{user.address}</p>
                                    <button className='w-1/4 text-center font-semibold text-red-600 border-none outline-none hover:text-red-800' onClick={() => handleDelete(user._id)}>Delete</button>
                                </li>
                            )
                        }))
                }
            </ul>
        </div>
    )
}

export default AdminUsers