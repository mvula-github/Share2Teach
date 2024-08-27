// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Link} from 'react-router-dom';//import Link from react-router-dom
import './SignUp.css'


const SignUp = () => {

    const [action,setAction] = useState("Sign Up");//to manage the current state of the form, whether the educator is in the sign up form or the login form
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    });//manages the form data for both sign up and login forms
    const [errors, setErrors]= useState({});//manages and displays errors in the form 
    const navigate = useNavigate();//Hook for navigation which we are able to do because we imported useNavigate from react-router-dom

    const handleInputChange = (e) => {//(e) contains the properties of the changed input field
        const{name,value} = e.target;//used the attribute name to identify fields and this function will be able to handle changes for any number of inputs without needing seperate handlers for each one
        setFormData(prevState => ({
            ...prevState, [name]: value//value is set to something that would be like formData.firstName, which means the value of the input is controlled which means it's a controlled component because it's value is managed by React and changes only when state is updated
        }));
    };//this will ensure that the form state is updated dynamically as the user interacts with the form

    const handleSubmit = (e) => {
        e.preventDefault();//Prevents the default form submission behaviour(should ask if we would prefer that though) although form will reload the page
        //Validation logic
        const newErrors ={};//initializing an empty object to collect validation errors so that we can store error messages for various form fields.

        //to check if educator didn't leave any inputs empty and if so, error message must display
        if(!formData.firstName) newErrors.firstName = "First name is required";
        if(!formData.email) newErrors.email = "Email is required";
        if(!formData.password) newErrors.password = "Password is required";
        if(action === "Sign Up" && formData.password != formData.confirmPassword) {//checking to see if we are on sign up mode and if passwords match
            newErrors.confirmPassword = "Passwords don't match";// if passwords dont match, error message must display
        }
        if(!validateEmail(formData.email)) newErrors.email = "Invalid email";//checking to see if email is correct

        //checks that there are no errors in the newErrors object
        if(Object.keys(newErrors).length === 0) {
            //Proceeding with submitting the form whereby data should be sent to API
            console.log("Sign Up successful");//logs a message to the console indicating that the sign up process is successful
            //Redirect educator to subjects view page
            window.location.href = "/subjects";
        } else{
            setErrors(newErrors);//if there are errors, update the state with the new errors
        }

    };

    const validateEmail = (email) => {
        //simple email validaton check
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }


    return (
        <div>
          <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
                <form onSubmit={handleSubmit}>
                    <div className='inputs'>
                        {action === "Login" ? null : (
                            {/*First name input is rendered first for both sign up and login */}
                            <div className='input'>
                                <input 
                                    name="firstName"
                                    type="text" 
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                                {errors.firstName && <span className='error'>{errors.firstName}</span>}
                            </div>
                        )}
    
                        {/* Conditionally render Last name input only for Sign Up */}
                        {action === "Sign Up" && (
                            <div className='input'>
                                <input
                                    name="lastName" 
                                    type="text" 
                                    placeholder="Last name"
                                    value={formData.lastName} 
                                    onChange={handleInputChange}
                                />
                                {errors.lastName && <span className="error">{errors.lastName}</span>}
                            </div>
                        )}
                        {/* Render First name input for both Login and Sign Up */}
                        <div className='input'>
                            <input 
                                name="email"
                                type="email" 
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span className='errors'>{errors.email}</span>}
                        </div>
                        <div className='input'>
                            <input 
                                name="password"
                                type="password" 
                                placeholder="Password" 
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        {action === "Sign Up" && (
                            <div className='input'>
                                <input 
                                    name="confirmPassword"
                                    type="password"
                                    placeholder='Confirm Password'
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                />
                                {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
                            </div>
                        )}
                    </div>
                    {action === "Sign Up" ? null : (
                        <div className='forgot-password'>
                            Lost Password? <Link to="/reset-password">Click Here</Link>
                        </div>
                    )}
                    <div className='submit-container'>
                        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                        <div className={action === "Sign Up" ? "submit gray" : "submit"}onClick={() => { setAction("Login") }}>Login</div>
                    </div>
                    <Link to="/">Back to Home</Link>

                </form>
            </div>
        </div>

    );
  
};


export default SignUp;