import React, { useState, useEffect } from 'react'
import './Home.css'
import { IoLocationSharp } from "react-icons/io5";
import Navbar from '../navbar/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const Home = () => {

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState('buy');
    const [Input1, setInput1] = useState("Navi Mumbai");
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.tab) {
            setSelectedTab(location.state.tab);
        }
    }, [location]);

    const change1 = (value) => {
        setInput1(value);
    }

    const sellnav = () =>{
        navigate('/profile', { state: { tab: 'Sell' } })
    }

    return (
        <>
            <Navbar />
            <div>
                <img className='b-image' src="https://housing-images.n7net.in/3a1452c5/69b1a317abbdcf1e6f1072386dc28707/v0/banner.jpg" />
            </div>
            <div className='s-cont d-flex justify-content-center h-100'>
                <div className='s-cont-box'>
                    <div className='s-cont-box1 d-flex'>
                        <div onClick={() => setSelectedTab('buy')}
                            className={`s-itm ${selectedTab === 'buy' ? 's-itmcol' : ''}`}>Buy</div>
                        <div onClick={sellnav}
                            className={`s-itm ${selectedTab === 'Sell' ? 's-itmcol' : ''}`} >Sell</div>
                        <div onClick={() => setSelectedTab('Rent')}
                            className={`s-itm ${selectedTab === 'Rent' ? 's-itmcol' : ''}`}>Rent</div>
                        <div onClick={() => setSelectedTab('Plot/Land')}
                            className={`s-itm ${selectedTab === 'Plot/Land' ? 's-itmcol' : ''}`}>Plot/Land</div>
                        <div onClick={() => setSelectedTab('PG')}
                            className={`s-itm ${selectedTab === 'PG' ? 's-itmcol' : ''}`}>PG</div>
                        <div onClick={() => setSelectedTab('Commercial')}
                            className={`s-itm ${selectedTab === 'Commercial' ? 's-itmcol' : ''}`}>Commercial</div>
                    </div>
                    <div className='s-cont-sbox d-flex p-2'>
                        <form className='d-flex align-items-center justify-content-start ms-2'>
                            <div class="dropdown d-flex loc-dropdown">
                                <button class="btn btn-secondary dropdown-toggle bg-white text-dark p-2 loc-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {Input1}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={() => change1("Mumbai")} href="#">Mumbai</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Western Mumbai")} href="#">Western Mumbai</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Central Mumbai")} href="#">Central Mumbai</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Navi Mumbai")} href="#">Navi Mumbai</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Thane")} href="#">Thane</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Beyond Thane")} href="#">Beyond Thane</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Pune")} href="#">Pune</a></li>
                                    <li><a class="dropdown-item" onClick={() => change1("Nashik")} href="#">Nashik</a></li>
                                </ul>
                            </div>
                            <input type="text" className="s-cont-input" placeholder='Location' />
                        </form>
                        <div className='d-flex align-items-center s-drop'>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Property Type
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Flat</a></li>
                                <li><a className="dropdown-item" href="#">1 bhk</a></li>
                                <li><a className="dropdown-item" href="#">2 bhk</a></li>
                            </ul>
                        </div>
                        <div className='d-flex align-items-center ms-auto'>
                            <button className='btn search-btn text-white' ><Link className="nav-link active small" aria-current="page" to="/search">Search</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home