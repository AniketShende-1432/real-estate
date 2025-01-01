import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import "./Search.css"
import build from "../../assets/building.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Propcard from "./Propcard";

const Search = () => {
    const [Input, setInput] = useState("Buy");
    const [Mvalue, setMvalue] = useState(0);
    const [properties, setProperties] = useState([]);
    const [visibility, setVisibility] = useState({
        budget: true,
        type: false,
        Nbed: false,
        area: false,
        locate: false,
    });
    const [clickedButtons, setClickedButtons] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: false,
    });
    const [clickedBed, setClickedBed] = useState({
        bed1: false,
        bed2: false,
        bed3: false,
        bed4: false,
    });
    const [avalue, setavalue] = useState(0);

    useEffect(() => {
        const fetchProperties = async () => {
            const base_url = import.meta.env.VITE_BASE_URL;
            try {
                await axios.get(`${base_url}/api/v3/properties`).then((response) => {
                    setProperties(response.data); // Directly set the response data
                })
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const change = (value) => {
        setInput(value);
    }
    const mchange = (e) => {
        setMvalue(e.target.value);
    }
    const toggleVisibilitys = (section) => {
        setVisibility((prevVisibility) => ({
            ...prevVisibility,
            [section]: !prevVisibility[section], // Toggle the visibility of the clicked section
        }));
    };
    const handleClick = (buttonKey) => {
        setClickedButtons((prevState) => ({
            ...prevState,
            [buttonKey]: !prevState[buttonKey], // Toggle the clicked button's style
        }));
    };
    const bedClick = (bedid) => {
        setClickedBed((prevState) => ({
            ...prevState,
            [bedid]: !prevState[bedid], // Toggle the clicked button's style
        }));
    };
    const achange = (e) => {
        setavalue(e.target.value);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg border search-nav">
                <div className="container-fluid justify-content-evenly search-cont">
                    <a className="navbar-brand text-white s-logo fs-3" href="#">Housing</a>
                    <div class="dropdown d-flex w-50">
                        <button class="btn btn-secondary dropdown-toggle bg-white text-dark search-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {Input}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={() => change("Buy")} href="#">Buy</a></li>
                            <li><a class="dropdown-item" onClick={() => change("Sell")} href="#">Sell</a></li>
                            <li><a class="dropdown-item" onClick={() => change("Rent")} href="#">Rent</a></li>
                            <li><a className="dropdown-item" onClick={() => change("PG")} href="#">PG</a></li>
                        </ul>
                        <input type="text" class="form-control search-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        <button className='btn s-nav-btn bg-white ms-2' >Search</button>
                    </div>
                </div>
            </nav>
            <div className='item-cont p-4'>
                <div className='filter bg-white p-3'>
                    <h3 className='filter-h3'>Apply Filters</h3>
                    <div className='budg'>
                        <div className='bdg-box1 p-2 d-flex justify-content-between align-items-center'
                            onClick={() => toggleVisibilitys("budget")}>
                            <div className='fw-bold'>Budget</div>
                            <IoIosArrowDown />
                        </div>
                        {visibility.budget && (<div className='bdg-box2 mt-3'>
                            <div className='range d-flex justify-content-between'>
                                <div className='minrange'>0</div>
                                <div className='maxrange'>{Mvalue}&nbsp;crores</div>
                            </div>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange2"
                                value={Mvalue} onChange={mchange} />
                        </div>
                        )}
                    </div>
                    <div className='type'>
                        <div className='type-box p-2 d-flex justify-content-between align-items-center'
                            onClick={() => toggleVisibilitys("type")}>
                            <div className='fw-bold'>Type of Property</div>
                            <IoIosArrowDown />
                        </div>
                        {visibility.type && (<div className='container type-box1 pb-2'>
                            <button className='btn btn-light type-btn mt-2' onClick={() => handleClick("button1")}
                                style={clickedButtons.button1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >+1 RK/Studio Apartment</button>
                            <button className='btn btn-light type-btn mt-2' onClick={() => handleClick("button2")}
                                style={clickedButtons.button2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ Residental Apartment</button>
                            <button className='btn btn-light type-btn mt-2 me-1' onClick={() => handleClick("button3")}
                                style={clickedButtons.button3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ House Villa</button>
                            <button className='btn btn-light type-btn mt-2' onClick={() => handleClick("button4")}
                                style={clickedButtons.button4 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ Land</button>
                        </div>
                        )}
                    </div>
                    <div className='Nbed'>
                        <div className='type-box p-2 d-flex justify-content-between align-items-center'
                            onClick={() => toggleVisibilitys("Nbed")}>
                            <div className='fw-bold'>No. of Bedrooms</div>
                            <IoIosArrowDown />
                        </div>
                        {visibility.Nbed && (<div className='container type-box1 pb-2'>
                            <button className='btn btn-light type-btn mt-2 me-1' onClick={() => bedClick("bed1")}
                                style={clickedBed.bed1 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}} >+1 RK/BHK</button>
                            <button className='btn btn-light type-btn mt-2' onClick={() => bedClick("bed2")}
                                style={clickedBed.bed2 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ 2BHK</button>
                            <button className='btn btn-light type-btn mt-2 me-1' onClick={() => bedClick("bed3")}
                                style={clickedBed.bed3 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ 3BHK</button>
                            <button className='btn btn-light type-btn mt-2' onClick={() => bedClick("bed4")}
                                style={clickedBed.bed4 ? { border: "1px solid darkorange", backgroundColor: "#FFE5B4" } : {}}>+ 4BHK</button>
                        </div>
                        )}
                    </div>
                    <div className='area'>
                        <div className='bdg-box1 type-box p-2 d-flex justify-content-between align-items-center'
                            onClick={() => toggleVisibilitys("area")}>
                            <div className='fw-bold'>Area</div>
                            <IoIosArrowDown />
                        </div>
                        {visibility.area && (<div className='bdg-box2 mt-3 pb-2'>
                            <div className='range d-flex justify-content-between'>
                                <div className='minrange w-25'>0&nbsp;sq.ft</div>
                                <div className='maxrange'>{avalue}&nbsp;sq.ft</div>
                            </div>
                            <input type="range" class="form-range" min="0" max="4000" step="500" id="customRange2"
                                value={avalue} onChange={achange} />
                        </div>
                        )}
                    </div>
                    <div className='locate'>
                        <div className='type-box p-2 d-flex justify-content-between align-items-center'
                            onClick={() => toggleVisibilitys("locate")}>
                            <div className='fw-bold'>Localities</div>
                            <IoIosArrowDown />
                        </div>
                        {visibility.locate && (<div className='container d-flex flex-column mt-2'>
                            <div>
                                <input class="form-check-input me-2" type="checkbox" value="" id="Check1" />
                                <label class="form-check-label" for="Check1">
                                    Location 1
                                </label>
                            </div>
                            <div>
                                <input class="form-check-input me-2" type="checkbox" value="" id="Check2" />
                                <label class="form-check-label" for="Check2">
                                    Location 2
                                </label>
                            </div>
                            <div>
                                <input class="form-check-input me-2" type="checkbox" value="" id="Check3" />
                                <label class="form-check-label" for="Check3">
                                    Location 3
                                </label>
                            </div>
                            <div>
                                <input class="form-check-input me-2" type="checkbox" value="" id="Check4" />
                                <label class="form-check-label" for="Check4">
                                    Location 4
                                </label>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div className='items-sec p-2'><Link className="nav-link active small" aria-current="page" to="/product">
                    <div className='card1 d-flex bg-white'>
                        <div className='item-box1'>
                            <img src={build} alt="image" className='s-img' />
                        </div>
                        <div className='item-box2 p-4'>
                            <div className='card-head d-flex flex-column'>
                                <div className='d-flex'>
                                    <label className='head'>Chembur East, Mumbai</label>
                                    <div className='fs-4 ms-auto'><FaHeart className='heart' /></div>
                                </div>
                                <label className='head2'>3 BHK Flat in Chembur, Mumbai</label>
                            </div>
                            <div className='mt-2 d-flex'>
                                <div className='d-flex flex-column m-3 ms-0'>
                                    <label className='fw-bold fs-5'>₹ 10.5 Cr</label>
                                    <label className='price'>₹ 77,777/sqft</label>
                                </div>
                                <div className='d-flex flex-column m-3 ms-0 ps-3 item-bd'>
                                    <label className='fw-bold fs-6'>1800 sqft (167sqm)</label>
                                    <label>Super Build-up Area</label>
                                </div>
                                <div className='d-flex flex-column m-3 ms-0 ps-3 item-bd'>
                                    <label className='fw-bold fs-6'>3 BHK (3Baths)</label>
                                    <label>Ready To Move</label>
                                </div>
                            </div>
                            <div>
                                <button className='btn view-btn me-2'>View Number</button>
                                <button className='btn c-btn'><FaPhoneAlt /> Contact</button>
                            </div>
                            <div className='mt-2'>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                    </div></Link>
                    {properties.map((property) => (
                        <Propcard key={property._id} property={property} /> // Render a card for each property
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search