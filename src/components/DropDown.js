import React from 'react';
import '../styles/dropdown.css'
const DropDown = ({ user }) => {
    
    return (
        <div className='drop-container'>
            <p className='title'>Description</p>
            <p>{user.company.catchPhrase}</p>
            <div className='drop-grid'>
                <div>
                    <p className='title'>Contact Person</p>
                    <p>{user.name}</p>
                    <p className='title'>User Name</p>
                    <p>{user.username}</p>
                    <p className='title'>Emails</p>
                    <p>{user.email}</p>
                    <p className='title'>Phones</p>
                    <p>{user.phone}</p>
                </div>
                <div>
                    <p className='title'>Address</p>
                    <p>{user.address.suite} {user.address.street} {user.address.city} {user.address.zipcode}</p>
                    <p className='title'>City</p>
                    <p>{user.address.city}</p>
                    <p className='title'>Street</p>
                    <p>{user.address.street}</p>
                    <p className='title'>Country</p>
                    <p>India</p>
                </div>
            </div>
        </div>
    );
};

export default DropDown;