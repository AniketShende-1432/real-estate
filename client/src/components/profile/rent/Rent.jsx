import React, { useState } from 'react';
import Profilenav from '../../profilenav/Profilenav';
import { FaRupeeSign } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import "./Rent.css";
const Rent = () => {

    const navigate = useNavigate();
    const [Inputdrop, setInputdrop] = useState("Select Property type");
    const [clickedrentBhk, setClickedrentBhk] = useState({
        bhk1: false,
        bhk2: false,
        bhk3: false,
        bhk4: false,
    });
    const [clickedrentfurni, setClickedrentfurni] = useState({
        furni1: false,
        furni2: false,
        furni3: false,
    });
    const [Inputrentarea, setInputrentarea] = useState("Sq-ft");
    const [price, setPrice] = useState(""); // State for input value
    const [formattedrentPrice, setFormattedrentPrice] = useState("");
    const [depprice, setdepPrice] = useState("");
    const [depformattedrentPrice, setdepFormattedrentPrice] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);


    const changedrop = (value) => {
        setInputdrop(value);
    }
    const handlerentBhk = (buttonKey) => {
        setClickedrentBhk((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    }
    const handlerentfurni = (buttonKey) => {
        setClickedrentfurni((prevState) => ({
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    }
    const changerentarea = (value) => {
        setInputrentarea(value);
    }
    const formatrentPrice = (value) => {
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
    const handleInputrentChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
        setPrice(value);
        setFormattedrentPrice(formatrentPrice(value));
    };
    const handledepInputrentChange = (e) => {
        const value = e.target.value.replace(/[^\d]/g, ""); // Allow only numbers
        setdepPrice(value);
        setdepFormattedrentPrice(formatrentPrice(value));
    };
    const handlerentpage =()=>{
        navigate('/profile/rent-property');
    }

    return (
        <div className="rent-cont" style={{ backgroundColor: "#FFF5EE" }}>
            <Profilenav select="Rent" />
            <div className='container rent-main-box w-50'>
                <div className='rent-main2-box bg-white p-4'>
                    <div className='rent-head'><h3>Rent Property</h3></div>
                    <div className='mt-5'>
                        <div className='mb-2'>Property Type</div>
                        <div class="dropdown d-flex rent-drop">
                            <button class="btn btn-secondary dropdown-toggle bg-white text-dark d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{Inputdrop}</span>
                                <span className="dropdown-arrow"></span>
                            </button>
                            <ul class="dropdown-menu rent-drop-menu">
                                <li><a class="dropdown-item" onClick={() => changedrop("Select Property type")} href="#">Select Property type</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Flat")} href="#">Flat</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Residential House")} href="#">Residential House</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Villa")} href="#">Villa</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Penthouse")} href="#">Penthouse</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Builder Floor Ready")} href="#">Builder Floor Ready to Move</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Office")} href="#">Office</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Shop")} href="#">Shop</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Retail")} href="#">Retail</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Godam")} href="#">Godown</a></li>
                                <li><a class="dropdown-item" onClick={() => changedrop("Industry")} href="#">Industry</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Property Location</h5></div>
                        <div>
                            <div>City</div>
                            <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='pcity' id='city' />
                            <div className='mt-3'>Locality</div>
                            <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='locality' id='plocality' />
                            <div className='mt-3'>Name of Society/Project</div>
                            <input type="text" className="rent-property-inp p-2 pt-1 w-100" name='namesociety' id='project' />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>BHK</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handlerentBhk("bhk1")}
                                style={clickedrentBhk.bhk1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >1RK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentBhk("bhk2")}
                                style={clickedrentBhk.bhk2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>1BHK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentBhk("bhk3")}
                                style={clickedrentBhk.bhk3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >2BHK</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentBhk("bhk4")}
                                style={clickedrentBhk.bhk4 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>3BHK</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2'><h5>Furnished Type</h5></div>
                        <div className='d-flex'>
                            <button className='btn btn-light border' onClick={() => handlerentfurni("furni1")}
                                style={clickedrentfurni.furni1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Fully furnished</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentfurni("furni2")}
                                style={clickedrentfurni.furni2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>Semi Furnished</button>
                            <button className='btn btn-light border ms-3' onClick={() => handlerentfurni("furni3")}
                                style={clickedrentfurni.furni3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >Unfurnished</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div><h5>Area</h5></div>
                        <div className='mt-2 mb-2'>Carpet Area</div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            <button className="btn btn-secondary bg-white text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{Inputrentarea}</button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" onClick={() => changerentarea("Sq-ft")} href="#">Sq-ft</a></li>
                                <li><a className="dropdown-item" onClick={() => changerentarea("Sq-yrd")} href="#">Sq-yrd</a></li>
                                <li><a className="dropdown-item" onClick={() => changerentarea("Sq-m")} href="#">Sq-m</a></li>
                                <li><a className="dropdown-item" onClick={() => changerentarea("Acre")} href="#">Acre</a></li>
                                <li><a className="dropdown-item" onClick={() => changerentarea("Bigha")} href="#">Bigha</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div><h5>Price Details</h5></div>
                        <div>
                            <div>Monthly Rent</div>
                            <div className='d-flex'>
                                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='price' value={price}
                                    onChange={handleInputrentChange} id='price' />
                            </div>
                            <span className='fw-bold ms-3 price-format'>{formattedrentPrice}</span>
                            <div className='mt-3'>Security Deposit</div>
                            <div className='d-flex'>
                                <FaRupeeSign className='rupee-icon' /><input type="text" className='property-inp p-2 w-100' name='price' value={depprice}
                                    onChange={handledepInputrentChange} id='price' />
                            </div>
                            <span className='fw-bold ms-3 price-format'>{depformattedrentPrice}</span>
                        </div>
                    </div>
                    <div className='rent-date-cont mt-3'>
                        <div><h5>Available From</h5></div>
                        <DatePicker
                            id="date"
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)} // Update state with the selected date
                            dateFormat="yyyy-MM-dd" // Format shown in the input
                            placeholderText="YYYY - MM - DD" // Placeholder text for the input field
                            className="form-control rent-date" // Bootstrap input styling
                        />
                    </div>
                    <button className='sell-btn p-2 w-100 text-white fw-bold mt-4' onClick={handlerentpage}>Post Property</button>
                </div>
            </div>
        </div>
    )
}

export default Rent