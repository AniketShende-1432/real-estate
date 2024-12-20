import React, { useState,useEffect } from 'react'
import { Link,useNavigate,useLocation  } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import "./Profile.css"

const Profile = () => {

    const [Visiblenav, setVisiblenav] = useState(false);
    const [Choice, setChoice] = useState(true);
    const [Inputuser, setInputuser] = useState("Individual");
    const location = useLocation();
    const [selectTab, setSelectTab] = useState('buy');
    const navigate = useNavigate();

    useEffect(() => {
            if (location.state?.tab) {
                setSelectTab(location.state.tab);
            }
    }, [location]);
    const hchange = () => {
        setVisiblenav(!Visiblenav);
    }
    const userchange = (value) => {
        setInputuser(value);
    }

    return (
        <>
            <Navbar back="profile-bg" />
            <div className='p-cont-box'>
                <div className='p-cont-box1 d-flex justify-content-around'>
                    <div className='p-itm' onClick={() => navigate('/', { state: { tab: 'buy' } })}>Buy</div>
                    <div className={`p-itm ${selectTab === 'Sell' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('Sell')}><Link className="nav-link active small" aria-current="page" to="/profile/sell">Sell</Link></div>
                    <div className={`p-itm ${selectTab === 'Rent' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('Rent')}><Link className="nav-link active small" aria-current="page" to="/profile/rent">Rent</Link></div>
                    <div className={`p-itm ${selectTab === 'Plot/Land' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('Plot/Land')}><Link className="nav-link active small" aria-current="page" to="/profile/plot">Plot/Land</Link></div>
                    <div className={`p-itm ${selectTab === 'PG' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('PG')}><Link className="nav-link active small" aria-current="page" to="/profile/pg">PG</Link></div>
                    <div className={`p-itm ${selectTab === 'Commercial' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('Commercial')}><Link className="nav-link active small" aria-current="page" to="/profile/commercial">Commercial</Link></div>
                    <div className={`p-itm ${selectTab === 'Home Loan' ? 'p-itmcol' : ''}`} 
                    onClick={() => setSelectTab('Home Loan')}>Home Loan</div>
                </div>
            </div>
            <div className='d-flex flex-column mt-5 pt-4 align-items-center pr-main-box'>
                <div className='d-flex justify-content-center w-50'>
                    <div className={`choice-btn1 fw-bold p-2 px-4 ${Choice ? "profile-bg text-white" : ""}`} onClick={() => setChoice(true)}>My Profile</div>
                    <div className={`choice-btn2 fw-bold p-2 ${!Choice ? "profile-bg text-white" : ""}`} onClick={() => setChoice(false)}>Change Password</div>
                </div>
                <div className='pr-cont p-3 pe-3'>
                    <div className='container'>
                        {Choice ? (<div>
                            <div className='row mb-3'>
                                <div className='col-5 me-2 text-end my-2'>Name</div>
                                <input type="text" class="form-control col ms-2" name='uname' id='username' />
                            </div>
                            <div className='row mb-3'>
                                <div className='col-5 me-2 text-end my-2'>User Type</div>
                                <div class="dropdown col d-flex w-50 p-0 ms-2">
                                    <button class="btn btn-secondary border border-secondary-subtle dropdown-toggle w-100 bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>{Inputuser}</span>
                                        <span className="dropdown-arrow"></span>
                                    </button>
                                    <ul class="dropdown-menu w-75">
                                        <li><a class="dropdown-item" onClick={() => userchange("Individual")} href="#">Individual</a></li>
                                        <li><a class="dropdown-item" onClick={() => userchange("Agent")} href="#">Agent</a></li>
                                        <li><a class="dropdown-item" onClick={() => userchange("Builder")} href="#">Builder</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-5 me-2 text-end my-2'>Email</div>
                                <input type="email" class="form-control col ms-2" name='uemail' id='useremail' />
                            </div>
                            <div className='row mb-3'>
                                <div className='col-5 me-2 text-end my-2'>Mobile</div>
                                <div className='col d-flex p-0'>
                                    <div className='pr-pcode my-2 ms-2'>IND +91</div>
                                    <input type="text" class="form-control ms-2" name='uname' id='username' />
                                </div>
                            </div>
                            <button className="btn profile-btn fw-bold w-100" type="submit">Save Profile</button>
                        </div>) : (
                            <div>
                                <div className='row mb-3'>
                                    <div className='col-5 me-2 text-end my-2'>Current Password</div>
                                    <input type="password" class="form-control col ms-2" name='uemail' id='useremail' />
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-5 me-2 text-end my-2'>New Password</div>
                                    <input type="password" class="form-control col ms-2" name='uemail' id='useremail' />
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-5 me-2 text-end my-2'>Confirm Password</div>
                                    <input type="password" class="form-control col ms-2" name='uemail' id='useremail' />
                                </div>
                                <button className="btn profile-btn fw-bold w-100" type="submit">Save Password</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile