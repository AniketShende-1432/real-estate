import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";
import "./Sell.css";

const Sell = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down, hide the navbar
                navbar.classList.remove('show');
            } else {
                // Scrolling up, show the navbar
                navbar.classList.add('show');
            }

            lastScrollY = currentScrollY;
        };

        const handleMouseMove = (e) => {
            if (e.clientY <= 110) {
                // Cursor near the top of the screen, show navbar
                navbar.classList.add('show');
            } else {
                // Cursor away from the top, hide navbar
                navbar.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const [Inputdrop, setInputdrop] = useState("Select Property type");
    const [clickedBhk, setClickedBhk] = useState({
        bhk1: false,
        bhk2: false,
        bhk3: false,
        bhk4: false,
    });
    const [clickedfurni, setClickedfurni] = useState({
        furni1: false,
        furni2: false,
        furni3: false,
    });
    const [Inputarea, setInputarea] = useState("Sq-ft");
    const [Inputsarea, setInputsarea] = useState("Sq-ft");
    const [price, setPrice] = useState(""); // State for input value
    const [formattedPrice, setFormattedPrice] = useState(""); // State for formatted display value

    const handleBhk = (buttonKey) => {
        setClickedBhk((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    }
    const changedrop = (value) => {
        setInputdrop(value);
    }
    const changearea = (value) => {
        setInputarea(value);
    }
    const changesarea = (value) => {
        setInputsarea(value);
    }
    const handlefurni = (buttonKey) => {
        setClickedfurni((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    }
    const handlepage =()=>{
        navigate('/profile/sell-property');
    }
    const formatPrice = (value) => {
        if (!value) return ""; // Handle empty input
        const num = parseFloat(value);

        if (isNaN(num)) return value; // Handle invalid number input

        if (num >= 10000000) {
            return `${(num / 10000000).toFixed(1)} Cr`; // Format as Crore
        } else if (num >= 100000) {
            return `${(num / 100000).toFixed(1)} Lacs`; // Format as Lacs
        } else if (num >= 1000) {
            return `${(num / 1000).toFixed(1)} K`; // Format as Thousand
        } else {
            return num.toString(); // Return as is for smaller values
        }
    };
    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
        setPrice(value);
        setFormattedPrice(formatPrice(value));
    };

    return (
        <div className="parent-cont" style={{backgroundColor:"#FFF5EE"}}>
            <div className='sell-cont-nav'>
                <Navbar back="profile-bg" cname="sell-nav" />
                <div className='sell-cont-box' id='navbar'>
                    <div className='p-cont-box1 d-flex justify-content-around'>
                        <div className='sell-itm' onClick={() => navigate('/', { state: { tab: 'buy' } })}>Buy</div>
                        <div className="sell-itm sell-itmcol"><Link className="nav-link active small" aria-current="page" to="/profile/sell">Sell</Link></div>
                        <div className="sell-itm"><Link className="nav-link active small" aria-current="page" to="/profile/Rent">Rent</Link></div>
                        <div className="sell-itm"><Link className="nav-link active small" aria-current="page" to="/profile/plot">Plot/Land</Link></div>
                        <div className="sell-itm"><Link className="nav-link active small" aria-current="page" to="/profile/pg">PG</Link></div>
                        <div className="sell-itm"><Link className="nav-link active small" aria-current="page" to="/profile/commercial">Commercial</Link></div>
                        <div className="sell-itm">Home Loan</div>
                    </div>
                </div>
            </div>
            <div className='container main-box w-50'>
                <div className='main2-box bg-white p-4'>
                    <div className='sell-head'><h3>Sell Of Property</h3></div>
                    <div className='mt-5'>
                        <div className='mb-2'>Property Type</div>
                        <div class="dropdown d-flex sell-drop">
                            <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{Inputdrop}</span>
                                <span className="dropdown-arrow"></span>
                            </button>
                            <ul class="dropdown-menu sell-drop-menu">
                                <li><a class="dropdown-item" onClick={() => changedrop("Select Property type")} href="#">Select Property type</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Flat")} href="#">Flat</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Residential House")} href="#">Residential House</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Villa")} href="#">Villa</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Penthouse")} href="#">Penthouse</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Builder Floor Ready")} href="#">Builder Floor Ready to Move</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Builder Under Constructio")} href="#">Builder Under Construction</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Property Location</h5></div>
                        <div>
                            <div>City</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='pcity' id='city' />
                            <div className='mt-3'>Locality</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='locality' id='plocality' />
                            <div className='mt-3'>Name of Society/Project</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='society' id='project' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>BHK</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handleBhk("bhk1")}
                                style={clickedBhk.bhk1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >1RK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleBhk("bhk2")}
                                style={clickedBhk.bhk2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>1BHK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleBhk("bhk3")}
                                style={clickedBhk.bhk3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >2BHK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleBhk("bhk4")}
                                style={clickedBhk.bhk4 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>3BHK</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'><h5>Furnished Type</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handlefurni("furni1")}
                                style={clickedfurni.furni1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Fully furnished</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlefurni("furni2")}
                                style={clickedfurni.furni2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Semi Furnished</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlefurni("furni3")}
                                style={clickedfurni.furni3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Unfurnished</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Area</h5></div>
                        <span>Provide Super Area</span>
                        <div className='mt-2 mb-2'>Carpet Area</div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputarea}</button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" onClick={() => changearea("Sq-ft")} href="#">Sq-ft</a></li>
                                <li><a className="dropdown-item" onClick={() => changearea("Sq-yrd")} href="#">Sq-yrd</a></li>
                                <li><a className="dropdown-item" onClick={() => changearea("Sq-m")} href="#">Sq-m</a></li>
                                <li><a className="dropdown-item" onClick={() => changearea("Acre")} href="#">Acre</a></li>
                                <li><a className="dropdown-item" onClick={() => changearea("Bigha")} href="#">Bigha</a></li>
                            </ul>
                        </div>
                        <div className='mb-2'>Super Area</div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputsarea}</button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" onClick={() => changesarea("Sq-ft")} href="#">Sq-ft</a></li>
                                <li><a className="dropdown-item" onClick={() => changesarea("Sq-yrd")} href="#">Sq-yrd</a></li>
                                <li><a className="dropdown-item" onClick={() => changesarea("Sq-m")} href="#">Sq-m</a></li>
                                <li><a className="dropdown-item" onClick={() => changesarea("Acre")} href="#">Acre</a></li>
                                <li><a className="dropdown-item" onClick={() => changesarea("Bigha")} href="#">Bigha</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Possession Status</h5></div>
                        <div className='d-flex'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="construct1" />
                                <label className="form-check-label" for="construct1">
                                    Under Construction
                                </label>
                            </div>
                            <div className="form-check ms-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="ready2" />
                                <label className="form-check-label" for="ready2">
                                    Ready to Move New
                                </label>
                            </div>
                            <div className="form-check ms-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="resell" />
                                <label className="form-check-label" for="resell">
                                    Resell
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Price Details</h5></div>
                        <div>
                            <div>Cost</div>
                            <div className='d-flex'>
                                <FaRupeeSign className='rupee-icon'/><input type="text" className='property-inp p-2 w-100' name='price' value={price}
                                onChange={handleInputChange} id='price'/>
                            </div>
                        </div>
                        <span className='fw-bold ms-3 price-format'>{formattedPrice}</span>
                    </div>
                    {/* <div className="mt-5">
                        <div><h5>Photos Property</h5></div>
                        <div>
                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label photo-btn text-white fw-bold text-center mt-2 p-2 w-100" htmlFor='formFileMultiple'>Add Photos Now</label>
                                <input class="form-control" type="file" id="formFileMultiple" multiple style={{ display: 'none' }} />
                            </div>
                        </div>
                    </div> */}
                    <button className='sell-btn p-2 w-100 text-white fw-bold mt-3' onClick={handlepage}>Post Property</button>
                </div>
            </div>
        </div>
    )
}

export default Sell