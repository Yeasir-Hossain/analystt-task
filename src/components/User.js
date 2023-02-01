import React, { useState } from 'react';
import '../styles/user.css'
import DropDown from './DropDown';

const User = ({ user }) => {
    const [dropdown, setDropdown] = useState(false)
    const handledropdown = () => {
        setDropdown(!dropdown)
    }
    console.log(dropdown);
    return (
        <div className='user-container'>
            <div className='grid'>
                <div>
                    <p>{user.company.name}</p>
                    
                </div>
                <div>
                    <p className='title'>CONTACT</p>
                    <p>{user.name}</p>
                </div>
                <div>
                    <p className='title'>CITY</p>
                    <p>{user.address.city}</p>
                </div>
                <div>
                    <p className='title'>ZIPCODE</p>
                    <p>{user.address.zipcode}</p>
                </div>
                <div className='button-container'>
                    <button onClick={handledropdown} className='button'>
                        {
                            !dropdown? 'View Details': 'Hide Detalis'}
                    </button>
                </div>
            </div>
            {
                dropdown &&
                <DropDown user={user} />
            }
        </div>

    );
};

export default User;