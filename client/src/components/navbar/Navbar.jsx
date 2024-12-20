import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const [Visible,setVisible] =useState(false);
    const hchange = ()=>{
        setVisible(!Visible);
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${props.back} ${props.cname} border cont`}>
                <div className="container d-flex justify-content-around">
                    <a className="navbar-brand logo" href="#">Housing</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-1">
                                <Link className="nav-link active text-white small" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link text-white" href="#">ForBuyers</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link text-white" href="#">ForOwners</a>
                            </li>
                            <li>
                                <a className="nav-link text-white ms-2" href="#" onClick={hchange}>Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {Visible && (<div className='login-box p-2'>
                <div className='login-link'>
                    <div className='text-secondary q-link'>Quick Links</div>
                    <div className='fw-bold p-1 log-links'>My Activity</div>
                    <div className='fw-bold p-1 log-links'>View Response</div>
                    <div className='fw-bold p-1 log-links'>Manage Properties</div>
                    <div className='fw-bold p-1 log-links'><Link className="nav-link active small" aria-current="page" to="/profile">My Profile</Link></div>
                </div>
                <div className='p-2 mt-3 log-box'>
                    <button type="button" class="btn text-white w-100 log-btn mt-2"><Link className="nav-link active small" aria-current="page" to="/login">Login</Link></button>
                    <div className='sign-txt d-flex justify-content-around ms-1 me-1 mt-3'>New to Housing ?<Link className="nav-link active small signcol fw-bold" aria-current="page" to="/signup"> Sign up</Link></div>
                </div>
            </div>
            )}
        </>
    )
}

export default Navbar