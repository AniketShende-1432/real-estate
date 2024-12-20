import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { IoMailOutline } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";

const Login = () => {

    const [clickedButtons, setClickedButtons] = useState({
        button1: false,
        button2: false,
    });
    const [userType, setUserType] = useState('email');

    const handleClick = (buttonKey) => {
        setClickedButtons((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handleChange = () => {
        if(userType=="email")
        {
            setUserType("phone");
        }
        else{
            setUserType("email");
        }
    };

    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <div className='container d-flex justify-content-center align-items-start log-cont pt-2'>
                <div className='log-cont-box bg-white mt-5 p-4'>
                    <div className='fw-bold fs-4 login-text mb-3 text-center'>Login</div>
                    <div className='d-flex google-cont'>
                        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
                            <div className="container text-center">
                                <GoogleLogin text="signin"
                                theme="filled_blue"
                                className="google-login-btn"
                                />
                            </div>
                        </GoogleOAuthProvider>
                        <div className='d-flex'>
                            <div className='fs-3 border border-dark px-2 mail-icon d-flex align-items-center'> {userType !== 'phone' ? <FaSquarePhone /> : <IoMailOutline className='text-dark' />}</div>
                            <button type="button" className="otp-btn btn c-btn" onClick={() => handleChange()}>
                                    {userType !== 'phone' ? 'Mobile OTP' : 'Email Login'}
                            </button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center my-3">
                        <div className="flex-grow-1 border border-secondary-subtle"></div>
                        <span className="mx-3 text-muted">or</span>
                        <div className="flex-grow-1 border border-secondary-subtle"></div>
                    </div>
                    <div className='mb-3'>
                        <div className='fw-bold'>Are you</div>
                        <div>
                            <button className='btn btn-light log-cont-btn mt-2' onClick={() => handleClick("button1")}
                                style={clickedButtons.button1 ? { border: "1px solid darkorange", backgroundColor:"#FFE5B4" } : {}} >Buyer/Owner</button>
                            <button className='btn btn-light log-cont-btn mt-2 ms-2' onClick={() => handleClick("button2")}
                                style={clickedButtons.button2 ? { border: "1px solid darkorange", backgroundColor:"#FFE5B4" } : {}}>Agent/Builder</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            {userType === 'email' ? (
                                <div>
                                    <div className='mb-3'>
                                        <div>Enter Email ID</div>
                                        <input type="email" className='log-cont-input' name="email" />
                                    </div>
                                    <div className='mb-3'>
                                        <div>Enter Password</div>
                                        <input type="password" className="log-cont-input" name="pass" />
                                    </div>
                                    <div className='mb-3'>
                                        <button className="btn c-btn w-100" type="submit">Login</button>
                                    </div>
                                    <div className='d-flex justify-content-center login-text fw-bold mb-2'>Forgot Password ?</div>
                                </div>
                            ) : (
                                <div>
                                    <div className='d-flex phone-cont mt-4 mb-3'>
                                        <div className='w-25'>IND +91</div>
                                        <input type="text" className='phone-input' name="phone" id="phone" placeholder='     Mobile Number' />
                                    </div>
                                    <button className="btn c-btn w-100 mb-2">Next</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>New to Housing ?<Link className="nav-link active small login-text ms-1 fw-bold" aria-current="page" to="/signup">Sign up</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login