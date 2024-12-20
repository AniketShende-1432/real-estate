import React, { useState } from 'react'
import Profilenav from '../../profilenav/Profilenav';
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Plot.css";

const Plot = () => {

    const navigate = useNavigate();
    const [Inputplotarea, setInputplotarea] = useState("Sq-ft");
    const [clickedplotbound, setclickedplotbound] = useState({
        yes: false,
        no: false,
    });
    const [clickedplotside, setclickedplotside] = useState({
        open1: false,
        open2: false,
        open3: false,
        open4: false,
    });
    const [Inputposs, setInputposs] = useState("Excepted By");
    const [clickedplotapprove, setclickedplotapprove] = useState({
        na: false,
        na_pro: false,
        collect:false,
        co_operation: false,
    });
    const [clickedplotowner, setclickedplotowner] = useState({
        free: false,
        lease: false,
        co_operate: false,
        power: false,
    });
    const [plotprice, setplotPrice] = useState(""); // State for input value
    const [formattedplotPrice, setFormattedplotPrice] = useState("");

    const changeplotarea = (value) => {
        setInputplotarea(value);
    };
    const handleplotbound = (buttonKey) => {
        setclickedplotbound((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handleplotside = (buttonKey) => {
        setclickedplotside((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const changeposs = (value) => {
        setInputposs(value);
    };
    const handleplotapprove = (buttonKey) => {
        setclickedplotapprove((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const handleplotowner = (buttonKey) => {
        setclickedplotowner((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const formatplotPrice = (value) => {
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
    const handleplotInputChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
        setplotPrice(value);
        setFormattedplotPrice(formatplotPrice(value));
    };
    const handleplotpage =()=>{
        navigate('/profile/plot-property');
    }

    return (
        <div className="rent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Plot/Land" />
            <div className='container rent-main-box w-50'>
                <div className='rent-main2-box bg-white p-4'>
                    <div className='rent-head'><h3>Sell of Plot/Land Property</h3></div>
                    <div className='mt-4'>
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
                        <div><h5>Area</h5></div>
                        <div className='mt-2 mb-2'>Plot/Land Area</div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputplotarea}</button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" onClick={() => changeplotarea("Sq-ft")} href="#">Sq-ft</a></li>
                                <li><a className="dropdown-item" onClick={() => changeplotarea("Sq-yrd")} href="#">Sq-yrd</a></li>
                                <li><a className="dropdown-item" onClick={() => changeplotarea("Sq-m")} href="#">Sq-m</a></li>
                                <li><a className="dropdown-item" onClick={() => changeplotarea("Acre")} href="#">Acre</a></li>
                                <li><a className="dropdown-item" onClick={() => changeplotarea("Bigha")} href="#">Bigha</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Property Dimensions</h5></div>
                        <div>
                            <div>Length of Plot (in Ft.)</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='lplot' id='lengthp' />
                            <div className='mt-3'>Breadth of Plot (in Ft.)</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='bplot' id='breadthp' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Floor Allowed for Construction</h5></div>
                        <div>
                            <div>No. of floors</div>
                            <input type="text" className="property-inp p-2 pt-1 w-100" name='nfloor' id='nofloor' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Is there a boundary wall around the property ?</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handleplotbound("yes")}
                                style={clickedplotbound.yes ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Yes</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotbound("no")}
                                style={clickedplotbound.no ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>No</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>No. of Open Sides</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handleplotside("open1")}
                                style={clickedplotside.open1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >1</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotside("open2")}
                                style={clickedplotside.open2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>2</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotside("open3")}
                                style={clickedplotside.open3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >3</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotside("open4")}
                                style={clickedplotside.open4 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>3+</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'><h5>Possession By</h5></div>
                        <div class="dropdown d-flex rent-drop">
                            <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{Inputposs}</span>
                                <span className="dropdown-arrow"></span>
                            </button>
                            <ul class="dropdown-menu rent-drop-menu">
                                <li><a class="dropdown-item" onClick={() => changeposs("Immediate")} href="#">Immediate</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("Within 3 Months")} href="#">Within 3 Months</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("Within 6 Months")} href="#">Within 6 Months</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2025")} href="#">By 2025</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2026")} href="#">By 2026</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2027")} href="#">By 2027</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2028")} href="#">By 2028</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2029")} href="#">By 2029</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2030")} href="#">By 2030</a></li>
                                <li><a class="dropdown-item" onClick={() => changeposs("By 2031")} href="#">By 2031</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Approved By</h5></div>
                        <div className='d-flex flex-wrap plot-approve justify-content-center'>
                            <button className='btn btn-light border' onClick={() => handleplotapprove("na")}
                                style={clickedplotapprove.na ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >N.A(Non-Agricultural)</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotapprove("na_pro")}
                                style={clickedplotapprove.na_pro ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>N.A(in-process)</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotapprove("collect")}
                                style={clickedplotapprove.collect ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Collector Approved</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotapprove("co_operation")}
                                style={clickedplotapprove.co_operation ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Corporation Approved</button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div><h5>Ownership</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handleplotowner("free")}
                                style={clickedplotowner.free ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Freehold</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotowner("lease")}
                                style={clickedplotowner.lease ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Leasehold</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotowner("co_operate")}
                                style={clickedplotowner.co_operate ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Co-operative Society</button>
                            <button className='btn btn-light border ms-3' onClick={() => handleplotowner("power")}
                                style={clickedplotowner.power ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Power of Attorney</button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Price Details</h5></div>
                        <div>
                            <div>Cost</div>
                            <div className='d-flex'>
                                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='plotprice' value={plotprice}
                                    onChange={handleplotInputChange} id='price' />
                            </div>
                        </div>
                        <span className='fw-bold ms-3 price-format'>{formattedplotPrice}</span>
                    </div>
                    <button className='sell-btn p-2 w-100 text-white fw-bold mt-3' onClick={handleplotpage}>Post Property</button>
                </div>
            </div>
        </div>
    )
}

export default Plot