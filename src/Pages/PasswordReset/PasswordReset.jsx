//PasswordReset Page
import React from 'react';
import './PasswordReset.css';

const PasswordReset = () => {
    return (
        <div>
            <div className = ' container'>
                <div className = 'header'>
                    <div className='text'> Reset Password</div>
                    <div className = 'underline'></div>                
                </div>
                <div className='inputs'>
                    <div className='input'>
                       {/*} <img src ='../../../assets/icons/emailAC.jpeg' alt = "description"/>*/}
                        <input type = "email" placeholder = "Enter your email" />
                    </div>
                    <div className='input'>
                       {/*} <img src ='../../../assets/icons/emailAC.jpeg' alt = "description"/>*/}
                        <input type = "password" placeholder = "Enter your new password" />
                    </div>
                </div>
                <div className='submit-container'>
                    <div className='submit'>Submit</div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;