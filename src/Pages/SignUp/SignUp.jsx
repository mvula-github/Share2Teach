<<<<<<< HEAD:src/Pages/SignUp/SignUp.jsx
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './SignUp.css'
=======
import React from 'react';
import './accountCreation.css'
import user_icon from 'C:/Jameela_Account/Share2Teach/public/assets/img3.png'
import password_icon from 'C:/Jameela_Account/Share2Teach/public/assets/business-authorityAC.png'
import email_icon from 'C:/Jameela_Account/Share2Teach/public/assets/emailAC.jpeg'
>>>>>>> 2b92f33 (fixed changes):src/Pages/accountCreation/accountCreation.jsx


const SignUp = () => {

    const [action,setAction] = useState("Sign Up");


    return (
        <div>
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src='../../../assets/icons/img3.png' alt=""/>
                    <input type = "text" placeholder="Name"/>
                </div>}
                
                <div className='input'>
                    <img src='../../../assets/icons/emailAC.jpeg' alt=""/>
                    <input type = "email" placeholder="Email"/>
                </div>
                <div className='input'>
                    <img src='../../../assets/icons/business-authorityAC.png' alt=""/>
                    <input type = "password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}
           
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray": "submit "} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

            </div>
        </div>
           
   
    );
  
};


export default SignUp;