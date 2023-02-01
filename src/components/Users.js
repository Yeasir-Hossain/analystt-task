import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';
import '../styles/users.css'
import Pagination from './Pagination';

const Users = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(3);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(result.data);
        };
        fetchData();
    }, []);

    const indexOfLastObject = currentPage * usersPerPage;
    const indexOfFirstObject = indexOfLastObject - usersPerPage;
    const currentUsers = users.slice(indexOfFirstObject, indexOfLastObject);

    return (
        <div className='users'>
            {
                currentUsers.map((user) => <User
                    key={user.id}
                    user={user}
                ></User>)
            }
            <Pagination
                usersPerPage={usersPerPage}
                totalObjects={users.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

        </div>
    );
};

export default Users;