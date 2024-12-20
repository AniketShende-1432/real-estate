import React, {useState} from 'react'
import "./Signup.css";
import { Link } from 'react-router-dom';
import { BiShow } from "react-icons/bi";

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ backgroundColor: "aliceblue" }}>
            <div className='container d-flex justify-content-center align-items-center signup-cont'>
                <div className='signup-box p-4 bg-white'>
                    <div className='fw-bold fs-4 signup-text mb-3'>Sign Up</div>
                    <div>
                        <div className='mb-2'>I am</div>
                        <div className='d-flex signup-radio mb-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="buyer" />
                                <label className="form-check-label" for="buyer">
                                    Buyer/Owner/Tenant
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Agent" />
                                <label className="form-check-label" for="Agent">
                                    Agent
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="builder" />
                                <label className="form-check-label" for="builder">
                                    Builder
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div>Name</div>
                        <input type="text" className='signup-input' name="user" />
                    </div>
                    <div className='mb-3'>
                        <div>Email</div>
                        <input type="email" className='signup-input' name="email" />
                    </div>
                    <div className='mb-4 phone-cont'>
                        <div>Password</div>
                        <div className='d-flex'>
                            <input type={showPassword ? "text" : "password"} className="signup-input border-bottom-0" name="pass" /><div className='eye-icon' onClick={togglePasswordVisibility}><BiShow className='fs-3 m-1' /></div>
                        </div>
                    </div>
                    <div className='d-flex phone-cont mt-3 mb-3'>
                        <div className='w-25'>IND +91</div>
                        <input type="text" className='phone-input' name="phone" id="phone" placeholder='     Mobile Number' />
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label check-label" for="flexCheckDefault">
                            I agree to Housing T&C, Privacy Policy, & Cookie Policy
                        </label>
                    </div>
                    <div className='mb-3'>
                        <button className="btn signup-btn w-100" type="submit">Sign Up</button>
                    </div>
                    <div className='d-flex justify-content-center'>Already Registered ?<Link className="nav-link active small signup-text ms-1 fw-bold" aria-current="page" to="/login">Login Now</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup